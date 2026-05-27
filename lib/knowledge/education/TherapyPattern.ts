// ============================================================
// therapyPattern.ts — Corpus complet YESforLOV
// ~50 patterns couvrant tous les domaines sexologiques
// Inspiré de la pratique clinique en sexologie et thérapie
// de couple (Masters & Johnson, Kaplan, Sue Johnson, Perel)
// ============================================================

export type TherapyDomain =
  | "bien_etre_intime"
  | "epanouissement_amoureux"
  | "self_love"
  | "relation_couple"
  | "desir_plaisir"
  | "communication_intime"
  | "corps_sensualite"
  | "trauma_et_guerison"
  | "identite_sexuelle"
  | "transitions_de_vie";

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
      "Le corps garde la mémoire des expériences vécues. Une déconnexion sensorielle est souvent une réponse adaptative — le système nerveux qui se protège.",
    explorationQuestions: [
      "Comment décririez-vous votre relation à votre corps en ce moment ?",
      "Y a-t-il des parties de votre corps qui vous semblent difficiles à habiter ?",
      "Quand avez-vous senti votre corps comme un allié pour la dernière fois ?",
    ],
    interpretationLogic:
      "Explorer la dissociation somatique légère, la honte corporelle diffuse, et les messages culturels intégrés sur le corps.",
    guidance:
      "Reconnexion progressive par des gestes simples, doux et non sexualisés. L'objectif est d'abord de sentir — pas de désirer.",
    affirmations: [
      "Mon corps mérite douceur et attention.",
      "Je peux habiter mon corps sans jugement.",
      "Ma sensualité m'appartient entièrement.",
    ],
    exercices: [
      "Body scan de 5 minutes le matin, sans objectif",
      "Cartographie des sensations agréables (chaleur, texture, pression)",
      "Rituel de soin corporel conscient (crème, huile) comme acte d'amour envers soi",
    ],
    signaux_dalerte: [
      "Dégoût corporel persistant et intense",
      "Dissociation systématique pendant l'intimité",
      "Douleur inexpliquée liée au toucher ou à l'intimité",
    ],
  },
  {
    id: "bei_002",
    domain: "bien_etre_intime",
    intensity: "modéré",
    situation: "Difficulté avec le désir sexuel",
    observation:
      "Le désir fluctue selon de nombreux facteurs — hormonaux, émotionnels, relationnels. Le désir réactif (qui s'éveille en réponse) est aussi valide que le désir spontané.",
    explorationQuestions: [
      "Le désir a-t-il changé récemment ou c'est une constante depuis longtemps ?",
      "Existe-t-il encore des contextes, des fantasmes, des moments où une étincelle apparaît ?",
      "Comment vivez-vous ce décalage — avec vous-même ou avec votre partenaire ?",
    ],
    interpretationLogic:
      "Explorer facteurs biologiques (hormones, médicaments), psychologiques (stress, image de soi) et relationnels (sécurité, connexion émotionnelle).",
    guidance:
      "Le désir peut être réactif plutôt que spontané. Créer les conditions de l'émergence plutôt que d'attendre l'étincelle.",
    affirmations: [
      "Mon désir a sa propre intelligence et son propre rythme.",
      "Je n'ai pas de norme à suivre.",
      "Je peux explorer sans pression ni performance.",
    ],
    exercices: [
      "Journal des déclencheurs : noter ce qui crée un frémissement, même léger",
      "Carte du désir : identifier les conditions (heure, humeur, contexte) favorables",
      "Sensate focus (exploration sensorielle sans objectif sexuel)",
    ],
  },
  {
    id: "bei_003",
    domain: "bien_etre_intime",
    intensity: "profond",
    situation: "Douleur pendant les rapports sexuels",
    observation:
      "La douleur intime (vaginisme, dyspareunie) n'est jamais normale et ne doit jamais être surmontée par la force. C'est le corps qui communique — pas qui résiste.",
    explorationQuestions: [
      "La douleur est-elle présente depuis le début de votre vie sexuelle ou elle est apparue à un moment précis ?",
      "Avez-vous déjà pu en parler à un médecin ou un gynécologue ?",
      "Comment votre partenaire vit-il ou elle cette situation ?",
    ],
    interpretationLogic:
      "Distinguer vaginisme primaire/secondaire, causes organiques (sécheresse, infections) et composante psychologique. Référer vers médecin ET sexologue.",
    guidance:
      "La douleur mérite d'être entendue et examinée par un professionnel de santé. Un accompagnement combiné (médical + sexologique) est souvent nécessaire.",
    affirmations: [
      "Mon corps n'est pas défaillant — il m'envoie un signal.",
      "Je mérite une sexualité sans douleur.",
      "Demander de l'aide est un acte de courage.",
    ],
    exercices: [
      "Exercices de respiration et de relâchement du plancher pelvien",
      "Dilatateurs progressifs (sous guidance médicale uniquement)",
      "Exploration sensorielle non pénétrative pour restaurer le plaisir",
    ],
    signaux_dalerte: [
      "Douleur intense ou augmentation progressive → consultation médicale urgente",
      "Antécédents de trauma sexuel non traité",
      "Évitement total de toute intimité physique",
    ],
    ressources: [
      "Gynécologue spécialisé en santé sexuelle",
      "Kinésithérapeute en rééducation périnéale",
      "Sexologue clinicien",
    ],
  },
  {
    id: "bei_004",
    domain: "bien_etre_intime",
    intensity: "doux",
    situation: "Rapport à la nudité et à l'exposition du corps",
    observation:
      "La difficulté à être nu·e devant l'autre — ou devant soi-même — reflète souvent des messages intégrés sur ce que le corps 'doit' être.",
    explorationQuestions: [
      "Comment vous sentez-vous dans votre corps quand vous êtes seul·e ?",
      "Est-ce que la gêne vient du regard de l'autre, ou est-elle aussi présente quand vous êtes seul·e ?",
      "D'où pensez-vous que viennent ces messages sur votre corps ?",
    ],
    interpretationLogic:
      "Honte corporelle liée aux normes culturelles, expériences de moquerie ou commentaires négatifs. Différencier honte de soi vs honte du regard.",
    guidance:
      "La nudité commence par une relation douce à son propre corps, hors du regard de l'autre. Se voir avant d'être vu.",
    affirmations: [
      "Mon corps n'a pas à mériter le plaisir.",
      "Je suis plus que mon apparence.",
      "Je peux apprendre à me voir avec douceur.",
    ],
    exercices: [
      "Miroir de bienveillance : s'observer sans jugement, trouver une chose que l'on aime",
      "Mouvement conscient (danse seul·e, yoga) pour habiter le corps autrement",
    ],
  },
];

