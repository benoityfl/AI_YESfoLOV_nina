import { products } from "./yesforlov/products";

export function retrieveRelevantProducts(userMessage: string) {
  const query = userMessage.toLowerCase();

  return products
    .map((product) => {
      let score = 0;

      // TAGS
      product.tags?.forEach((tag) => {
        if (query.includes(tag.toLowerCase())) {
          score += 3;
        }
      });

      // DESCRIPTION
      if (product.description?.toLowerCase().includes(query)) {
        score += 2;
      }

      // CATEGORY
      if (query.includes(product.category.toLowerCase())) {
        score += 2;
      }

      // EMOTIONAL MATCHING
      if (
        query.includes("stress") ||
        query.includes("tension") ||
        query.includes("relax")
      ) {
        if (
          product.tags?.includes("massage") ||
          product.tags?.includes("CBD")
        ) {
          score += 5;
        }
      }

      if (
        query.includes("desire") ||
        query.includes("pleasure") ||
        query.includes("orgasm")
      ) {
        if (
          product.category === "stimulants_sexuels"
        ) {
          score += 5;
        }
      }

      return {
        product,
        score,
      };
    })
    .filter((p) => p.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((p) => p.product);
}