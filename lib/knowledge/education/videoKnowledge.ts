// ============================================================
// videoKnowledge.ts
// Base de connaissances vidéo YESforLOV
// ============================================================

export type VideoPlatform = "youtube_short" | "youtube_video" | "instagram_reel";

export type VideoTherapyDomain =
  | "bien_etre_intime"
  | "epanouissement_amoureux"
  | "self_love"
  | "relation_couple"
  | "sante_intime"
  | "education_sexuelle"
  | "produits_wellbeing";

export interface VideoKnowledge {
  id: string;
  type: "video";
  platform: VideoPlatform;
  title: string;
  url: string;
  duration?: string;
  publishedAt?: string;
  description: string;
  tags: string[];
  triggers: string[];
  therapyDomain: VideoTherapyDomain;
  therapyDomains?: VideoTherapyDomain[];
}

export const VIDEO_KNOWLEDGE: VideoKnowledge[] = [
  {
    id: "lubrifiant-nouvel-allie",
    type: "video",
    platform: "youtube_short",
    title: "Le lubrifiant intime, c'est ton nouvel allié",
    url: "https://www.youtube.com/shorts/9E7qSykA62A",
    duration: "0:38",
    publishedAt: "2026-04-27",
    description:
      "Le lubrifiant est un outil de confort et de plaisir, pas une solution à un problème.",
    tags: ["lubrifiant", "confort", "intimité"],
    triggers: ["sécheresse", "lubrifiant", "douleur"],
    therapyDomain: "bien_etre_intime",
  },

  {
    id: "vaginose-odeurs-intimes",
    type: "video",
    platform: "youtube_short",
    title: "Vaginose et odeurs intimes",
    url: "https://www.youtube.com/shorts/KSIBZgxUAUg",
    duration: "0:21",
    publishedAt: "2026-03-30",
    description:
      "La vaginose est un déséquilibre de la flore vaginale, pas un manque d’hygiène.",
    tags: ["vaginose", "odeur", "santé intime"],
    triggers: ["odeur", "pertes", "vaginose"],
    therapyDomain: "sante_intime",
  },

  {
    id: "pas-de-bruit-plaisir",
    type: "video",
    platform: "youtube_short",
    title: "Je fais pas de bruit et alors ?",
    url: "https://www.youtube.com/shorts/MwFdX-n0C88",
    duration: "1:02",
    publishedAt: "2026-03-30",
    description:
      "Le volume sonore ne définit pas la qualité du plaisir.",
    tags: ["plaisir", "orgasme", "normalisation"],
    triggers: ["bruit", "orgasme", "normal"],
    therapyDomain: "bien_etre_intime",
  },
];

// ============================================================
// HELPERS
// ============================================================

export function searchVideosByTrigger(input: string): VideoKnowledge[] {
  const q = input.toLowerCase();

  return VIDEO_KNOWLEDGE.filter((v) =>
    v.triggers.some((t) => q.includes(t.toLowerCase())) ||
    v.tags.some((t) => q.includes(t.toLowerCase())) ||
    v.title.toLowerCase().includes(q) ||
    v.description.toLowerCase().includes(q)
  );
}

export function getVideosByDomain(domain: VideoTherapyDomain): VideoKnowledge[] {
  return VIDEO_KNOWLEDGE.filter(
    (v) => v.therapyDomain === domain || v.therapyDomains?.includes(domain)
  );
}

export function getVideosByPlatform(platform: VideoPlatform): VideoKnowledge[] {
  return VIDEO_KNOWLEDGE.filter((v) => v.platform === platform);
}