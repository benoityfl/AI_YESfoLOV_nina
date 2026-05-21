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
import { therapyPattern } from "@/lib/knowledge/education/therapyPattern";

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
// BLOG SEARCH ENGINE
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
// THERAPY MATCHER
// ─────────────────────────────
function matchTherapy(message: string) {
  const lower = message.toLowerCase();

  return therapyPatterns.filter((p) =>
    p.triggers?.some((t: string) =>
      lower.includes(t.toLowerCase())
    )
  );
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

    console.log("🔥 CHAT API HIT");

    // ─────────────────────────────
    // EMOTION ENGINE
    // ─────────────────────────────
    const emotion = detectEmotion(lastMessage);
    const emotionContext = emotionMap[emotion];

    // ─────────────────────────────
    // PROFILE LOAD
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
        await supabase
          .from("emotional_profiles")
          .upsert({ user_id: userId });
      }
    }

    // ─────────────────────────────
    // MEMORY ENGINE
    // ─────────────────────────────
    const baseProfile = {
      emotional_state: supabaseProfile.emotional_state ?? "neutral",
      intensity: supabaseProfile.intensity ?? 0,
      relationship_mode: supabaseProfile.relationship_mode ?? "solo",
      relationship_state: supabaseProfile.relationship_state ?? null,
      communication_style:
        supabaseProfile.communication_style ?? null,
      intimacy_level:
        supabaseProfile.intimacy_level ?? null,
      emotional_needs:
        supabaseProfile.emotional_needs ?? [],
      tensions: supabaseProfile.tensions ?? [],
      narrative: supabaseProfile.narrative ?? null,
    };

    const extracted = extractProfile(
      lastMessage,
      baseProfile
    );

    const mergedProfile = updateProfile(
      baseProfile,
      extracted
    );

    const memoryContext = buildContext(mergedProfile);

    // ─────────────────────────────
    // THERAPY ENGINE
    // ─────────────────────────────
    const therapy = matchTherapy(lastMessage).slice(0, 2);

    const therapyContext = therapy.length
      ? `
THERAPEUTIC CONTEXT:

${therapy
  .map(
    (t) => `
Situation: ${t.situation}

Observation:
${t.observation}

Interpretation:
${t.interpretationLogic}

Guidance:
${t.guidance}

Questions:
${t.explorationQuestions
  ?.map((q: string) => `- ${q}`)
  .join("\n")}
`
  )
  .join("\n")}
`
      : "";

    // ─────────────────────────────
    // PRODUCTS
    // ─────────────────────────────
    const relevantProducts =
      searchProducts(lastMessage).slice(0, 3);

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
    const relevantBlogPosts =
      searchBlog(lastMessage).slice(0, 3);

    const blogContext = relevantBlogPosts.length
      ? `
AVAILABLE BLOG CONTENT:

${relevantBlogPosts
  .map(
    (b) => `
Title: ${b.title}
Excerpt: ${b.excerpt}
Tags: ${b.tags?.join(", ")}
URL: ${b.url}
`
  )
  .join("\n")}
`
      : "";

    // ─────────────────────────────
    // VIDEO ENGINE
    // ─────────────────────────────
    const relevantVideos =
      searchVideos(lastMessage).slice(0, 2);

    const videoContext = relevantVideos.length
      ? `
EDUCATIONAL VIDEO CONTENT:

${relevantVideos
  .map(
    (video) => `
Title: ${video.title}

Description:
${video.description}

URL:
${video.url}
`
  )
  .join("\n")}
`
      : "";

    // ─────────────────────────────
    // BRAND
    // ─────────────────────────────
    const brand = YESFORLOV_KNOWLEDGE;

    const brandSystem = `
YOU ARE NINA — YESFORLOV EMOTIONAL INTELLIGENCE SYSTEM.

BRAND:
Name: ${brand.brandIdentity.name}

Essence:
- ${brand.brandIdentity.essence.join("\n- ")}

Vision:
${brand.brandPurpose.vision}

VALUES:
- ${brand.brandValues.core.join("\n- ")}

TONE:
- ${brand.toneSystem.personality.join("\n- ")}

FOUNDER:
Christian Palix is the founder of YESforLOV.

RULES:
- Never explicit
- Never clinical
- Never vulgar
- Never invent products
- Always elegant, warm, emotionally intelligent
- Suggest educational content only if relevant
- Never overwhelm the user with too much information
- Videos should feel like gentle guidance
`.trim();

    // ─────────────────────────────
    // FINAL PROMPT
    // ─────────────────────────────
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
    // OPENAI
    // ─────────────────────────────
    const response =
      await openai.chat.completions.create({
        model: "gpt-4o-mini",
        temperature: 0.8,
        messages: [
          {
            role: "system",
            content: brandSystem,
          },
          {
            role: "system",
            content: finalPrompt,
          },
          ...userMessages,
        ],
      });

    const assistantMessage =
      response.choices[0]?.message?.content ?? "";

    // ─────────────────────────────
    // MEMORY UPDATE
    // ─────────────────────────────
    if (userId && supabase) {
      await supabase
        .from("emotional_profiles")
        .update({
          emotional_state: emotion,
          intensity: intensityMap[emotion] ?? 20,
          last_interaction_at:
            new Date().toISOString(),
        })
        .eq("user_id", userId);
    }

    // ─────────────────────────────
    // RESPONSE
    // ─────────────────────────────
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
      {
        error: "server_error",
      },
      {
        status: 500,
      }
    );
  }
}