// ============================================================
// DÉSIR & PLAISIR
// ============================================================

export const desirPlaisirPatterns: therapyPattern[] = [
  {
    id: "dp_001",
    domain: "desir_plaisir",
    intensity: "doux",
    situation: "Ne pas savoir ce qui fait plaisir",
    observation:
      "Ne pas connaître son propre plaisir est fréquent — surtout quand on a longtemps prioritisé le plaisir de l'autre ou performé la sexualité.",
    explorationQuestions: [
      "Avez-vous déjà pris du temps pour explorer votre propre plaisir, sans objectif ?",
      "Qu'est-ce qui vous fait du bien dans votre corps — même hors sexualité ?",
      "Y a-t-il des sensations que vous aimez particulièrement ?",
    ],
    interpretationLogic:
      "Déficit d'exploration solitaire, honte de la masturbation, sexualité construite autour du plaisir de l'autre.",
    guidance:
      "Le plaisir s'explore dans la curiosité et la sécurité, sans objectif de résultat. La connaissance de soi est le premier cadeau qu'on peut s'offrir.",
    affirmations: [
      "Je mérite de connaître mon propre plaisir.",
      "Explorer mon corps est un acte d'amour envers moi.",
      "Il n'y a pas de 'bonne' façon de ressentir.",
    ],
    exercices: [
      "Exploration sensorielle solo : textures, températures, pressions",
      "Journal du plaisir : noter ce qui crée du bien-être, même léger",
    ],
  },
  {
    id: "dp_002",
    domain: "desir_plaisir",
    intensity: "modéré",
    situation: "Difficulté à atteindre l'orgasme",
    observation:
      "L'orgasme est souvent bloqué par la pression de l'atteindre. C'est un paradoxe fréquent : plus on le cherche, plus il s'éloigne.",
    explorationQuestions: [
      "Est-ce une difficulté présente depuis toujours, ou elle est apparue dans un contexte particulier ?",
      "Avez-vous des moments où vous ressentez du plaisir, même sans orgasme ?",
      "Est-ce que l'orgasme est possible en solo mais pas avec un partenaire ?",
    ],
    interpretationLogic:
      "Distinguer anorgasmie primaire, situationnelle, et secondaire. Explorer anxiété de performance, croyances, et connaissances anatomiques.",
    guidance:
      "Déplacer l'objectif de l'orgasme vers la présence et la sensation. L'orgasme suit souvent l'abandon du contrôle — pas son renforcement.",
    affirmations: [
      "Mon plaisir n'a pas besoin d'un point culminant pour être valide.",
      "Je peux apprendre à relâcher le contrôle.",
      "Mon corps sait comment ressentir — je peux lui faire confiance.",
    ],
    exercices: [
      "Sensate focus : plaisir sans objectif orgasmique pendant 2 semaines",
      "Respiration consciente pendant l'intimité pour rester présent·e",
      "Explorer la stimulation clitoridienne directe avec un vibromasseur",
    ],
  },
  {
    id: "dp_003",
    domain: "desir_plaisir",
    intensity: "doux",
    situation: "Honte autour des fantasmes",
    observation:
      "Les fantasmes sont des espaces de liberté psychique. Avoir un fantasme ne signifie pas vouloir le réaliser. La honte autour des fantasmes coupe l'accès à une partie de l'énergie sexuelle.",
    explorationQuestions: [
      "Est-ce que vos pensées pendant l'intimité vous semblent 'normales' ou 'acceptables' ?",
      "D'où vient, selon vous, l'idée que certaines pensées seraient interdites ?",
      "Ces pensées créent-elles du plaisir, de la culpabilité, ou les deux ?",
    ],
    interpretationLogic:
      "Honte liée à des messages religieux, culturels ou familiaux. Différencier fantasme (espace mental) de désir de réalisation.",
    guidance:
      "Un fantasme est une activité psychique, pas une intention. L'espace mental peut être libre sans que les actes le soient.",
    affirmations: [
      "Mes pensées ne définissent pas qui je suis.",
      "Je peux explorer mon imaginaire sans culpabilité.",
      "Ma vie intérieure m'appartient.",
    ],
  },
  {
    id: "dp_004",
    domain: "desir_plaisir",
    intensity: "modéré",
    situation: "Désir de nouveauté ou d'exploration dans la sexualité",
    observation:
      "L'envie d'explorer de nouvelles pratiques ou dynamiques est saine. Ce qui compte est l'espace de dialogue et de consentement mutuel pour l'aborder.",
    explorationQuestions: [
      "Qu'est-ce qui vous attire dans cette exploration ?",
      "Avez-vous pu en parler à votre partenaire ?",
      "Qu'est-ce que vous craignez si vous exprimez cette envie ?",
    ],
    interpretationLogic:
      "Explorer motivation (curiosité, routine, besoin de connexion), et la dynamique relationnelle autour de l'expression du désir.",
    guidance:
      "Exprimer une envie d'exploration est un acte de confiance envers l'autre. Commencer par la conversation, pas par la demande.",
    affirmations: [
      "Ma curiosité sexuelle est une force.",
      "Je peux exprimer mes désirs avec douceur.",
      "Le dialogue sur le désir est déjà une forme d'intimité.",
    ],
    exercices: [
      "Carte du désir : chaque partenaire note ses envies, puis on compare",
      "Jeu du 'oui / peut-être / non' pour explorer les zones de confort",
    ],
  },
  {
    id: "dp_005",
    domain: "desir_plaisir",
    intensity: "profond",
    situation: "Usage excessif de pornographie et impact sur la sexualité réelle",
    observation:
      "Un usage intensif de pornographie peut reconditionner les attentes, créer des difficultés d'excitation avec un partenaire réel, et générer une honte importante.",
    explorationQuestions: [
      "Comment décririez-vous votre rapport à la pornographie ?",
      "Avez-vous remarqué un impact sur votre excitation ou votre présence pendant l'intimité ?",
      "Y a-t-il un sentiment de honte ou de perte de contrôle associé ?",
    ],
    interpretationLogic:
      "Distinguer usage récréatif, usage compensatoire (solitude, anxiété) et usage compulsif. Explorer l'impact sur la sexualité relationnelle.",
    guidance:
      "Une pause consciente et un retour progressif à la sensorialité avec un partenaire réel peut permettre de 'recalibrer' l'excitation.",
    affirmations: [
      "Je peux reprendre le contrôle de mes habitudes.",
      "Mon corps peut apprendre à ressentir autrement.",
    ],
    signaux_dalerte: [
      "Impossibilité d'arrêter malgré la volonté",
      "Impact majeur sur la relation ou le travail",
      "Sexualité avec partenaire devenue impossible",
    ],
    ressources: [
      "Psychologue ou sexologue spécialisé en comportements compulsifs",
    ],
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
    situation: "Peur de l'amour et de la vulnérabilité",
    observation:
      "La peur de l'amour protège souvent une blessure passée. L'attachement évitant se construit comme une armure — utile autrefois, coûteuse aujourd'hui.",
    explorationQuestions: [
      "Que se passerait-il, selon vous, si vous aimiez pleinement ?",
      "Quels modèles d'amour avez-vous connus dans votre enfance ?",
      "L'amour vous a-t-il déjà coûté quelque chose d'important ?",
    ],
    interpretationLogic:
      "Analyse du style d'attachement (évitant probable). Explorer les blessures relationnelles fondatrices.",
    guidance:
      "La sécurité relationnelle se construit progressivement, à travers des expériences répétées de fiabilité. La vulnérabilité ne s'apprend pas en une fois.",
    affirmations: [
      "Je mérite un amour qui me rende plus libre, pas moins.",
      "Je peux être vulnérable et rester entier·ère.",
      "Aimer ne signifie pas me perdre.",
    ],
    exercices: [
      "Lettre à la peur : écrire ce que la peur protège",
      "Timeline relationnelle : identifier les moments clés qui ont construit la méfiance",
      "Un petit acte de vulnérabilité par semaine",
    ],
  },
  {
    id: "epa_002",
    domain: "epanouissement_amoureux",
    intensity: "modéré",
    situation: "Dépendance affective",
    observation:
      "La dépendance affective n'est pas un défaut de caractère — c'est un attachement anxieux qui cherche constamment la réassurance que l'on est aimé et que l'autre ne partira pas.",
    explorationQuestions: [
      "Comment vous sentez-vous quand votre partenaire n'est pas disponible ?",
      "Avez-vous tendance à vous oublier pour maintenir la relation ?",
      "Qu'est-ce qui se passerait si la relation prenait fin ?",
    ],
    interpretationLogic:
      "Attachement anxieux. Explorer la peur de l'abandon, la faible estime de soi relationnelle, et les stratégies de contrôle.",
    guidance:
      "Reconstruire un sentiment de sécurité intérieure — indépendant de la présence de l'autre — est le travail central.",
    affirmations: [
      "Je suis entier·ère avec ou sans l'autre.",
      "Ma valeur ne dépend pas d'être aimé·e.",
      "Je peux m'aimer moi-même.",
    ],
    exercices: [
      "Liste de ce qui me nourrit en dehors de la relation",
      "Observer les moments de 'craving' affectif sans agir immédiatement",
      "Thérapie individuelle recommandée pour ce travail en profondeur",
    ],
    signaux_dalerte: [
      "Tolérance à des comportements blessants pour éviter la rupture",
      "Perte totale d'identité dans la relation",
      "Pensées obsessionnelles autour du partenaire",
    ],
  },
  {
    id: "epa_003",
    domain: "epanouissement_amoureux",
    intensity: "doux",
    situation: "Sortir d'une rupture et se reconstruire",
    observation:
      "Après une rupture, le deuil amoureux est réel et suit souvent des phases : déni, colère, marchandage, tristesse, acceptation. Il n'est pas linéaire.",
    explorationQuestions: [
      "Où en êtes-vous dans ce processus ?",
      "Qu'est-ce qui vous manque le plus — la personne, ou ce que la relation représentait ?",
      "Qu'avez-vous appris de vous-même dans cette relation ?",
    ],
    interpretationLogic:
      "Évaluer la phase de deuil, distinguer deuil de la personne vs deuil de l'idéal. Explorer identité post-relation.",
    guidance:
      "La reconstruction ne commence pas quand on a 'tourné la page' — elle commence quand on arrête de se reprocher de ne pas avoir tourné la page.",
    affirmations: [
      "Je peux traverser cette douleur sans en être défini·e.",
      "Cette fin m'apprend quelque chose sur ce dont j'ai besoin.",
      "Je me reconstruis à mon rythme.",
    ],
    exercices: [
      "Lettre non envoyée : dire tout ce qu'on n'a pas pu dire",
      "Lister ce que la relation m'a appris de moi",
      "Réintroduire une activité qui était 'à soi' avant la relation",
    ],
  },
  {
    id: "epa_004",
    domain: "epanouissement_amoureux",
    intensity: "profond",
    situation: "Répétition de schémas relationnels douloureux",
    observation:
      "Reproduire des relations similaires — avec des personnes indisponibles, contrôlantes ou blessantes — est souvent inconscient. Le cerveau cherche ce qui lui est familier, même quand c'est douloureux.",
    explorationQuestions: [
      "Voyez-vous des ressemblances entre vos relations ?",
      "Qu'est-ce qui vous attire initialement chez ces personnes ?",
      "Ces dynamiques vous rappellent-elles quelque chose de votre histoire familiale ?",
    ],
    interpretationLogic:
      "Compulsion de répétition. Explorer les modèles d'attachement primaires et leur reproduction dans les relations adultes.",
    guidance:
      "Reconnaître un schéma est déjà le début de la liberté. Ce travail mérite souvent un accompagnement thérapeutique en profondeur.",
    affirmations: [
      "Ce qui m'est familier n'est pas forcément ce qui est bon pour moi.",
      "Je peux apprendre à choisir différemment.",
    ],
    signaux_dalerte: [
      "Relations avec violence psychologique ou physique répétée",
      "Incapacité à quitter des relations manifestement toxiques",
    ],
    ressources: ["Thérapie psychanalytique ou d'attachement recommandée"],
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
    observation:
      "La voix critique intérieure n'est pas une vérité — c'est souvent la voix intégrée de figures d'autorité du passé. Elle cherche à protéger, mais elle blesse.",
    explorationQuestions: [
      "Comment parleriez-vous à un·e ami·e qui vivrait ce que vous vivez ?",
      "D'où vient cette voix, selon vous — qui vous a appris à vous parler ainsi ?",
      "Y a-t-il des contextes où cette voix est plus silencieuse ?",
    ],
    interpretationLogic:
      "Identifier l'origine des schémas de critique interne (parentaux, scolaires, relationnels). Travailler la compassion comme antidote.",
    guidance:
      "La compassion envers soi n'est pas de la complaisance — c'est une condition pour grandir sans se détruire.",
    affirmations: [
      "Je mérite la même bienveillance que j'offre aux autres.",
      "Je suis assez, exactement comme je suis.",
      "Je suis humain·e — l'imperfection fait partie de moi.",
    ],
    exercices: [
      "Lettre de compassion envers soi : s'écrire comme à un·e ami·e cher·e",
      "Reformulation : transformer une pensée critique en observation neutre",
      "Gratitude quotidienne envers soi (une chose concrète)",
    ],
  },
  {
    id: "sl_002",
    domain: "self_love",
    intensity: "modéré",
    situation: "Sentiment de ne pas mériter le plaisir ou l'amour",
    observation:
      "L'indignité ressentie face au plaisir ou à l'amour est souvent un message appris — pas une vérité. Elle peut venir d'expériences de rejet, de honte, ou de messages religieux ou familiaux.",
    explorationQuestions: [
      "Quand avez-vous commencé à croire que vous ne méritez pas ça ?",
      "Y a-t-il des conditions dans votre esprit à remplir avant de mériter du bien ?",
      "Quelqu'un vous a-t-il dit — explicitement ou par ses actes — que vous ne méritiez pas ?",
    ],
    interpretationLogic:
      "Honte intégrée, croyances limitantes sur la valeur personnelle. Explorer origine et mécanismes de renforcement.",
    guidance:
      "Mériter le plaisir et l'amour n'est pas quelque chose à gagner — c'est quelque chose à reconnaître comme déjà vrai.",
    affirmations: [
      "Je mérite d'être aimé·e sans avoir à le gagner.",
      "Mon plaisir n'a pas à être justifié.",
      "Je suis digne d'attention et de soin.",
    ],
    exercices: [
      "Identifier et écrire 3 croyances sur ce que l'on 'doit' être pour mériter",
      "Les questionner une par une : d'où viennent-elles ? Sont-elles vraies ?",
    ],
  },
  {
    id: "sl_003",
    domain: "self_love",
    intensity: "doux",
    situation: "Comparaison avec les autres et sentiment d'inadéquation",
    observation:
      "Se comparer constamment aux autres — physiquement, sexuellement, relationnellement — est une source de souffrance qui ne dit rien de la réalité.",
    explorationQuestions: [
      "À quoi ou à qui vous comparez-vous le plus souvent ?",
      "Qu'est-ce que ces comparaisons vous font ressentir ?",
      "Qu'est-ce qui se passerait si vous arrêtiez de vous mesurer ?",
    ],
    interpretationLogic:
      "Impact des réseaux sociaux, normes culturelles, insécurité relationnelle. Explorer la fonction de la comparaison (protection ou punition).",
    guidance:
      "La comparaison est rarement informative — elle est presque toujours douloureuse. Ce que les autres montrent n'est pas leur réalité.",
    affirmations: [
      "Mon chemin est unique et ne peut pas être comparé.",
      "Je me libère de la norme.",
    ],
  },
  {
    id: "sl_004",
    domain: "self_love",
    intensity: "profond",
    situation: "Honte sexuelle profonde et intégrée",
    observation:
      "La honte sexuelle profonde — souvent d'origine religieuse, familiale ou liée à des expériences de violation — peut paralyser toute la vie intime.",
    explorationQuestions: [
      "Quand avez-vous commencé à ressentir que votre sexualité était quelque chose de 'mauvais' ou 'honteux' ?",
      "Y a-t-il des messages précis que vous avez reçus sur la sexualité ?",
      "Cette honte est-elle liée à une expérience particulière ?",
    ],
    interpretationLogic:
      "Honte intégrée, possible trauma moral ou religieux, possible expérience d'abus. Aller avec extrême douceur. Référer si nécessaire.",
    guidance:
      "La honte sexuelle est apprise — pas innée. Elle se dénoue dans un espace sécurisé, progressivement, et souvent avec un accompagnement professionnel.",
    affirmations: [
      "Ma sexualité ne me définit pas moralement.",
      "Je peux me réconcilier avec cette partie de moi.",
    ],
    signaux_dalerte: [
      "Honte liée à un trauma non traité",
      "Impact majeur sur la qualité de vie",
    ],
    ressources: ["Psychothérapie spécialisée en sexualité et honte"],
  },
];

