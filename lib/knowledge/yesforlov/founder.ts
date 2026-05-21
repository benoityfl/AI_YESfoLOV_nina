export const founderProfile = {
  identity: {
    firstName: "Christian",
    lastName: "Palix",
    fullName: "Christian Palix",
    role: "Fondateur & Créateur",
    brand: "YESforLOV",
    nationality: "Français",
    tagline: "Hédoniste amoureux, artiste des mots, créateur de la première marque de cosmétiques du plaisir française.",
  },

  credo: {
    short: "Offrir le meilleur à tous les couples.",
    full: "Offrir le meilleur à tous les couples et redonner à tout à chacun le goût du beau, la qualité et l'émotion véritable dans les rapports amoureux.",
  },

  personality: [
    "perfectionniste",
    "hédoniste",
    "sensible",
    "artiste des mots",
    "visionnaire",
    "raffiné",
    "à l'écoute",
  ],

  background: {
    previousVentures: [
      { sector: "sport", type: "entreprise fondée" },
      { sector: "tourisme", type: "entreprise fondée" },
      { sector: "distribution", type: "entreprise fondée" },
    ],
    pivot:
      "C'est presque par hasard que Christian découvre l'industrie du parfum et de la cosmétique, parti du constat que les produits existants étaient soit pharmaceutiques et froids, soit performatifs et raccoleurs — aucun ne magnifiait l'amour tel qu'il le concevait.",
    support:
      "Soutenu par sa garde rapprochée et ses amis de la parfumerie, il lance YESforLOV.",
  },

  brandOrigin: {
    year: null,
    launchEvent: "Soirée de lancement sur les Champs-Élysées",
    catalystMoment:
      "Un mois après la création, Christian reçoit un mail : « Vous avez sauvé mon couple. » Ce message reste le symbole fondateur de l'aventure YESforLOV.",
    memorableHighlights: [
      "Soirée de lancement sur les Champs-Élysées",
      "Crème Câline pour fesses présentée au Festival de Cannes",
    ],
    challenges: [
      "Difficulté à trouver une banque partenaire au démarrage, l'univers de la sexualité étant encore tabou dans le monde financier.",
    ],
  },

  philosophy: {
    hedonism:
      "Un hédoniste amoureux est quelqu'un qui porte l'amour à son paroxysme. Pour lui, la routine n'existe pas — il fait de sa vie une quête constante dans la réinvention de la relation amoureuse, avec un idéal de réciprocité et toute la puissance de l'amour que l'on voit dans ses yeux.",
    againstPerformance:
      "Face à l'inflation orgique et au règne de l'orgasme obligatoire, Christian préfère un idéal de réciprocité hédoniste. La satisfaction intime n'est pas fonction du nombre d'orgasmes, mais liée au désir de l'autre, aux liens de complicité, à l'intensité des sentiments éprouvés.",
    loveDefinition:
      "L'amour peut être un baiser volé posé sur la commissure des lèvres. C'est la rencontre d'un regard, la courbe d'une hanche que l'on va caresser.",
    playfulness: "« Et si on jouait à faire l'amour ? »",
  },

  audience: {
    description:
      "YESforLOV ne s'adresse pas aux élites sexuelles. Tous les corps sont égaux — infiniment désirables et précieux, de la toilette du matin aux ébats des nuits coquines.",
    targets: [
      {
        group: "femmes",
        note: "Leaders dans la tendance contemporaine à l'érotisation",
      },
      {
        group: "hommes",
        note: "Assumant la nécessité du partage du plaisir, souhaitant mettre en avant leur goût du raffinement",
      },
      {
        group: "tous les couples",
        note: "Quelles que soient leurs formes, quels que soient ceux qui aiment",
      },
    ],
    inclusivity:
      "Quelque forme qu'emprunte l'amour, quels que soient ceux qui aiment, ce sentiment unique se doit d'être magnifié, porté à son paroxysme.",
  },

  inspiration: {
    sources:
      "Réveiller la magie de l'acte amoureux. Inciter les personnes à vivre l'amour d'une façon plus intense, plus ludique, plus récréative avec plus de sensualité.",
    references: [
      "Les rondes bacchanales",
      "La danse de Pan",
      "Les fêtes érotiques des solstices d'été",
      "Le souvenir d'une comptine qui se termine par « embrassez qui vous voudrez »",
    ],
  },

  vision: {
    wildestDream:
      "Révéler tout ce que les femmes et les hommes ont toujours voulu savoir sur leur corps et sur celui de leurs partenaires. Célébrer le plaisir éternel de la danse amoureuse. Réveiller la magie, l'instinct, la joie sauvage.",
    ambition:
      "Incarner la référence ultime d'un confort et d'un plaisir généreux, sans partage, soucieux de préserver la liberté de chacun. De l'intimité à la sexualité, du soin à l'érotisme.",
    values: [
      "vérité",
      "confiance",
      "respect de l'intégrité",
      "liberté individuelle",
      "partage absolu",
      "singularité",
    ],
  },

  brandDNA: {
    positioning: "Première marque de cosmétiques du plaisir française",
    aesthetic: ["chic", "glamour", "made in France"],
    promise:
      "Une exigence de qualité sans pareille, des ingrédients riches et naturels, un conditionnement innovant et raffiné.",
    poeticUniverse:
      "Une marque qui sublime l'amour dans sa préparation fébrile, ses jeux partagés, ses instants secrets et rares.",
  },

  quotes: [
    {
      id: "hedonist",
      text: "Un hédoniste amoureux est quelqu'un qui porte l'amour à son paroxysme.",
      context: "Définition personnelle de l'hédonisme amoureux",
    },
    {
      id: "play",
      text: "Et si on jouait à faire l'amour ?",
      context: "Invitation à la légèreté et à la complicité",
    },
    {
      id: "catalyst",
      text: "Vous avez sauvé mon couple.",
      context: "Mail reçu un mois après la création — moment fondateur de YESforLOV",
      author: "Un client anonyme",
    },
    {
      id: "closing",
      text: "YESforLOV, c'est la marque la plus intime puisqu'elle est au chevet de votre intimité et de tout ce qu'il y a de plus précieux.",
      context: "Message de remerciement aux clients",
    },
    {
      id: "bodies",
      text: "Tous les corps sont égaux. Infiniment désirables et précieux.",
      context: "Sur l'inclusivité de la marque",
    },
  ],
} as const;

export type FounderProfile = typeof founderProfile;
