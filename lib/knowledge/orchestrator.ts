import { routeQuery } from "./router";
import { searchKnowledge } from "../rag/searchKnowledge";
import { sexKnowledge } from "./education/sexKnowledge";

export async function getAnswer(message: string) {
  const route = routeQuery(message);

  // 1. RAG FIRST
  const ragResults = await searchKnowledge(message);

  if (ragResults?.length > 0) {
    return {
      source: "rag",
      data: ragResults,
    };
  }

  // 2. FALLBACK LOCAL
  const local = sexKnowledge.find(entry =>
    entry.keywords.some(k => message.toLowerCase().includes(k))
  );

  if (local) {
    return {
      source: "local",
      data: local,
    };
  }

  return {
    source: "empty",
    data: null,
  };
}