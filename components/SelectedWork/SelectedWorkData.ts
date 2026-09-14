export const categories = [
  "All",
  "Campaigns",
  "Storytelling",
  "Brand Identity",
  "Personal Branding",
  "Scriptwriting & Content Creation",
] as const;

export type Category = (typeof categories)[number];

export type ProjectCategory = Exclude<Category, "All">;

export type ProjectMetric = {
  value: string;
  label: string;
};

export type Project = {
  id: string;
  category: ProjectCategory;
  title: string;
  subtitle: string;
  image: string;
  metrics?: ProjectMetric[];
};

export const projects: Project[] = [
  {
    id: "economic-policy-awareness",
    category: "Campaigns",
    title: "Economic Policy Awareness Campaign",
    subtitle: "2026 Armenian National Elections",
    image: "/portfolio/economic-policy-awareness.jpg",
    metrics: [
      { value: "7M+", label: "total views" },
      { value: "1.8M+", label: "media publications" },
      { value: "250+", label: "stakeholder meetings" },
    ],
  },

  {
    id: "prime-ministerial-candidate-positioning",
    category: "Campaigns",
    title: "Prime Ministerial Candidate Positioning Campaign",
    subtitle: "2026 Armenian Parliamentary Elections",
    image: "/portfolio/prime-ministerial-positioning.png",
    metrics: [
      { value: "12M+", label: "media impressions" },
      { value: "9M+", label: "video views" },
      { value: "200+", label: "outdoor placements" },
    ],
  },

  {
    id: "inclusive-education",
    category: "Campaigns",
    title: "Inclusive Education Awareness Campaign",
    subtitle: "Human Rights Defender of Armenia",
    image: "/portfolio/inclusive-education.jpg",
  },
  {
  id: "women-success-stories",
  category: "Campaigns",
  title: "Public Awareness Campaign on Women’s Success Stories",
  subtitle: "Public Awareness Campaign",
  image: "/portfolio/women-success-stories-campaign.jpeg",
},

  {
    id: "symbol-brand-storytelling",
    category: "Storytelling",
    title: "Symbol & Brand Storytelling",
    subtitle: "Turning a Political Symbol into a Recognizable Brand Asset",
    image: "/portfolio/symbol-brand-storytelling.png",
    metrics: [
      { value: "2M+", label: "views" },
      { value: "150+", label: "media publications" },
    ],
  },

  {
    id: "human-centered-storytelling",
    category: "Storytelling",
    title: "Human-Centered Storytelling",
    subtitle: "Human Rights Defender of Armenia",
    image: "/portfolio/human-centered-storytelling.png",
    metrics: [
      { value: "29% → 81%", label: "institutional trust" },
      { value: "4.1×", label: "increase in requests" },
    ],
  },

  {
    id: "brand-identity-development",
    category: "Brand Identity",
    title: "Brand Identity Development",
    subtitle:
      "Concern Dialog · Tatoyan Foundation · Wings of Unity · PRAXIS",
    image: "/portfolio/brand-identity-development.png",
  },

  {
    id: "arman-tatoyan-personal-branding",
    category: "Personal Branding",
    title: "Arman Tatoyan — Executive Positioning & Public Reputation",
    subtitle: "Human Rights Defender of Armenia",
    image: "/portfolio/arman-tatoyan-positioning.jpg",
    metrics: [
      { value: "6", label: "years" },
      { value: "29% → 81%", label: "institutional trust" },
    ],
  },

  {
    id: "public-awareness-video-series",
    category: "Scriptwriting & Content Creation",
    title: "Public Awareness Video Series",
    subtitle: "Human Rights Defender of Armenia",
    image: "/portfolio/public-awareness-video-series.png",
  },

  {
    id: "success-stories-video-series",
    category: "Scriptwriting & Content Creation",
    title: "Success Stories Video Series",
    subtitle: "U.S. Alumni Association of Armenia",
    image: "/portfolio/success-stories-video-series.png",
  },

  {
  id: "humanizing-political-leader-storytelling",
  category: "Storytelling",
  title: "Human-Centered Storytelling",
  subtitle: "Humanizing a Political Leader Through Storytelling",
  image: "/portfolio/human-centered.png",
  metrics: [
    { value: "1M+", label: "social media views" },
    { value: "50+", label: "media publications" },
  ],
},
];
