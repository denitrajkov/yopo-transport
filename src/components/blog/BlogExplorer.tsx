"use client";

import { useMemo, useState } from "react";
import { searchPosts, type BlogPost } from "@/lib/blog";
import { CategoryFilter } from "@/components/blog/CategoryFilter";
import { BlogSearch } from "@/components/blog/BlogSearch";
import { BlogGrid } from "@/components/blog/BlogGrid";

const ALL_CATEGORY = "All";

export function BlogExplorer({
  posts,
  categories,
}: {
  posts: BlogPost[];
  categories: string[];
}) {
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY);
  const [query, setQuery] = useState("");

  const filteredPosts = useMemo(() => {
    const byCategory =
      activeCategory === ALL_CATEGORY
        ? posts
        : posts.filter((post) => post.category === activeCategory);
    return searchPosts(byCategory, query);
  }, [posts, activeCategory, query]);

  return (
    <div>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <CategoryFilter
          categories={[ALL_CATEGORY, ...categories]}
          active={activeCategory}
          onChange={setActiveCategory}
        />
        <BlogSearch value={query} onChange={setQuery} />
      </div>

      <div className="mt-10">
        <BlogGrid posts={filteredPosts} />
      </div>
    </div>
  );
}