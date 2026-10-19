import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const basePath = process.env.GITHUB_PAGES === "true" ? "/florian-portfolio" : "";

  if (!siteUrl) return [];

  return [
    {
      url: new URL(`${basePath}/`, siteUrl).toString(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
