import { products, Product } from "./products";
 
// ─────────────────────────────
// MATCHING ÉMOTIONNEL
// Mots-clés français + anglais pour couvrir les deux langues
// Aligné avec sexKnowledge.ts et therapyPatterns.ts
// ─────────────────────────────
const EMOTIONAL_RULES: {
  keywords: string[];
  tags?: string[];
  categories?: string[];
  bonus: number;
}[] = [
  // Stress, fatigue, relaxation
  {
    keywords: ["stress", "tension", "relax", "relaxation", "détente", "détendu", "calme", "apaisement", "épuisement", "burnout", "surmenage"],
    tags: ["massage", "CBD", "huile"],
    bonus: 5,
  },
  // Désir, plaisir, orgasme
  {
    keywords: ["désir", "desire", "plaisir", "pleasure", "orgasme", "orgasm", "excitation", "jouir", "libido", "envie", "pulsion"],
    categories: ["stimulants_sexuels"],
    bonus: 5,
  },
  // Sécheresse, irritation, intolérance
  {
    keywords: ["sécheresse", "sèche", "irritation", "sensible", "douleur", "inconfort", "intolérance", "glycérine", "muqueuse", "vaginisme", "dyspareunie"],
    tags: ["algues", "sans glycérine", "aloe vera", "hydratant"],
    bonus: 6,
  },
  // Couple, complicité, partage
  {
    keywords: ["couple", "deux", "ensemble", "partenaire", "complicité", "partager", "connexion", "rapprochement", "distance", "routine"],
    categories: ["stimulants_sexuels", "massages_sensuels", "accessoires_sensuels"],
    bonus: 4,
  },
  // Massage, toucher, caresse
  {
    keywords: ["massage", "caresse", "toucher", "peau", "corps", "sensuel", "douceur", "tendresse"],
    categories: ["massages_sensuels"],
    bonus: 4,
  },
  // Anal, prostate
  {
    keywords: ["anal", "prostate", "sodomie", "pénétration anale"],
    tags: ["anal", "prostate"],
    bonus: 6,
  },
  // Cadeau, coffret
  {
    keywords: ["cadeau", "offrir", "gift", "coffret", "anniversaire", "saint-valentin", "surprise"],
    categories: ["coffrets", "accessoires_sensuels"],
    bonus: 4,
  },
  // Bio, naturel, composition
  {
    keywords: ["bio", "naturel", "vegan", "écologique", "ingrédients", "composition", "sans produit chimique", "organic"],
    tags: ["bio", "naturel", "algues", "aloe vera"],
    bonus: 3,
  },
  // Longue durée, silicone
  {
    keywords: ["longue durée", "silicone", "durable", "tient longtemps", "eau", "résistant"],
    tags: ["silicone", "longue durée"],
    bonus: 3,
  },
  // Parfum, aphrodisiaque, séduction
  {
    keywords: ["parfum", "odeur", "senteur", "aphrodisiaque", "séduction", "fragrance"],
    categories: ["parfums_aphrodisiaques"],
    bonus: 5,
  },
  // Ménopause, sécheresse hormonale
  {
    keywords: ["ménopause", "péri-ménopause", "hormones", "post-partum", "allaitement", "après accouchement"],
    tags: ["hydratant", "algues", "sans glycérine", "aloe vera"],
    bonus: 5,
  },
  // Performance, érection, éjaculation
  {
    keywords: ["performance", "érection", "éjaculation", "prématuré", "tenir", "endurance", "masculin"],
    tags: ["masculin", "éjaculation retardée", "érection"],
    bonus: 5,
  },
  // Exploration, nouveauté, BDSM soft
  {
    keywords: ["explorer", "nouveauté", "jeu", "bandeau", "attaches", "BDSM", "doux", "plume", "caresses"],
    categories: ["accessoires_sensuels"],
    bonus: 4,
  },
  // Clitoris, point G, stimulation féminine
  {
    keywords: ["clitoris", "point g", "féminin", "stimulation", "zones érogènes", "orgasme féminin"],
    categories: ["stimulants_sexuels"],
    tags: ["clitoris", "point G", "féminin"],
    bonus: 5,
  },
  // Gourmand, comestible
  {
    keywords: ["goût", "comestible", "gourmand", "lécher", "oral", "saveur"],
    categories: ["gourmandises_erotiques", "massages_sensuels"],
    tags: ["comestible", "gourmand"],
    bonus: 4,
  },
];
 
export function retrieveRelevantProducts(userMessage: string): Product[] {
  const query = userMessage.toLowerCase();
 
  return products
    .map((product) => {
      let score = 0;
 
      // ── Matching tags (priorité haute) ──────────────────────────────────────
      product.tags?.forEach((tag) => {
        if (query.includes(tag.toLowerCase())) {
          score += 3;
        }
      });
 
      // ── Matching nom du produit ──────────────────────────────────────────────
      const nameWords = product.name.toLowerCase().split(/\s+/);
      nameWords.forEach((word) => {
        if (word.length > 3 && query.includes(word)) {
          score += 2;
        }
      });
 
      // ── Matching description mot par mot ─────────────────────────────────────
      const descWords = product.description?.toLowerCase().split(/\s+/) ?? [];
      descWords.forEach((word) => {
        if (word.length > 4 && query.includes(word)) {
          score += 1;
        }
      });
 
      // ── Matching catégorie ────────────────────────────────────────────────────
      const catLabel = product.category.toLowerCase().replace(/_/g, " ");
      if (query.includes(catLabel)) {
        score += 2;
      }
 
      // ── Matching émotionnel ───────────────────────────────────────────────────
      for (const rule of EMOTIONAL_RULES) {
        const emotionMatch = rule.keywords.some((k) => query.includes(k));
        if (!emotionMatch) continue;
 
        const tagMatch = rule.tags?.some((t) => product.tags?.includes(t));
        const categoryMatch = rule.categories?.some((c) => product.category === c);
 
        if (tagMatch || categoryMatch) {
          score += rule.bonus;
        }
      }
 
      // ── Pénalité produits épuisés ─────────────────────────────────────────────
      if (!product.inStock) {
        score = Math.max(0, score - 2);
      }
 
      return { product, score };
    })
    .filter((p) => p.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((p) => p.product);
}