// ============================================================
// RELATION DE COUPLE
// ============================================================

export const relationCouplePatterns: therapyPattern[] = [
  {
    id: "rc_001",
    domain: "relation_couple",
    intensity: "doux",
    situation: "Distance émotionnelle dans le couple",
    observation:
      "La distance émotionnelle est rarement le signe d'un désamour — c'est souvent le résultat du stress, des non-dits accumulés et de la routine qui érode les rituels de connexion.",
    explorationQuestions: [
      "Cette distance s'est-elle installée progressivement ou après un événement précis ?",
      "Qui se détache, ou est-ce mutuel ?",
      "Qu'est-ce qui manque le plus — la complicité, la tendresse, la conversation, l'intimité physique ?",
    ],
    interpretationLogic:
      "Explorer stress externe vs dynamique interne, non-dits, évitement du conflit, et perte des rituels de connexion.",
    guidance:
      "Recréer du lien par des micro-rituels quotidiens — sans pression de retour immédiat.",
    exercices: [
      "Check-in émotionnel quotidien de 10 minutes (comment tu vas vraiment ?)",
      "Questions de connexion : 'Qu'est-ce qui t'a touché aujourd'hui ?'",
      "Rituel du soir : un moment de présence partagée sans écran",
    ],
  },
  {
    id: "rc_002",
    domain: "relation_couple",
    intensity: "modéré",
    situation: "Conflits répétitifs non résolus",
    observation:
      "Les couples se disputent souvent sur des sujets différents (argent, temps, enfants) mais le conflit profond est presque toujours le même : 'Est-ce que tu me vois ? Est-ce que j'ai de la valeur pour toi ?'",
    explorationQuestions: [
      "Sur quoi portent vos conflits en général ?",
      "Qu'est-ce que vous cherchez vraiment quand vous vous disputez ?",
      "Y a-t-il un conflit central qui revient sous différentes formes ?",
    ],
    interpretationLogic:
      "Identifier le conflit de surface vs le besoin sous-jacent (reconnaissance, sécurité, autonomie). Explorer les styles de communication sous stress.",
    guidance:
      "Derrière chaque conflit, il y a un besoin non exprimé. Apprendre à nommer le besoin plutôt que l'attaque.",
    exercices: [
      "Protocole de désescalade : pause de 20 min quand la tension monte",
      "Reformulation des reproches en besoins : 'Tu ne m'écoutes jamais' → 'J'ai besoin de me sentir entendu·e'",
      "Identifier le pattern du conflit (qui attaque, qui se ferme)",
    ],
  },
  {
    id: "rc_003",
    domain: "relation_couple",
    intensity: "modéré",
    situation: "Désir asymétrique dans le couple",
    observation:
      "Avoir des désirs décalés est l'une des situations les plus fréquentes en sexologie de couple. Ce n'est ni un rejet ni un désamour — c'est une réalité biologique et émotionnelle.",
    explorationQuestions: [
      "Depuis combien de temps ce décalage existe-t-il ?",
      "Comment chacun vit-il cette asymétrie — culpabilité, frustration, résignation ?",
      "Y a-t-il des contextes où le désir se rapproche entre vous ?",
    ],
    interpretationLogic:
      "Explorer qui est le 'haute libido' et qui est le 'basse libido', la dynamique de demande/refus, et les significations que chacun donne au refus.",
    guidance:
      "Le partenaire qui refuse ne rejette pas l'autre — il exprime un état intérieur. Trouver un langage commun autour du désir, sans culpabilisation.",
    exercices: [
      "Conversations sur le désir : qu'est-ce qui nous mettrait dans le même état ?",
      "Explorer d'autres formes d'intimité physique non sexuelles",
      "Séances de sensate focus pour réduire la pression",
    ],
  },
  {
    id: "rc_004",
    domain: "relation_couple",
    intensity: "profond",
    situation: "Reconstruction après une infidélité",
    observation:
      "La trahison brise la confiance — qui est la fondation de toute intimité. Se reconstruire est possible, mais demande du temps, de la cohérence et souvent un accompagnement professionnel.",
    explorationQuestions: [
      "Où en êtes-vous dans ce processus — choc, colère, tentative de reconstruction ?",
      "L'autre a-t-il ou elle pris la pleine responsabilité ?",
      "Qu'est-ce qui vous ferait sentir que la confiance peut revenir ?",
    ],
    interpretationLogic:
      "Évaluer le stade du processus, la sincérité du remords, et la motivation des deux partenaires. La reconstruction n'est possible que si les deux sont engagés.",
    guidance:
      "La confiance ne revient pas par une décision — elle revient par des actes cohérents répétés dans le temps. Et parfois, elle ne revient pas — c'est une réponse aussi légitime.",
    signaux_dalerte: [
      "Comportement trompeur qui continue",
      "Partenaire qui minimise ou retourne la responsabilité",
      "Violence psychologique sous couvert de reconstruction",
    ],
    ressources: ["Thérapie de couple spécialisée en infidélité"],
  },
  {
    id: "rc_005",
    domain: "relation_couple",
    intensity: "doux",
    situation: "Perte de la complicité et de l'amitié dans le couple",
    observation:
      "Les couples qui durent ont souvent un fond de complicité et d'amitié profonde. Quand cela s'érode, la relation devient une cohabitation.",
    explorationQuestions: [
      "Qu'est-ce qui vous faisait rire ensemble avant ?",
      "Avez-vous encore des moments de légèreté et de jeu ?",
      "Qu'est-ce que vous aimez chez votre partenaire — aujourd'hui, maintenant ?",
    ],
    interpretationLogic:
      "Erosion de la complicité par la routine, les responsabilités, le stress. La relation a besoin d'espace pour le jeu et la légèreté.",
    guidance:
      "Réintroduire le jeu, la légèreté et la curiosité envers l'autre — pas seulement la gestion du quotidien.",
    exercices: [
      "Date night mensuel avec une activité nouvelle pour les deux",
      "Questions de curiosité : 'Qu'est-ce que tu rêves de faire que tu n'as jamais fait ?'",
      "Rituel de gratitude mutuelle hebdomadaire",
    ],
  },
  {
    id: "rc_006",
    domain: "relation_couple",
    intensity: "modéré",
    situation: "Communication bloquée autour de l'intimité sexuelle",
    observation:
      "Parler de sexualité avec son partenaire est souvent plus difficile que les actes eux-mêmes. La peur du jugement ou de blesser crée un silence qui érode l'intimité.",
    explorationQuestions: [
      "Avez-vous déjà essayé d'aborder ce sujet ensemble ?",
      "Qu'est-ce que vous craignez que l'autre pense si vous exprimez vos désirs ou vos limites ?",
      "Y a-t-il quelque chose que vous aimeriez que votre partenaire sache sur votre sexualité ?",
    ],
    interpretationLogic:
      "Blocage de communication sur la sexualité lié à la honte, la peur du rejet ou du conflit, et le manque de langage partagé.",
    guidance:
      "Commencer par de petites phrases hors du moment intime — 'j'aimerais qu'on parle de ce qui nous fait du bien'. La conversation précède le changement.",
    exercices: [
      "Lettre d'expression : écrire ce qu'on n'ose pas dire à voix haute, puis décider si on partage",
      "Questions de désir en couple : chacun note 3 envies, on compare",
    ],
  },
];

