import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

import { SYSTEM_PROMPT } from "@/lib/knowledge/systemPrompt";
import { detectEmotion } from "@/lib/knowledge/emotion/detectEmotion";
import { emotionMap } from "@/lib/knowledge/emotion/emotionMap";

import { extractProfile } from "@/lib/memory/extractProfile";
import { updateProfile } from "@/lib/memory/updateProfile";
import { buildContext } from "@/lib/memory/buildContext";

import { searchProducts } from "@/lib/knowledge/yesforlov/products";
import { BLOG_POSTS } from "@/lib/knowledge/yesforlov/blog";
import { YESFORLOV_KNOWLEDGE } from "@/lib/knowledge/yesforlov";

// 🧠 THERAPY
import { therapyPatterns } from "@/lib/knowledge/education/TherapyPattern";

// 🎥 VIDEOS
import { searchVideos } from "@/lib/knowledge/education/searchVideos";

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
// INTENSITY MAP
// ─────────────────────────────
const intensityMap: Record<string, number> = {
  tense: 70,
  desire: 60,
  vulnerable: 80,
  neutral: 20,
};

// ─────────────────────────────
// BLOG SEARCH
// ─────────────────────────────
function searchBlog(message: string) {
  const query = message.toLowerCase();

  return BLOG_POSTS.filter((post) => {
    const searchableText = `
      ${post.title}
      ${post.excerpt}
      ${post.tags?.join(" ")}
      ${post.themes?.join(" ")}
      ${post.content ?? ""}
    `.toLowerCase();

    return query
      .split(" ")
      .some((word) => searchableText.includes(word));
  });
}

// ─────────────────────────────
// THERAPY MATCHER (FIX FINAL)
// ─────────────────────────────
function matchTherapy(message: string) {
  const lower = message.toLowerCase();

  return therapyPattern.filter((p) => {
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
        await supabase.from("emotional_profiles").upsert({
          user_id: userId,
        });
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
    // THERAPY
    // ─────────────────────────────
    const therapy = matchTherapy(lastMessage).slice(0, 2);

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
${(t.explorationQuestions ?? []).map((q) => `- ${q}`).join("\n")}
`
  )
  .join("\n")}
`
      : "";

    // ─────────────────────────────
    // PRODUCTS
    // ─────────────────────────────
    const relevantProducts = searchProducts(lastMessage).slice(0, 3);

    const productContext = relevantProducts.length
      ? `
AVAILABLE PRODUCTS:

${relevantProducts
  .map(
    (p) => `
Product: ${p.name}
Category: ${p.category}
Tags: ${p.tags?.join(", ")}
Description: ${p.description}
`
  )
  .join("\n")}
`
      : "";

    // ─────────────────────────────
    // BLOG
    // ─────────────────────────────
    const relevantBlogPosts = searchBlog(lastMessage).slice(0, 3);

    const blogContext = relevantBlogPosts.length
      ? `
BLOG CONTENT:

${relevantBlogPosts
  .map(
    (b) => `
Title: ${b.title}
Excerpt: ${b.excerpt}
URL: ${b.url}
`
  )
  .join("\n")}
`
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
  .join("\n")}
`
      : "";

    // ─────────────────────────────
    // SYSTEM PROMPT
    // ─────────────────────────────
    const brandSystem = `
YOU ARE NINA — YESFORLOV EMOTIONAL INTELLIGENCE SYSTEM.
`.trim();

    const finalPrompt = `
${SYSTEM_PROMPT}

${memoryContext}

${therapyContext}

${productContext}

${blogContext}

${videoContext}

Emotion: ${emotion}
Tone: ${emotionContext.tone}
Intention: ${emotionContext.intention}
`.trim();

    // ─────────────────────────────
    // OPENAI CALL
    // ─────────────────────────────
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.8,
      messages: [
        { role: "system", content: brandSystem },
        { role: "system", content: finalPrompt },
        ...userMessages,
      ],
    });

    const assistantMessage =
      response.choices[0]?.message?.content ?? "";

    return Response.json({
      message: assistantMessage,
      emotion,
      profile: mergedProfile,
      products: relevantProducts,
      blog: relevantBlogPosts,
      therapy,
      videos: relevantVideos,
    });
  } catch (err) {
    console.error("❌ CHAT ERROR:", err);

    return Response.json(
      { error: "server_error" },
      { status: 500 }
    );
  }
}