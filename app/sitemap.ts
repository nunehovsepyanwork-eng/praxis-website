import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: "https://praxis.am/en",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: "https://praxis.am/en",
          hy: "https://praxis.am/hy",
        },
      },
    },
    {
      url: "https://praxis.am/hy",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: "https://praxis.am/en",
          hy: "https://praxis.am/hy",
        },
      },
    },
  ];
}
