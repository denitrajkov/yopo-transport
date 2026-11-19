import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // /api/ is the site's own form endpoints; the rest are leftover
      // WordPress paths from the old site.
      disallow: [
        "/api/",
        "/wp-admin/",
        "/wp-includes/",
        "/wp-content/",
        "/feed/",
        "/*/feed/",
      ],
    },
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
  };
}
