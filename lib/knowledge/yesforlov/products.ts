// lib/knowledge/yesforlov/products.ts
// Source : https://www.yesforlov.com/collections/tous-les-produits
// Marque : YESforLOV — cosmétiques intimes français, vegan, testés gynécologiquement

export type ProductCategory =
  | "lubrifiants"
  | "stimulants_sexuels"
  | "massages_sensuels"
  | "bien_etre_intime"
  | "jouets_sextoys"
  | "parfums_aphrodisiaques"
  | "gourmandises_erotiques"
  | "accessoires_sensuels"
  | "coffrets";

export interface Product {
  id: string;
  name: string;
  slug: string;
  url: string;
  category: ProductCategory;
  price: number;         // prix en euros
  originalPrice?: number; // si promotion
  reviews?: number;
  inStock: boolean;
  tags?: string[];
  description?: string;
}

export const products: Product[] = [
  // ─── LUBRIFIANTS ────────────────────────────────────────────────────────────
  {
    id: "lubrifiant-mixte-hydratant",
    name: "Lubrifiant Intime Naturel hydratant",
    slug: "lubrifiant-mixte-hydratant",
    url: "https://www.yesforlov.com/products/lubrifiant-mixte-hydratant",
    category: "lubrifiants",
    price: 14.90,
    originalPrice: 24.90,
    reviews: 107,
    inStock: true,
    tags: ["eau", "hydratant", "acide hyaluronique", "mixte", "bestseller"],
    description: "Lubrifiant intime naturel à base d'eau, hydratant, formulé à l'acide hyaluronique pour hydrater les muqueuses et réduire les irritations.",
  },
  {
    id: "lubrifiant-anal-confort-performances",
    name: "Lubrifiant Anal confort & performances",
    slug: "lubrifiant-anal-confort-performances",
    url: "https://www.yesforlov.com/products/lubrifiant-anal-confort-performances",
    category: "lubrifiants",
    price: 29.90,
    reviews: 23,
    inStock: true,
    tags: ["anal", "confort", "eau"],
    description: "Lubrifiant intime spécialement formulé pour les rapports anaux, texture épaisse pour un confort optimal.",
  },
  {
    id: "massage-integral-lubrifiant",
    name: "Massage Intégral Lubrifiant",
    slug: "massage-integral-lubrifiant",
    url: "https://www.yesforlov.com/products/massage-integral-lubrifiant",
    category: "lubrifiants",
    price: 34.90,
    reviews: 82,
    inStock: true,
    tags: ["massage", "eau", "compatible préservatifs", "compatible sextoys"],
    description: "Premier lubrifiant de massage entièrement compatible avec les préservatifs et les muqueuses.",
  },
  {
    id: "massage-lubrifiant-naturel-fleur-doranger",
    name: "Massage Lubrifiant Naturel fleur d'oranger",
    slug: "massage-lubrifiant-naturel-fleur-doranger-1",
    url: "https://www.yesforlov.com/products/massage-lubrifiant-naturel-fleur-doranger-1",
    category: "lubrifiants",
    price: 34.90,
    reviews: 5,
    inStock: true,
    tags: ["huile", "massage", "fleur d'oranger", "naturel"],
    description: "Lubrifiant de massage naturel à base d'huile, parfumé à la fleur d'oranger.",
  },
  {
    id: "lubrifiant-mixte-chaleur-stimulante",
    name: "Lubrifiant Intime Naturel effet chaud",
    slug: "lubrifiant-mixte-chaleur-stimulante",
    url: "https://www.yesforlov.com/products/lubrifiant-mixte-chaleur-stimulante",
    category: "lubrifiants",
    price: 29.90,
    reviews: 8,
    inStock: true,
    tags: ["eau", "effet chaud", "stimulant"],
    description: "Lubrifiant intime naturel avec effet chauffant pour intensifier les sensations.",
  },
  {
    id: "lubrifiant-mixte-fraicheur-illimitee",
    name: "Lubrifiant Intime Naturel effet froid",
    slug: "lubrifiant-mixte-fraicheur-illimitee",
    url: "https://www.yesforlov.com/products/lubrifiant-mixte-fraicheur-illimitee",
    category: "lubrifiants",
    price: 29.90,
    reviews: 9,
    inStock: true,
    tags: ["eau", "effet froid", "fraîcheur"],
    description: "Lubrifiant intime naturel avec effet rafraîchissant pour des sensations de fraîcheur.",
  },
  {
    id: "lubrifiant-ultime-consistance-medium",
    name: "Lubrifiant Intime 100% Silicone — consistance médium",
    slug: "lubrifiant-ultime-consistance-medium",
    url: "https://www.yesforlov.com/products/lubrifiant-ultime-consistance-medium",
    category: "lubrifiants",
    price: 39.90,
    reviews: 10,
    inStock: true,
    tags: ["silicone", "longue durée", "consistance médium"],
    description: "Lubrifiant 100% silicone de consistance médium, longue durée, ne s'assèche pas dans l'eau.",
  },
  {
    id: "lubrifiant-ultime-consistance-fluide",
    name: "Lubrifiant Intime 100% Silicone — consistance fluide",
    slug: "lubrifiant-ultime-consistance-fluide",
    url: "https://www.yesforlov.com/products/lubrifiant-ultime-consistance-fluide",
    category: "lubrifiants",
    price: 39.90,
    reviews: 7,
    inStock: true,
    tags: ["silicone", "longue durée", "consistance fluide"],
    description: "Lubrifiant 100% silicone de consistance fluide, très longue durée.",
  },
  {
    id: "lubrifiant-mixte-naturel-aloe-vera",
    name: "Lubrifiant Intime Naturel à l'aloe vera bio",
    slug: "lubrifiant-mixte-naturel-aloe-vera",
    url: "https://www.yesforlov.com/products/lubrifiant-mixte-naturel-aloe-vera",
    category: "lubrifiants",
    price: 29.90,
    reviews: 15,
    inStock: true,
    tags: ["eau", "aloe vera", "bio", "naturel"],
    description: "Lubrifiant intime à base d'aloe vera biologique, doux et respectueux des muqueuses.",
  },
  {
    id: "lubrifiant-naturel-aux-algues-sans-glycerine",
    name: "Lubrifiant Intime Naturel aux algues bio sans glycérine",
    slug: "lubrifiant-naturel-aux-algues-sans-glycerine",
    url: "https://www.yesforlov.com/products/lubrifiant-naturel-aux-algues-sans-glycerine",
    category: "lubrifiants",
    price: 29.90,
    reviews: 7,
    inStock: true,
    tags: ["eau", "algues", "bio", "sans glycérine"],
    description: "Lubrifiant bio aux algues, sans glycérine, idéal pour les peaux sensibles.",
  },

  // ─── STIMULANTS SEXUELS ──────────────────────────────────────────────────────
  {
    id: "gel-orgasmique-clitoris",
    name: "Gel Orgasmique pour le clitoris",
    slug: "gel-orgasmique-clitoris",
    url: "https://www.yesforlov.com/products/gel-orgasmique-clitoris",
    category: "stimulants_sexuels",
    price: 29.90,
    reviews: 17,
    inStock: true,
    tags: ["clitoris", "orgasme", "féminin", "stimulant"],
    description: "Gel stimulant spécialement formulé pour le clitoris, intensifie les sensations et facilite l'orgasme.",
  },
  {
    id: "gel-orgasmique-point-g",
    name: "Gel Orgasmique pour le point G",
    slug: "gel-orgasmique-point-g",
    url: "https://www.yesforlov.com/products/gel-orgasmique-point-g",
    category: "stimulants_sexuels",
    price: 29.90,
    reviews: 9,
    inStock: true,
    tags: ["point G", "orgasme", "féminin", "stimulant"],
    description: "Gel stimulant ciblant le point G pour intensifier le plaisir féminin.",
  },
  {
    id: "gel-orgasmique-vibrant",
    name: "Gel Orgasmique Vibrant — Excitation intense & pulsations localisées",
    slug: "gel-orgasmique-vibrant",
    url: "https://www.yesforlov.com/products/gel-orgasmique-vibrant",
    category: "stimulants_sexuels",
    price: 34.90,
    reviews: 8,
    inStock: true,
    tags: ["vibrant", "orgasme", "pulsations", "stimulant"],
    description: "Gel orgasmique avec effet vibrant pour une excitation intense et des pulsations localisées.",
  },
  {
    id: "gel-orgasmique-au-cbd",
    name: "Gel Orgasmique au CBD — Confort & lâcher-prise",
    slug: "gel-orgasmique-au-cbd",
    url: "https://www.yesforlov.com/products/gel-orgasmique-au-cbd",
    category: "stimulants_sexuels",
    price: 34.90,
    reviews: 7,
    inStock: true,
    tags: ["CBD", "confort", "relaxation", "lâcher-prise"],
    description: "Gel intime au CBD pour le confort, la détente et le lâcher-prise lors des rapports.",
  },
  {
    id: "gel-dexcitation-plaisir-anal-et-prostatique",
    name: "Gel d'Excitation — Plaisir anal et prostatique",
    slug: "gel-dexcitation-plaisir-anal-et-prostatique",
    url: "https://www.yesforlov.com/products/gel-dexcitation-plaisir-anal-et-prostatique",
    category: "stimulants_sexuels",
    price: 34.90,
    inStock: true,
    tags: ["anal", "prostate", "masculin", "stimulant"],
    description: "Gel d'excitation formulé pour le plaisir anal et la stimulation prostatique.",
  },
  {
    id: "elixir-de-couple-sensations-prouesses",
    name: "Élixir de Couple — Sensations & plaisirs partagés",
    slug: "elixir-de-couple-sensations-prouesses",
    url: "https://www.yesforlov.com/products/elixir-de-couple-sensations-prouesses",
    category: "stimulants_sexuels",
    price: 34.90,
    reviews: 22,
    inStock: true,
    tags: ["couple", "chaud", "froid", "masculin", "féminin"],
    description: "Gel intime érotique soufflant chaud et froid simultanément — stimule les performances masculines et l'excitation féminine.",
  },
  {
    id: "prolongateurdeplaisir",
    name: "Prolongateur de Plaisir masculin",
    slug: "prolongateurdeplaisir",
    url: "https://www.yesforlov.com/products/prolongateurdeplaisir",
    category: "stimulants_sexuels",
    price: 39.90,
    reviews: 10,
    inStock: true,
    tags: ["masculin", "éjaculation retardée", "érection", "spray"],
    description: "Spray myorelaxant retardant l'éjaculation, renforçant le contrôle de l'érection et prolongeant le plaisir.",
  },

  // ─── MASSAGES SENSUELS ────────────────────────────────────────────────────────
  {
    id: "huile-de-massage-au-parfum-affolant",
    name: "Huile de Massage Sensuelle au parfum affolant",
    slug: "huile-de-massage-au-parfum-affolant",
    url: "https://www.yesforlov.com/products/huile-de-massage-au-parfum-affolant",
    category: "massages_sensuels",
    price: 29.90,
    reviews: 19,
    inStock: true,
    tags: ["huile", "massage", "parfum affolant", "amande douce"],
    description: "Huile de massage sensuelle à base d'amande douce, parfum affolant, pour des massages intenses.",
  },
  {
    id: "huile-de-massage-au-parfum-enivrant",
    name: "Huile de Massage Sensuelle au parfum enivrant",
    slug: "huile-de-massage-au-parfum-enivrant",
    url: "https://www.yesforlov.com/products/huile-de-massage-au-parfum-enivrant",
    category: "massages_sensuels",
    price: 29.90,
    reviews: 7,
    inStock: true,
    tags: ["huile", "massage", "parfum enivrant"],
    description: "Huile de massage sensuelle au parfum enivrant, idéale pour les préliminaires.",
  },
  {
    id: "bougie-de-massage-au-parfum-affolant",
    name: "Bougie de Massage au parfum affolant",
    slug: "bougie-de-massage-au-parfum-affolant",
    url: "https://www.yesforlov.com/products/bougie-de-massage-au-parfum-affolant",
    category: "massages_sensuels",
    price: 34.90,
    reviews: 18,
    inStock: true,
    tags: ["bougie", "massage", "parfum affolant", "cire tiède"],
    description: "Bougie de massage — l'huile ne brûle pas, agréable sur la peau et ne laisse pas de film gras.",
  },
  {
    id: "bougie-de-massage-au-parfum-enivrant",
    name: "Bougie de Massage au parfum enivrant",
    slug: "bougie-de-massage-au-parfum-enivrant",
    url: "https://www.yesforlov.com/products/bougie-de-massage-au-parfum-enivrant",
    category: "massages_sensuels",
    price: 34.90,
    reviews: 10,
    inStock: true,
    tags: ["bougie", "massage", "parfum enivrant"],
    description: "Bougie de massage au parfum enivrant pour une ambiance sensuelle.",
  },
  {
    id: "massage-integral-gourmand-peche-abricot",
    name: "Massage Intégral Gourmand Pêche Abricot",
    slug: "massage-integral-gourmand-peche-abricot",
    url: "https://www.yesforlov.com/products/massage-integral-gourmand-peche-abricot",
    category: "massages_sensuels",
    price: 29.90,
    reviews: 15,
    inStock: true,
    tags: ["massage", "comestible", "pêche", "abricot", "gourmand"],
    description: "Lubrifiant de massage gourmand au goût pêche-abricot, compatible préservatifs, comestible.",
  },
  {
    id: "massage-integral-gourmand-ananas-the-vert",
    name: "Massage Intégral Gourmand Ananas Thé vert",
    slug: "massage-integral-gourmand-ananas-the-vert",
    url: "https://www.yesforlov.com/products/massage-integral-gourmand-ananas-the-vert",
    category: "massages_sensuels",
    price: 29.90,
    reviews: 9,
    inStock: false,
    tags: ["massage", "comestible", "ananas", "thé vert", "gourmand"],
    description: "Lubrifiant de massage gourmand au goût ananas-thé vert. Actuellement épuisé.",
  },

  // ─── BIEN-ÊTRE INTIME ────────────────────────────────────────────────────────
  {
    id: "serum-intime-beaute-confort-protection-du-v",
    name: "Sérum Intime — Confort et protection de la vulve et du pénis",
    slug: "serum-intime-beaute-confort-protection-du-v",
    url: "https://www.yesforlov.com/products/serum-intime-beaute-confort-protection-du-v",
    category: "bien_etre_intime",
    price: 34.90,
    reviews: 5,
    inStock: true,
    tags: ["sérum", "vulve", "pénis", "soin", "bio"],
    description: "Sérum intime bio pour choyer la zone intime et prévenir les irritations dues aux épilations.",
  },
  {
    id: "brume-intime",
    name: "Brume Intime au parfum enivrant",
    slug: "brume-intime",
    url: "https://www.yesforlov.com/products/brume-intime",
    category: "bien_etre_intime",
    price: 24.90,
    reviews: 13,
    inStock: true,
    tags: ["brume", "parfum", "soin", "intimité"],
    description: "Eau sensuelle qui magnifie la peau dans les zones intimes, sans contrarier la fragrance habituelle.",
  },
  {
    id: "lingettes-intimes-non-parfumees",
    name: "Lingettes Intimes non parfumées",
    slug: "lingettes-intimes-non-parfumees",
    url: "https://www.yesforlov.com/products/lingettes-intimes-non-parfumees",
    category: "bien_etre_intime",
    price: 1.00,
    reviews: 5,
    inStock: false,
    tags: ["lingettes", "hygiène", "sans parfum", "pH neutre"],
    description: "Lingettes intimes sans parfum, respect du pH, pour homme et femme. Actuellement épuisé.",
  },

  // ─── JOUETS & SEXTOYS ────────────────────────────────────────────────────────
  {
    id: "lovfinger-stimulateur-clitoridien",
    name: "LovFinger stimulateur clitoridien",
    slug: "lovfinger-stimulateur-clitoridien",
    url: "https://www.yesforlov.com/products/lovfinger-stimulateur-clitoridien",
    category: "jouets_sextoys",
    price: 49.90,
    reviews: 8,
    inStock: false,
    tags: ["clitoris", "stimulateur", "vibromasseur", "silicone médicale"],
    description: "Stimulateur clitoridien en silicone médicale, sans phtalates. Actuellement épuisé.",
  },

  // ─── PARFUMS APHRODISIAQUES ─────────────────────────────────────────────────
  {
    id: "rejouissance-eau-de-parfum-pour-femme-100ml",
    name: "Eau de Parfum Réjouissance pour femme",
    slug: "rejouissance-eau-de-parfum-pour-femme-100ml",
    url: "https://www.yesforlov.com/products/rejouissance-eau-de-parfum-pour-femme-100ml",
    category: "parfums_aphrodisiaques",
    price: 79.90,
    reviews: 10,
    inStock: true,
    tags: ["parfum", "femme", "aphrodisiaque", "séduction"],
    description: "Eau de parfum Réjouissance pour femme, fragrance subtile, provoquante et sensuelle.",
  },
  {
    id: "rejouissance-eau-de-parfum-pour-homme-100ml",
    name: "Eau de Parfum Réjouissance pour homme",
    slug: "rejouissance-eau-de-parfum-pour-homme-100ml",
    url: "https://www.yesforlov.com/products/rejouissance-eau-de-parfum-pour-homme-100ml",
    category: "parfums_aphrodisiaques",
    price: 79.90,
    reviews: 9,
    inStock: true,
    tags: ["parfum", "homme", "aphrodisiaque", "séduction"],
    description: "Eau de parfum Réjouissance pour homme, fragrance rayonnante et séduisante.",
  },

  // ─── GOURMANDISES ÉROTIQUES ─────────────────────────────────────────────────
  {
    id: "sexy-candy-explosion",
    name: "Sexy Candy Explosion",
    slug: "sexy-candy-explosion",
    url: "https://www.yesforlov.com/products/sexy-candy-explosion",
    category: "gourmandises_erotiques",
    price: 3.90,
    reviews: 3,
    inStock: true,
    tags: ["bonbons", "érotique", "gourmand", "fun"],
    description: "Confiseries pétillantes et érotiques à partager.",
  },

  // ─── ACCESSOIRES SENSUELS ────────────────────────────────────────────────────
  {
    id: "bandeau-noir-satine",
    name: "Coffret Bandeau en Satin Noir",
    slug: "bandeau-noir-satine",
    url: "https://www.yesforlov.com/products/bandeau-noir-satine",
    category: "accessoires_sensuels",
    price: 19.90,
    reviews: 7,
    inStock: true,
    tags: ["bandeau", "satin", "BDSM soft", "accessoire"],
    description: "Bandeau en satin noir pour des jeux sensuels et d'initiation au BDSM doux.",
  },
  {
    id: "plume-a-caresses",
    name: "Coffret Plume à Caresses",
    slug: "plume-a-caresses",
    url: "https://www.yesforlov.com/products/plume-a-caresses",
    category: "accessoires_sensuels",
    price: 19.90,
    reviews: 9,
    inStock: true,
    tags: ["plume", "caresses", "sensuel", "accessoire"],
    description: "Plume à caresses pour des sensations douces et sensuelles sur tout le corps.",
  },

  // ─── ÉCHANTILLONS ────────────────────────────────────────────────────────────
  {
    id: "echantillon-yesforlov",
    name: "Les Miniatures YESforLOV",
    slug: "echantillon-yesforlov",
    url: "https://www.yesforlov.com/products/echantillon-yesforlov",
    category: "bien_etre_intime",
    price: 1.00,
    reviews: 12,
    inStock: true,
    tags: ["échantillon", "miniature", "découverte"],
    description: "Miniatures pour découvrir les produits YESforLOV avant d'acheter en format complet.",
  },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

export const getProductsByCategory = (category: ProductCategory): Product[] =>
  products.filter((p) => p.category === category);

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((p) => p.slug === slug);

export const getInStockProducts = (): Product[] =>
  products.filter((p) => p.inStock);

export const searchProducts = (query: string): Product[] => {
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description?.toLowerCase().includes(q) ||
      p.tags?.some((t) => t.toLowerCase().includes(q))
  );
};

export const CATEGORIES: Record<ProductCategory, string> = {
  lubrifiants: "Lubrifiants intimes",
  stimulants_sexuels: "Stimulants sexuels",
  massages_sensuels: "Massages sensuels",
  bien_etre_intime: "Bien-être intime",
  jouets_sextoys: "Jouets & Sextoys",
  parfums_aphrodisiaques: "Parfums aphrodisiaques",
  gourmandises_erotiques: "Gourmandises érotiques",
  accessoires_sensuels: "Accessoires sensuels",
  coffrets: "Coffrets coquins",
};
