import type { NextConfig } from "next";

/**
 * Old WordPress URLs that Google still crawls → closest page on the new site.
 * Next.js strips the trailing slash first (/about-us/ → /about-us), then
 * these rules send it on with a 301.
 *
 * Hacked spam URLs from the old site are NOT listed here — src/proxy.ts
 * answers those with 410 Gone.
 */
const legacyWordPressRedirects: Record<string, string> = {
  "/about-us": "/about",
  "/about-redesign": "/about",
  "/our-services": "/services",
  "/services-85": "/services",
  "/services-239": "/services",
  "/for-shippers-208": "/for-shippers",
  "/drive-with-us": "/become-a-driver",
  "/drive-with-us-redisgn": "/become-a-driver",
  "/become-a-driver-152": "/become-a-driver",
  "/hello-world": "/",
  "/hello-world/feed": "/",
};

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return Object.entries(legacyWordPressRedirects).map(
      ([source, destination]) => ({ source, destination, statusCode: 301 as const }),
    );
  },
};

export default nextConfig;
