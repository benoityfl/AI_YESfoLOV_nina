// ============================================================
// videoKnowledge.ts
// Base de connaissances vidéo YESforLOV
// Sources : YouTube Shorts + vidéos longues
// Sexologue : Myriam (thérapeute de couple & sexothérapeute)
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

  // ============================================================
  // YOUTUBE SHORTS
  // ============================================================

  {
    id: "lubrifiant-nouvel-allie",
    type: "video",
    platform: "youtube_short",
    title: "Le lubrifiant intime, c'est ton nouvel allié",
    url: "https://www.youtube.com/shorts/9E7qSykA62A",
    duration: "0:38",
    publishedAt: "2026-04-27",
    description:
      "Une sexothérapeute rappelle que le lubrifiant n'est pas une solution à un problème, mais un outil de confort et de plaisir. La lubrification naturelle varie selon le stress, la fatigue, le cycle, les émotions, l'histoire intime. Le lubrifiant YESforLOV a sa place dans tous les parcours de vie, à tous les âges, dans toutes les sexualités.",
    tags: ["lubrifiant", "confort", "intimité", "corps", "normalisation", "sexothérapie", "bien-être"],
    triggers: [
      "sécheresse", "douleur", "inconfort", "lubrifiant", "ménopause", "cycle",
      "stress", "fatigue", "lubrification", "confort intime",
    ],
    therapyDomain: "bien_etre_intime",
  },

  {
    id: "vaginose-odeurs-intimes",
    type: "video",
    platform: "youtube_short",
    title: "Vaginose et odeurs intimes : que faire ?",
    url: "https://www.youtube.com/shorts/KSIBZgxUAUg",
    duration: "0:21",
    publishedAt: "2026-03-30",
    description:
      "La vaginose bactérienne est l'infection intime la plus fréquente chez les femmes en âge de procréer. C'est un déséquilibre de la flore vaginale, pas une question d'hygiène. Odeurs fortes, pertes anormales, irritations. Causes : toilette excessive, nouveau partenaire, antibiotiques, changements hormonaux. 1 femme sur 3 est concernée. Ça se soigne très bien.",
    tags: ["vaginose", "flore vaginale", "santé intime", "odeurs", "infection", "prévention"],
    triggers: [
      "odeur", "odeur intime", "pertes", "vaginose", "infection", "irritation",
      "flore vaginale", "brûlures", "honte", "hygiène intime",
    ],
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
      "Certaines personnes jouissent en silence, d'autres font trembler les murs — les deux sont parfaitement normales. Le volume sonore ne détermine en rien la qualité d'un rapport. On désapprend la performance calquée sur le porno pour revenir au ressenti authentique. Jouissez comme vous êtes, pas comme on vous le dicte.",
    tags: ["plaisir", "normalisation", "performance", "authenticité", "orgasme", "silence"],
    triggers: [
      "bruit", "silence", "performance", "porno", "normal", "jouir",
      "plaisir authentique", "comparaison", "honte", "je suis normale",
    ],
    therapyDomain: "bien_etre_intime",
  },

  {
    id: "etoile-de-mer-consentement",
    type: "video",
    platform: "youtube_short",
    title: "Paresse au lit ! Elle fait l'étoile de mer, que faire ?",
    url: "https://www.youtube.com/shorts/v9jJxrf2zvs",
    duration: "1:10",
    publishedAt: "2026-03-30",
    description:
      "Faire l'étoile au lit peut être un choix consenti où l'un se laisse aller et l'autre prend les rênes — et c'est ok. Mais derrière cette expression peut aussi se cacher le non-consentement : une personne qui subit sans oser dire non. La différence fondamentale : si c'est un choix discuté et éclairé → ok. Si c'est une absence de choix → non.",
    tags: ["consentement", "passivité", "dynamique sexuelle", "communication", "couple", "limites"],
    triggers: [
      "consentement", "passive", "étoile de mer", "elle bouge pas", "il bouge pas",
      "subir", "ne pas oser dire non", "jeux de rôles", "lâcher-prise",
    ],
    therapyDomain: "education_sexuelle",
    therapyDomains: ["education_sexuelle", "relation_couple"],
  },

  {
    id: "andropause-signes",
    type: "video",
    platform: "youtube_short",
    title: "Les 6 signes de l'andropause chez l'homme",
    url: "https://www.youtube.com/shorts/KzzGeu2Y1DU",
    duration: "1:33",
    publishedAt: "2026-03-30",
    description:
      "L'andropause est une étape naturelle du vieillissement masculin, souvent méconnue. Elle s'accompagne de différents signes : baisse de libido, fatigue, changements d'humeur, troubles de l'érection, prise de poids, difficultés de concentration. Un sujet encore trop peu abordé qui mérite d'être normalisé.",
    tags: ["andropause", "homme", "vieillissement", "libido", "hormones", "santé masculine"],
    triggers: [
      "andropause", "homme vieillissement", "baisse libido homme", "fatigue",
      "érection", "changement humeur homme", "testostérone", "ménopause masculine",
    ],
    therapyDomain: "sante_intime",
  },

  {
    id: "idees-recues-sexualite",
    type: "video",
    platform: "youtube_short",
    title: "Les idées reçues sur la sexualité passées au crible",
    url: "https://www.youtube.com/shorts/5F4zJ9KY7I8",
    duration: "1:42",
    publishedAt: "2025-12-04",
    description:
      "La sexologue Myriam démêle le vrai du faux sur les grandes idées reçues : les sextoys, la fellation vs pénétration, la taille et la durée. Des réponses qui surprennent et libèrent. Éducation sexuelle accessible et sans tabou.",
    tags: ["idées reçues", "mythes", "éducation sexuelle", "sextoys", "taille", "durée"],
    triggers: [
      "idées reçues", "mythe", "vrai ou faux", "sextoy", "taille", "durée",
      "fellation", "question sexualité", "je ne sais pas si c'est normal",
    ],
    therapyDomain: "education_sexuelle",
  },

  {
    id: "exprimer-son-desir",
    type: "video",
    platform: "youtube_short",
    title: "Comment exprimer son désir pour l'autre ?",
    url: "https://www.youtube.com/shorts/3spUn7Sc4hw",
    duration: "1:38",
    publishedAt: "2025-12-03",
    description:
      "Des tips de la sexologue Myriam pour exprimer 'j'ai envie de toi' sans jamais le dire crûment. Les grandes déclarations naissent souvent dans les non-dits : un regard, un geste, une phrase détournée. Apprendre à exprimer son désir avec subtilité et authenticité.",
    tags: ["désir", "communication", "séduction", "non-dits", "couple", "intimité"],
    triggers: [
      "exprimer désir", "je sais pas comment dire", "envie de toi", "séduction",
      "communication intime", "non-dit", "comment montrer", "timidité",
    ],
    therapyDomain: "epanouissement_amoureux",
    therapyDomains: ["epanouissement_amoureux", "relation_couple"],
  },

  {
    id: "syndrome-putain-madone",
    type: "video",
    platform: "youtube_short",
    title: "Le syndrome de la putain et de la madone",
    url: "https://www.youtube.com/shorts/MiSWXu-9Ewk",
    duration: "1:46",
    publishedAt: "2025-12-03",
    description:
      "La culture patriarcale a créé deux cases pour les femmes : la madone (qu'on épouse) et la putain (qu'on désire). Ce syndrome toxique explique pourquoi certains hommes n'arrivent plus à désirer la femme qu'ils aiment, et pourquoi des femmes n'osent pas explorer leur sexualité. La sexothérapeute Myriam déconstruit ce mythe pour redonner sa puissance érotique ET affective au couple.",
    tags: ["syndrome", "désir couple", "patriarcat", "blocage", "psychologie", "déconstruction"],
    triggers: [
      "plus de désir pour ma femme", "je l'aime mais je ne la désire plus",
      "sexualité tiède", "fantasme vs réalité", "honte sexualité féminine",
      "syndrome madonna whore", "blocage désir", "couple sans sexe",
    ],
    therapyDomain: "relation_couple",
    therapyDomains: ["relation_couple", "education_sexuelle"],
  },

  {
    id: "lubrification-pas-automatique",
    type: "video",
    platform: "youtube_short",
    title: "La lubrification, c'est pas automatique",
    url: "https://www.youtube.com/shorts/avVUFbRqUK4",
    duration: "1:28",
    publishedAt: "2025-06-19",
    description:
      "Ne pas lubrifier n'est ni anormal ni une question de performance. Le corps réagit à tout : fatigue, stress, hormones, cycle, contraception. Le lubrifiant n'est pas 'juste pour la ménopause' — c'est pour quand on en a besoin, point. Explication complète du mécanisme de lubrification féminine.",
    tags: ["lubrification", "corps féminin", "normalisation", "stress", "hormones", "cycle"],
    triggers: [
      "pas assez mouillée", "ne lubrifie pas", "sécheresse vaginale",
      "contraception", "stress", "cycle hormonal", "lubrifiant pour qui",
    ],
    therapyDomain: "bien_etre_intime",
    therapyDomains: ["bien_etre_intime", "sante_intime"],
  },

  {
    id: "infidelite-quand-demarre",
    type: "video",
    platform: "youtube_short",
    title: "Quand démarre l'infidélité dans le couple ?",
    url: "https://www.youtube.com/shorts/W7qk8tSdU1I",
    duration: "1:20",
    publishedAt: "2025-06-05",
    description:
      "La thérapeute de couple Myriam explore la frontière entre fidélité et infidélité. Est-ce au premier mensonge ? Au premier baiser ? Quand une connexion émotionnelle se crée ailleurs ? La vraie question : est-ce l'acte en lui-même, ou l'intention qui définit l'infidélité ?",
    tags: ["infidélité", "couple", "limites", "confiance", "trahison", "émotionnel"],
    triggers: [
      "infidélité", "trahison", "il me trompe", "elle me trompe",
      "frontière fidélité", "connexion émotionnelle", "confiance", "mensonge",
      "c'est quoi la tromperie",
    ],
    therapyDomain: "relation_couple",
  },

  {
    id: "exploration-vs-masturbation",
    type: "video",
    platform: "youtube_short",
    title: "Exploration corporelle VS masturbation : quelles différences ?",
    url: "https://www.youtube.com/shorts/67o0Ij9Ldfw",
    duration: "2:20",
    publishedAt: "2025-06-05",
    description:
      "La sexologue Myriam distingue deux approches souvent confondues. L'exploration corporelle : apprendre à se connaître, affiner ses ressentis, repérer ce qui éveille ou ce qui fige. C'est un chemin d'écoute et de conscience. La masturbation est plus orientée vers la stimulation et l'orgasme. Les deux ont leur place.",
    tags: ["exploration", "masturbation", "self-love", "corps", "conscience", "connaissance de soi"],
    triggers: [
      "exploration corporelle", "masturbation", "connaitre son corps",
      "self-love", "plaisir solo", "connaissance de soi", "se toucher",
      "présence à soi",
    ],
    therapyDomain: "self_love",
    therapyDomains: ["self_love", "bien_etre_intime"],
  },

  {
    id: "jalousie-toxique-ou-mignonne",
    type: "video",
    platform: "youtube_short",
    title: "La jalousie dans le couple : toxique ou mignonnerie ?",
    url: "https://www.youtube.com/shorts/eSlqrcQ2dwk",
    duration: "1:25",
    publishedAt: "2025-06-05",
    description:
      "Où se trouve la frontière entre une jalousie 'mignonne' et une jalousie toxique ? La jalousie peut rappeler l'importance de l'autre, mais si elle envahit trop d'espace, elle étouffe la relation. Signe d'amour ou manque de confiance ? La thérapeute Myriam explore cette nuance.",
    tags: ["jalousie", "confiance", "couple", "toxique", "émotion", "attachement"],
    triggers: [
      "jalousie", "possessivité", "manque de confiance", "insécurité",
      "contrôle", "jaloux jalouse", "relation saine", "toxique",
    ],
    therapyDomain: "relation_couple",
  },

  {
    id: "10-raisons-consulter-sexologue",
    type: "video",
    platform: "youtube_short",
    title: "10 raisons de consulter une sexologue",
    url: "https://www.youtube.com/shorts/_lAf6C_ibDQ",
    duration: "0:32",
    publishedAt: "2025-05-02",
    description:
      "La sexologue Myriam présente les 10 motifs les plus courants qui amènent à consulter en sexothérapie. Parler de sexualité n'est plus un tabou, et consulter un sexothérapeute non plus. Se confier à un professionnel, c'est s'offrir la chance de vivre une intimité plus épanouie.",
    tags: ["sexothérapie", "consultation", "motifs", "aide", "sexologue", "thérapie"],
    triggers: [
      "consulter sexologue", "sexothérapie", "j'ai besoin d'aide", "thérapie",
      "problème sexualité", "où commencer", "peur de consulter",
    ],
    therapyDomain: "education_sexuelle",
  },

  {
    id: "poils-ou-pas-poils",
    type: "video",
    platform: "youtube_short",
    title: "Poils ou pas poils… c'est la question du jour",
    url: "https://www.youtube.com/shorts/S9nyy3iOzQk",
    duration: "1:25",
    publishedAt: "2025-05-02",
    description:
      "La sexologue Myriam aborde avec humour la question de la pilosité intime. Team naturel ou team lisse — l'important c'est de se sentir libre de son choix, indépendamment de la mode ou des injonctions. Peu importe ce que dit la mode, fais ce qui te plaît.",
    tags: ["poils", "image corporelle", "liberté", "choix", "injonctions", "body positive"],
    triggers: [
      "poils intimes", "épilation", "image corporelle", "injonctions",
      "pression", "naturel", "libre", "mon corps mon choix",
    ],
    therapyDomain: "self_love",
  },

  {
    id: "ecrans-ou-moments",
    type: "video",
    platform: "youtube_short",
    title: "Les écrans ou les moments ?",
    url: "https://www.youtube.com/shorts/YMEotln5kpY",
    duration: "1:04",
    publishedAt: "2025-02-25",
    description:
      "Dans un monde où les écrans captent chaque seconde d'attention, il est facile d'oublier les petits moments qui comptent vraiment. La thérapeute Myriam interroge notre rapport aux écrans dans le couple : choisissons-nous de vivre pleinement les instants ou de les laisser filer à travers un écran ?",
    tags: ["écrans", "présence", "couple", "connexion", "moments", "attention"],
    triggers: [
      "téléphone au lit", "écrans couple", "pas présent", "distrait",
      "connexion", "moments ensemble", "rituel couple", "distance",
    ],
    therapyDomain: "relation_couple",
  },

  {
    id: "essentiels-escapade-romantique",
    type: "video",
    platform: "youtube_short",
    title: "Mes essentiels sexo pour une escapade romantique",
    url: "https://www.youtube.com/shorts/FBwToH2ttXQ",
    duration: "1:01",
    publishedAt: "2025-02-25",
    description:
      "En amoureux, la trousse de toilette change de mood ! Cosmétiques érotiques, huiles sensuelles, petits indispensables pour pimenter le séjour. La marque partage ses incontournables pour transformer un week-end en véritable escapade sensuelle.",
    tags: ["romantique", "week-end", "essentiels", "cosmétiques", "huile", "sensuel"],
    triggers: [
      "week-end romantique", "escapade", "pimenter", "surprendre", "Saint-Valentin",
      "voyage couple", "moment sensuel", "idées couple",
    ],
    therapyDomain: "epanouissement_amoureux",
    therapyDomains: ["epanouissement_amoureux", "produits_wellbeing"],
  },

  {
    id: "reactions-orgasme-incontrôlables",
    type: "video",
    platform: "youtube_short",
    title: "3 réactions que tu ne gères pas pendant un orgasme",
    url: "https://www.youtube.com/shorts/G77dPJu3Ypc",
    duration: "0:16",
    publishedAt: "2024-12-23",
    description:
      "Quand le plaisir est vraiment intense, on ne contrôle plus grand chose — et c'est ce qui est si bon ! Chaque personne vit l'orgasme à sa façon. La sexologue Myriam partage les 3 réactions involontaires les plus courantes pendant un orgasme.",
    tags: ["orgasme", "réactions", "plaisir", "corps", "involontaire", "normalisation"],
    triggers: [
      "orgasme", "réactions", "normal pendant orgasme", "rires", "larmes",
      "spasmes", "involontaire", "je fais quelque chose de bizarre",
    ],
    therapyDomain: "education_sexuelle",
    therapyDomains: ["education_sexuelle", "bien_etre_intime"],
  },

  {
    id: "huiles-massage-taches-draps",
    type: "video",
    platform: "youtube_short",
    title: "Les huiles de massage YESforLOV, est-ce qu'elles tachent les draps ?",
    url: "https://www.youtube.com/shorts/-TlT002U2cE",
    duration: "0:28",
    publishedAt: "2024-12-23",
    description:
      "La sexologue Myriam répond à la question pratique : les huiles de massage laissent-elles des taches sur les draps ? Tout ce qu'il faut savoir sur les huiles YESforLOV et leurs parfums sensuels.",
    tags: ["huile massage", "pratique", "draps", "conseil", "produit", "massage"],
    triggers: [
      "huile massage", "taches", "draps", "massage sensuel", "massage couple",
      "produit", "conseil pratique",
    ],
    therapyDomain: "produits_wellbeing",
  },

  {
    id: "clitoris-pas-que-plaisir",
    type: "video",
    platform: "youtube_short",
    title: "Le clitoris ne sert pas qu'au plaisir",
    url: "https://www.youtube.com/shorts/F0QOQVUfkdI",
    duration: "0:38",
    publishedAt: "2024-12-12",
    description:
      "Une étude du scientifique Roy Levin révèle que le clitoris sert aussi à la reproduction : lors d'un orgasme, le cerveau provoque des changements génitaux qui favorisent la mobilité des spermatozoïdes. L'acidité vaginale est partiellement neutralisée pour permettre la survie du sperme.",
    tags: ["clitoris", "biologie", "reproduction", "orgasme", "science", "éducation"],
    triggers: [
      "clitoris", "orgasme féminin", "reproduction", "biologie", "science",
      "anatomie", "fait insolite",
    ],
    therapyDomain: "education_sexuelle",
  },

  {
    id: "lubrifiant-pas-seulement-menopause",
    type: "video",
    platform: "youtube_short",
    title: "Le lubrifiant — non, ce n'est pas seulement pour la ménopause",
    url: "https://www.youtube.com/shorts/bCkvLnGLTkQ",
    duration: "0:22",
    publishedAt: "2024-12-12",
    description:
      "La sexologue Myriam démystifie les idées reçues sur le lubrifiant intime. Le lubrifiant peut être un atout pour tout le monde, à tout âge — pour plus de confort, de plaisir, ou simplement découvrir de nouvelles sensations.",
    tags: ["lubrifiant", "idées reçues", "ménopause", "plaisir", "tout âge", "normalisation"],
    triggers: [
      "lubrifiant", "pour qui", "ménopause", "sécheresse", "confort",
      "besoin lubrifiant", "trop jeune pour lubrifiant",
    ],
    therapyDomain: "bien_etre_intime",
    therapyDomains: ["bien_etre_intime", "produits_wellbeing"],
  },

  {
    id: "libido-vs-desir-difference",
    type: "video",
    platform: "youtube_short",
    title: "Quelle est la différence entre la libido et le désir ?",
    url: "https://www.youtube.com/shorts/7yyZqjxiUcc",
    duration: "0:44",
    publishedAt: "2024-11-06",
    description:
      "La libido = l'énergie ou la pulsion sexuelle ressentie dans le corps. Le désir = l'expression de cette libido, dans un cadre relationnel ou en solo. On peut avoir de la libido en solo sans la ressentir avec son partenaire. Cette distinction permet de mieux comprendre son fonctionnement intime.",
    tags: ["libido", "désir", "définition", "éducation", "couple", "solo"],
    triggers: [
      "libido", "désir", "différence", "pulsion", "envie", "pas d'envie",
      "baisse de libido", "libido vs désir",
    ],
    therapyDomain: "education_sexuelle",
    therapyDomains: ["education_sexuelle", "bien_etre_intime"],
  },

  {
    id: "5-choses-ignorees-sexualite",
    type: "video",
    platform: "youtube_short",
    title: "5 choses que tu ignores sur la sexualité",
    url: "https://www.youtube.com/shorts/AaTJWII8-pI",
    duration: "0:59",
    publishedAt: "2024-10-17",
    description:
      "5 faits surprenants sur la sexualité : la hauteur asymétrique des testicules, l'orgasme comme analgésique pendant les règles, les sextoys et la sensibilité clitoridienne, l'impact du cycle hormonal sur la libido féminine, et la lubrification plus lente après la ménopause.",
    tags: ["faits", "insolite", "corps", "règles", "cycle", "ménopause", "sextoy"],
    triggers: [
      "faits insolites", "je ne savais pas", "corps humain", "règles",
      "orgasme douleur", "cycle libido", "sextoy sensibilité",
    ],
    therapyDomain: "education_sexuelle",
  },

  {
    id: "5-langages-amour",
    type: "video",
    platform: "youtube_short",
    title: "Les 5 langages de l'amour",
    url: "https://www.youtube.com/shorts/5fo2ecwpUVU",
    duration: "1:00",
    publishedAt: "2024-10-17",
    description:
      "Gary Chapman : 3 couples sur 4 ne parlent pas le même langage d'amour ! Chaque personne est sensible à un langage : paroles valorisantes, temps de qualité, cadeaux, services rendus, toucher physique. Identifier vos langages permet de mieux aimer et d'être mieux aimé.",
    tags: ["langages amour", "Chapman", "couple", "communication", "toucher", "temps de qualité"],
    triggers: [
      "langages amour", "il ne me comprend pas", "elle ne comprend pas",
      "communication couple", "exprimer amour", "se sentir aimé",
      "pas sur la même longueur d'onde", "incompréhension",
    ],
    therapyDomain: "relation_couple",
    therapyDomains: ["relation_couple", "epanouissement_amoureux"],
  },

  {
    id: "cbd-bien-etre-intime",
    type: "video",
    platform: "youtube_short",
    title: "Le CBD au service de votre bien-être intime et sexuel",
    url: "https://www.youtube.com/shorts/fY-XfsF2508",
    duration: "0:41",
    publishedAt: "2024-10-17",
    description:
      "La sexologue Myriam présente le CBD et son action sur le bien-être intime. Le CBD stimule le système endocannabinoïde, favorable à l'équilibre émotionnel. Efficace contre le stress sexuel, la baisse de libido, les inflammations et douleurs chroniques. Légal et inoffensif.",
    tags: ["CBD", "bien-être", "libido", "stress", "douleur", "naturel"],
    triggers: [
      "CBD", "stress sexuel", "douleur intime", "libido", "anxiété sexuelle",
      "naturel", "bien-être", "inflammation",
    ],
    therapyDomain: "bien_etre_intime",
    therapyDomains: ["bien_etre_intime", "produits_wellbeing"],
  },

  {
    id: "love-bombing-danger",
    type: "video",
    platform: "youtube_short",
    title: "Le Love Bombing : entre tsunami d'émotions et danger",
    url: "https://www.youtube.com/shorts/ZCeI2HguyNQ",
    duration: "0:16",
    publishedAt: "2024-10-15",
    description:
      "Le love bombing est une technique de manipulation : bombardement d'affection très prématuré visant à créer de l'attachement et de la dépendance. Décrit comme un stratagème de pervers narcissiques. Signaux d'alerte : déclarations folles dès le début, cadeaux astronomiques, projections trop rapides, changements brutaux de comportement.",
    tags: ["love bombing", "manipulation", "pervers narcissique", "alerte", "relation toxique"],
    triggers: [
      "love bombing", "manipulation", "trop parfait au début", "trop intense",
      "pervers narcissique", "relation toxique", "emprise", "dépendance",
      "changements brusques",
    ],
    therapyDomain: "epanouissement_amoureux",
    therapyDomains: ["epanouissement_amoureux", "relation_couple"],
  },

  {
    id: "5-tabous-a-briser",
    type: "video",
    platform: "youtube_short",
    title: "5 tabous à briser",
    url: "https://www.youtube.com/shorts/bb-9GABNxmc",
    duration: "0:23",
    publishedAt: "2024-10-08",
    description:
      "La sexualité fait partie intégrante de la vie, mais certains tabous, clichés et commentaires mènent encore la vie dure. En parler librement permet de désacraliser des sujets qui devraient être normalisés quand pratiqués de manière consentie. Information, éducation, dialogue : les clés de la normalisation.",
    tags: ["tabous", "normalisation", "éducation", "dialogue", "libération", "société"],
    triggers: [
      "tabou", "honte", "pas normal", "on en parle pas", "clichés",
      "jugement", "normaliser", "libérer",
    ],
    therapyDomain: "education_sexuelle",
  },

  {
    id: "donner-plaisir-sans-recevoir",
    type: "video",
    platform: "youtube_short",
    title: "Donner du plaisir sans recevoir",
    url: "https://www.youtube.com/shorts/RmHi3F9Ksyg",
    duration: "0:59",
    publishedAt: "2024-10-04",
    description:
      "Le plaisir intime ne se limite pas aux organes génitaux. C'est le cerveau qui orchestre l'envie et l'orgasme. Offrir du plaisir, même sans en recevoir physiquement, peut être tout aussi exaltant. Parfois on reçoit sans donner, parfois on donne sans recevoir — tout cela est normal et enrichit la sexualité.",
    tags: ["altruisme", "donner", "recevoir", "plaisir", "cerveau", "couple", "diversité"],
    triggers: [
      "donner plaisir", "sans recevoir", "unilatéral", "envie de faire plaisir",
      "générosité", "plaisir altruiste", "déséquilibre",
    ],
    therapyDomain: "relation_couple",
    therapyDomains: ["relation_couple", "bien_etre_intime"],
  },

  {
    id: "autopalpation-cancer-sein",
    type: "video",
    platform: "youtube_short",
    title: "Auto-palpation & cancer du sein : comment se dépister soi-même ?",
    url: "https://www.youtube.com/shorts/B-MwM9uGa9Y",
    duration: "0:56",
    publishedAt: "2024-10-02",
    description:
      "La sexologue Myriam partage des techniques d'autopalpation mammaire pour se dépister soi-même. L'auto-palpation peut sauver des vies. À faire chaque mois, quelques jours après les règles.",
    tags: ["cancer sein", "autopalpation", "prévention", "santé féminine", "dépistage"],
    triggers: [
      "cancer sein", "autopalpation", "dépistage", "prévention", "seins",
      "santé féminine", "examen soi-même",
    ],
    therapyDomain: "sante_intime",
  },

  {
    id: "shallowing-pratique-sans-penetration",
    type: "video",
    platform: "youtube_short",
    title: "Le shallowing, nouvelle pratique sexuelle sans pénétration",
    url: "https://www.youtube.com/shorts/rYOhoOxApFg",
    duration: "0:41",
    publishedAt: "2024-06-27",
    description:
      "Le shallowing est une pénétration à l'entrée seule du vagin. L'entrée contient 90% des terminaisons nerveuses vaginales. Très agréable seul·e ou en couple. Idéal pour diversifier les rapports ou pour les personnes avec dyspareunie, endométriose ou vaginisme.",
    tags: ["shallowing", "pratique", "douleur", "vaginisme", "dyspareunie", "endométriose", "diversité"],
    triggers: [
      "shallowing", "pénétration douloureuse", "vaginisme", "endométriose",
      "dyspareunie", "alternative pénétration", "nouvelles pratiques", "douleur",
    ],
    therapyDomain: "bien_etre_intime",
    therapyDomains: ["bien_etre_intime", "education_sexuelle"],
  },

  {
    id: "parfum-intime-hygiene",
    type: "video",
    platform: "youtube_short",
    title: "Parfum intime YESforLOV – l'hygiène réinventée avec sensualité",
    url: "https://www.youtube.com/shorts/7hdQolKYilM",
    duration: "0:43",
    publishedAt: "2025-08-11",
    description:
      "Une brume intime discrète, sensorielle et ultra-fraîche pour rester irrésistible à tout moment. Avant un date, après le sport, entre deux rendez-vous. Un geste bien-être pour le quotidien.",
    tags: ["parfum intime", "fraîcheur", "hygiène", "brume", "sensualité", "quotidien"],
    triggers: [
      "odeur", "fraîcheur intime", "hygiène", "après sport", "date",
      "confiance en soi", "se sentir bien",
    ],
    therapyDomain: "produits_wellbeing",
    therapyDomains: ["produits_wellbeing", "self_love"],
  },

  // ============================================================
  // VIDÉOS LONGUES YOUTUBE
  // ⚠️ Titres à confirmer — récupération partielle (rate limit YouTube)
  // ============================================================

  {
    id: "long-video-1",
    type: "video",
    platform: "youtube_video",
    title: "Vidéo YESforLOV — à compléter",
    url: "https://www.youtube.com/watch?v=dUUXzr_pCbI",
    description: "Contenu à compléter — titre et description non récupérés.",
    tags: ["yesforlov", "sexologie", "bien-être intime"],
    triggers: [],
    therapyDomain: "bien_etre_intime",
  },

  {
    id: "long-video-2",
    type: "video",
    platform: "youtube_video",
    title: "Vidéo YESforLOV — à compléter",
    url: "https://www.youtube.com/watch?v=1IAaF9y-cxE",
    description: "Contenu à compléter — titre et description non récupérés.",
    tags: ["yesforlov", "sexologie", "bien-être intime"],
    triggers: [],
    therapyDomain: "bien_etre_intime",
  },

  {
    id: "long-video-3",
    type: "video",
    platform: "youtube_video",
    title: "Vidéo YESforLOV — à compléter",
    url: "https://www.youtube.com/watch?v=NeeIiHzc9ZM",
    description: "Contenu à compléter — titre et description non récupérés.",
    tags: ["yesforlov", "sexologie", "bien-être intime"],
    triggers: [],
    therapyDomain: "bien_etre_intime",
  },

  {
    id: "long-video-4",
    type: "video",
    platform: "youtube_video",
    title: "Vidéo YESforLOV — à compléter",
    url: "https://www.youtube.com/watch?v=JD8Ln4QOI30",
    description: "Contenu à compléter — titre et description non récupérés.",
    tags: ["yesforlov", "sexologie", "bien-être intime"],
    triggers: [],
    therapyDomain: "bien_etre_intime",
  },

  {
    id: "long-video-5",
    type: "video",
    platform: "youtube_video",
    title: "Vidéo YESforLOV — à compléter",
    url: "https://www.youtube.com/watch?v=BqUb9F9GVN8",
    description: "Contenu à compléter — titre et description non récupérés.",
    tags: ["yesforlov", "sexologie", "bien-être intime"],
    triggers: [],
    therapyDomain: "bien_etre_intime",
  },

  {
    id: "long-video-6",
    type: "video",
    platform: "youtube_video",
    title: "Vidéo YESforLOV — à compléter",
    url: "https://www.youtube.com/watch?v=eKk0f-D05xA",
    description: "Contenu à compléter — titre et description non récupérés.",
    tags: ["yesforlov", "sexologie", "bien-être intime"],
    triggers: [],
    therapyDomain: "bien_etre_intime",
  },

  {
    id: "long-video-7",
    type: "video",
    platform: "youtube_video",
    title: "Vidéo YESforLOV — à compléter",
    url: "https://www.youtube.com/watch?v=ECSoaRGkbvU",
    description: "Contenu à compléter — titre et description non récupérés.",
    tags: ["yesforlov", "sexologie", "bien-être intime"],
    triggers: [],
    therapyDomain: "bien_etre_intime",
  },

  // ============================================================
  // INSTAGRAM REELS
  // ⚠️ Descriptions à compléter — Instagram bloque l'accès automatique
  // Renseigner les titres/descriptions directement depuis l'app
  // ============================================================

  {
    id: "decouverte-corps-masculin",
    type: "video",
    platform: "instagram_reel",
    title: "Découverte du corps masculin",
    url: "https://www.instagram.com/reel/DYUWahVowH-/",
    description:
      "Une courte exploration pour recréer du lien émotionnel avec son partenaire et apprendre à le caresser.",
    tags: ["intimité", "corps", "connexion", "désir", "exploration"],
    triggers: ["distance", "froideur", "plus de désir", "connexion", "intimité", "toucher", "caresser"],
    therapyDomain: "epanouissement_amoureux",
  },
  { id: "reel-DX87GPFoDrD", type: "video", platform: "instagram_reel", title: "Reel Instagram — à compléter", url: "https://www.instagram.com/reel/DX87GPFoDrD/", description: "Contenu à compléter.", tags: ["yesforlov"], triggers: [], therapyDomain: "bien_etre_intime" },
  { id: "reel-DXe6LQfCIJ8", type: "video", platform: "instagram_reel", title: "Reel Instagram — à compléter", url: "https://www.instagram.com/reel/DXe6LQfCIJ8/", description: "Contenu à compléter.", tags: ["yesforlov"], triggers: [], therapyDomain: "bien_etre_intime" },
  { id: "reel-DXKOUBmiMjW", type: "video", platform: "instagram_reel", title: "Reel Instagram — à compléter", url: "https://www.instagram.com/reel/DXKOUBmiMjW/", description: "Contenu à compléter.", tags: ["yesforlov"], triggers: [], therapyDomain: "bien_etre_intime" },
  { id: "reel-DWg7hhaguvK", type: "video", platform: "instagram_reel", title: "Reel Instagram — à compléter", url: "https://www.instagram.com/reel/DWg7hhaguvK/", description: "Contenu à compléter.", tags: ["yesforlov"], triggers: [], therapyDomain: "bien_etre_intime" },
  { id: "reel-DU3mOAMCIH0", type: "video", platform: "instagram_reel", title: "Reel Instagram — à compléter", url: "https://www.instagram.com/reel/DU3mOAMCIH0/", description: "Contenu à compléter.", tags: ["yesforlov"], triggers: [], therapyDomain: "bien_etre_intime" },
  { id: "reel-DUQ4uF2CAtL", type: "video", platform: "instagram_reel", title: "Reel Instagram — à compléter", url: "https://www.instagram.com/reel/DUQ4uF2CAtL/", description: "Contenu à compléter.", tags: ["yesforlov"], triggers: [], therapyDomain: "bien_etre_intime" },
  { id: "reel-DR1zpSFCC10", type: "video", platform: "instagram_reel", title: "Reel Instagram — à compléter", url: "https://www.instagram.com/reel/DR1zpSFCC10/", description: "Contenu à compléter.", tags: ["yesforlov"], triggers: [], therapyDomain: "bien_etre_intime" },
  { id: "reel-DRSSSwmiAhA", type: "video", platform: "instagram_reel", title: "Reel Instagram — à compléter", url: "https://www.instagram.com/reel/DRSSSwmiAhA/", description: "Contenu à compléter.", tags: ["yesforlov"], triggers: [], therapyDomain: "bien_etre_intime" },
  { id: "reel-DQuMroQiIbT", type: "video", platform: "instagram_reel", title: "Reel Instagram — à compléter", url: "https://www.instagram.com/reel/DQuMroQiIbT/", description: "Contenu à compléter.", tags: ["yesforlov"], triggers: [], therapyDomain: "bien_etre_intime" },
  { id: "reel-DQcRZAniFb_", type: "video", platform: "instagram_reel", title: "Reel Instagram — à compléter", url: "https://www.instagram.com/reel/DQcRZAniFb_/", description: "Contenu à compléter.", tags: ["yesforlov"], triggers: [], therapyDomain: "bien_etre_intime" },
  { id: "reel-DPmGF3aCHUE", type: "video", platform: "instagram_reel", title: "Reel Instagram — à compléter", url: "https://www.instagram.com/reel/DPmGF3aCHUE/", description: "Contenu à compléter.", tags: ["yesforlov"], triggers: [], therapyDomain: "bien_etre_intime" },
];

