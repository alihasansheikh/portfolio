import type { MetadataRoute } from "next";
import { SITE_URL } from "@/data/links";
import { copy } from "@/data/copy";
import { servicePages } from "@/data/services";

// Update when the page content changes, so search engines can trust lastmod.
const UPDATED = new Date("2026-11-26");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, lastModified: UPDATED, changeFrequency: "monthly", priority: 1 },
    ...servicePages.map((s) => ({
      url: `${SITE_URL}/services/${s.slug}`,
      lastModified: UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...copy.work.cases.map((c) => ({
      url: `${SITE_URL}/work/${c.slug}`,
      lastModified: UPDATED,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
