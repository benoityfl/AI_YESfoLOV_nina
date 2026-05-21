export type KnowledgeEntry = {
  topic: string;
  keywords: string[];          // mots déclencheurs dans le message
  content: string;             // contenu pédagogique
  tone: "normalize" | "educate" | "empower"; // intention éditoriale
};

export const sexKnowledge: KnowledgeEntry[] = [

  // ── DÉSIR ──────────────────────────────────────────────────
  {
    topic: "désir",
    keywords: ["désir", "envie", "libido", "attrait", "manque d'envie"],
    content:
      "Le désir fluctue naturellement tout au long d'une relation. Il est profondément influencé par le stress, la fatigue, la qualité du sommeil et la connexion émotionnelle avec l'autre. Ce n'est pas une défaillance — c'est une information sur l'état intérieur.",
    tone: "normalize",
  },

  // ── LIBIDO ─────────────────────────────────────────────────
  {
    topic: "libido",
    keywords: ["libido", "pulsion", "sexuelle", "appétit sexuel", "baisse"],
    content:
      "La libido n'est pas un interrupteur fixe. Elle est modulée par les hormones, les émotions, le contexte de vie, et même la météo. Des périodes de basse libido sont normales et ne signifient pas que quelque chose est "cassé".",
    tone: "normalize",
  },

  // ── STRESS & CORPS ─────────────────────────────────────────
  {
    topic: "stress",
    keywords: ["stress", "anxiété", "fatigue", "épuisement", "pression", "surmenage"],
    content:
      "Le stress active le système nerveux sympathique (mode survie), ce qui réduit la disponibilité corporelle et émotionnelle. Le corps priorise la vigilance sur le plaisir. Ce n'est pas un manque de volonté — c'est de la biologie.",
    tone: "educate",
  },

  // ── CONNEXION COUPLE ───────────────────────────────────────
  {
    topic: "distance couple",
    keywords: ["distance", "éloignement", "déconnexion", "on se parle plus", "routine", "perd contact"],
    content:
      "Une sensation de distance dans un couple n'est généralement pas un manque d'amour, mais souvent un manque de rituel de connexion. La vie quotidienne érode les espaces de présence partagée. Réintroduire de la douceur consciente peut suffire à rouvrir le canal émotionnel.",
    tone: "normalize",
  },

  // ── COMMUNICATION ──────────────────────────────────────────
  {
    topic: "communication",
    keywords: ["communiquer", "parler", "dire", "exprimer", "besoins", "difficile à dire", "ose pas"],
    content:
      "Parler de ses désirs ou de ses limites est souvent plus difficile que l'acte lui-même. La vulnérabilité crée une intimité plus profonde que la performance. Commencer par de petites phrases ("j'aimerais…", "j'aime quand…") ouvre souvent des espaces insoupçonnés.",
    tone: "empower",
  },

  // ── PLAISIR ────────────────────────────────────────────────
  {
    topic: "plaisir",
    keywords: ["plaisir", "jouissance", "orgasme", "satisfaction", "ressentir", "profiter"],
    content:
      "Le plaisir est un droit, pas une récompense. Il est souvent conditionné par l'état mental autant que physique. La qualité d'attention — à soi, à l'autre, au moment — joue un rôle bien plus grand que la technique.",
    tone: "empower",
  },

  // ── CORPS & IMAGE DE SOI ───────────────────────────────────
  {
    topic: "corps",
    keywords: ["corps", "image de soi", "confiance", "se sentir bien", "honte", "à l'aise", "nu"],
    content:
      "Le rapport au corps est central dans l'intimité. Les injonctions sociales sur l'apparence peuvent créer une distanciation de soi qui nuit à la présence. Cultiver une relation douce à son propre corps — hors de tout regard — est souvent le premier chemin vers plus de confiance intime.",
    tone: "empower",
  },

  // ── INTIMITÉ ───────────────────────────────────────────────
  {
    topic: "intimité",
    keywords: ["intimité", "proche", "fusion", "tendresse", "douceur", "caresse", "toucher"],
    content:
      "L'intimité ne commence pas au lit. Elle se construit dans les micro-moments : un regard soutenu, un toucher qui ne demande rien, une écoute sans jugement. Le sensoriel et l'émotionnel sont indissociables.",
    tone: "educate",
  },

  // ── ROUTINE & RENOUVEAU ────────────────────────────────────
  {
    topic: "routine",
    keywords: ["routine", "monotonie", "ennui", "pareil", "toujours la même chose", "plus de surprise"],
    content:
      "La routine n'est pas l'ennemi de l'intimité — c'est l'absence de conscience qui l'est. Réintroduire de la présence dans un geste familier le transforme. La nouveauté peut être dans l'attention portée, pas nécessairement dans l'acte.",
    tone: "normalize",
  },

  // ── ANATOMIE DOUCE ─────────────────────────────────────────
  {
    topic: "anatomie",
    keywords: ["point g", "clitoris", "érogène", "zones", "anatomie", "sensations", "corps réagit"],
    content:
      "La cartographie du plaisir est propre à chaque personne. Les zones érogènes ne sont pas universelles — elles se découvrent dans un espace de sécurité et de curiosité. Explorer sans objectif est souvent plus riche qu'une recherche orientée résultat.",
    tone: "educate",
  },

  // ── DÉSIR ASYNCHRONE ───────────────────────────────────────
  {
    topic: "désir asynchrone",
    keywords: ["pas en même temps", "l'un veut pas", "l'autre veut", "différence d'envie", "refus", "rejette"],
    content:
      "Avoir des désirs décalés dans un couple est extrêmement courant. Ce n'est ni un rejet ni un désamour — c'est une réalité biologique et émotionnelle. L'enjeu est de trouver un langage commun autour du désir, sans culpabilisation.",
    tone: "normalize",
  },

  // ── APRÉS LA NAISSANCE D'UN ENFANT ─────────────────────────
  {
    topic: "post-naissance",
    keywords: ["bébé", "naissance", "post-partum", "après accouchement", "plus de désir depuis enfant"],
    content:
      "Après une naissance, la sexualité des deux partenaires traverse souvent une mutation profonde. Le corps, les hormones, le manque de sommeil et le nouveau rôle parentral réorganisent totalement les priorités. C'est une période de transition, pas un point final.",
    tone: "normalize",
  },
];
