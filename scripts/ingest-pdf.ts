import dotenv from "dotenv";
dotenv.config();

import fs from "fs";
import path from "path";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";
import { createClient } from "@supabase/supabase-js";
import OpenAI from "openai";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

// ─────────────────────────────
// CONFIG SOURCES
// ─────────────────────────────
const SOURCES = [
  { dir: "./data/blog", type: "blog" },
  { dir: "./data/productSheets", type: "productSheet" },
  { dir: "./data/ingredients", type: "ingredients" },
];

// ─────────────────────────────
// EXTRACT TEXT FROM PDF
// ─────────────────────────────
async function extractText(filePath: string): Promise<string> {
  const data = new Uint8Array(fs.readFileSync(filePath));
  const pdf = await getDocument({ data }).promise;

  let text = "";

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    text += content.items.map((item: any) => item.str).join(" ") + "\n";
  }

  // Nettoyer les espaces parasites OCR
  text = text.replace(/(\w)\s+fi\s+(\w)/g, "$1fi$2");
  text = text.replace(/(\w)\s+fl\s+(\w)/g, "$1fl$2");
  text = text.replace(/(\w)\s+ff\s+(\w)/g, "$1ff$2");
  text = text.replace(/\s{2,}/g, " ").trim();

  return text;
}

// ─────────────────────────────
// EMBED
// ─────────────────────────────
async function embed(text: string) {
  const res = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
  });
  return res.data[0].embedding;
}

// ─────────────────────────────
// CHUNKS SÉMANTIQUES — Fiches produit
// Chaque chunk correspond à une section précise du produit
// ─────────────────────────────
type SemanticChunk = {
  title: string;
  section: string;
  content: string;
};

