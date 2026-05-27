import { createClient } from "@supabase/supabase-js";
import OpenAI from "openai";
 
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);
 
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});
 
// ─────────────────────────────────────────────
// SOURCES — mirrors data/ folder structure
// ─────────────────────────────────────────────
 
export type RagSource = "productSheet" | "blog" | "ingredients";
 
// ─────────────────────────────────────────────
// EMBED
// ─────────────────────────────────────────────
 
async function embed(text: string): Promise<number[]> {
  const res = await openai.embeddings.create({
    model: "text-embedding-3-small",
    input: text,
  });
  return res.data[0].embedding;
}
 
// ─────────────────────────────────────────────
// BASE SEARCH — optionally filtered by source
// ─────────────────────────────────────────────
 
async function search(query: string, source?: RagSource): Promise<string> {
  const embedding = await embed(query);
 
  const { data, error } = await supabase.rpc("match_knowledge", {
    query_embedding: embedding,
    match_threshold: 0.3,
    match_count: 8,
    filter_source: source ?? null,
  });
 
  if (error) {
    console.error(`RAG error [${source ?? "all"}]:`, error);
    return "";
  }
 
  if (!data || data.length === 0) return "";
 
  // Join chunks into a single string for prompt injection
  return data.map((row: { content: string }) => row.content).join("\n\n");
}
 
// ─────────────────────────────────────────────
// PUBLIC SEARCH FUNCTIONS — one per source
// ─────────────────────────────────────────────
 
/** Search across all sources (original behavior) */
export async function searchKnowledge(query: string): Promise<string> {
  return search(query);
}
 
/** Search only data/productSheet */
export async function searchProductSheet(query: string): Promise<string> {
  return search(query, "productSheet");
}
 
/** Search only data/blog */
export async function searchBlog(query: string): Promise<string> {
  return search(query, "blog");
}
 
/** Search only data/ingredients */
export async function searchIngredients(query: string): Promise<string> {
  return search(query, "ingredients");
}
 
// ─────────────────────────────────────────────
// INTENT DETECTION
// Decides which sources to query based on the
// user message — lightweight keyword approach.
// Replace with an LLM classifier if needed.
// ─────────────────────────────────────────────
 
export interface RagIntent {
  productSheet: boolean;
  blog: boolean;
  ingredients: boolean;
}
 
export function detectIntent(message: string): RagIntent {
  const m = message.toLowerCase();
 
  const productKeywords = [
    "product", "produit", "recommend", "recommande", "buy", "acheter",
    "gift", "cadeau", "use", "utiliser", "toy", "jouet", "vibe", "vibr",
    "massage", "lube", "lubrifiant", "oil", "huile", "kit", "set",
    "price", "prix", "size", "taille", "color", "couleur",
  ];
 
  const blogKeywords = [
    "article", "blog", "read", "lire", "advice", "conseil", "tip", "astuce",
    "guide", "how to", "comment", "why", "pourquoi", "relation", "couple",
    "desire", "désir", "intimacy", "intimité", "orgasm", "orgasme",
    "pleasure", "plaisir", "communication", "love", "amour",
  ];
 
  const ingredientKeywords = [
    "ingredient", "ingrédient", "composition", "formula", "formule",
    "contain", "contient", "made of", "composé", "natural", "naturel",
    "organic", "bio", "safe", "sûr", "skin", "peau", "allerg",
    "effect", "effet", "benefit", "bénéfice", "smell", "odeur", "scent",
  ];
 
  return {
    productSheet: productKeywords.some((k) => m.includes(k)),
    blog: blogKeywords.some((k) => m.includes(k)),
    ingredients: ingredientKeywords.some((k) => m.includes(k)),
  };
}
 
// ─────────────────────────────────────────────
// RETRIEVE ALL RELEVANT CONTEXT
// Call this before building the system prompt.
// Returns only non-empty sources.
// ─────────────────────────────────────────────
 
export interface RetrievedContext {
  productSheet?: string;
  blog?: string;
  ingredients?: string;
}
 
export async function retrieveContext(
  query: string
): Promise<RetrievedContext> {
  const intent = detectIntent(query);
 
  const [productSheet, blog, ingredients] = await Promise.all([
    intent.productSheet ? searchProductSheet(query) : Promise.resolve(""),
    intent.blog ? searchBlog(query) : Promise.resolve(""),
    intent.ingredients ? searchIngredients(query) : Promise.resolve(""),
  ]);
 
  const context: RetrievedContext = {};
  if (productSheet) context.productSheet = productSheet;
  if (blog) context.blog = blog;
  if (ingredients) context.ingredients = ingredients;
 
  return context;
}
 