// ============================================================
// HELPERS
// ============================================================

export function getVideosByDomain(domain: VideoTherapyDomain): VideoKnowledge[] {
  return VIDEO_KNOWLEDGE.filter(
    (v) => v.therapyDomain === domain || v.therapyDomains?.includes(domain)
  );
}

export function searchVideosByTrigger(userInput: string): VideoKnowledge[] {
  const input = userInput.toLowerCase();
  return VIDEO_KNOWLEDGE.filter((v) =>
    v.triggers.some((t) => input.includes(t.toLowerCase())) ||
    v.tags.some((t) => input.includes(t.toLowerCase())) ||
    v.title.toLowerCase().includes(input) ||
    v.description.toLowerCase().includes(input)
  );
}

export function getVideosByPlatform(platform: VideoPlatform): VideoKnowledge[] {
  return VIDEO_KNOWLEDGE.filter((v) => v.platform === platform);
}

export function getCompletedVideos(): VideoKnowledge[] {
  return VIDEO_KNOWLEDGE.filter((v) => v.triggers.length > 0);
}

export const VIDEO_STATS = {
  total: VIDEO_KNOWLEDGE.length,
  youtube_shorts: VIDEO_KNOWLEDGE.filter((v) => v.platform === "youtube_short").length,
  youtube_videos: VIDEO_KNOWLEDGE.filter((v) => v.platform === "youtube_video").length,
  instagram_reels: VIDEO_KNOWLEDGE.filter((v) => v.platform === "instagram_reel").length,
  completed: VIDEO_KNOWLEDGE.filter((v) => v.triggers.length > 0).length,
  pending: VIDEO_KNOWLEDGE.filter((v) => v.triggers.length === 0).length,
};