// ============================================================
// COMMUNICATION INTIME
// ============================================================

export const communicationIntimePatterns: therapyPattern[] = [
  {
    id: "ci_001",
    domain: "communication_intime",
    intensity: "doux",
    situation: "Difficulté à exprimer ses besoins",
    observation:
      "Ne pas pouvoir exprimer ses besoins vient souvent d'une croyance profonde : 'mes besoins dérangent', 'si j'exprime, je vais perdre l'autre', 'je dois mériter avant de demander'.",
    explorationQuestions: [
      "Qu'est-ce qui vous retient d'exprimer ce dont vous avez besoin ?",
      "A-t-on répondu à vos besoins dans votre histoire ?",
      "Qu'est-ce qui se passerait si vous demandiez directement ?",
    ],
    interpretationLogic:
      "Explorer la peur du rejet, la honte du besoin, et les modèles d'expression des besoins dans la famille d'origine.",
    guidance:
      "Un besoin exprimé est une opportunité de connexion donnée à l'autre. Commencer par de petits besoins pour construire la confiance.",
    affirmations: [
      "Mes besoins sont légitimes.",
      "Demander n'est pas imposer.",
      "Je peux exprimer sans exiger.",
    ],
    exercices: [
      "Identifier 3 besoins non exprimés dans la relation",
      "Pratiquer la formulation : 'J'ai besoin de...' plutôt que 'Tu ne fais jamais...'",
    ],
  },
  {
    id: "ci_002",
    domain: "communication_intime",
    intensity: "modéré",
    situation: "Difficulté à poser des limites dans l'intimité",
    observation:
      "Poser une limite est un acte de respect envers soi et envers l'autre. La difficulté à dire non vient souvent de la peur de décevoir ou de la confusion entre refus et rejet.",
    explorationQuestions: [
      "Vous est-il déjà arrivé d'accepter quelque chose que vous ne vouliez pas pour éviter un conflit ?",
      "Comment réagissez-vous intérieurement quand vous devez dire non ?",
      "Comment votre partenaire réagit-il ou elle quand vous exprimez une limite ?",
    ],
    interpretationLogic:
      "Explorer la peur de décevoir, la confusion entre refus et rejet, et la dynamique de pouvoir dans la relation.",
    guidance:
      "Un 'non' clair et doux est une forme de soin — envers soi et envers la relation. Un partenaire sain accueille les limites.",
    affirmations: [
      "Dire non protège ce que nous construisons ensemble.",
      "Mes limites ne sont pas un rejet.",
      "Je peux me protéger et rester ouvert·e.",
    ],
  },
  {
    id: "ci_003",
    domain: "communication_intime",
    intensity: "doux",
    situation: "Ne pas savoir comment initier l'intimité",
    observation:
      "L'initiation est souvent chargée de peur du rejet. Quand l'un initie toujours et l'autre répond, une dynamique de demandeur/refuseur peut s'installer et créer une tension.",
    explorationQuestions: [
      "Comment l'intimité s'initie-t-elle généralement entre vous deux ?",
      "Qu'est-ce que vous ressentez quand vous initiez — ou quand vous ne le faites pas ?",
      "Y a-t-il une façon d'être abordé·e qui vous touche plus que d'autres ?",
    ],
    interpretationLogic:
      "Explorer la dynamique d'initiation, la peur du rejet, et les langages de l'amour physique respectifs.",
    guidance:
      "L'initiation peut être verbale, sensorielle, playful. Trouver les codes qui fonctionnent pour les deux ensemble.",
    exercices: [
      "Conversation sur les rituels d'initiation : qu'est-ce qui ouvre vers l'autre ?",
      "Alterner l'initiation pour équilibrer la dynamique",
    ],
  },
];

