import type { BlogPost } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";

export function BlogGrid({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) {
    return (
      <div className="rounded-2xl border border-navy-900/10 bg-white px-6 py-16 text-center">
        <p className="font-display text-lg font-semibold text-navy-950">
          No articles found
        </p>
        <p className="mt-2 text-sm text-navy-600">
          Try a different search term or category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}