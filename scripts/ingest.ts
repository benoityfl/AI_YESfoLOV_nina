import "dotenv/config";
import axios from "axios";
import * as cheerio from "cheerio";
import fs from "fs";
import OpenAI from "openai";

console.log("OPENAI KEY =", process.env.OPENAI_API_KEY);

if (!process.env.OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY missing");
}

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function ingestWebsite(url: string) {
  console.log("Scanning website...");

  // 1. Télécharger le HTML
  const response = await axios.get(url);

  // 2. Charger le HTML
  const $ = cheerio.load(response.data);

  // 3. Extraire le texte brut
  const text = $("body").text();

  // 4. Nettoyage simple
  const cleaned = text
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 12000);

  console.log("Generating structured knowledge...");

  // 5. Transformer en knowledge IA
  const completion = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: `
Transforme ce contenu web en base de connaissance structurée pour une IA.

Retourne uniquement un JSON avec :
- principles
- tone
- goals
- emotional_values
- relationship_advice
- sensory_approach

Le JSON doit être clair, synthétique et exploitable par une IA.
        `,
      },
      {
        role: "user",
        content: cleaned,
      },
    ],
  });

  const result = completion.choices[0].message.content;

  // 6. Sauvegarder
  fs.writeFileSync(
    "./lib/knowledge/generated.json",
    result || "{}"
  );

  console.log("Knowledge base generated ✅");
}

ingestWebsite("https://www.yesforlov.com");