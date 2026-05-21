export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  url: string;
  excerpt: string;
  content?: string;
  tags?: string[];
  themes?: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog_001",
    title: "Tout savoir sur le mouvement LGBTQIA+",
    slug: "all_about_the_lgbtqia_movement",
    url: "https://www.yesforlov.com/blogs/lart-daimer/all_about_the_lgbtqia_movement",
    excerpt:
      "Le mouvement LGBTQIA+ est un arc-en-ciel de cultures, d’identités et de vécus.",
    tags: ["LGBTQIA+", "diversité", "identité"],
    themes: ["inclusion", "sexualité consciente", "communauté"],
  },

  {
    id: "blog_002",
    title:
      "Sprays retardants, stimulants pour pénis, crèmes anesthésiantes… quels produits choisir ?",
    slug: "sexual-delay-sprays-penis-stimulants-which-products-to-choose",
    url: "https://www.yesforlov.com/blogs/lart-daimer/sexual-delay-sprays-penis-stimulants-which-products-to-choose",
    excerpt:
      "Tour d’horizon des produits pour prolonger le plaisir et explorer le bien-être intime masculin.",
    tags: ["produits", "homme", "bien-être intime"],
    themes: ["plaisir", "sexualité consciente", "conseils"],
  },

  {
    id: "blog_003",
    title: "Quelle est la durée de vie des cosmétiques YESforLOV ?",
    slug: "cosmetic-conservation-and-durability",
    url: "https://www.yesforlov.com/blogs/lart-daimer/cosmetic-conservation-and-durability",
    excerpt:
      "Comment savoir si un cosmétique intime est encore sûr à utiliser ?",
    tags: ["cosmétiques", "conservation", "durée de vie"],
    themes: ["conseils pratiques", "soins intimes"],
  },

  {
    id: "blog_004",
    title:
      "La Saint-Valentin : son histoire surprenante et notre guide cadeau",
    slug: "valentines_day",
    url: "https://www.yesforlov.com/blogs/lart-daimer/valentines_day",
    excerpt:
      "Histoire de la Saint-Valentin et idées cadeaux pour le couple.",
    tags: ["Saint-Valentin", "cadeau", "couple"],
    themes: ["amour", "relation", "célébration"],
  },
];

// ✅ IMPORTANT : fonction de recherche utilisée par route.ts
export function searchBlog(message: string): BlogPost[] {
  const m = message.toLowerCase();

  return BLOG_POSTS.filter((post) => {
    const text = `
      ${post.title}
      ${post.excerpt}
      ${post.tags?.join(" ")}
      ${post.themes?.join(" ")}
    `.toLowerCase();

    return text.includes(m);
  });
}