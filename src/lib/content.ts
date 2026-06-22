export const navLinks = [
  { label: "Services", href: "services", type: "anchor" as const },
  { label: "Méthodologie", href: "methodologie", type: "anchor" as const },
  { label: "Réalisations", href: "/realisations", type: "page" as const },
];

export const services = [
  {
    id: "transformation",
    category: "Transformation digitale",
    title: "Conseil Digital",
    icon: "lightbulb" as const,
    description:
      "Un diagnostic structuré, une feuille de route réaliste et un accompagnement sur-mesure pour transformer vos ambitions en actions concrètes.",
    href: "#contact",
  },
  {
    id: "developpement",
    category: "Solutions sur-mesure",
    title: "Développement",
    icon: "code" as const,
    description:
      "Applications web et mobiles, plateformes métiers, portails institutionnels : nous concevons des outils pensés pour vos utilisateurs.",
    href: "#contact",
  },
  {
    id: "automatisation",
    category: "Processus & IA",
    title: "Automatisation",
    icon: "zap" as const,
    description:
      "Nous optimisons vos processus avec des solutions d'automatisation et des briques IA pour la collecte, l'analyse ou la recommandation.",
    href: "#contact",
  },
  {
    id: "odoo",
    category: "Implémentation",
    title: "ERP Odoo",
    icon: "settings" as const,
    description:
      "Optimisez vos opérations avec Odoo, la solution ERP tout-en-un. Nous vous aidons à personnaliser et intégrer Odoo dans votre entreprise.",
    href: "#contact",
  },
];

export const methodologySteps = [
  {
    number: "01",
    title: "Advisory / Diagnostic",
    icon: "clipboard-check" as const,
    description:
      "Analyse approfondie de votre contexte métier, de vos enjeux et de vos objectifs stratégiques. Nous identifions les processus critiques, les opportunités d'optimisation et les contraintes techniques et humaines pour formuler une vision claire du projet.",
  },
  {
    number: "02",
    title: "Design & Conception",
    icon: "lightbulb" as const,
    description:
      "Conception centrée utilisateur et scénarios métiers : prototypes, maquettes, architecture technique et feuille de route. Chaque choix est validé avec vous pour assurer cohérence entre vision business et exigences technologiques.",
  },
  {
    number: "03",
    title: "Développement & Livraison",
    icon: "rocket" as const,
    description:
      "Développement agile, itératif et transparent. Révisions fréquentes, contrôles qualité, tests fonctionnels et non-fonctionnels garantissent fiabilité, performance et respect des délais. Déploiement maîtrisé à chaque étape.",
  },
  {
    number: "04",
    title: "Adoption & Changement",
    icon: "users" as const,
    description:
      "Accompagnement à la conduite du changement : formation des utilisateurs, documentation, support post-livraison. Mesure de l'usage et des retours utilisateurs pour ajuster et maximiser l'adoption.",
  },
  {
    number: "05",
    title: "Suivi & Amélioration continue",
    icon: "trending-up" as const,
    description:
      "Après la mise en production, nous suivons les indicateurs clés (KPIs), recueillons les retours, assurons maintenance, évolutivité et optimisations continues pour garantir un impact durable.",
  },
];

export const guarantees = [
  { label: "Respect des délais & du budget", icon: "timer" as const },
  {
    label: "Qualité de code, sécurité & performance",
    icon: "shield-check" as const,
  },
  {
    label: "Transparence à chaque étape du projet",
    icon: "eye" as const,
  },
  {
    label: "Orientation ROI et impact métier",
    icon: "handshake" as const,
  },
];

export const whyUs = [
  {
    title: "ADN conseil + tech",
    icon: "target" as const,
    description:
      "Nous pensons enjeux métier, gouvernance et stratégie avant outils et implémentation. La technologie est un levier, pas une fin.",
  },
  {
    title: "Présence terrain",
    icon: "globe" as const,
    description:
      "Une compréhension fine des réalités locales, alignée sur les standards internationaux pour des solutions adaptées à votre contexte.",
  },
  {
    title: "Approche humaine",
    icon: "users" as const,
    description:
      "Nous concevons des solutions utiles, simples et réellement adoptées par les équipes.",
  },
  {
    title: "Résultats concrets",
    icon: "bar-chart" as const,
    description:
      "Des livrables clairs, des indicateurs suivis et un objectif constant : le retour sur investissement.",
  },
];

export const clientLogos = [
  { name: "Institutions", icon: "landmark" as const },
  { name: "Banques", icon: "building" as const },
  { name: "Télécoms", icon: "radio" as const },
  { name: "ONG", icon: "heart" as const },
  { name: "PME", icon: "briefcase" as const },
  { name: "Industrie", icon: "factory" as const },
  { name: "Secteur public", icon: "landmark" as const },
  { name: "Startups", icon: "rocket" as const },
];

