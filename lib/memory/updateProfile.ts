import { EmotionalProfile } from "./profile";

export const updateProfile = (
  oldProfile: EmotionalProfile,
  newData: EmotionalProfile
): EmotionalProfile => {
  return {
    ...oldProfile,
    ...newData,
    emotionalNeeds: [
      ...(oldProfile.emotionalNeeds || []),
      ...(newData.emotionalNeeds || []),
    ],
    tensions: [
      ...(oldProfile.tensions || []),
      ...(newData.tensions || []),
    ],
  };
};