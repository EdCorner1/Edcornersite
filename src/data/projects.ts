import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "airalo",
    brand: "Airalo",
    title: "Travel UGC for eSIM adoption",
    category: "Travel",
    summary:
      "Short-form content built around real travel pain points, product education, and native-feeling paid social creative.",
    deliverables: ["UGC concepts", "Short-form scripts", "Native vertical videos", "Paid social angles"],
    videoIds: ["airalo-travel-esim-ugc"],
    featured: true,
  },
  {
    id: "pingo-ai",
    brand: "Pingo AI",
    title: "AI language-learning content",
    category: "Language Learning",
    summary:
      "Clear, relatable short-form videos showing how AI can make language learning feel more natural and useful.",
    deliverables: ["Product demos", "Hook-led scripts", "Educational short-form content"],
    videoIds: ["pingo-ai-language-learning"],
    featured: true,
  },
  {
    id: "clawbite-detris",
    brand: "Clawbite / Detris AI",
    title: "AI product storytelling",
    category: "AI",
    summary:
      "Content for technical AI products that explains the value clearly without sounding like a synthetic LinkedIn goblin.",
    deliverables: ["Product explainers", "Founder-led content", "Short-form creative angles"],
    videoIds: ["clawbite-ai-operator", "detris-ai-productivity-demo"],
    featured: true,
  },
];
