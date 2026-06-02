export type PortfolioCategory = "All Work" | "AI/SaaS Demos" | "Tech Hardware" | "Hooks & Retention";

export type PortfolioVideo = {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, "All Work">;
  videoUrl: string;
  posterUrl: string;
  performanceMetric: string;
  hookType: string;
  context: string;
};

export const portfolioCategories: PortfolioCategory[] = [
  "All Work",
  "AI/SaaS Demos",
  "Tech Hardware",
  "Hooks & Retention",
];

export const portfolioVideos: PortfolioVideo[] = [
  {
    id: "ai-workflow-demo",
    title: "AI Workflow Product Demo",
    category: "AI/SaaS Demos",
    videoUrl: "https://edcorner-content.public.blob.vercel-storage.com/portfolio/ai-workflow-demo.mp4",
    posterUrl: "https://edcorner-content.public.blob.vercel-storage.com/portfolio/posters/ai-workflow-demo.webp",
    performanceMetric: "150k Views",
    hookType: "Problem-led demo",
    context: "Style: Organic SaaS Tutorial | Angle: Show the workflow before explaining the tool",
  },
  {
    id: "language-app-onboarding",
    title: "Language App Onboarding Creative",
    category: "AI/SaaS Demos",
    videoUrl: "https://edcorner-content.public.blob.vercel-storage.com/portfolio/language-app-onboarding.mp4",
    posterUrl: "https://edcorner-content.public.blob.vercel-storage.com/portfolio/posters/language-app-onboarding.webp",
    performanceMetric: "4.2% CTR",
    hookType: "Use-case reveal",
    context: "Style: App Walkthrough | Angle: Make the first session feel obvious",
  },
  {
    id: "smart-device-demo",
    title: "Smart Device Feature Breakdown",
    category: "Tech Hardware",
    videoUrl: "https://edcorner-content.public.blob.vercel-storage.com/portfolio/smart-device-demo.mp4",
    posterUrl: "https://edcorner-content.public.blob.vercel-storage.com/portfolio/posters/smart-device-demo.webp",
    performanceMetric: "2.8x Saves",
    hookType: "Tactile proof",
    context: "Style: Hardware Demo | Angle: Show the feature in use, not in theory",
  },
  {
    id: "travel-tech-setup",
    title: "Travel Tech Setup Explainer",
    category: "Tech Hardware",
    videoUrl: "https://edcorner-content.public.blob.vercel-storage.com/portfolio/travel-tech-setup.mp4",
    posterUrl: "https://edcorner-content.public.blob.vercel-storage.com/portfolio/posters/travel-tech-setup.webp",
    performanceMetric: "92k Views",
    hookType: "Before-after setup",
    context: "Style: Field Test | Angle: Turn a travel annoyance into a quick fix",
  },
  {
    id: "retention-hook-sequence",
    title: "Hook Testing Sequence",
    category: "Hooks & Retention",
    videoUrl: "https://edcorner-content.public.blob.vercel-storage.com/portfolio/retention-hook-sequence.mp4",
    posterUrl: "https://edcorner-content.public.blob.vercel-storage.com/portfolio/posters/retention-hook-sequence.webp",
    performanceMetric: "+36% Watch Time",
    hookType: "Pattern interrupt",
    context: "Style: Hook Test | Angle: Open with the moment people recognise",
  },
  {
    id: "paid-social-angle",
    title: "Paid Social Angle Sprint",
    category: "Hooks & Retention",
    videoUrl: "https://edcorner-content.public.blob.vercel-storage.com/portfolio/paid-social-angle.mp4",
    posterUrl: "https://edcorner-content.public.blob.vercel-storage.com/portfolio/posters/paid-social-angle.webp",
    performanceMetric: "31% Lower CPA",
    hookType: "Objection flip",
    context: "Style: Paid UGC Variant | Angle: Answer the objection before it kills the click",
  },
];
