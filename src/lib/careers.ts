export type JobOpening = {
  slug: string;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  postedDate: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
};

// No open positions right now — add new listings here as roles open up.
export const jobOpenings: JobOpening[] = [];

export function getAllJobs(): JobOpening[] {
  return [...jobOpenings].sort((a, b) => (a.postedDate < b.postedDate ? 1 : -1));
}

export function getJobBySlug(slug: string): JobOpening | undefined {
  return jobOpenings.find((job) => job.slug === slug);
}

export function formatJobDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}