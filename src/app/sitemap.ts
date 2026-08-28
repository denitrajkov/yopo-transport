import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data";
import { blogPosts } from "@/lib/blog";
import { jobOpenings } from "@/lib/careers";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/for-shippers`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/for-brokers`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/team`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/careers`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${baseUrl}/become-a-driver`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/contact`, changeFrequency: "yearly", priority: 0.7 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const careerRoutes: MetadataRoute.Sitemap = jobOpenings.map((job) => ({
    url: `${baseUrl}/careers/${job.slug}`,
    lastModified: job.postedDate,
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...blogRoutes, ...careerRoutes];
}