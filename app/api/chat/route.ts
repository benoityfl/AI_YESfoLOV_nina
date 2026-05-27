import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

import { buildSystemPrompt } from "@/lib/knowledge/systemPrompt";
import { detectEmotion } from "@/lib/knowledge/emotion/detectEmotion";
import { emotionMap } from "@/lib/knowledge/emotion/emotionMap";

import { extractProfile } from "@/lib/memory/extractProfile";
import { updateProfile } from "@/lib/memory/updateProfile";
import { buildContext } from "@/lib/memory/buildContext";

import { therapyPatterns } from "@/lib/knowledge/education/therapyPattern";
import { searchVideos } from "@/lib/knowledge/education/searchVideos";
import { sexKnowledge } from "@/lib/knowledge/education/sexKnowledge";
import { retrieveRelevantProducts } from "@/lib/knowledge/yesforlov/retrieveRelevantProducts";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

// ─────────────────────────────
// SUPABASE
// ─────────────────────────────
const supabase =
  process.env.NEXT_PUBLIC_SUPABASE_URL &&
  process.env.SUPABASE_SERVICE_ROLE_KEY
    ? createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.SUPABASE_SERVICE_ROLE_KEY
      )
    : null;

// ─────────────────────────────
// EMBEDDING
// ─────────────────────────────
async function embed(text: string) {
  const res = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
  });
  return res.data[0].embedding;
}

// ─────────────────────────────
// RAG SEARCH — filtrée par source
// ─────────────────────────────
async function searchBySource(
  query: string,
  source: "productSheet" | "blog" | "ingredients" | null = null
): Promise<string> {
  if (!supabase) return "";

  try {
    const embedding = await embed(query);

    const { data, error } = await supabase.rpc("match_knowledge", {
      query_embedding: embedding,
      match_threshold: 0.25,
      match_count: 10,
      filter_source: source,
    });

    if (error) {
      console.error(`❌ RAG ERROR [${source}]:`, error);
      return "";
    }

    if (!data || data.length === 0) return "";

    return data
      .map((k: { content: string }) => k.content)
      .join("\n\n---\n\n");
  } catch (err) {
    console.error(`❌ searchBySource ERROR [${source}]:`, err);
    return "";
  }
}

// ─────────────────────────────
// CATALOGUE PRODUITS
// Clé = nom du fichier exact dans Supabase
// Aliases = mots-clés que l'utilisateur peut dire
// ─────────────────────────────
const PRODUCT_CATALOG: { file: string; aliases: string[] }[] = [
  {
    file: "LUBRIFIANT INTIME NATUREL AUX ALGUES BIO SANS GLYCÉRINE.pdf",
    aliases: [
      "lubrifiant",
      "algues",
      "algue",
      "lubrifiant aux algues",
      "gel lubrifiant",
      "gel intime",
      "lubrifiant intime",
      "sans glycérine",
      "glycérine",
      "lube",
    ],
  },
  // Ajoutez vos futurs produits ici :
  // {
  //   file: "MOUSSE_MASSAGE_CREPITANTE.pdf",
  //   aliases: ["mousse", "crépitante", "massage", "pétillante"],
  // },
];

// Détecte le fichier produit mentionné dans le message
// Retourne null si aucun produit identifié (question générale)
function detectProductFile(message: string): string | null {
  const m = message.toLowerCase();
  for (const product of PRODUCT_CATALOG) {
    if (product.aliases.some((alias) => m.includes(alias))) {
      return product.file;
    }
  }
  return null;
}

// ─────────────────────────────
// HARD FACT TRIGGERS
// Questions techniques → lookup direct par section
// ─────────────────────────────
const HARD_FACT_TRIGGERS = [
  "inci",
  "composition",
  "ingrédients",
  "ingredients",
  "de quoi est fait",
  "contient quoi",
  "formule",
  "formula",
  "osmolarité",
  "osmolarity",
  "iso-osmotique",
  "iso osmotique",
  "mosm",
  "ph",
  "pourcentage",
  "% d",
  "origine naturelle",
  "origine biologique",
];

// Sections factuelles à récupérer en priorité
const FACT_SECTIONS = [
  "ingredients_inci",
  "osmolarite",
  "ph",
  "presentation",
  "tests_certifications",
  "faq_osmolarite",
  "faq_ph",
  "faq_securite",
];

