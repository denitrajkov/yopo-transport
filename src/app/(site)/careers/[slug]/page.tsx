import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatJobDate, getJobBySlug, jobOpenings } from "@/lib/careers";
import { siteConfig } from "@/lib/data";

export function generateStaticParams() {
  return jobOpenings.map((job) => ({ slug: job.slug }));
}

export const dynamicParams = false;

type JobPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: JobPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) return {};

  return {
    title: job.title,
    description: job.summary,
    alternates: {
      canonical: `/careers/${job.slug}`,
    },
    openGraph: {
      title: `${job.title} | Careers at ${siteConfig.name}`,
      description: job.summary,
      type: "article",
      url: `/careers/${job.slug}`,
    },
  };
}

export default async function JobPage({ params }: JobPageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  const applyHref = `mailto:${siteConfig.careersEmail}?subject=${encodeURIComponent(
    `Application: ${job.title}`
  )}`;

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
                <Link href="/careers" className="transition-colors hover:text-purple-600">
                  Careers
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="max-w-[220px] truncate text-navy-700" aria-current="page">
                {job.title}
              </li>
            </ol>
          </nav>

          <span className="mt-6 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-purple-600">
            {job.department}
          </span>
          <h1 className="font-display text-balance mt-3 max-w-3xl text-3xl font-semibold leading-tight text-navy-950 sm:text-4xl lg:text-5xl">
            {job.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-navy-600">
            <span>{job.location}</span>
            <span aria-hidden>&middot;</span>
            <span>{job.employmentType}</span>
            <span aria-hidden>&middot;</span>
            <span>Posted {formatJobDate(job.postedDate)}</span>
          </div>

          <div className="mt-8">
            <a
              href={applyHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-purple-500 px-7 py-3.5 text-sm font-semibold tracking-wide text-navy-950 transition-all duration-300 hover:bg-purple-400 hover:shadow-lg hover:shadow-purple-500/25"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <p className="text-base leading-relaxed text-navy-700">
              {job.summary}
            </p>

            <h2 className="font-display mt-10 text-2xl font-semibold text-navy-950">
              Responsibilities
            </h2>
            <ul className="mt-5 space-y-3">
              {job.responsibilities.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-navy-700">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-display mt-10 text-2xl font-semibold text-navy-950">
              Requirements
            </h2>
            <ul className="mt-5 space-y-3">
              {job.requirements.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-navy-700">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {job.niceToHave && job.niceToHave.length > 0 ? (
              <>
                <h2 className="font-display mt-10 text-2xl font-semibold text-navy-950">
                  Nice to Have
                </h2>
                <ul className="mt-5 space-y-3">
                  {job.niceToHave.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-navy-700">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}

            <div className="mt-14 rounded-3xl bg-navy-950 px-8 py-12 text-center sm:px-12">
              <h2 className="font-display text-balance text-2xl font-semibold text-white sm:text-3xl">
                Ready to Apply?
              </h2>
              <p className="mx-auto mt-3 max-w-md text-balance text-sm leading-relaxed text-navy-100/85 sm:text-base">
                Send your resume to our team and let us know which role
                you&rsquo;re interested in.
              </p>
              <a
                href={applyHref}
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-purple-500 px-7 py-3.5 text-sm font-semibold tracking-wide text-navy-950 transition-all duration-300 hover:bg-purple-400 hover:shadow-lg hover:shadow-purple-500/25"
              >
                Apply Now
              </a>
            </div>

            <div className="mt-10">
              <Link
                href="/careers"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 transition-colors hover:text-purple-600"
              >
                <span aria-hidden>&larr;</span>
                Back to All Openings
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}