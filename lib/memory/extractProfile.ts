import { EmotionalProfile } from "./profile";

export const extractProfile = (
  text: string,
  current: EmotionalProfile
): EmotionalProfile => {
  const lower = text.toLowerCase();

  const updated = { ...current };

  if (
    lower.includes("distance") ||
    lower.includes("froid")
  ) {
    updated.relationshipState = "distance émotionnelle";
  }

  if (
    lower.includes("infidélité") ||
    lower.includes("trompé")
  ) {
    updated.tensions = [
      ...(updated.tensions || []),
      "confiance fragilisée",
    ];
  }

  if (
    lower.includes("désir") ||
    lower.includes("sensualité")
  ) {
    updated.intimacyLevel = "connexion sensuelle";
  }

  return updated;
};