export const contactInfo = {
  email: "contact@mabanza-software.com",
  phone: undefined as string | undefined,
  location: "République Démocratique du Congo",
};

export const footerServices = [
  { label: "Transformation Digitale", href: "/#services" },
  { label: "Solutions Sur Mesure", href: "/#services" },
  { label: "Processus & IA", href: "/#services" },
  { label: "Implémentation ERP Odoo", href: "/#services" },
];

export type Project = {
  id: string;
  title: string;
  sector: string;
  enjeu: string;
  approche: string[];
  impact: string[];
};

export const projectSectors = [
  { id: "all", label: "Tous les projets" },
  {
    id: "institutions",
    label: "Institutions publiques & programmes nationaux",
  },
  {
    id: "bailleurs",
    label: "Bailleurs & programmes de développement",
  },
  {
    id: "entreprises",
    label: "Grandes entreprises & transformation interne",
  },
];

export const projects: Project[] = [
  {
    id: "dashboard-sante",
    title: "Plateforme de pilotage sanitaire national",
    sector: "institutions",
    enjeu:
      "Piloter en temps réel une réponse coordonnée à partir de données fiables, consolidées et exploitables par les décideurs.",
    approche: [
      "Co-conception avec autorités et partenaires techniques",
      "Structuration et gouvernance de données sensibles",
      "Développement d'un dashboard décisionnel multi-sources",
    ],
    impact: [
      "Décisions stratégiques appuyées par les données",
      "Amélioration de la visibilité sur les capacités opérationnelles",
    ],
  },
  {
    id: "donnees-environnement",
    title: "Système national de données environnementales",
    sector: "institutions",
    enjeu:
      "Mettre en place une gouvernance centralisée et sécurisée des données environnementales nationales.",
    approche: [
      "Diagnostic des systèmes existants",
      "Définition d'une architecture cible interopérable",
      "Recommandations techniques, juridiques et organisationnelles",
    ],
    impact: [
      "Feuille de route validée par les parties prenantes",
      "Architecture cible proposée pour passage à l'implémentation",
    ],
  },
  {
    id: "impact-data",
    title: "Collecte et analyse de données d'impact",
    sector: "bailleurs",
    enjeu:
      "Centraliser et fiabiliser les données d'impact issues de multiples projets (formation, financement, écosystème).",
    approche: [
      "Analyse des processus de reporting existants",
      "Mise en place d'une plateforme de collecte interopérable",
      "Visualisation décisionnelle et automatisation des rappels",
    ],
    impact: [
      "Suivi de projet amélioré",
      "Sources de données agrégées automatiquement",
      "Réduction du temps de reporting",
    ],
  },
  {
    id: "marketplace-pme",
    title: "Marketplace nationale des services aux PME",
    sector: "bailleurs",
    enjeu:
      "Faciliter l'accès des PME à des prestataires qualifiés sur l'ensemble du territoire.",
    approche: [
      "Conception d'une plateforme adaptée aux contraintes locales",
      "Géolocalisation, recherche avancée et certification des prestataires",
      "Optimisation pour connexions internet limitées",
    ],
    impact: [
      "250 prestataires référencés",
      "Plateforme utilisée comme outil national de référence",
    ],
  },
  {
    id: "digitalisation-agro",
    title: "Digitalisation globale des processus — Groupe agro-industriel",
    sector: "entreprises",
    enjeu:
      "Moderniser le système d'information et améliorer la performance opérationnelle d'un groupe agro-industriel.",
    approche: [
      "Diagnostic SI et analyse des processus métiers",
      "Élaboration d'un plan de transformation digitale",
      "Développement et accompagnement au déploiement",
    ],
    impact: [
      "2 processus métiers digitalisés",
      "65 utilisateurs internes formés",
      "Amélioration mesurable de la planification et du pilotage",
    ],
  },
  {
    id: "plateforme-education",
    title: "Migration et montée en charge d'une plateforme éducative",
    sector: "entreprises",
    enjeu:
      "Renforcer l'inclusion numérique et la formation à grande échelle dans le système éducatif.",
    approche: [
      "Audit fonctionnel et technique de l'existant",
      "Recommandation stratégique et choix de plateforme",
      "Déploiement, formation et préparation au passage à l'échelle",
    ],
    impact: [
      "4 écoles pilotes",
      "+8000 enseignants et apprenants formés",
      "Plateforme prête pour déploiement national",
    ],
  },
];

export const realisationsDiff = [
  "Approche conseil + implémentation",
  "Forte expérience institutions publiques & bailleurs",
  "Maîtrise des contextes locaux et multi-acteurs",
  "Solutions pensées pour l'usage réel et la durabilité",
];
