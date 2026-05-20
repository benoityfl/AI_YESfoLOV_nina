import { EmotionalProfile } from "./profile";

export const buildContext = (
  profile: EmotionalProfile
) => {
  return `
Profil émotionnel utilisateur :

- état relationnel : ${profile.relationshipState || "inconnu"}
- style de communication : ${profile.communicationStyle || "inconnu"}
- tensions : ${(profile.tensions || []).join(", ")}
- besoins émotionnels : ${(profile.emotionalNeeds || []).join(", ")}
- intimité : ${profile.intimacyLevel || "inconnue"}

Utilise ces éléments avec subtilité.
Ne répète jamais mécaniquement les informations.
`;
};