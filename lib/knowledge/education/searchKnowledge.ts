import { sexKnowledge, type KnowledgeEntry } from "./sexKnowledge";
export { sexKnowledge, type KnowledgeEntry };

/**
 * Cherche les entrées de connaissance bien-être
 * qui correspondent au message de l'utilisateur.
 *
 * Stratégie : match sur les keywords (plus précis que le topic seul)
 */
export function searchSexKnowledge(message: string): KnowledgeEntry[] {
  const lower = message.toLowerCase();

  return sexKnowledge.filter((entry) =>
    entry.keywords.some((keyword) => lower.includes(keyword))
  );
}

/**
 * Version pondérée : retourne les résultats triés par nombre de
 * keywords matchés (les plus pertinents en premier).
 */
export function searchSexKnowledgeRanked(
  message: string,
  maxResults: number = 3
): KnowledgeEntry[] {
  const lower = message.toLowerCase();

  const scored = sexKnowledge
    .map((entry) => ({
      entry,
      score: entry.keywords.filter((kw) => lower.includes(kw)).length,
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults)
    .map(({ entry }) => entry);

  return scored;
}

/**
 * Formate les connaissances pour injection dans le system prompt.
 */
export function formatKnowledgeForPrompt(entries: KnowledgeEntry[]): string {
  if (entries.length === 0) return "";

  return entries
    .map((e) => `- [${e.topic}] ${e.content}`)
    .join("\n");
}
