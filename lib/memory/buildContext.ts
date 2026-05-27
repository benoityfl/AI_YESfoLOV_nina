import { EmotionalProfile } from "./profile";

// ─────────────────────────────────────────────────────────────
// buildContext.ts — Version enrichie
// Construit un contexte thérapeutique riche pour Nina
// ─────────────────────────────────────────────────────────────

export const buildContext = (profile: EmotionalProfile): string => {
  const lines: string[] = [];

  // ── PROFIL RELATIONNEL ──────────────────────────────────
  lines.push("## PROFIL UTILISATEUR");

  if (profile.relationshipMode) {
    const modeLabel: Record<string, string> = {
      solo: "célibataire / en solo",
      couple: "en couple",
      poly: "en relation(s) multiple(s)",
      unknown: "inconnu",
    };
    lines.push(
      `- Situation relationnelle : ${modeLabel[profile.relationshipMode] ?? profile.relationshipMode}`
    );
  }

  if (profile.relationshipState) {
    lines.push(`- État de la relation : ${profile.relationshipState}`);
  }

  // ── PROFIL ÉMOTIONNEL ───────────────────────────────────
  lines.push("\n## ÉTAT ÉMOTIONNEL");

  if (profile.emotional_state && profile.emotional_state !== "neutral") {
    lines.push(`- Émotion dominante : ${profile.emotional_state}`);
  }

  if (profile.intensity !== undefined && profile.intensity > 0) {
    const intensityLabel =
      profile.intensity >= 70
        ? "élevée (handle with care)"
        : profile.intensity >= 40
        ? "modérée"
        : "faible";
    lines.push(`- Intensité émotionnelle : ${intensityLabel} (${profile.intensity}/100)`);
  }

  if (profile.emotionalNeeds && profile.emotionalNeeds.length > 0) {
    lines.push(`- Besoins émotionnels exprimés : ${profile.emotionalNeeds.join(", ")}`);
  }

  if (profile.tensions && profile.tensions.length > 0) {
    lines.push(`- Tensions identifiées : ${profile.tensions.join(", ")}`);
  }

  // ── STYLE DE COMMUNICATION ──────────────────────────────
  if (profile.communicationStyle) {
    const styleGuide: Record<string, string> = {
      direct: "→ Répond bien à la clarté et aux suggestions concrètes",
      indirect:
        "→ Préfère les questions ouvertes et l'exploration douce",
      analytical:
        "→ Apprécie les explications, données et recadrages rationnels",
      emotional:
        "→ A besoin d'être entendu·e émotionnellement avant tout",
    };
    lines.push(
      `\n## STYLE DE COMMUNICATION\n- Style : ${profile.communicationStyle}`
    );
    if (styleGuide[profile.communicationStyle]) {
      lines.push(styleGuide[profile.communicationStyle]);
    }
  }

  // ── NIVEAU D'INTIMITÉ ───────────────────────────────────
  if (profile.intimacyLevel) {
    const intimacyGuide: Record<string, string> = {
      low: "→ Rester en surface, ne pas pousser vers l'intime trop vite",
      medium: "→ Peut explorer progressivement des sujets plus profonds",
      high: "→ Prêt·e à explorer des sujets profonds et personnels",
    };
    lines.push(`\n## NIVEAU D'INTIMITÉ CONVERSATIONNELLE\n- Niveau : ${profile.intimacyLevel}`);
    if (intimacyGuide[profile.intimacyLevel]) {
      lines.push(intimacyGuide[profile.intimacyLevel]);
    }
  }

  // ── NARRATIVE ───────────────────────────────────────────
  if (profile.narrative) {
    lines.push(`\n## NARRATIVE EN COURS\n${profile.narrative}`);
  }

  // ── INSTRUCTIONS CONTEXTUELLES ──────────────────────────
  lines.push(`
## INSTRUCTIONS D'ADAPTATION

Utilise ces éléments avec subtilité et intelligence émotionnelle.
Ne répète jamais mécaniquement les informations du profil.
Laisse-les colorer ta façon de répondre, pas ton contenu explicite.

${
  profile.intensity >= 70
    ? "⚠️ INTENSITÉ ÉLEVÉE : Ralentis. Moins de mots. Plus de douceur. Aucune suggestion concrète avant que la personne se sente vue."
    : ""
}

${
  profile.tensions && profile.tensions.length > 2
    ? "⚠️ TENSIONS MULTIPLES : Ne cherche pas à tout résoudre. Choisis le fil le plus important et tire-le doucement."
    : ""
}
`);

  return lines.join("\n");
};
