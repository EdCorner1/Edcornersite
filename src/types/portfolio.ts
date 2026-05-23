export type VideoCategory =
  | "AI"
  | "Tech"
  | "Travel"
  | "Language Learning"
  | "Personal Brand"
  | "Other";

export type VideoVertical =
  | "UGC"
  | "Founder-led"
  | "Explainer"
  | "Ad Creative"
  | "Organic Short"
  | "Tutorial"
  | "Review";

export type Platform =
  | "TikTok"
  | "Instagram Reels"
  | "YouTube Shorts"
  | "LinkedIn"
  | "Paid Social"
  | "Website";

export type VideoMetric = {
  label: string;
  value: string;
};

export type Video = {
  id: string;
  title: string;
  brand: string;
  category: VideoCategory;
  vertical: VideoVertical;
  platform: Platform[];
  thumbnailUrl?: string;
  streamUid?: string;
  embedUrl?: string;
  playbackUrl?: string;
  externalUrl?: string;
  metrics?: VideoMetric[];
  tags?: string[];
  featured?: boolean;
  sortOrder?: number;
};

export type Project = {
  id: string;
  brand: string;
  title: string;
  category: VideoCategory;
  summary: string;
  deliverables: string[];
  videoIds?: string[];
  featured?: boolean;
};

export type Brand = {
  name: string;
  url?: string;
};

export type SiteStat = {
  label: string;
  value: string;
};