function buildSemanticChunks(
  text: string,
  docName: string,
  type: string
): SemanticChunk[] {
  const header = `[Produit: ${docName}]`;
  const chunks: SemanticChunk[] = [];

  // ── Helpers de détection par regex ──────────────────────────────────────────

  const extract = (patterns: RegExp[]): string | null => {
    for (const pattern of patterns) {
      const match = text.match(pattern);
      if (match) return match[1]?.trim() ?? null;
    }
    return null;
  };

  // ── 01 — Présentation générale ──────────────────────────────────────────────
  const prix = extract([/Prix\s+normal\s+([\d,\.\s€]+)/i, /(\d+[,\.]\d+\s*€)/]);
  const format = extract([/Tube\s+(\d+ml[^\n]*)/i, /(\d+\s*ml\s*\/[^\n]+)/i]);

  const certifMatches = text.match(/(Fabriqué en France|Vegan|Testé sous contrôle gynécologique|à base d'ingrédients biologiques[^\.]*)/gi);
  const certifs = certifMatches ? [...new Set(certifMatches)].join(" | ") : "";

  const natPercent = extract([/(9\d[\.,]\d\s*%\s*d'ingrédients d'origine naturelle[^\.]*\.)/i]);
  const bioPercent = extract([/(6\d[\.,]\d\s*%\s*[^\.]*biologique[^\.]*\.)/i]);

  chunks.push({
    title: `Présentation — ${docName}`,
    section: "presentation",
    content: `${header}\n[Section: Présentation générale]\n`
      + `Dénomination : ${docName}\n`
      + `Type : ${type}\n`
      + (prix ? `Prix conseillé : ${prix}\n` : "")
      + (format ? `Format : ${format}\n` : "")
      + (certifs ? `Certifications : ${certifs}\n` : "")
      + (natPercent ? `Origine naturelle : ${natPercent}\n` : "")
      + (bioPercent ? `Origine biologique : ${bioPercent}\n` : ""),
  });

  // ── 02 — Ingrédients INCI ───────────────────────────────────────────────────
  const inciMatch = text.match(
    /AQUA[\s\S]{0,2000}?(?=\n[A-Z•\d]|\n\n|\s{3,}[A-Z]|99[,\.]|Formule|$)/i
  );
  if (inciMatch) {
    const inci = inciMatch[0].replace(/\s+/g, " ").trim();
    chunks.push({
      title: `Ingrédients INCI — ${docName}`,
      section: "ingredients_inci",
      content: `${header}\n[Section: Ingrédients INCI]\n${inci}`,
    });
  }

  // ── 03 — Osmolarité ─────────────────────────────────────────────────────────
  const osmoMatch = text.match(
    /osmolar[iï]t[eé][\s\S]{0,1500}?(?=pH|CE LUBRIFIANT|$)/i
  );
  if (osmoMatch) {
    chunks.push({
      title: `Osmolarité — ${docName}`,
      section: "osmolarite",
      content: `${header}\n[Section: Osmolarité]\n`
        + osmoMatch[0].replace(/\s+/g, " ").trim(),
    });
  }

  // ── 04 — pH ─────────────────────────────────────────────────────────────────
  const phMatch = text.match(
    /pH physiologique[\s\S]{0,1500}?(?=Suivant|La majorité|EST-CE|$)/i
  );
  if (phMatch) {
    chunks.push({
      title: `pH — ${docName}`,
      section: "ph",
      content: `${header}\n[Section: pH]\n`
        + phMatch[0].replace(/\s+/g, " ").trim(),
    });
  }

  // ── 05 — Actifs principaux ──────────────────────────────────────────────────
  const actifsMatch = text.match(
    /complexe unique[\s\S]{0,1000}?(?=\n[A-Z]{4,}|Couplées|$)/i
  );
  if (actifsMatch) {
    chunks.push({
      title: `Actifs principaux — ${docName}`,
      section: "actifs",
      content: `${header}\n[Section: Actifs principaux]\n`
        + actifsMatch[0].replace(/\s+/g, " ").trim(),
    });
  }

  // ── 06 — Bienfaits ──────────────────────────────────────────────────────────
  const bienfaitsMatch = text.match(
    /hydratant et apaisant[\s\S]{0,800}?(?=Testé|ACTIF|$)/i
  );
  if (bienfaitsMatch) {
    chunks.push({
      title: `Bienfaits — ${docName}`,
      section: "bienfaits",
      content: `${header}\n[Section: Bienfaits]\n`
        + bienfaitsMatch[0].replace(/\s+/g, " ").trim(),
    });
  }

  // ── 07 — Fabrication & origine ──────────────────────────────────────────────
  const fabMatch = text.match(
    /OÙ FABRIQUEZ[\s\S]{0,800}?(?=LE LUBRIFIANT NATUREL SANS|$)/i
  );
  if (fabMatch) {
    chunks.push({
      title: `Fabrication & origine — ${docName}`,
      section: "fabrication",
      content: `${header}\n[Section: Fabrication & origine]\n`
        + fabMatch[0].replace(/\s+/g, " ").trim(),
    });
  }

  // ── 08 — Éco-responsabilité ─────────────────────────────────────────────────
  const ecoMatch = text.match(
    /Demarche eco[\s\S]{0,1000}?(?=OÙ FABRIQUEZ|$)/i
  );
  if (ecoMatch) {
    chunks.push({
      title: `Éco-responsabilité — ${docName}`,
      section: "eco_responsabilite",
      content: `${header}\n[Section: Éco-responsabilité & emballage]\n`
        + ecoMatch[0].replace(/\s+/g, " ").trim(),
    });
  }

  // ── 09 — Tests & certifications ─────────────────────────────────────────────
  const testsMatch = text.match(
    /Testé sous contrôle gynécologique[\s\S]{0,600}?(?=Ce lubrifiant|$)/i
  );
  if (testsMatch) {
    chunks.push({
      title: `Tests & certifications — ${docName}`,
      section: "tests_certifications",
      content: `${header}\n[Section: Tests & certifications]\n`
        + testsMatch[0].replace(/\s+/g, " ").trim(),
    });
  }

  // ── 10 — FAQ : Sécurité & tolérance ────────────────────────────────────────
  const faqSecuMatch = text.match(
    /QU'EST-CE QU'IL CONTIENT[\s\S]{0,1200}?(?=CE LUBRIFIANT INTIME BIO RESPECTE|$)/i
  );
  if (faqSecuMatch) {
    chunks.push({
      title: `FAQ Sécurité — ${docName}`,
      section: "faq_securite",
      content: `${header}\n[Section: FAQ — Sécurité & tolérance]\n`
        + faqSecuMatch[0].replace(/\s+/g, " ").trim(),
    });
  }

  // ── 11 — FAQ : Osmolarité ───────────────────────────────────────────────────
  const faqOsmoMatch = text.match(
    /CE LUBRIFIANT INTIME BIO RESPECTE T-IL L.OSMOLAR[\s\S]{0,1500}?(?=CE LUBRIFIANT INTIME NATUREL ET BIO RESPECTE T-IL LE PH|$)/i
  );
  if (faqOsmoMatch) {
    chunks.push({
      title: `FAQ Osmolarité — ${docName}`,
      section: "faq_osmolarite",
      content: `${header}\n[Section: FAQ — Osmolarité]\n`
        + faqOsmoMatch[0].replace(/\s+/g, " ").trim(),
    });
  }

  // ── 12 — FAQ : pH ───────────────────────────────────────────────────────────
  const faqPhMatch = text.match(
    /CE LUBRIFIANT INTIME NATUREL ET BIO RESPECTE T-IL LE PH[\s\S]{0,1500}?(?=La majorité|EST-CE QUE CE LUBRIFIANT|$)/i
  );
  if (faqPhMatch) {
    chunks.push({
      title: `FAQ pH — ${docName}`,
      section: "faq_ph",
      content: `${header}\n[Section: FAQ — pH]\n`
        + faqPhMatch[0].replace(/\s+/g, " ").trim(),
    });
  }

  // ── 13 — FAQ : Taches ───────────────────────────────────────────────────────
  const faqTachesMatch = text.match(
    /EST-CE QUE CE LUBRIFIANT INTIME NATUREL TACHE[\s\S]{0,600}?(?=EST-CE QUE CE LUBRIFIANT INTIME À BASE|$)/i
  );
  if (faqTachesMatch) {
    chunks.push({
      title: `FAQ Taches — ${docName}`,
      section: "faq_taches",
      content: `${header}\n[Section: FAQ — Taches & entretien]\n`
        + faqTachesMatch[0].replace(/\s+/g, " ").trim(),
    });
  }

  // ── 14 — FAQ : Spermicide & fertilité ──────────────────────────────────────
  const faqFertMatch = text.match(
    /EST-CE QUE CE LUBRIFIANT INTIME À BASE D.ALGUES EST SPERMICIDE[\s\S]{0,800}?(?=EST-CE QUE LE LUBRIFIANT|$)/i
  );
  if (faqFertMatch) {
    chunks.push({
      title: `FAQ Spermicide & fertilité — ${docName}`,
      section: "faq_fertilite",
      content: `${header}\n[Section: FAQ — Spermicide & fertilité]\n`
        + faqFertMatch[0].replace(/\s+/g, " ").trim(),
    });
  }

  // ── 15 — FAQ : Œstrogènes & hormones ───────────────────────────────────────
  const faqHormMatch = text.match(
    /EST-CE QUE LE LUBRIFIANT UNISEXE[\s\S]{0,800}?(?=CE LUBRIFIANT INTIME NATUREL EST-IL COMESTIBLE|$)/i
  );
  if (faqHormMatch) {
    chunks.push({
      title: `FAQ Hormones — ${docName}`,
      section: "faq_hormones",
      content: `${header}\n[Section: FAQ — Œstrogènes & hormones]\n`
        + faqHormMatch[0].replace(/\s+/g, " ").trim(),
    });
  }

  // ── 16 — FAQ : Comestible ───────────────────────────────────────────────────
  const faqComestMatch = text.match(
    /CE LUBRIFIANT INTIME NATUREL EST-IL COMESTIBLE[\s\S]{0,600}?(?=LE LUBRIFIANT AUX ALGUES|$)/i
  );
  if (faqComestMatch) {
    chunks.push({
      title: `FAQ Comestible — ${docName}`,
      section: "faq_comestible",
      content: `${header}\n[Section: FAQ — Comestibilité]\n`
        + faqComestMatch[0].replace(/\s+/g, " ").trim(),
    });
  }

  // ── 17 — FAQ : Vegan ────────────────────────────────────────────────────────
  const faqVeganMatch = text.match(
    /LE LUBRIFIANT AUX ALGUES YESFORLOV EST-IL VEGAN[\s\S]{0,400}?(?=$)/i
  );
  if (faqVeganMatch) {
    chunks.push({
      title: `FAQ Vegan — ${docName}`,
      section: "faq_vegan",
      content: `${header}\n[Section: FAQ — Vegan]\n`
        + faqVeganMatch[0].replace(/\s+/g, " ").trim(),
    });
  }

  return chunks;
}

// ─────────────────────────────
// CHUNKING CLASSIQUE (blog, ingrédients)
// Garde l'overlap pour les contenus longs non structurés
// ─────────────────────────────
function chunkText(
  text: string,
  fileName: string,
  type: string,
  size = 800,
  overlap = 150
): string[] {
  const docName = fileName
    .replace(/\.pdf$/i, "")
    .replace(/_/g, " ")
    .replace(/-/g, " ")
    .trim();

  const header = `[${type.toUpperCase()} — ${docName}]\n`;
  const words = text.split(" ");
  const chunks: string[] = [];
  let start = 0;

  while (start < words.length) {
    let current = "";
    let i = start;

    while (i < words.length && (current + words[i]).length < size) {
      current += words[i] + " ";
      i++;
    }

    if (current.trim()) {
      chunks.push(`${header}${current.trim()}`);
    }

    const overlapWords = Math.floor(overlap / 5);
    start = Math.max(start + 1, i - overlapWords);
  }

  return chunks;
}

// ─────────────────────────────
// CHECK DOUBLON
// ─────────────────────────────
async function isAlreadyIndexed(file: string, type: string): Promise<boolean> {
  const { data, error } = await supabase
    .from("knowledge")
    .select("id")
    .eq("source", type)
    .contains("metadata", { file })
    .limit(1);

  if (error) {
    console.error("❌ check error:", error);
    return false;
  }

  return data !== null && data.length > 0;
}

// ─────────────────────────────
// INGEST FOLDER
// ─────────────────────────────
async function ingestFolder(dir: string, type: string) {
  if (!fs.existsSync(dir)) {
    console.warn(`⚠️  Dossier introuvable : ${dir} — ignoré`);
    return;
  }

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".pdf"));

  if (files.length === 0) {
    console.warn(`⚠️  Aucun PDF dans : ${dir}`);
    return;
  }

  for (const file of files) {
    const filePath = path.join(dir, file);

    const alreadyDone = await isAlreadyIndexed(file, type);
    if (alreadyDone) {
      console.log(`\n⏭️  [${type}] ${file} — déjà indexé, ignoré`);
      continue;
    }

    console.log(`\n📄 [${type}] ${file}`);

    const text = await extractText(filePath);
    console.log(`   chars: ${text.length}`);

    const docName = file
      .replace(/\.pdf$/i, "")
      .replace(/_/g, " ")
      .replace(/-/g, " ")
      .trim();

    // Fiches produit → chunking sémantique
    // Blog & ingrédients → chunking classique par taille
    const isProductSheet = type === "productSheet";

    const semanticChunks: SemanticChunk[] = isProductSheet
      ? buildSemanticChunks(text, docName, type)
      : [];

    const classicChunks: string[] = !isProductSheet
      ? chunkText(text, file, type, 800, 150)
      : [];

    const total = isProductSheet ? semanticChunks.length : classicChunks.length;
    console.log(`   chunks: ${total} (${isProductSheet ? "sémantique" : "classique"})`);

    if (isProductSheet) {
      for (let i = 0; i < semanticChunks.length; i++) {
        const chunk = semanticChunks[i];
        const embedding = await embed(chunk.content);

        const { error } = await supabase.from("knowledge").insert({
          type,
          source: type,
          title: chunk.title,
          content: chunk.content,
          embedding,
          metadata: {
            sourceType: type,
            file,
            chunk_index: i,
            section: chunk.section,
          },
        });

        if (error) {
          console.error(`   ❌ insert error [chunk ${i} — ${chunk.section}]:`, error);
        } else {
          console.log(`   ✅ chunk ${i + 1}/${total} — ${chunk.section}`);
        }
      }
    } else {
      for (let i = 0; i < classicChunks.length; i++) {
        const embedding = await embed(classicChunks[i]);

        const { error } = await supabase.from("knowledge").insert({
          type,
          source: type,
          content: classicChunks[i],
          embedding,
          metadata: {
            sourceType: type,
            file,
            chunk_index: i,
          },
        });

        if (error) {
          console.error(`   ❌ insert error [chunk ${i}]:`, error);
        } else {
          console.log(`   ✅ chunk ${i + 1}/${total}`);
        }
      }
    }
  }
}

// ─────────────────────────────
// RUN
// ─────────────────────────────
async function run() {
  for (const source of SOURCES) {
    await ingestFolder(source.dir, source.type);
  }

  console.log("\n🚀 INGESTION COMPLETE");
}

run();
