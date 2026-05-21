// ============================================================
// TYPES
// ============================================================

export type TherapyDomain =
  | "bien_etre_intime"
  | "epanouissement_amoureux"
  | "self_love"
  | "relation_couple";

export type IntensityLevel = "doux" | "modéré" | "profond";

export interface therapyPattern {
  id: string;
  domain: TherapyDomain;
  intensity: IntensityLevel;
  situation: string;
  observation: string;
  explorationQuestions: string[];
  interpretationLogic: string;
  guidance: string;
  affirmations?: string[];
  exercices?: string[];
  signaux_dalerte?: string[];
  ressources?: string[];
}

// ============================================================
// BIEN-ÊTRE INTIME
// ============================================================

export const bienEtreIntimePatterns: therapyPattern[] = [
  {
    id: "bei_001",
    domain: "bien_etre_intime",
    intensity: "doux",
    situation: "Déconnexion du corps et de la sensualité",
    observation:
      "Le corps garde la mémoire des expériences vécues. Une déconnexion sensorielle est une réponse adaptative.",
    explorationQuestions: [
      "Comment décririez-vous votre relation à votre corps ?",
      "Y a-t-il des parties difficiles à habiter ?",
      "Quand avez-vous senti votre corps comme un allié ?",
    ],
    interpretationLogic:
      "Explorer dissociation somatique et honte corporelle.",
    guidance:
      "Reconnexion progressive par des gestes simples et non sexualisés.",
    affirmations: [
      "Mon corps mérite douceur.",
      "Je peux habiter mon corps sans jugement.",
      "Ma sensualité m’appartient.",
    ],
    exercices: [
      "Body scan 5 min",
      "Cartographie des sensations agréables",
      "Miroir de bienveillance",
    ],
    signaux_dalerte: [
      "Dégoût corporel persistant",
      "Dissociation pendant l’intimité",
      "Douleur inexpliquée liée au sexe",
    ],
  },
  {
    id: "bei_002",
    domain: "bien_etre_intime",
    intensity: "modéré",
    situation: "Difficulté avec le désir sexuel",
    observation: "Le désir fluctue selon de nombreux facteurs.",
    explorationQuestions: [
      "Le désir a-t-il changé récemment ?",
      "Existe-t-il encore des fantasmes ?",
      "Comment vivez-vous ce décalage ?",
    ],
    interpretationLogic:
      "Explorer facteurs biologiques, psychologiques et relationnels.",
    guidance:
      "Le désir peut être réactif plutôt que spontané.",
    affirmations: [
      "Mon désir est valide.",
      "Je n’ai pas de norme à suivre.",
      "Je peux explorer sans pression.",
    ],
    exercices: ["Journal des déclencheurs", "Carte du désir", "Sensate focus"],
  },
];

// ============================================================
// ÉPANOUISSEMENT AMOUREUX
// ============================================================

export const epanouissementAmoureuxPatterns: therapyPattern[] = [
  {
    id: "epa_001",
    domain: "epanouissement_amoureux",
    intensity: "doux",
    situation: "Peur de l’amour",
    observation: "La peur protège une blessure passée.",
    explorationQuestions: [
      "Que se passerait-il si vous aimiez pleinement ?",
      "Quels modèles d’amour avez-vous connus ?",
      "L’amour a-t-il déjà fait souffrir ?",
    ],
    interpretationLogic:
      "Analyse des styles d’attachement.",
    guidance:
      "La sécurité relationnelle se construit progressivement.",
    affirmations: [
      "Je mérite un amour sûr.",
      "Je peux être vulnérable.",
      "Je peux aimer sans me perdre.",
    ],
    exercices: [
      "Lettre à la peur",
      "Timeline relationnelle",
      "Petit acte de vulnérabilité",
    ],
  },
];

// ============================================================
// SELF LOVE
// ============================================================

export const selfLovePatterns: therapyPattern[] = [
  {
    id: "sl_001",
    domain: "self_love",
    intensity: "doux",
    situation: "Auto-critique excessive",
    observation: "La voix critique n’est pas une vérité.",
    explorationQuestions: [
      "Comment parleriez-vous à un ami ?",
      "D’où vient cette voix ?",
      "Où vous sentez-vous en sécurité ?",
    ],
    interpretationLogic:
      "Identifier origine des schémas internes.",
    guidance:
      "Développer la compassion envers soi.",
    affirmations: [
      "Je mérite la bienveillance.",
      "Je suis assez.",
      "Je suis humain·e.",
    ],
    exercices: [
      "Lettre de compassion",
      "Reformulation pensée critique",
      "Gratitude quotidienne",
    ],
  },
];

// ============================================================
// RELATION COUPLE
// ============================================================

export const relationCouplePatterns: therapyPattern[] = [
  {
    id: "rc_001",
    domain: "relation_couple",
    intensity: "doux",
    situation: "Distance émotionnelle",
    observation: "La distance est une protection émotionnelle.",
    explorationQuestions: [
      "Depuis quand ?",
      "Progressif ou soudain ?",
      "Qui se détache ?",
    ],
    interpretationLogic:
      "Stress + non-dits + routine.",
    guidance:
      "Recréer du lien par micro-rituels.",
    exercices: [
      "Check-in quotidien",
      "Questions de connexion",
      "Rituel du soir",
    ],
  },
];

// ============================================================
// EXPORT GLOBAL
// ============================================================

export const therapyPatterns: therapyPattern[] = [
  ...bienEtreIntimePatterns,
  ...epanouissementAmoureuxPatterns,
  ...selfLovePatterns,
  ...relationCouplePatterns,
];

// ============================================================
// HELPERS
// ============================================================

export function getPatternsByDomain(domain: TherapyDomain): therapyPattern[] {
  return therapyPatterns.filter((p) => p.domain === domain);
}

export function getPatternsByIntensity(
  intensity: IntensityLevel
): therapyPattern[] {
  return therapyPatterns.filter((p) => p.intensity === intensity);
}

export function getPatternById(id: string): therapyPattern | undefined {
  return therapyPatterns.find((p) => p.id === id);
}

export function searchPatterns(keyword: string): therapyPattern[] {
  const kw = keyword.toLowerCase();
  return therapyPatterns.filter(
    (p) =>
      p.situation.toLowerCase().includes(kw) ||
      p.observation.toLowerCase().includes(kw) ||
      p.guidance.toLowerCase().includes(kw)
  );
}