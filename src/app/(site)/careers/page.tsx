import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { JobCard } from "@/components/careers/JobCard";
import { getAllJobs } from "@/lib/careers";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore open positions at Yopo Transport and join a team focused on safe, reliable freight transportation across the United States.",
};

export default function CareersPage() {
  const jobs = getAllJobs();

  return (
    <>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden bg-navy-950 pb-16 pt-32">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1666173114990-3b1a531ef82f?q=80&w=2200&auto=format&fit=crop"
            alt="Fleet of trucks lined up in a company lot"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/50" />
        </div>
        <div className="container-page relative">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold-300">
            Careers
          </span>
          <h1 className="font-display text-balance max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Build Your Career With Yopo Transport
          </h1>
          <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-navy-100/85 sm:text-lg">
            We&rsquo;re growing our team of dispatchers, safety professionals,
            and operations staff who care about doing the job right.
          </p>
        </div>
      </section>

      <section className="bg-navy-950 py-14">
        <div className="container-page flex flex-col items-center justify-between gap-6 rounded-3xl bg-white/[0.04] p-8 text-center sm:flex-row sm:text-left sm:p-10">
          <div>
            <h2 className="font-display text-xl font-semibold text-white">
              Looking to Drive for Us?
            </h2>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-navy-200">
              CDL drivers apply through our dedicated driver application —
              submit your details and license to get started.
            </p>
          </div>
          <Link
            href="/become-a-driver"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold tracking-wide text-navy-950 transition-all duration-300 hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/25"
          >
            Become a Driver
          </Link>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Open Positions"
            title="Current Openings"
            description="Browse our current openings below. Click a role to see full details and how to apply."
          />

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
              <JobCard key={job.slug} job={job} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-50 py-20 sm:py-24">
        <div className="container-page text-center">
          <h2 className="font-display text-2xl font-semibold text-navy-950">
            Don&rsquo;t See the Right Role?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-balance text-sm leading-relaxed text-navy-700 sm:text-base">
            We&rsquo;re always interested in hearing from good people. Send us
            your resume and let us know what you&rsquo;re looking for.
          </p>
          <a
            href={`mailto:${siteConfig.careersEmail}`}
            className="mt-8 inline-flex items-center justify-center rounded-full border border-navy-900/15 px-7 py-3.5 text-sm font-semibold text-navy-900 transition-colors duration-300 hover:border-navy-900/40"
          >
            {siteConfig.careersEmail}
          </a>
        </div>
      </section>
    </>
  );
}