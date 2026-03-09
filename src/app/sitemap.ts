import { getAllSlugs } from "@/lib/apprenticeships";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllSlugs();
  const base = "https://apprenticeships.me";

  const apprenticeshipUrls: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${base}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...apprenticeshipUrls,
  ];
}
