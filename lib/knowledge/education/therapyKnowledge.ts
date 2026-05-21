// ============================================================
// therapyKnowledge.ts
// Base de connaissance thérapeutique pour IA sexologique
// Domaines : bien-être intime, épanouissement amoureux,
//            self-love, relations de couple
// ============================================================

export type TherapyDomain =
  | "bien_etre_intime"
  | "epanouissement_amoureux"
  | "self_love"
  | "relation_couple";

export type IntensityLevel = "doux" | "modéré" | "profond";

export interface TherapyPattern {
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
// 1. BIEN-ÊTRE INTIME
// ============================================================

export const bienEtreIntimePatterns: TherapyPattern[] = [
  {
    id: "bei_001",
    domain: "bien_etre_intime",
    intensity: "doux",
    situation: "Déconnexion du corps et de la sensualité",
    observation:
      "Le corps garde la mémoire de toutes les expériences vécues. Une déconnexion sensorielle est souvent une réponse adaptative, jamais une défaillance personnelle.",
    explorationQuestions: [
      "Comment décririez-vous votre relation à votre corps en ce moment ?",
      "Y a-t-il des parties de vous-même que vous avez du mal à habiter ?",
      "Quand avez-vous ressenti votre corps comme un allié pour la dernière fois ?",
    ],
    interpretationLogic:
      "Explorer la dissociation somatique, la honte corporelle héritée, l'histoire des messages reçus sur le corps (famille, culture, religion, médias). Distinguer l'origine — traumatique, normative, ou liée à la maladie/douleur.",
    guidance:
      "La reconnexion au corps commence par de petits actes de présence sensorielle non sexualisés : bain chaud, massage de soi, mouvement doux, sensations texturées. L'objectif est d'habiter son corps avec curiosité, sans attente.",
    affirmations: [
      "Mon corps mérite d'être habité avec douceur.",
      "Je découvre mon corps sans jugement, à mon propre rythme.",
      "Ma sensualité est une expression de qui je suis, pas une performance.",
    ],
    exercices: [
      "Body scan de 5 minutes : scanner chaque partie du corps avec attention bienveillante, sans chercher à changer quoi que ce soit.",
      "Cartographie du plaisir non sexuel : noter 10 sensations agréables sur 7 jours (saveur, texture, chaleur, son…).",
      "Miroir de bienveillance : se regarder 2 minutes en cherchant 3 choses à remercier dans son corps.",
    ],
    signaux_dalerte: [
      "Dégoût persistant du corps accompagné d'automutilation",
      "Dissociation lors des rapports intimes (sentiment de 'sortir' de son corps)",
      "Douleur physique non expliquée associée à la sexualité",
    ],
  },
  {
    id: "bei_002",
    domain: "bien_etre_intime",
    intensity: "modéré",
    situation: "Difficultés avec le désir sexuel (hypo ou hypersexualité)",
    observation:
      "Le désir est un baromètre émotionnel et physiologique. Sa fluctuation est normale ; c'est son absence prolongée ou son caractère compulsif qui mérite attention.",
    explorationQuestions: [
      "Le désir a-t-il toujours été ainsi, ou y a-t-il eu un changement ?",
      "Le désir est-il absent aussi en dehors des contextes relationnels (fantasmes, rêves) ?",
      "Comment vivez-vous le fait que votre désir soit différent de ce que vous attendiez ?",
    ],
    interpretationLogic:
      "Évaluer les facteurs biomédicaux (hormones, médicaments, fatigue, douleur), psychologiques (dépression, anxiété, trauma), relationnels (sécurité affective, non-dits, routine), et identitaires (orientation, genre, valeurs). Le désir spontané vs réactif est une distinction clé souvent méconnue.",
    guidance:
      "Le modèle du désir réactif (Basson) montre que pour beaucoup, le désir s'éveille dans la stimulation, pas avant. Il ne s'agit pas de 'manque', mais d'un mode de fonctionnement différent. Créer les conditions de l'intimité peut suffire à rallumer la flamme.",
    affirmations: [
      "Mon désir est le mien — il n'appartient à personne d'autre.",
      "Je n'ai pas à me comparer à une norme.",
      "Explorer mon désir est un voyage, pas une destination.",
    ],
    exercices: [
      "Journal des déclencheurs : noter sur 2 semaines ce qui éveille l'envie (contexte, état émotionnel, interaction).",
      "Carte du désir : dessiner ou lister les conditions idéales qui rendent l'intimité possible.",
      "Sensate focus (niveau 1) : explorer les sensations corporelles seul·e sans objectif sexuel.",
    ],
    ressources: [
      "Emily Nagoski, 'Come As You Are' — modèle accélérateur/frein",
      "Jack Morin, 'The Erotic Mind' — compréhension de l'érotisme personnel",
    ],
  },
  {
    id: "bei_003",
    domain: "bien_etre_intime",
    intensity: "profond",
    situation: "Douleur ou inconfort lors de l'intimité sexuelle",
    observation:
      "La douleur intime (vaginisme, dyspareunie, éjaculation douloureuse…) est réelle, multifactorielle et traitable. Elle n'est jamais 'dans la tête' — même si le psychologique joue un rôle.",
    explorationQuestions: [
      "La douleur est-elle systématique ou situationnelle ?",
      "Avez-vous consulté un professionnel de santé à ce sujet ?",
      "Comment votre partenaire (si présent) réagit-il/elle à cette douleur ?",
    ],
    interpretationLogic:
      "Orienter vers bilan médical en premier lieu (gynécologue, urologue, kinésithérapeute pelvien). Explorer simultanément l'anxiété anticipatoire, l'hypertonicité musculaire, l'histoire relationnelle avec le sexe. La douleur chronique modifie l'architecture émotionnelle de l'intimité.",
    guidance:
      "La guérison passe par une équipe pluridisciplinaire (médecin, kiné pelvien, thérapeute). En attendant : élargir la définition de l'intimité au-delà de la pénétration, et déconstruire la pression de la 'performance'.",
    signaux_dalerte: [
      "Douleur intense et soudaine — consultation médicale urgente",
      "Saignements inexpliqués",
      "Évitement total de toute forme d'intimité avec impact sur la vie quotidienne",
    ],
    ressources: [
      "Association française de rééducation périnéale",
      "Institut de sexologie clinique",
    ],
  },
];

// ============================================================
// 2. ÉPANOUISSEMENT AMOUREUX
// ============================================================

export const epanouissementAmoureuxPatterns: TherapyPattern[] = [
  {
    id: "epa_001",
    domain: "epanouissement_amoureux",
    intensity: "doux",
    situation: "Peur de l'amour ou de l'engagement",
    observation:
      "La peur d'aimer est souvent proportionnelle à la profondeur des blessures passées. Se protéger en évitant l'amour est une stratégie qui coûte davantage qu'elle ne protège.",
    explorationQuestions: [
      "Qu'est-ce que vous imaginez qu'il se passerait si vous vous autorisiez à aimer pleinement ?",
      "Avez-vous des modèles d'amour sain dans votre histoire ?",
      "L'amour a-t-il déjà rimé avec perte, trahison ou dépendance pour vous ?",
    ],
    interpretationLogic:
      "Explorer le style d'attachement (anxieux, évitant, désorganisé). Identifier les croyances limitantes sur l'amour héritées de l'enfance ou de relations passées. Distinguer précaution saine et peur paralysante.",
    guidance:
      "L'engagement ne se décide pas sous la pression — il se construit dans la sécurité. Apprendre à nommer ses besoins, à tolérer la vulnérabilité par petits pas, et à distinguer 'risque d'aimer' et 'certitude de souffrir'.",
    affirmations: [
      "Je mérite un amour qui se sent sûr.",
      "Ma vulnérabilité est une force, pas une faiblesse.",
      "Je peux aimer et rester moi-même.",
    ],
    exercices: [
      "Lettre à la peur : écrire une lettre à sa peur de l'amour, lui demander ce qu'elle protège.",
      "Timeline affective : retracer ses grandes relations et noter le schéma récurrent.",
      "Acte de confiance minimal : identifier un acte de vulnérabilité très petit et le faire cette semaine.",
    ],
    ressources: ["Amir Levine & Rachel Heller, 'Attached' — styles d'attachement"],
  },
  {
    id: "epa_002",
    domain: "epanouissement_amoureux",
    intensity: "modéré",
    situation: "Dépendance affective",
    observation:
      "La dépendance affective naît souvent d'un manque de sécurité intérieure. Elle confond intensité avec amour, et fusion avec connexion.",
    explorationQuestions: [
      "Comment vous sentez-vous quand votre partenaire n'est pas disponible ?",
      "Avez-vous tendance à vous oublier pour maintenir la relation ?",
      "Votre estime de vous-même dépend-elle de la validation de l'autre ?",
    ],
    interpretationLogic:
      "Identifier les mécanismes : hyper-surveillance des signaux relationnels, abandon des propres besoins, anxiété séparatoire, jalousie. Explorer les carences affectives précoces. Distinguer amour sain (deux entités qui se rejoignent) et dépendance (fusion où l'un disparaît).",
    guidance:
      "Le chemin vers l'autonomie affective passe par construire une base sécure interne : développer des intérêts propres, un réseau d'amis, une relation à soi bienveillante. L'amour épanoui nécessite deux individus entiers, pas deux moitiés.",
    affirmations: [
      "Je suis complet·e avec ou sans l'autre.",
      "Mon bonheur ne dépend pas d'une seule personne.",
      "Je choisis cette relation ; je n'en ai pas besoin pour exister.",
    ],
    exercices: [
      "Inventaire des besoins : lister ses besoins affectifs et voir lesquels peuvent être comblés autrement.",
      "Temps solo intentionnel : planifier une activité seul·e chaque semaine avec plein engagement.",
      "Journaling des déclencheurs : noter chaque fois que l'angoisse d'abandon surgit — contexte, pensée, sensation.",
    ],
    signaux_dalerte: [
      "Incapacité totale à être seul·e",
      "Tolérance à des comportements abusifs pour ne pas perdre l'autre",
      "Pensées intrusives constantes sur le partenaire",
    ],
    ressources: [
      "Pia Mellody, 'Facing Love Addiction'",
      "Thérapeute spécialisé·e en attachement",
    ],
  },
  {
    id: "epa_003",
    domain: "epanouissement_amoureux",
    intensity: "profond",
    situation: "Rupture amoureuse et reconstruction",
    observation:
      "Une rupture est un deuil. Vouloir 'aller vite' est humain, mais le deuil a ses propres temporalités qui doivent être respectées.",
    explorationQuestions: [
      "Qu'est-ce que vous pleurez le plus dans cette relation — la personne, le projet, ou la version de vous-même dans cette relation ?",
      "Y a-t-il des choses non dites que vous portez encore ?",
      "Comment avez-vous traversé des douleurs semblables dans le passé ?",
    ],
    interpretationLogic:
      "Naviguer les 5 phases du deuil (Kübler-Ross) appliquées à la rupture. Identifier si la douleur est amplifiée par une blessure d'attachement préexistante. Explorer la question de l'identité post-relation ('qui suis-je sans cette personne ?').",
    guidance:
      "La reconstruction n'est pas la suppression du passé, mais son intégration. Chaque relation terminée est une école. L'objectif n'est pas d'oublier, mais de retrouver un moi stable qui n'a pas besoin de cet amour pour exister.",
    affirmations: [
      "Je porte cette douleur parce que j'ai su aimer.",
      "Cette fin n'est pas ma valeur — c'est une circonstance.",
      "Je me construis, je ne me répare pas.",
    ],
    exercices: [
      "Lettre non envoyée : écrire tout ce qu'on n'a pas pu dire, puis brûler ou détruire.",
      "Bilan positif : lister 5 choses apprises sur soi grâce à cette relation.",
      "Projet de renaissance : planifier un objectif personnel concret à réaliser dans les 3 prochains mois.",
    ],
  },
];

// ============================================================
// 3. SELF-LOVE (AMOUR DE SOI)
// ============================================================

export const selfLovePatterns: TherapyPattern[] = [
  {
    id: "sl_001",
    domain: "self_love",
    intensity: "doux",
    situation: "Manque d'estime de soi et auto-critique excessive",
    observation:
      "Le juge intérieur parle souvent avec la voix de quelqu'un d'autre. L'auto-critique chronique est une stratégie de survie héritée, pas une vérité sur qui vous êtes.",
    explorationQuestions: [
      "Comment parleriez-vous à un·e ami·e qui vit ce que vous traversez ?",
      "D'où vient cette voix critique ? Reconnaissez-vous quelqu'un derrière elle ?",
      "Y a-t-il des domaines où vous vous faites davantage confiance ?",
    ],
    interpretationLogic:
      "Explorer la genèse de l'autocritique (parents, école, échecs passés, comparaison sociale). Distinguer autocritique constructive et voix saboteuse. Introduire le concept de self-compassion (Kristin Neff) : humanité commune, pleine conscience, bienveillance envers soi.",
    guidance:
      "L'amour de soi n'est pas de la vanité — c'est la base de toute relation saine. Il se pratique comme un muscle : par répétition, en douceur, en commençant par des actes minuscules de bienveillance envers soi.",
    affirmations: [
      "Je m'offre la même compassion que j'offre aux autres.",
      "Mes erreurs font partie de mon humanité.",
      "Je suis assez·e tel·le que je suis, ici et maintenant.",
    ],
    exercices: [
      "Lettre de compassion : s'écrire une lettre depuis la perspective d'un·e ami·e bienveillant·e.",
      "Reframing du critique intérieur : quand une pensée négative surgit, se demander 'est-ce vrai ? est-ce utile ?'.",
      "Gratitude de soi : noter chaque soir 3 choses que vous avez bien faites ou bien gérées dans la journée.",
    ],
    ressources: [
      "Kristin Neff, 'Self-Compassion: The Proven Power of Being Kind to Yourself'",
      "Brené Brown, 'Les Dons de l'imperfection'",
    ],
  },
  {
    id: "sl_002",
    domain: "self_love",
    intensity: "modéré",
    situation: "Difficulté à poser des limites et syndrome du caméléon",
    observation:
      "Se fondre dans les besoins des autres au détriment des siens est souvent une stratégie d'amour héritée de l'enfance : 'si je suis ce que tu veux, tu m'aimeras'.",
    explorationQuestions: [
      "Avez-vous du mal à dire non sans vous justifier longuement ?",
      "Comment vous sentez-vous après avoir cédé à une demande qui ne vous convenait pas ?",
      "Avez-vous conscience de vos propres besoins, envies, opinions indépendamment des autres ?",
    ],
    interpretationLogic:
      "Explorer le fawn response (réponse de soumission face au stress), l'hyperempathie, le besoin d'approbation. Identifier si les limites sont absentes par peur du rejet, de la colère de l'autre, ou par manque d'identification des propres besoins.",
    guidance:
      "Une limite n'est pas un mur — c'est une frontière qui définit qui vous êtes. Poser des limites est un acte d'amour envers soi ET envers l'autre (qui peut enfin vous connaître vraiment). Commencer par de petits nons dans des contextes sûrs.",
    affirmations: [
      "Mes besoins ont autant de valeur que ceux des autres.",
      "Dire non à ce qui ne me convient pas, c'est dire oui à moi-même.",
      "Je peux être aimé·e et avoir des limites.",
    ],
    exercices: [
      "Inventaire des limites : lister 5 situations où vous dites oui en voulant dire non.",
      "Script de refus doux : préparer 3 formulations pour décliner sans s'excuser.",
      "Check-in corporel : avant de répondre à une demande, scanner son corps — tension = signal d'alarme.",
    ],
  },
  {
    id: "sl_003",
    domain: "self_love",
    intensity: "modéré",
    situation: "Relation difficile à son image corporelle",
    observation:
      "L'image corporelle est une construction mentale et sociale, pas un reflet objectif. Elle est profondément influencée par les messages culturels, familiaux et médiatiques reçus.",
    explorationQuestions: [
      "Quel est le premier souvenir négatif que vous avez de votre corps ?",
      "Comment imaginez-vous que les autres perçoivent votre corps ?",
      "Y a-t-il des moments ou des contextes où vous vous sentez à l'aise dans votre corps ?",
    ],
    interpretationLogic:
      "Explorer l'écart entre image corporelle perçue et réelle, la dysmorphophobie légère, l'influence des réseaux sociaux, le perfectionnisme corporel. Distinguer souhait de changement sain et obsession dévalorisante. Évaluer l'impact sur la vie intime.",
    guidance:
      "La neutralité corporelle est une étape réaliste avant l'amour du corps : ne pas aimer chaque partie, mais ne plus être en guerre contre soi. Le corps n'est pas un décor — c'est le lieu où vous vivez.",
    affirmations: [
      "Mon corps me permet de vivre — c'est déjà extraordinaire.",
      "Je ne dois pas aimer chaque partie de moi pour me respecter.",
      "Ma valeur n'est pas dans mon apparence.",
    ],
    exercices: [
      "Journée sans miroir : passer 24h sans se regarder, noter comment cela change l'humeur.",
      "Liste des fonctions : écrire 10 choses que son corps permet de faire (rire, toucher, danser…).",
      "Curating digital : supprimer 10 comptes qui provoquent la comparaison négative.",
    ],
    signaux_dalerte: [
      "Pensées obsessionnelles sur le corps (2+ heures par jour)",
      "Comportements d'évitement social liés à l'image",
      "Troubles alimentaires associés",
    ],
  },
  {
    id: "sl_004",
    domain: "self_love",
    intensity: "profond",
    situation: "Honte identitaire profonde (sexualité, genre, passé, corps)",
    observation:
      "La honte dit 'je suis mauvais·e' là où la culpabilité dit 'j'ai fait quelque chose de mauvais'. La honte est la blessure la plus corrosive de l'estime de soi.",
    explorationQuestions: [
      "Y a-t-il une partie de vous que vous cachez absolument à tous ?",
      "D'où vient l'idée que cette partie de vous est inacceptable ?",
      "Avez-vous déjà rencontré quelqu'un qui partageait ce que vous croyez honteux ?",
    ],
    interpretationLogic:
      "Explorer l'origine de la honte (trauma, rejet, messages familiaux/religieux/culturels). Travailler sur la différence honte/culpabilité. La honte se nourrit du secret et meurt dans la connexion — mais la connexion ne peut pas être forcée.",
    guidance:
      "Le chemin hors de la honte passe par trois étapes : nommer (reconnaître la honte), partager (avec une personne de confiance), et normaliser (découvrir qu'on n'est pas seul·e). Ce chemin ne peut être précipité.",
    affirmations: [
      "Ce que j'ai vécu ne définit pas ce que je vaux.",
      "Je n'ai pas à mériter ma place dans ce monde.",
      "La honte que je porte appartient à ceux qui me l'ont transmise.",
    ],
    signaux_dalerte: [
      "Honte toxique accompagnée d'idées noires",
      "Isolation totale liée à la honte",
    ],
    ressources: [
      "Brené Brown, 'Daring Greatly'",
      "Thérapie de la honte — spécialiste recommandé·e",
    ],
  },
];

// ============================================================
// 4. RELATIONS DE COUPLE
// ============================================================

export const relationCouplePatterns: TherapyPattern[] = [
  {
    id: "rc_001",
    domain: "relation_couple",
    intensity: "doux",
    situation: "Distance émotionnelle dans le couple",
    observation:
      "La distance est souvent une protection émotionnelle, pas un manque d'amour. Les couples traversent naturellement des cycles de proximité et d'éloignement.",
    explorationQuestions: [
      "Depuis quand ressentez-vous cette distance ?",
      "Est-ce lié à un événement précis ou progressif ?",
      "Vous sentez-vous davantage distant·e, ou est-ce l'autre ?",
    ],
    interpretationLogic:
      "Explorer stress externe (travail, famille, santé), charge mentale inégale, non-dits accumulés, routine qui a remplacé la présence. Distinguer distance saine (chacun a besoin d'espace) et distance symptôme (évitement d'un conflit ou d'une vérité).",
    guidance:
      "Recréer du lien passe souvent par des micro-rituels de connexion : une question différente chaque soir, un toucher intentionnel, un moment sans écran. La connexion ne nécessite pas de grand geste — elle se reconstruit dans les petits.",
    exercices: [
      "36 questions de Aron : répondre ensemble aux 36 questions conçues pour créer l'intimité.",
      "Check-in quotidien : 10 minutes chaque soir pour partager une chose positive et une chose difficile de la journée.",
      "Rituel de retrouvaille : créer un rituel d'accueil le soir (embrassade de 20 secondes, thé ensemble).",
    ],
    ressources: ["John Gottman, 'The Seven Principles for Making Marriage Work'"],
  },
  {
    id: "rc_002",
    domain: "relation_couple",
    intensity: "modéré",
    situation: "Communication conflictuelle ou blocage du dialogue",
    observation:
      "La majorité des conflits de couple ne portent pas sur le sujet apparent. Sous la dispute sur la vaisselle se cache souvent une question de respect, de fatigue ou de sentiment d'invisibilité.",
    explorationQuestions: [
      "Comment se passent les disputes — y a-t-il un schéma récurrent ?",
      "Y a-t-il des sujets que vous évitez absolument d'aborder ?",
      "L'un de vous tend-il à se fermer et l'autre à poursuivre lors des conflits ?",
    ],
    interpretationLogic:
      "Identifier les 4 cavaliers de l'Apocalypse (Gottman) : critique, mépris, défensivité, pierre contre pierre (stonewalling). Explorer les profils de communication (poursuivant/fuyant). Évaluer la présence de violence psychologique.",
    guidance:
      "La clé n'est pas d'éviter les conflits mais de les traverser sans se blesser. Les règles de base : parler en 'je', nommer ses besoins (pas les reproches), faire une pause si l'escalade commence, revenir quand chacun est régulé.",
    affirmations: [
      "Nous sommes dans la même équipe, même quand nous ne sommes pas d'accord.",
      "Exprimer mon besoin n'est pas une attaque.",
    ],
    exercices: [
      "Script CNV : reformuler un reproche en observation + sentiment + besoin + demande.",
      "Pause codée : convenir d'un mot-code pour suspendre un conflit (20 min minimum) et toujours y revenir.",
      "Débriefing de dispute : 48h après un conflit, analyser ensemble ce qui s'est passé sans rejouer la dispute.",
    ],
    ressources: ["Marshall Rosenberg, 'La Communication Non Violente'"],
  },
  {
    id: "rc_003",
    domain: "relation_couple",
    intensity: "modéré",
    situation: "Désaccord sur la vie sexuelle de couple",
    observation:
      "Une asymétrie du désir est présente dans la majorité des couples à long terme. Ce n'est pas un problème de compatibilité — c'est une réalité humaine qui demande dialogue et créativité.",
    explorationQuestions: [
      "Avez-vous déjà parlé explicitement de vos besoins sexuels respectifs ?",
      "Y a-t-il une pression (implicite ou explicite) qui pèse sur l'un ou l'autre ?",
      "La question du désir est-elle vécue comme une menace pour la relation ou une opportunité d'exploration ?",
    ],
    interpretationLogic:
      "Explorer le modèle accélérateur/frein (Nagoski), les langages de l'amour, les représentations de la 'normalité sexuelle'. Identifier si l'asymétrie est récente ou structurelle. Évaluer la charge émotionnelle que chacun porte autour du sujet.",
    guidance:
      "L'épanouissement sexuel de couple repose sur trois piliers : sécurité (se sentir en confiance), désir (espace pour l'inattendu), et communication (parler de ce qu'on aime, pas que de ce qui pose problème). Le sexe épanoui n'est pas spontané — il est cultivé.",
    exercices: [
      "Boîte aux fantasmes : chacun écrit 5 envies sur des papiers, les met dans une boîte. On les tire au sort ensemble.",
      "Carte des plaisirs : chacun note ce qu'il aime, ce qu'il n'aime pas, ce qu'il voudrait essayer — sans jugement.",
      "Semaine sans but : une semaine d'intimité physique sans que la pénétration soit l'objectif. Explorer le reste.",
    ],
    ressources: [
      "Emily Nagoski, 'Come As You Are'",
      "Dan Savage — podcast Savage Lovecast",
    ],
  },
  {
    id: "rc_004",
    domain: "relation_couple",
    intensity: "profond",
    situation: "Trahison de confiance (infidélité, mensonge, secret révélé)",
    observation:
      "La trahison fracture la réalité partagée d'un couple. Ce qui est brisé, c'est autant la confiance que l'histoire telle qu'on la croyait vraie.",
    explorationQuestions: [
      "Quelle est la demande de chacun aujourd'hui — comprendre, décider, réparer ?",
      "La personne qui a trahi est-elle capable de comprendre ce qu'elle a brisé, pas seulement de s'excuser ?",
      "Y a-t-il un désir commun de reconstruire, ou seulement la peur de la séparation ?",
    ],
    interpretationLogic:
      "Distinguer les différents types de trahison et leur gravité. Évaluer la sincérité de la remise en question chez la personne qui a trahi. Explorer la part de vulnérabilité préexistante dans la relation. Nommer que la reconstruction (si elle a lieu) prend en moyenne 2 à 4 ans.",
    guidance:
      "La reconstruction est possible, mais non garantie, et ne devrait jamais être contrainte. Elle demande : transparence totale du côté de la personne qui a trahi, espace pour la douleur du côté blessé, et accompagnement professionnel pour traverser cela ensemble ou séparément.",
    signaux_dalerte: [
      "Violence (psychologique ou physique) suite à la révélation",
      "La personne blessée perd tout repère ou présente des idées suicidaires",
      "Répétition de la trahison malgré engagement de changement",
    ],
    ressources: [
      "Esther Perel, 'The State of Affairs' — sur l'infidélité et la reconstruction",
      "Thérapie de couple systémique — indispensable dans ce contexte",
    ],
  },
  {
    id: "rc_005",
    domain: "relation_couple",
    intensity: "profond",
    situation: "Violence psychologique ou emprise dans la relation",
    observation:
      "L'emprise s'installe progressivement. Elle ne ressemble pas toujours à ce qu'on imagine. Minimiser, isoler, culpabiliser, contrôler — ces mécanismes sont invisibles de l'intérieur.",
    explorationQuestions: [
      "Avez-vous l'impression de marcher sur des œufs pour éviter les réactions de votre partenaire ?",
      "Avez-vous réduit vos contacts avec votre entourage depuis que vous êtes dans cette relation ?",
      "Vous sentez-vous souvent coupable de choses dont vous n'êtes pas sûr·e d'être responsable ?",
    ],
    interpretationLogic:
      "Évaluer les marqueurs d'emprise : isolement, dévalorisation, contrôle, culpabilisation, alternance chaleur/froid (cycle de violence). Ne pas confronter trop directement — la personne sous emprise a besoin de sécurité pour entendre. Ne jamais minimiser.",
    guidance:
      "Si vous reconnaissez ces signes, vous n'êtes pas fou/folle. Ce que vous vivez a un nom. Vous méritez une aide professionnelle. Il existe des ressources discrètes et des personnes formées pour vous accompagner.",
    signaux_dalerte: [
      "Violence physique — sécurité immédiate prioritaire",
      "Menaces (de suicide, de divulgation, d'enlèvement d'enfants)",
      "Sentiment que partir serait impossible ou dangereux",
    ],
    ressources: [
      "3919 — Violences Femmes Info (France, gratuit, anonyme)",
      "Association En Avant Toute(s)",
      "Thérapeute spécialisé·e en violence conjugale",
    ],
  },
];

// ============================================================
// EXPORT GLOBAL
// ============================================================

export const therapyPatterns: TherapyPattern[] = [
  ...bienEtreIntimePatterns,
  ...epanouissementAmoureuxPatterns,
  ...selfLovePatterns,
  ...relationCouplePatterns,
];

// Helpers utilitaires

export function getPatternsByDomain(domain: TherapyDomain): TherapyPattern[] {
  return therapyPatterns.filter((p) => p.domain === domain);
}

export function getPatternsByIntensity(
  intensity: IntensityLevel
): TherapyPattern[] {
  return therapyPatterns.filter((p) => p.intensity === intensity);
}

export function getPatternById(id: string): TherapyPattern | undefined {
  return therapyPatterns.find((p) => p.id === id);
}

export function searchPatterns(keyword: string): TherapyPattern[] {
  const kw = keyword.toLowerCase();
  return therapyPatterns.filter(
    (p) =>
      p.situation.toLowerCase().includes(kw) ||
      p.observation.toLowerCase().includes(kw) ||
      p.guidance.toLowerCase().includes(kw)
  );
}