// ─────────────────────────────
// THERAPY MATCHER
// ─────────────────────────────
function matchTherapy(message: string) {
  const lower = message.toLowerCase();

  return therapyPatterns.filter((p) => {
    const text = `
      ${p.situation}
      ${p.observation}
      ${p.interpretationLogic}
      ${p.guidance}
      ${(p.explorationQuestions ?? []).join(" ")}
      ${(p.affirmations ?? []).join(" ")}
      ${(p.exercices ?? []).join(" ")}
      ${(p.signaux_dalerte ?? []).join(" ")}
    `.toLowerCase();

    let score = 0;
    for (const word of lower.split(" ")) {
      if (word.length < 3) continue;
      if (text.includes(word)) score++;
    }
    return score >= 2;
  });
}

// ─────────────────────────────
// ROUTE
// ─────────────────────────────
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const userId = body.userId ?? null;
    const userMessages = body.messages ?? [];
    const lastMessage = userMessages.at(-1)?.content ?? "";

    const m = lastMessage.toLowerCase();
    const isHardFactQuery = HARD_FACT_TRIGGERS.some((k) => m.includes(k));

    // ─────────────────────────────
    // EMOTION
    // ─────────────────────────────
    const emotion = detectEmotion(lastMessage);
    const emotionContext = emotionMap[emotion];

    // ─────────────────────────────
    // SUPABASE PROFILE
    // ─────────────────────────────
    let supabaseProfile: any = {};

    if (userId && supabase) {
      const { data } = await supabase
        .from("emotional_profiles")
        .select("*")
        .eq("user_id", userId)
        .single();

      supabaseProfile = data ?? {};

      if (!data) {
        await supabase.from("emotional_profiles").upsert({ user_id: userId });
      }
    }

    const baseProfile = {
      emotional_state: supabaseProfile.emotional_state ?? "neutral",
      intensity: supabaseProfile.intensity ?? 0,
      relationship_mode: supabaseProfile.relationship_mode ?? "solo",
      relationship_state: supabaseProfile.relationship_state ?? null,
      communication_style: supabaseProfile.communication_style ?? null,
      intimacy_level: supabaseProfile.intimacy_level ?? null,
      emotional_needs: supabaseProfile.emotional_needs ?? [],
      tensions: supabaseProfile.tensions ?? [],
      narrative: supabaseProfile.narrative ?? null,
    };

    const extracted = extractProfile(lastMessage, baseProfile);
    const mergedProfile = updateProfile(baseProfile, extracted);
    const memoryContext = buildContext(mergedProfile);

    // ─────────────────────────────
    // RAG — lookup direct ou vectoriel selon le type de question
    // ─────────────────────────────
    let productSheetChunks = "";
    let blogChunks = "";

    // Détection du produit mentionné dans le message
    const detectedFile = detectProductFile(lastMessage);
    console.log("🎯 produit détecté:", detectedFile ?? "aucun (question générale)");

    if (isHardFactQuery && supabase) {
      // Lookup direct par section, filtré sur le produit si détecté
      let query = supabase
        .from("knowledge")
        .select("content")
        .eq("source", "productSheet")
        .in("metadata->>section", FACT_SECTIONS);

      // Filtrer par fichier produit si identifié — évite de mélanger les INCI
      if (detectedFile) {
        query = query.eq("metadata->>file", detectedFile);
      }

      const { data: factData, error: factError } = await query;

      if (factError) {
        console.error("❌ FACT LOOKUP ERROR:", factError);
      }

      const directChunks =
        factData?.map((d: { content: string }) => d.content).join("\n\n---\n\n") ?? "";

      // Compléter avec recherche vectorielle sur productSheet
      const vectorChunks = await searchBySource(lastMessage, "productSheet");

      // Merge : direct en premier (priorité), vectoriel en complément
      productSheetChunks = [directChunks, vectorChunks]
        .filter(Boolean)
        .join("\n\n---\n\n");

      blogChunks = "";
    } else {
      // Mode normal : recherche vectorielle toutes sources
      [productSheetChunks, blogChunks] = await Promise.all([
        searchBySource(lastMessage, "productSheet"),
        searchBySource(lastMessage, "blog"),
      ]);
    }

    // Fallback explicite : si aucun chunk produit trouvé, Nina ne doit pas inventer
    if (!productSheetChunks) {
      productSheetChunks = `[AUCUNE DONNÉE PRODUIT DISPONIBLE]
Ne pas inventer d'informations. Rediriger l'utilisateur vers yesforlov.com ou le service client.`;
    }

    console.log("📦 productSheet:", productSheetChunks ? "✓" : "—");
    console.log("📝 blog:", blogChunks ? "✓" : "—");
    console.log("🔍 mode:", isHardFactQuery ? "HARD FACT (direct lookup)" : "vectoriel");

    // ─────────────────────────────
    // THERAPY
    // ─────────────────────────────
    const therapy = matchTherapy(lastMessage).slice(0, 2);

    // ─────────────────────────────
    // SEX KNOWLEDGE — éducation sexuelle contextuelle
    // ─────────────────────────────
    const relevantKnowledge = sexKnowledge.filter((entry) =>
      entry.keywords.some((k) => lastMessage.toLowerCase().includes(k))
    ).slice(0, 2);

    const educationContext = relevantKnowledge.length
      ? `
ÉDUCATION SEXUELLE CONTEXTUELLE :

${relevantKnowledge
  .map(
    (e) => `
