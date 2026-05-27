export type KnowledgeEntry = {
  topic: string;
  keywords: string[];
  content: string;
  tone: "normalize" | "educate" | "empower";
};

export const sexKnowledge: KnowledgeEntry[] = [

  // ── DÉSIR ──────────────────────────────────────────────────
  {
    topic: "désir",
    keywords: ["désir", "envie", "libido", "attrait", "manque d'envie", "plus envie"],
    content:
      "Le désir fluctue naturellement tout au long d'une relation. Il est profondément influencé par le stress, la fatigue, la qualité du sommeil et la connexion émotionnelle avec l'autre. Ce n'est pas une défaillance — c'est une information sur l'état intérieur. Le désir réactif (qui s'éveille en réponse à une stimulation) est aussi valide que le désir spontané.",
    tone: "normalize",
  },

  // ── LIBIDO ─────────────────────────────────────────────────
  {
    topic: "libido",
    keywords: ["libido", "pulsion", "appétit sexuel", "baisse de libido", "plus de désir", "sexuelle"],
    content:
      "La libido n'est pas un interrupteur fixe. Elle est modulée par les hormones, les émotions, le contexte de vie, les médicaments (antidépresseurs, contraception hormonale) et même la météo. Des périodes de basse libido sont normales et ne signifient pas que quelque chose est cassé. La libido se cultive — elle répond à l'attention, la sécurité et la curiosité.",
    tone: "normalize",
  },

  // ── STRESS & CORPS ─────────────────────────────────────────
  {
    topic: "stress",
    keywords: ["stress", "anxiété", "fatigue", "épuisement", "pression", "surmenage", "burnout"],
    content:
      "Le stress active le système nerveux sympathique (mode survie), ce qui réduit la disponibilité corporelle et émotionnelle. Le corps priorise la vigilance sur le plaisir. Le cortisol chronique abaisse directement la testostérone et l'ocytocine — les hormones du désir et du lien. Ce n'est pas un manque de volonté — c'est de la biologie.",
    tone: "educate",
  },

  // ── CONNEXION COUPLE ───────────────────────────────────────
  {
    topic: "distance couple",
    keywords: ["distance", "éloignement", "déconnexion", "on se parle plus", "routine", "perd contact", "froid", "plus proches"],
    content:
      "Une sensation de distance dans un couple n'est généralement pas un manque d'amour, mais souvent un manque de rituel de connexion. La vie quotidienne érode les espaces de présence partagée. Réintroduire de la douceur consciente — un contact visuel soutenu, une question sincère, un toucher sans demande — peut suffire à rouvrir le canal émotionnel.",
    tone: "normalize",
  },

  // ── COMMUNICATION ──────────────────────────────────────────
  {
    topic: "communication",
    keywords: ["communiquer", "parler", "dire", "exprimer", "besoins", "difficile à dire", "ose pas", "comment dire"],
    content:
      "Parler de ses désirs ou de ses limites est souvent plus difficile que l'acte lui-même. La vulnérabilité crée une intimité plus profonde que la performance. Commencer par de petites phrases — 'j'aimerais…', 'j'aime quand…', 'j'ai besoin de…' — ouvre souvent des espaces insoupçonnés. La communication sur l'intimité s'apprend et se pratique, comme une langue.",
    tone: "empower",
  },

  // ── PLAISIR ────────────────────────────────────────────────
  {
    topic: "plaisir",
    keywords: ["plaisir", "jouissance", "orgasme", "satisfaction", "ressentir", "profiter", "s'abandonner"],
    content:
      "Le plaisir est un droit, pas une récompense. Il est souvent conditionné par l'état mental autant que physique. La qualité d'attention — à soi, à l'autre, au moment — joue un rôle bien plus grand que la technique. Le plaisir se cultive dans la sécurité, la présence et la permission de recevoir.",
    tone: "empower",
  },

  // ── CORPS & IMAGE DE SOI ───────────────────────────────────
  {
    topic: "corps",
    keywords: ["corps", "image de soi", "confiance", "se sentir bien", "honte", "à l'aise", "nu", "physique", "apparence"],
    content:
      "Le rapport au corps est central dans l'intimité. Les injonctions sociales sur l'apparence peuvent créer une distanciation de soi qui nuit à la présence. Cultiver une relation douce à son propre corps — hors de tout regard — est souvent le premier chemin vers plus de confiance intime. La sensualité commence dans la permission de ressentir, pas dans la conformité à une norme.",
    tone: "empower",
  },

  // ── INTIMITÉ ───────────────────────────────────────────────
  {
    topic: "intimité",
    keywords: ["intimité", "proche", "fusion", "tendresse", "douceur", "caresse", "toucher", "lien"],
    content:
      "L'intimité ne commence pas au lit. Elle se construit dans les micro-moments : un regard soutenu, un toucher qui ne demande rien, une écoute sans jugement. Le sensoriel et l'émotionnel sont indissociables. L'intimité profonde nécessite de la sécurité — se sentir vu, accepté, et libre de ne pas performer.",
    tone: "educate",
  },

  // ── ROUTINE & RENOUVEAU ────────────────────────────────────
  {
    topic: "routine",
    keywords: ["routine", "monotonie", "ennui", "pareil", "toujours la même chose", "plus de surprise", "habitude"],
    content:
      "La routine n'est pas l'ennemi de l'intimité — c'est l'absence de conscience qui l'est. Réintroduire de la présence dans un geste familier le transforme. La nouveauté peut être dans l'attention portée, pas nécessairement dans l'acte. La curiosité envers l'autre — même après des années — est le vrai renouveau.",
    tone: "normalize",
  },

  // ── ANATOMIE ─────────────────────────────────────────────
  {
    topic: "anatomie",
    keywords: ["point g", "clitoris", "érogène", "zones", "anatomie", "sensations", "corps réagit", "orgasme clitoridien"],
    content:
      "La cartographie du plaisir est propre à chaque personne. Les zones érogènes ne sont pas universelles — elles se découvrent dans un espace de sécurité et de curiosité. Le clitoris est un organe complexe dont la majorité est interne. Environ 70% des femmes n'atteignent pas l'orgasme par la pénétration seule — c'est anatomique, pas un dysfonctionnement.",
    tone: "educate",
  },

  // ── DÉSIR ASYNCHRONE ───────────────────────────────────────
  {
    topic: "désir asynchrone",
    keywords: ["pas en même temps", "l'un veut pas", "l'autre veut", "différence d'envie", "refus", "rejette", "décalage"],
    content:
      "Avoir des désirs décalés dans un couple est extrêmement courant. Ce n'est ni un rejet ni un désamour — c'est une réalité biologique et émotionnelle. L'enjeu est de trouver un langage commun autour du désir, sans culpabilisation. Le partenaire qui refuse ne rejette pas l'autre — il exprime un état intérieur. Le partenaire qui désire n'est pas excessif — il exprime un besoin de connexion.",
    tone: "normalize",
  },

  // ── POST-NAISSANCE ─────────────────────────────────────────
  {
    topic: "post-naissance",
    keywords: ["bébé", "naissance", "post-partum", "après accouchement", "plus de désir depuis enfant", "allaitement", "nouveau rôle"],
    content:
      "Après une naissance, la sexualité des deux partenaires traverse souvent une mutation profonde. Le corps, les hormones, le manque de sommeil et le nouveau rôle parentral réorganisent totalement les priorités. L'allaitement élève la prolactine et abaisse les œstrogènes, ce qui réduit naturellement le désir. C'est une période de transition, pas un point final. La tendresse et la connexion peuvent précéder le retour du désir sexuel.",
    tone: "normalize",
  },

  // ── ORGASME FÉMININ ────────────────────────────────────────
  {
    topic: "orgasme féminin",
    keywords: ["orgasme", "jouir", "pas d'orgasme", "difficile à jouir", "simuler", "semblant", "faking"],
    content:
      "L'orgasme féminin est variable, non linéaire et profondément influencé par le contexte mental. Simuler un orgasme est extrêmement courant — une étude montre que 67% des femmes l'ont fait. Ce n'est pas une trahison, c'est souvent une protection de l'autre ou de soi. L'enjeu n'est pas de 'performer' l'orgasme mais de créer les conditions pour ressentir.",
    tone: "normalize",
  },

  // ── ÉRECTION & PERFORMANCE ────────────────────────────────
  {
    topic: "performance masculine",
    keywords: ["érection", "pannes", "difficultés", "performance", "peur de décevoir", "éjaculation précoce", "ne tient pas"],
    content:
      "Les difficultés érectiles ponctuelles touchent la quasi-totalité des hommes à un moment ou un autre. L'anxiété de performance est souvent la cause principale — le cerveau est le premier organe sexuel. La pression à 'performer' crée exactement les conditions qui empêchent l'érection. Ralentir, se reconnecter à la sensorialité plutôt qu'au résultat, est souvent plus efficace que toute technique.",
    tone: "normalize",
  },

  // ── ATTACHEMENT & PEUR DE L'AMOUR ─────────────────────────
  {
    topic: "attachement",
    keywords: ["peur d'aimer", "attachement", "abandonnement", "peur d'être quitté", "trop s'attacher", "évitement", "dépendance affective"],
    content:
      "Les styles d'attachement — sécure, anxieux, évitant — se forment tôt et influencent toutes nos relations adultes. Un attachement anxieux cherche constamment la réassurance ; un attachement évitant se protège de la proximité. Ni l'un ni l'autre n'est un défaut de caractère — ce sont des stratégies de survie devenues automatiques. La sécurité relationnelle se construit progressivement, à travers des expériences répétées de fiabilité.",
    tone: "educate",
  },

  // ── CONFIANCE APRÈS TRAHISON ──────────────────────────────
  {
    topic: "trahison",
    keywords: ["tromperie", "infidélité", "trahison", "confiance brisée", "pardonner", "mensonge", "trompé"],
    content:
      "Après une trahison, la confiance ne se reconstruit pas par une décision — elle se reconstruit par des actes répétés et cohérents dans le temps. Le pardon n'efface pas la blessure, il permet de ne plus être gouverné par elle. Certains couples traversent et renforcent leur lien après une infidélité. D'autres ne peuvent pas — et c'est une réponse aussi légitime.",
    tone: "normalize",
  },

  // ── SEXUALITÉ SOLO & MASTURBATION ─────────────────────────
  {
    topic: "sexualité solo",
    keywords: ["masturbation", "solo", "se satisfaire", "pratique seul", "honte de se masturber", "trop souvent"],
    content:
      "La masturbation est une pratique saine, normale et répandue à tout âge. Elle permet de mieux connaître son propre corps, de réguler le stress et de maintenir une connexion à sa sexualité. La honte autour de la sexualité solo est souvent culturelle ou religieuse — pas médicale. Elle devient problématique uniquement si elle remplace systématiquement la connexion à l'autre ou crée une souffrance.",
    tone: "normalize",
  },

  // ── CONSENTEMENT & LIMITES ────────────────────────────────
  {
    topic: "consentement",
    keywords: ["consentement", "limite", "non", "je ne veux pas", "forcé", "obligation", "mal à l'aise", "dire non"],
    content:
      "Le consentement est une présence active, pas l'absence de refus. Il se communique, se demande, et peut être retiré à tout moment. Exprimer une limite est un acte de respect envers soi et l'autre. Un partenaire qui respecte un 'non' renforce la confiance et la sécurité — fondations de l'intimité profonde.",
    tone: "empower",
  },

  // ── SEXUALITÉ & MÉDICAMENTS ───────────────────────────────
  {
    topic: "médicaments et sexualité",
    keywords: ["antidépresseur", "médicament", "contraception", "pilule", "traitement", "effets secondaires", "libido médicament"],
    content:
      "De nombreux médicaments influencent la sexualité : les antidépresseurs ISRS peuvent réduire le désir et retarder l'orgasme ; la contraception hormonale peut modifier la lubrification et le désir ; les bêta-bloquants peuvent affecter l'érection. Ce n'est pas 'dans la tête' — c'est pharmacologique. En parler avec un médecin ou ajuster le traitement est légitime.",
    tone: "educate",
  },

  // ── MÉNOPAUSE & PÉRI-MÉNOPAUSE ────────────────────────────
  {
    topic: "ménopause",
    keywords: ["ménopause", "péri-ménopause", "sécheresse vaginale", "bouffées de chaleur", "plus les mêmes", "vieillir", "hormonale"],
    content:
      "La ménopause transforme la sexualité — elle ne la termine pas. La baisse des œstrogènes peut entraîner sécheresse vaginale, inconfort et baisse du désir. Ces symptômes sont traçables : lubrifiants, traitements locaux ou hormonaux, et surtout une redéfinition de l'intimité qui ne dépend pas de l'état du corps à 25 ans. La sexualité après 50 ans peut être profondément satisfaisante.",
    tone: "empower",
  },

  // ── FANTASMES ─────────────────────────────────────────────
  {
    topic: "fantasmes",
    keywords: ["fantasme", "fantaisie", "envie secrète", "pensées", "honte de mes pensées", "bizarre", "normal de penser à"],
    content:
      "Les fantasmes sont normaux, même lorsqu'ils semblent étranges ou contradictoires avec nos valeurs. La majorité des fantasmes ne reflètent pas des désirs à réaliser — ils sont des espaces de liberté psychique. Avoir un fantasme ne signifie pas vouloir le vivre. La honte autour des fantasmes coupe l'accès à une partie de l'énergie sexuelle.",
    tone: "normalize",
  },

  // ── DOULEUR PENDANT LES RAPPORTS ─────────────────────────
  {
    topic: "douleur intime",
    keywords: ["douleur", "ça fait mal", "vaginisme", "dyspareunie", "brûlure", "pénétration douloureuse", "impossible de pénétrer"],
    content:
      "La douleur pendant les rapports sexuels n'est jamais normale et ne doit jamais être ignorée ou 'surmontée'. Le vaginisme (contraction involontaire des muscles vaginaux) et la dyspareunie (douleur pendant la pénétration) ont des causes physiques et/ou psychologiques traitables. Une consultation gynécologique et/ou sexologique est la première étape. La douleur n'est pas un signal à ignorer — c'est une information du corps.",
    tone: "educate",
  },

  // ── SEXUALITÉ LGBTQ+ ──────────────────────────────────────
  {
    topic: "identité sexuelle",
    keywords: ["homosexuel", "bisexuel", "queer", "trans", "non-binaire", "identité", "orientation", "coming out", "acceptation"],
    content:
      "L'orientation sexuelle et l'identité de genre font partie de qui l'on est — elles ne nécessitent pas de justification. Naviguer son identité dans une société qui a longtemps manqué de modèles positifs peut créer une couche supplémentaire de complexité dans l'intimité. La honte intériorisée se dissout dans la visibilité, la communauté et un espace de parole bienveillant.",
    tone: "empower",
  },

  // ── AMOUR DE SOI & SEXUALITÉ ──────────────────────────────
  {
    topic: "estime de soi intime",
    keywords: ["m'aimer", "pas assez bien", "mérite pas", "indigne", "trop", "pas assez", "estime", "valeur"],
    content:
      "La relation à soi-même se reflète dans la relation intime. Une faible estime de soi peut générer des comportements d'effacement (ne pas exprimer ses besoins), de validation excessive (accepter ce qui ne convient pas) ou de contrôle (difficulté à se laisser aller). Se sentir digne de plaisir et de connexion n'est pas acquis automatiquement — c'est souvent un apprentissage, parfois accompagné.",
    tone: "empower",
  },

  // ── SEXUALITÉ APRÈS TRAUMA ────────────────────────────────
  {
    topic: "trauma et sexualité",
    keywords: ["agression", "violence", "trauma", "abus", "viol", "dissociation", "flashback", "peur pendant l'intimité"],
    content:
      "Les expériences traumatiques laissent une empreinte dans le corps et peuvent se réactiver lors de l'intimité — dissociation, flashbacks, figement. Ce n'est pas une faiblesse. Le corps se souvient et se protège. Un accompagnement thérapeutique spécialisé (EMDR, thérapie somatique, sexothérapie) peut permettre de retrouver un rapport sécure à l'intimité. La guérison est possible.",
    tone: "normalize",
  },
];
