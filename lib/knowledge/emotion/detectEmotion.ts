export function detectEmotion(message: string) {
  const text = message.toLowerCase();

  if (text.includes("infidél") || text.includes("trompé")) {
    return "rupture_trust";
  }

  if (text.includes("seul") || text.includes("distance")) {
    return "emotional_distance";
  }

  if (text.includes("désir") || text.includes("envie")) {
    return "desire_exploration";
  }

  return "neutral";
}