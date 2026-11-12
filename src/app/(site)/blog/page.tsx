import type { Metadata } from "next";
import { blogCategories, getFeaturedPost, getGridPosts } from "@/lib/blog";
import { BlogHero } from "@/components/blog/BlogHero";
import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { BlogExplorer } from "@/components/blog/BlogExplorer";

const pageTitle = "Trucking & Freight Insights Blog | Yopo Expedite";
const pageDescription =
  "Tips and insights on freight transportation, fleet safety, and logistics from Yopo Expedite, a Chicago-area trucking company.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/blog",
    siteName: "Yopo Expedite",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1774116196662-a9e1e4fa1612?q=80&w=2200&auto=format&fit=crop",
        alt: "Freight truck silhouetted against mountains at dusk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [
      "https://images.unsplash.com/photo-1774116196662-a9e1e4fa1612?q=80&w=2200&auto=format&fit=crop",
    ],
  },
};

export default function BlogPage() {
  const featuredPost = getFeaturedPost();
  const gridPosts = getGridPosts();

  return (
    <>
      <BlogHero />

      <section className="bg-navy-50 py-20 sm:py-24">
        <div className="container-page">
          <FeaturedPost post={featuredPost} />
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="container-page">
          <BlogExplorer posts={gridPosts} categories={blogCategories} />
        </div>
      </section>
    </>
  );
}