Sujet : ${e.topic}
Contenu : ${e.content}
Ton recommandé : ${e.tone}
`
  )
  .join("\n")}`
      : "";

    const therapyContext = therapy.length
      ? `
THERAPEUTIC CONTEXT:

${therapy
  .map(
    (t) => `
Situation: ${t.situation}
Observation: ${t.observation}
Interpretation: ${t.interpretationLogic}
Guidance: ${t.guidance}
Questions:
${(t.explorationQuestions ?? []).map((q: string) => `- ${q}`).join("\n")}
`
  )
  .join("\n")}`
      : "";

    // ─────────────────────────────
    // VIDEOS
    // ─────────────────────────────
    const relevantVideos = searchVideos(lastMessage).slice(0, 2);

    const videoContext = relevantVideos.length
      ? `
VIDEOS:

${relevantVideos
  .map(
    (v) => `
Title: ${v.title}
Description: ${v.description}
URL: ${v.url}
`
  )
  .join("\n")}`
      : "";

    // ─────────────────────────────
    // PRODUITS RECOMMANDÉS
    // ─────────────────────────────
    const relevantProducts = retrieveRelevantProducts(lastMessage);

    const productsContext = relevantProducts.length
      ? `
PRODUITS PERTINENTS POUR CE MESSAGE :

${relevantProducts
  .map(
    (p) => `
- ${p.name} (${p.price}€)${!p.inStock ? " [épuisé]" : ""}
  ${p.description ?? ""}
  URL : ${p.url}
`
  )
  .join("")}
`
      : "";

    // ─────────────────────────────
    // SYSTEM PROMPT
    // ─────────────────────────────
    const finalPrompt = `
${buildSystemPrompt({
  productSheet: productSheetChunks || undefined,
  blog: blogChunks || undefined,
})}

${memoryContext}

${therapyContext}

${educationContext}

${videoContext}

${productsContext}

Emotion: ${emotion}

Tone: ${emotionContext.tone}

Intention: ${emotionContext.intention}
`.trim();

    // ─────────────────────────────
    // OPENAI
    // ─────────────────────────────
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: isHardFactQuery ? 0.2 : 0.8,
      messages: [
        {
          role: "system",
          content: finalPrompt,
        },
        ...userMessages,
      ],
    });

    const assistantMessage = response.choices[0]?.message?.content ?? "";

    return Response.json({
      text: assistantMessage,
      emotion,
      profile: mergedProfile,
      therapy,
      video: relevantVideos[0]
        ? {
            url: relevantVideos[0].url,
            title: relevantVideos[0].title,
            duration: relevantVideos[0].duration ?? "1 min",
          }
        : null,
    });
  } catch (err) {
    console.error("❌ CHAT ERROR:", err);
    return Response.json({ error: "server_error" }, { status: 500 });
  }
}

