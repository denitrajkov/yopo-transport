import type { Metadata } from "next";
import { blogCategories, getFeaturedPost, getGridPosts } from "@/lib/blog";
import { BlogHero } from "@/components/blog/BlogHero";
import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { BlogExplorer } from "@/components/blog/BlogExplorer";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Expert insights, strategies and technology helping modern fleets operate smarter, safer and more efficiently.",
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