// ============================================================
// CORPS & SENSUALITÉ
// ============================================================

export const corpsSensualitePatterns: therapyPattern[] = [
  {
    id: "cs_001",
    domain: "corps_sensualite",
    intensity: "doux",
    situation: "Difficulté à être présent·e pendant l'intimité",
    observation:
      "L'esprit qui 'part' pendant l'intimité — pensées parasites, auto-observation, liste mentale — est très fréquent. C'est souvent de l'anxiété de performance ou une difficulté à s'abandonner.",
    explorationQuestions: [
      "Où va votre esprit pendant l'intimité ?",
      "Est-ce une présence difficile depuis toujours ou c'est récent ?",
      "Y a-t-il des moments ou des contextes où vous êtes plus présent·e ?",
    ],
    interpretationLogic:
      "Spectatoring (se regarder de l'extérieur), anxiété de performance, dissociation légère. Explorer ce qui empêche l'abandon.",
    guidance:
      "Ramener l'attention aux sensations physiques — respiration, toucher, chaleur — plutôt qu'aux pensées. La présence se pratique.",
    exercices: [
      "Respiration consciente pendant l'intimité : ancrer dans le corps",
      "Focus sensoriel : choisir une sensation et rester avec elle",
      "Pratique de pleine conscience hors intimité pour renforcer la présence",
    ],
  },
  {
    id: "cs_002",
    domain: "corps_sensualite",
    intensity: "modéré",
    situation: "Impact de la ménopause ou des changements hormonaux sur la sexualité",
    observation:
      "La ménopause transforme la sexualité — elle ne la termine pas. La baisse des œstrogènes peut entraîner sécheresse, inconfort et baisse du désir. Ces symptômes sont adressables.",
    explorationQuestions: [
      "Quels changements avez-vous remarqués dans votre corps et votre désir ?",
      "Avez-vous pu en parler avec un médecin ?",
      "Comment votre partenaire vit-il ou elle ces changements ?",
    ],
    interpretationLogic:
      "Distinguer symptômes physiques (traçables médicalement) et impact psychologique (redéfinition de l'identité sexuelle). Les deux méritent attention.",
    guidance:
      "La sexualité après la ménopause peut être profondément satisfaisante — elle demande parfois de nouvelles approches : plus de temps, plus de lubrification, plus de communication.",
    affirmations: [
      "Mon corps change — ma sexualité peut s'adapter et s'enrichir.",
      "Je ne suis pas définie par mon âge ou mes hormones.",
    ],
    ressources: [
      "Gynécologue pour évaluation hormonale",
      "Lubrifiant à base d'eau ou d'huile pour le confort",
    ],
  },
  {
    id: "cs_003",
    domain: "corps_sensualite",
    intensity: "doux",
    situation: "Sexualité après une grossesse ou en période post-partum",
    observation:
      "Après la naissance, la sexualité traverse une mutation profonde pour les deux partenaires. Le corps, les hormones, le manque de sommeil et le nouveau rôle parentral réorganisent tout.",
    explorationQuestions: [
      "Comment vous sentez-vous dans votre corps depuis la naissance ?",
      "Est-ce la sexualité qui manque, ou c'est plutôt le temps, l'énergie, la connexion ?",
      "Comment vivez-vous cette période avec votre partenaire ?",
    ],
    interpretationLogic:
      "Impact hormonal (prolactine élève, œstrogènes bas), épuisement, nouvelle identité parentale, possible baby blues. Normaliser avant tout.",
    guidance:
      "Cette période est une transition — pas un état permanent. La tendresse et la connexion peuvent précéder le retour du désir sexuel.",
    affirmations: [
      "Mon corps a accompli quelque chose d'extraordinaire.",
      "Je peux prendre le temps dont j'ai besoin.",
      "Le désir reviendra à son rythme.",
    ],
  },
  {
    id: "cs_004",
    domain: "corps_sensualite",
    intensity: "modéré",
    situation: "Difficulté érectile et anxiété de performance",
    observation:
      "Les difficultés érectiles ponctuelles touchent la quasi-totalité des hommes. L'anxiété de performance est souvent la cause principale — elle crée exactement les conditions qui empêchent l'érection.",
    explorationQuestions: [
      "Ces difficultés sont-elles présentes dans tous les contextes, ou situationnelles ?",
      "Qu'est-ce qui se passe dans votre tête à ce moment-là ?",
      "Comment votre partenaire réagit-il ou elle ?",
    ],
    interpretationLogic:
      "Distinguer cause organique (consulter médecin si systématique) et cause psychologique (anxiété, performance). L'anxiété de performance est la cause #1.",
    guidance:
      "Ralentir, se reconnecter à la sensorialité plutôt qu'au résultat. L'érection suit souvent l'abandon de l'objectif érectile — pas sa poursuite.",
    affirmations: [
      "Mon plaisir ne dépend pas d'une performance.",
      "Je peux offrir de la connexion et du plaisir de mille façons.",
    ],
    exercices: [
      "Retirer temporairement la pénétration comme objectif (sensate focus)",
      "Communication ouverte avec le partenaire sur ce qui se passe",
    ],
    signaux_dalerte: [
      "Difficultés systématiques → consultation médicale pour exclure cause vasculaire",
    ],
  },
];

