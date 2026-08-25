import type { BlogPost } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";

export function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section aria-labelledby="related-articles-heading">
      <h2
        id="related-articles-heading"
        className="font-display text-2xl font-semibold text-navy-950"
      >
        Related Articles
      </h2>
      <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}