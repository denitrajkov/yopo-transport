import Image from "next/image";
import Link from "next/link";
import { formatBlogDate, type BlogPost } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy-900/15"
    >
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-navy-900">
          {post.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display line-clamp-2 text-lg font-semibold leading-snug text-navy-950">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-navy-700">
          {post.excerpt}
        </p>

        <div className="mt-4 flex items-center gap-2 text-xs text-navy-500">
          <span>{formatBlogDate(post.date)}</span>
          <span aria-hidden>&middot;</span>
          <span>{post.readingTime}</span>
        </div>

        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 transition-colors group-hover:text-purple-600">
          Read Article
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            &rarr;
          </span>
        </span>
      </div>
    </Link>
  );
}