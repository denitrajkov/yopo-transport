import Link from "next/link";
import { formatJobDate, type JobOpening } from "@/lib/careers";

export function JobCard({ job }: { job: JobOpening }) {
  return (
    <Link
      href={`/careers/${job.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-navy-900/10 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-purple-500/30 hover:shadow-xl hover:shadow-navy-900/10"
    >
      <span className="inline-flex w-fit items-center rounded-full bg-purple-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-purple-700">
        {job.department}
      </span>

      <h3 className="font-display mt-4 text-xl font-semibold text-navy-950">
        {job.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-700">
        {job.summary}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-navy-900/10 pt-5 text-xs text-navy-500">
        <span>{job.location}</span>
        <span aria-hidden>&middot;</span>
        <span>{job.employmentType}</span>
        <span aria-hidden>&middot;</span>
        <span>Posted {formatJobDate(job.postedDate)}</span>
      </div>

      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 transition-colors group-hover:text-purple-600">
        View Details
        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
          &rarr;
        </span>
      </span>
    </Link>
  );
}