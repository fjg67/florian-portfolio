import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const basePath = process.env.GITHUB_PAGES === "true" ? "/florian-portfolio" : "";

  return {
    rules: { userAgent: "*", allow: "/" },
    ...(siteUrl ? { sitemap: new URL(`${basePath}/sitemap.xml`, siteUrl).toString() } : {}),
  };
}
