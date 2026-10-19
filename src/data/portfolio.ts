export const profile = {
  name: "Florian Jove Garcia",
  role: "Développeur d’applications Mobile & Web",
  location: "Grand Est, France",
  email: "florian.jove.garcia@gmail.com",
  intro:
    "Je conçois des expériences digitales et des solutions techniques qui connectent le mobile, le web et l’infrastructure.",
  github: null,
  linkedin: null,
  cv: null,
} as const;

export const disciplines = [
  {
    key: "mobile",
    number: "01",
    label: "Mobile",
    summary: "Des applications pensées pour les usages en mouvement.",
    technologies: ["Kotlin", "Swift", "React Native", "Jetpack Compose", "SwiftUI"],
  },
  {
    key: "web",
    number: "02",
    label: "Web",
    summary: "Des interfaces, des API et les services qui les font vivre.",
    technologies: ["Node.js", "Express", "REST API", "SQL", "PHP"],
  },
  {
    key: "infra",
    number: "03",
    label: "Infrastructure",
    summary: "Le socle technique, du poste utilisateur au serveur.",
    technologies: ["Linux", "Docker", "Nginx", "Réseau", "SSL/TLS"],
  },
] as const;

export const skillGroups = [
  { label: "Mobile", tone: "mobile", items: ["Kotlin", "Java", "Jetpack Compose", "Swift", "SwiftUI", "UIKit", "React Native"] },
  { label: "Back-end", tone: "web", items: ["Node.js", "Express", "REST API", "PHP"] },
  { label: "Database", tone: "web", items: ["PostgreSQL", "MySQL", "SQL", "SQL Server"] },
  { label: "Auth", tone: "web", items: ["JWT", "OAuth", "Firebase Auth"] },
  { label: "Infrastructure", tone: "infra", items: ["Linux", "Ubuntu", "Docker", "Nginx", "Apache", "SSL/TLS", "UFW", "iptables"] },
  { label: "Other", tone: "neutral", items: ["Python", "C", "C++", "C#", "Power BI"] },
] as const;

export const experiences = [
  {
    company: "AVEM",
    role: "Technicien informatique de proximité",
    context: "Siège Crédit Agricole Alsace Vosges · Strasbourg",
    period: "Depuis février 2026",
    current: true,
    highlights: [
      "Support N1/N2 et résolution d’incidents matériels et logiciels",
      "Déploiements, projets et opérations d’agences",
      "Installation, maintenance et préparation du parc informatique",
      "Masterisation et configuration des postes",
    ],
    featured: "Développement complet d’une application interne de gestion des stocks",
  },
  {
    company: "AVEM",
    role: "Technicien informatique",
    context: null,
    period: "Septembre 2025 → Octobre 2025",
    current: false,
    highlights: [],
    featured: null,
  },
  {
    company: "SCHOTT VTF",
    role: "Développeur informatique en alternance",
    context: null,
    period: "Septembre 2023 → Septembre 2024",
    current: false,
    highlights: ["Power BI", "SQL Server", "PHP", "Workflows", "Statistiques et débogage d’applications"],
    featured: null,
  },
  {
    company: "SAFRAN LANDING SYSTEMS",
    role: "Technicien informatique",
    context: null,
    period: "Août 2022",
    current: false,
    highlights: [],
    featured: null,
  },
  {
    company: "ILOOS COLMAR",
    role: "Stage technicien informatique",
    context: null,
    period: "Mai 2022 → Juillet 2022",
    current: false,
    highlights: [],
    featured: null,
  },
] as const;

export const projects = [
  {
    number: "01",
    name: "IT Inventory",
    category: "Mobile · Inventory · Internal tool",
    description: "Application interne de gestion et de suivi des stocks informatiques.",
    platforms: ["iOS", "Android"],
    visual: "inventory",
    githubUrl: null,
    demoUrl: null,
  },
  {
    number: "02",
    name: "Vault",
    category: "iOS · Personal finance",
    description: "Application iOS de gestion de budget personnel, développée en Swift.",
    platforms: ["iOS", "Swift"],
    visual: "vault",
    githubUrl: null,
    demoUrl: null,
  },
  {
    number: "03",
    name: "Yam’s",
    category: "Android · Utility",
    description: "Application Android qui automatise le calcul des scores du Yam’s.",
    platforms: ["Android"],
    visual: "yams",
    githubUrl: null,
    demoUrl: null,
  },
] as const;

export const education = [
  { title: "RNCP Titre 6", detail: "Concepteur d’intégrateur d’infrastructure informatique", school: "CNAM Grand Est", status: null },
  { title: "Licence générale Informatique", detail: "Parcours Cybersécurité", school: "UIMM Pôle d’Alsace", status: "Diplôme obtenu" },
  { title: "BTS Systèmes Numériques", detail: "Option Informatique et Réseaux", school: "Lycée Blaise Pascal", status: "Diplôme obtenu" },
  { title: "Licence Mathématiques-Informatique", detail: null, school: "Université de Strasbourg", status: null },
  { title: "Baccalauréat S", detail: "Spécialité SVT · Option ISN", school: null, status: null },
] as const;

export const passions = [
  { title: "Tennis", detail: "8 ans de pratique · Meilleur classement : 30/4", symbol: "01" },
  { title: "Badminton", detail: "Pratique loisir", symbol: "02" },
  { title: "Gaming", detail: "Jeux vidéo", symbol: "03" },
] as const;

export const navigation = [
  { label: "Accueil", href: "#accueil" },
  { label: "Profil", href: "#profil" },
  { label: "Expertise", href: "#expertise" },
  { label: "Parcours", href: "#parcours" },
  { label: "Projets", href: "#projets" },
  { label: "Formation", href: "#formation" },
  { label: "Contact", href: "#contact" },
] as const;
