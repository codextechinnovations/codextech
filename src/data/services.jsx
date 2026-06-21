import {
  Cloud,
  Brain,
  BarChart2,
  Smartphone,
  Award,
  Lock,
  GitBranch,
  Zap,
  Users,
  Repeat,
} from "lucide-react";

export const SERVICES_GRID = [
  {
    icon: <Cloud size={24} />,
    title: "Cloud & DevOps Engineering",
    desc: "Cut infrastructure costs by 40% and hit 99.9% uptime. We design resilient cloud architectures, automate CI/CD pipelines, and ensure your product scales without engineering heroics.",
    tags: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform"],
  },
  {
    icon: <Brain size={24} />,
    title: "AI & Intelligent Automation",
    desc: "From LLM-powered chatbots to custom ML models, we embed intelligence into your product that creates real competitive moats — not demo-only features.",
    tags: ["OpenAI", "LangChain", "TensorFlow", "Python", "RAG", "Fine-tuning"],
  },
  {
    icon: <BarChart2 size={24} />,
    title: "Product Analytics & CRO",
    desc: "We instrument your product with the right analytics, run A/B tests, and deliver monthly conversion optimization reports. Data-driven decisions, not gut feelings.",
    tags: ["Mixpanel", "Amplitude", "A/B Testing", "Heatmaps", "Funnel Analysis"],
  },
  {
    icon: <Smartphone size={24} />,
    title: "App Publishing & Store Management",
    desc: "We publish your app on the Apple App Store and Google Play Store using our registered developer console accounts. No account setup delays, no secret sharing — we handle the entire submission, review, and release process end-to-end.",
    tags: ["Apple Developer", "Google Play Console", "App Store Review", "TestFlight", "Beta Testing"],
  },
];

export const DIFFERENTIATORS = [
  {
    icon: <Award size={20} />,
    title: "Senior Engineers Only",
    desc: "Every developer on your project has 5+ years of production experience. No juniors, no bait-and-switch after the contract is signed.",
  },
  {
    icon: <Lock size={20} />,
    title: "Fixed-Price Contracts",
    desc: "Agree on scope, timeline, and total cost upfront. Zero scope-creep surprises, hidden fees, or mid-project renegotiations.",
  },
  {
    icon: <GitBranch size={20} />,
    title: "Full Source Code Ownership",
    desc: "You own 100% of the codebase from day one. No vendor lock-in, no proprietary frameworks, no hostage situations.",
  },
  {
    icon: <Zap size={20} />,
    title: "12–16 Week Delivery",
    desc: "From signed contract to live product in 12–16 weeks — without cutting corners on architecture, security, or scalability.",
  },
  {
    icon: <Users size={20} />,
    title: "Dedicated Project Manager",
    desc: "One senior PM as your single point of contact. Daily updates, weekly demos, and full transparency through a shared dashboard.",
  },
  {
    icon: <Repeat size={20} />,
    title: "6-Month Free Warranty",
    desc: "We stand behind every product with 6 months of free bug fixes post-launch. Because great software is a commitment, not a transaction.",
  },
];
