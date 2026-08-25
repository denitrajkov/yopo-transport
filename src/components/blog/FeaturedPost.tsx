import Image from "next/image";
import Link from "next/link";
import { formatBlogDate, type BlogPost } from "@/lib/blog";

export function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group grid overflow-hidden rounded-3xl border border-navy-900/10 bg-white shadow-xl shadow-navy-950/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-navy-950/15 lg:grid-cols-2"
    >
      <div className="relative h-72 w-full overflow-hidden lg:h-full lg:min-h-[420px]">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span className="absolute left-5 top-5 rounded-full bg-gold-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-navy-950">
          Featured Article
        </span>
      </div>

      <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gold-600">
          {post.category}
        </span>
        <h2 className="font-display mt-4 text-balance text-2xl font-semibold leading-tight text-navy-950 sm:text-3xl">
          {post.title}
        </h2>
        <p className="mt-4 text-balance text-sm leading-relaxed text-navy-700 sm:text-base">
          {post.excerpt}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-navy-500">
          <span>{post.author}</span>
          <span aria-hidden>&middot;</span>
          <span>{formatBlogDate(post.date)}</span>
          <span aria-hidden>&middot;</span>
          <span>{post.readingTime}</span>
        </div>

        <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 transition-colors group-hover:text-gold-600">
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