// ============================================================
// TRAUMA & GUÉRISON
// ============================================================

export const traumaGuerisonPatterns: therapyPattern[] = [
  {
    id: "tg_001",
    domain: "trauma_et_guerison",
    intensity: "doux",
    situation: "Histoire de honte sexuelle héritée (familiale ou religieuse)",
    observation:
      "La honte sexuelle transmise culturellement ou familialement peut opérer silencieusement — sans qu'on sache d'où elle vient. Elle n'est pas une vérité sur soi.",
    explorationQuestions: [
      "Quels messages avez-vous reçus sur la sexualité dans votre famille ou votre éducation ?",
      "Y a-t-il des aspects de votre sexualité qui vous semblent 'interdits' ou 'honteux' ?",
      "Ces messages vous semblent-ils vrais aujourd'hui ?",
    ],
    interpretationLogic:
      "Honte intégrée d'origine culturelle/religieuse. Explorer la transmission et distinguer valeurs choisies vs valeurs héritées.",
    guidance:
      "On peut respecter son histoire sans en être prisonnier·ère. Choisir ses valeurs sexuelles en adulte est possible.",
    affirmations: [
      "Je peux faire la distinction entre ce qu'on m'a appris et ce que je crois.",
      "Ma sexualité m'appartient.",
    ],
  },
  {
    id: "tg_002",
    domain: "trauma_et_guerison",
    intensity: "profond",
    situation: "Expérience passée d'agression ou d'abus sexuel",
    observation:
      "Les expériences traumatiques laissent une empreinte dans le corps qui peut se réactiver lors de l'intimité — dissociation, figement, flashbacks. Ce n'est pas une faiblesse.",
    explorationQuestions: [
      "Souhaitez-vous parler de ce que vous avez vécu, à votre rythme ?",
      "Avez-vous déjà eu un espace pour en parler — avec un thérapeute ou une personne de confiance ?",
      "Y a-t-il des déclencheurs dans l'intimité que vous avez identifiés ?",
    ],
    interpretationLogic:
      "Trauma sexuel. Aller avec une extrême douceur. Ne pas explorer sans que la personne soit prête. Référer vers professionnel spécialisé.",
    guidance:
      "Ce que vous portez mérite un espace thérapeutique spécialisé. Je suis là pour vous accompagner avec douceur, et vous encourager vers un soutien à la hauteur de ce que vous vivez.",
    affirmations: [
      "Ce qui vous est arrivé n'est pas votre faute.",
      "Vous méritez de vous sentir en sécurité dans votre corps.",
      "La guérison est possible, à votre rythme.",
    ],
    signaux_dalerte: [
      "Trauma récent non traité → référer en priorité",
      "Dissociation intense → soutien spécialisé urgent",
      "Idéation suicidaire → intervention de crise",
    ],
    ressources: [
      "Psychologue ou psychothérapeute spécialisé en trauma",
      "EMDR ou thérapie somatique pour le trauma",
      "Groupes de parole pour survivant·es",
    ],
  },
  {
    id: "tg_003",
    domain: "trauma_et_guerison",
    intensity: "modéré",
    situation: "Difficultés d'intimité après une relation toxique ou abusive",
    observation:
      "Après une relation toxique, la méfiance s'installe dans le corps. Se laisser toucher, s'abandonner, faire confiance — tout ce qui semblait naturel peut devenir difficile.",
    explorationQuestions: [
      "Qu'est-ce qui est difficile dans l'intimité depuis cette relation ?",
      "Y a-t-il des comportements de votre partenaire actuel·le qui déclenchent de l'anxiété ?",
      "Qu'est-ce qui vous aide à vous sentir en sécurité ?",
    ],
    interpretationLogic:
      "Hypervigilance relationnelle post-relation abusive. Distinguer réponse traumatique vs problème de relation actuelle.",
    guidance:
      "Le système nerveux a appris à se protéger. Il ne sait pas encore que le danger est passé. La sécurité se reconstruit lentement, par des expériences répétées de fiabilité.",
    exercices: [
      "Identifier les déclencheurs et les communiquer au partenaire actuel",
      "Protocole de sécurité : geste ou mot qui signifie 'pause, j'ai besoin de me recentrer'",
    ],
  },
];

