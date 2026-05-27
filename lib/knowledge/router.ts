export type Route = "education" | "emotion" | "products";

export function routeQuery(message: string): Route {
  const m = message.toLowerCase();

  const emotionKeywords = [
    "stress", "anxiété", "peur", "trauma", "blocage",
    "plus envie", "fatigue", "triste", "distance"
  ];
  if (emotionKeywords.some(k => m.includes(k))) {
    return "emotion";
  }

  const productKeywords = [
    "lubrifiant", "sextoy", "gel", "acheter", "produit"
  ];
  if (productKeywords.some(k => m.includes(k))) {
    return "products";
  }

  return "education";
}
