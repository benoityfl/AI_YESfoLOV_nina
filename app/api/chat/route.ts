import OpenAI from "openai";
import { createClient } from "@supabase/supabase-js";

import { SYSTEM_PROMPT } from "@/lib/knowledge/systemPrompt";
import { detectEmotion } from "@/lib/knowledge/emotion/detectEmotion";
import { emotionMap } from "@/lib/knowledge/emotion/emotionMap";

import { extractProfile } from "@/lib/memory/extractProfile";
import { updateProfile } from "@/lib/memory/updateProfile";
import { buildContext } from "@/lib/memory/buildContext";

// 👇 BRAND LAYER (NINA V4)
import { brandIdentity } from "@/lib/knowledge/yesforlov/brandIdentity";
import { brandPurpose } from "@/lib/knowledge/yesforlov/brandPurpose";
import { brandValues } from "@/lib/knowledge/yesforlov/brandValues";
import { toneSystem } from "@/lib/knowledge/yesforlov/toneSystem";
import { productPhilosophy } from "@/lib/knowledge/yesforlov/productPhilosophy";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

// ─────────────────────────────
// SAFE SUPABASE INIT
// ─────────────────────────────
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const supabase =
  supabaseUrl && supabaseServiceKey
    ? createClient(supabaseUrl, supabaseServiceKey)
    : null;

// ─────────────────────────────
const intensityMap: Record<string, number> = {
  tense: 70,
  desire: 60,
  vulnerable: 80,
  neutral: 20,
};

// ─────────────────────────────
// NARRATIVE MEMORY (V4 LIGHT)
// ─────────────────────────────
async function updateNarrative(
  userId: string,
  lastMessage: string,
  mergedProfile: any,
  currentNarrative?: string | null
) {
  if (!supabase) return;

  try {
    const prompt = `
Résume en 1–2 phrases l’état émotionnel et relationnel.

Ancienne mémoire:
${currentNarrative ?? "aucune"}

Profil:
${JSON.stringify(mergedProfile, null, 2)}

Message:
"${lastMessage}"
    `.trim();

    const res = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.4,
      max_tokens: 80,
      messages: [
        {
          role: "system",
          content: "Tu produis une mémoire utilisateur courte et précise.",
        },
        { role: "user", content: prompt },
      ],
    });

    const narrative = res.choices[0]?.message?.content?.trim();
    if (!narrative) return;

    await supabase
      .from("emotional_profiles")
      .update({ narrative })
      .eq("user_id", userId);

    console.log("🧠 Narrative updated");
  } catch (e) {
    console.error("Narrative error:", e);
  }
}

// ─────────────────────────────
// ROUTE CHAT
// ─────────────────────────────
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const userId = body.userId ?? null;
    const userMessages = body.messages ?? [];

    const lastMessage =
      userMessages[userMessages.length - 1]?.content ?? "";

    console.log("🔥 CHAT API HIT");

    // ── 1. LOAD PROFILE
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

    // ── 2. EMOTION ENGINE
    const emotion = detectEmotion(lastMessage);
    const emotionContext = emotionMap[emotion];

    // ── 3. MEMORY ENGINE
    const baseProfile = {
      emotional_state: supabaseProfile.emotional_state ?? "neutral",
      intensity: supabaseProfile.intensity ?? 0,
      relationship_mode: supabaseProfile.relationship_mode ?? "solo",
      relationship_state: supabaseProfile.relationship_state ?? null,
      communication_style: supabaseProfile.communication_style ?? null,
      intimacy_level: supabaseProfile.intimacy_level ?? null,
      emotional_needs: supabaseProfile.emotional_needs ?? [],
      tensions: supabaseProfile.tensions ?? [],
      nina_summary: supabaseProfile.nina_summary ?? null,
      narrative: supabaseProfile.narrative ?? null,
    };

    const extracted = extractProfile(lastMessage, baseProfile);
    const mergedProfile = updateProfile(baseProfile, extracted);
    const memoryContext = buildContext(mergedProfile);

    // ── 4. 🧠 NINA BRAND SYSTEM (IMPORTANT)
    const brandSystem = `
YOU ARE NINA, THE BRAND AI OF YESforLOV.

BRAND IDENTITY:
Name: ${brandIdentity.name}

Essence:
- ${brandIdentity.essence.join("\n- ")}

Positioning:
${brandIdentity.positioning}

Promise:
${brandIdentity.promise}

PURPOSE:
Vision: ${brandPurpose.vision}
Mission: ${brandPurpose.mission}
Transformation: ${brandPurpose.transformation}

VALUES:
Core:
- ${brandValues.core.join("\n- ")}

Emotional Axis:
- ${brandValues.emotional_axis.join("\n- ")}

Inclusivity:
${brandValues.inclusivity}

TONE:
Personality:
- ${toneSystem.personality.join("\n- ")}

Communication:
- ${toneSystem.communication_style.join("\n- ")}

Rules:
- ${toneSystem.language_rules.join("\n- ")}

PRODUCT PHILOSOPHY:
${productPhilosophy.principle}

RULES:
- ${productPhilosophy.rules.join("\n- ")}

UXP Emotional:
${productPhilosophy.uxp_emotional}

UXP Functional:
${productPhilosophy.uxp_functional}

NON-NEGOTIABLE:
- Never be clinical
- Never be explicit pornographic
- Always sensual, elegant, emotionally intelligent
    `.trim();

    // ── 5. OPENAI CALL
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "system", content: brandSystem },
        {
          role: "system",
          content: `
Emotion: ${emotion}
Tone: ${emotionContext.tone}
Intention: ${emotionContext.intention}
          `.trim(),
        },
        {
          role: "system",
          content:
            memoryContext +
            (mergedProfile.narrative
              ? `\n\nUSER MEMORY:\n${mergedProfile.narrative}`
              : ""),
        },
        ...userMessages,
      ],
    });

    const assistantMessage =
      response.choices[0]?.message?.content ?? "";

    // ── 6. SAVE MEMORY (FAST)
    if (userId && supabase) {
      const updatePayload: any = {
        emotional_state: emotion,
        intensity: intensityMap[emotion] ?? 20,
        last_interaction_at: new Date().toISOString(),
      };

      await supabase
        .from("emotional_profiles")
        .update(updatePayload)
        .eq("user_id", userId);

      // async narrative
      updateNarrative(
        userId,
        lastMessage,
        mergedProfile,
        supabaseProfile.narrative
      );
    }

    // ── 7. RESPONSE
    return Response.json({
      message: assistantMessage,
      emotion,
      profile: mergedProfile,
    });

  } catch (err) {
    console.error("❌ CHAT ERROR:", err);
    return Response.json(
      { error: "server_error" },
      { status: 500 }
    );
  }
}