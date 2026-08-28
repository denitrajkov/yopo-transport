import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  blogPosts,
  formatBlogDate,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/blog";
import { BlogArticle } from "@/components/blog/BlogArticle";
import { BlogCTA } from "@/components/blog/BlogCTA";
import { RelatedPosts } from "@/components/blog/RelatedPosts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      url: `/blog/${post.slug}`,
      images: [{ url: post.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post, 3);

  return (
    <>
      <section className="bg-navy-50 pb-14 pt-32 sm:pt-36">
        <div className="container-page">
          <nav aria-label="Breadcrumb" className="text-xs text-navy-500">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-purple-600">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-purple-600">
                  Blog
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="max-w-[220px] truncate text-navy-700" aria-current="page">
                {post.title}
              </li>
            </ol>
          </nav>

          <span className="mt-6 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-purple-600">
            {post.category}
          </span>
          <h1 className="font-display text-balance mt-3 max-w-3xl text-3xl font-semibold leading-tight text-navy-950 sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-navy-600">
            <span>{post.author}</span>
            <span aria-hidden>&middot;</span>
            <span>{formatBlogDate(post.date)}</span>
            <span aria-hidden>&middot;</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </section>

      <div className="container-page">
        <div className="relative -mt-6 h-72 w-full overflow-hidden rounded-3xl shadow-2xl shadow-navy-950/20 sm:h-96 lg:h-[480px]">
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover"
          />
        </div>
      </div>

      <article className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <BlogArticle content={post.content} />
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <BlogCTA />
          </div>
        </div>
      </article>

      <section className="bg-navy-50 py-16 sm:py-20">
        <div className="container-page">
          <RelatedPosts posts={relatedPosts} />
        </div>
      </section>
    </>
  );
}