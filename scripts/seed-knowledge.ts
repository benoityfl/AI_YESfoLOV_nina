import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { createClient } from "@supabase/supabase-js";
import OpenAI from "openai";

// ─────────────────────────────
// ENV CHECK
// ─────────────────────────────
if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL");
}

if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error("Missing SUPABASE_SERVICE_ROLE_KEY");
}

if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing OPENAI_API_KEY");
}

// ─────────────────────────────
// CLIENTS
// ─────────────────────────────
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

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
// MAIN
// ─────────────────────────────
async function run() {
  console.log("SUPABASE URL =", process.env.NEXT_PUBLIC_SUPABASE_URL);

  const content = `
La vaginose est un déséquilibre de la flore vaginale.
Elle n’est pas liée à un manque d’hygiène.
Elle peut provoquer des odeurs inhabituelles.
`;

  const embedding = await embed(content);

  const { error } = await supabase.from("knowledge").insert({
    type: "blog",
    title: "Vaginose - explication simple",
    content,
    url: null,
    metadata: {
      domain: "sante_intime",
      tags: ["vaginose", "odeur", "flore"],
    },
    embedding,
  });

  if (error) {
    console.error("❌ Insert error:", error);
  } else {
    console.log("✅ Knowledge inserted successfully");
  }
}

run();