// ============================================================
// IDENTITÉ SEXUELLE
// ============================================================

export const identiteSexuellePatterns: therapyPattern[] = [
  {
    id: "is_001",
    domain: "identite_sexuelle",
    intensity: "doux",
    situation: "Questionnement sur l'orientation sexuelle",
    observation:
      "Questionner son orientation sexuelle à tout âge est normal et légitime. Il n'y a pas de calendrier pour se connaître.",
    explorationQuestions: [
      "Depuis combien de temps ces questions sont-elles présentes pour vous ?",
      "Avez-vous un espace sûr pour explorer ces questions ?",
      "Comment vous sentez-vous avec ce questionnement — curieux·se, anxieux·se, soulagé·e ?",
    ],
    interpretationLogic:
      "Exploration identitaire. Accueillir sans étiqueter prématurément. Créer un espace de liberté plutôt que de résolution.",
    guidance:
      "Se connaître prend du temps. L'identité sexuelle n'est pas une case à cocher — c'est un territoire à explorer avec curiosité.",
    affirmations: [
      "Je peux prendre le temps qu'il me faut.",
      "Mes attirances sont valides, quelles qu'elles soient.",
      "Je n'ai pas à me définir avant d'être prêt·e.",
    ],
  },
  {
    id: "is_002",
    domain: "identite_sexuelle",
    intensity: "modéré",
    situation: "Honte liée à l'orientation ou à l'identité de genre",
    observation:
      "La honte intégrée autour de l'orientation ou de l'identité de genre vient d'un environnement qui n'a pas su offrir de validation. Elle n'est pas une vérité — c'est un héritage.",
    explorationQuestions: [
      "Dans quels contextes cette honte se manifeste-t-elle le plus ?",
      "Y a-t-il des personnes dans votre vie qui vous acceptent tel·le que vous êtes ?",
      "Qu'est-ce que vous aimeriez que les gens comprennent de vous ?",
    ],
    interpretationLogic:
      "Honte intégrée (internalized homophobia/transphobia). Explorer ressources de soutien, coming out progressif si désiré.",
    guidance:
      "La honte se dissout dans la visibilité et la connexion avec des personnes qui nous voient. Vous n'avez pas à traverser ça seul·e.",
    affirmations: [
      "Je mérite d'être vu·e et aimé·e tel·le que je suis.",
      "Mon identité n'est pas un problème à résoudre.",
    ],
    ressources: [
      "Communautés LGBTQ+ locales ou en ligne",
      "Thérapeute affirmatif LGBTQ+",
    ],
  },
  {
    id: "is_003",
    domain: "identite_sexuelle",
    intensity: "doux",
    situation: "Naviguer une relation non-conventionnelle (polyamour, relation ouverte)",
    observation:
      "Les structures relationnelles non conventionnelles nécessitent souvent plus de communication et de clarté émotionnelle — pas moins de profondeur.",
    explorationQuestions: [
      "Qu'est-ce qui vous a attiré vers ce type de relation ?",
      "Quelles sont les difficultés que vous rencontrez ?",
      "Y a-t-il un accord clair entre toutes les personnes impliquées ?",
    ],
    interpretationLogic:
      "Explorer motivations (curiosité, philosophie, évitement) et dynamiques émotionnelles (jalousie, sécurité, communication).",
    guidance:
      "Toute structure relationnelle peut être saine si elle est choisie librement, communiquée clairement, et revisitée régulièrement.",
  },
];

// ============================================================
// TRANSITIONS DE VIE & SEXUALITÉ
// ============================================================

export const transitionsViePatterns: therapyPattern[] = [
  {
    id: "tv_001",
    domain: "transitions_de_vie",
    intensity: "doux",
    situation: "Impact du stress professionnel sur la sexualité",
    observation:
      "Le travail envahit souvent l'espace intime. Le corps épuisé ne peut pas simultanément être en mode survie et en mode connexion.",
    explorationQuestions: [
      "Comment votre rapport à l'intimité a-t-il changé depuis que le stress s'est installé ?",
      "Y a-t-il des moments de la journée ou de la semaine où vous décompressez vraiment ?",
      "Est-ce que l'intimité est une ressource pour vous ou une charge de plus ?",
    ],
    interpretationLogic:
      "Impact du cortisol chronique sur le désir et la disponibilité émotionnelle. Explorer la frontière travail/intimité.",
    guidance:
      "Créer une transition consciente entre le monde du travail et l'espace intime — un rituel de décompression physique ou émotionnel.",
    exercices: [
      "Rituel de transition : 15 minutes de décompression avant le temps intime",
      "Communiquer sur son état : 'Je suis épuisé·e ce soir — pas pour la sexualité, mais j'ai besoin de connexion'",
    ],
  },
  {
    id: "tv_002",
    domain: "transitions_de_vie",
    intensity: "modéré",
    situation: "Sexualité après une maladie grave ou un traitement médical",
    observation:
      "Une maladie grave ou son traitement (cancer, chimiothérapie, chirurgie) transforme le rapport au corps et à la sexualité de façon profonde — et souvent peu anticipée.",
    explorationQuestions: [
      "Comment votre relation à votre corps a-t-elle changé ?",
      "Avez-vous pu parler de la sexualité avec votre équipe médicale ?",
      "Comment votre partenaire vit-il ou elle cette période ?",
    ],
    interpretationLogic:
      "Impact médical direct (fatigue, douleur, modifications corporelles) + impact psychologique (identité, mortalité, image de soi).",
    guidance:
      "La sexualité après la maladie se réinvente. Elle peut prendre de nouvelles formes — plus douces, plus lentes, plus conscientes.",
    affirmations: [
      "Mon corps a traversé quelque chose d'immense — il mérite douceur.",
      "L'intimité peut se réinventer avec moi.",
    ],
    ressources: [
      "Sexologue spécialisé en oncosexologie",
      "Groupes de soutien pour patient·es et partenaires",
    ],
  },
  {
    id: "tv_003",
    domain: "transitions_de_vie",
    intensity: "doux",
    situation: "Retrouver une vie intime après une longue période de célibat",
    observation:
      "Après une longue période seul·e, l'idée de retrouver une intimité avec quelqu'un peut sembler étrange, effrayante ou excitante — ou les trois à la fois.",
    explorationQuestions: [
      "Qu'est-ce qui vous attire et qu'est-ce qui vous inquiète dans cette perspective ?",
      "Avez-vous changé dans votre rapport à l'intimité pendant cette période ?",
      "Qu'est-ce que vous portez comme nouvelles connaissances sur vous-même ?",
    ],
    interpretationLogic:
      "Anxiété de réintégration, peur du jugement, nouvelles attentes après une période de croissance personnelle.",
    guidance:
      "Une longue période seul·e est aussi une période de connaissance de soi. Ce que vous portez maintenant enrichit ce qui peut venir.",
    affirmations: [
      "Je reviens à l'intimité avec de nouvelles ressources.",
      "Je peux aller à mon rythme.",
      "Ce que j'ai appris de moi est précieux.",
    ],
  },
];

// ============================================================
// EXPORT GLOBAL
// ============================================================

export const therapyPatterns: therapyPattern[] = [
  ...bienEtreIntimePatterns,
  ...desirPlaisirPatterns,
  ...epanouissementAmoureuxPatterns,
  ...selfLovePatterns,
  ...relationCouplePatterns,
  ...communicationIntimePatterns,
  ...corpsSensualitePatterns,
  ...traumaGuerisonPatterns,
  ...identiteSexuellePatterns,
  ...transitionsViePatterns,
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
      p.guidance.toLowerCase().includes(kw) ||
      p.explorationQuestions.some((q) => q.toLowerCase().includes(kw))
  );
}

export function getPatternsByDomainAndIntensity(
  domain: TherapyDomain,
  intensity: IntensityLevel
): therapyPattern[] {
  return therapyPatterns.filter(
    (p) => p.domain === domain && p.intensity === intensity
  );
}

// Retourne les patterns avec signaux d'alerte pour un message donné
export function getAlertPatterns(message: string): therapyPattern[] {
  return searchPatterns(message).filter(
    (p) => p.signaux_dalerte && p.signaux_dalerte.length > 0
  );
}
