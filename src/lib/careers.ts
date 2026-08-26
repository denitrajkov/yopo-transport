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

// Sample job openings — replace with real, current listings.
export const jobOpenings: JobOpening[] = [
  {
    slug: "dispatcher",
    title: "Dispatcher",
    department: "Dispatch",
    location: "On-site — [City], [State]",
    employmentType: "Full-Time",
    postedDate: "2026-08-20",
    summary:
      "Coordinate daily load assignments and driver communication to keep shipments moving on schedule.",
    responsibilities: [
      "Assign loads to drivers based on availability, location, and hours of service.",
      "Monitor shipments in real time and proactively communicate delays or changes.",
      "Serve as the primary point of contact for drivers throughout their routes.",
      "Coordinate with safety and maintenance teams on any on-road issues.",
      "Maintain accurate records of loads, schedules, and driver status.",
    ],
    requirements: [
      "1+ years of dispatch or logistics coordination experience preferred.",
      "Strong communication skills and comfort working in a fast-paced environment.",
      "Familiarity with GPS tracking and dispatch software is a plus.",
      "Ability to work flexible hours, including some early mornings or evenings.",
    ],
    niceToHave: [
      "Experience with ELD and fleet management platforms.",
      "Bilingual (English/Spanish) a plus.",
    ],
  },
  {
    slug: "safety-coordinator",
    title: "Safety Coordinator",
    department: "Safety & Compliance",
    location: "On-site — [City], [State]",
    employmentType: "Full-Time",
    postedDate: "2026-08-12",
    summary:
      "Support our safety program by monitoring compliance, coordinating training, and helping reduce risk across the fleet.",
    responsibilities: [
      "Monitor driver safety scores and hours-of-service compliance.",
      "Coordinate driver safety training and onboarding requirements.",
      "Maintain DOT compliance records and help prepare for audits.",
      "Investigate incidents and support corrective action plans.",
      "Partner with dispatch and maintenance teams to address safety risks.",
    ],
    requirements: [
      "Experience in trucking safety, compliance, or a related field preferred.",
      "Working knowledge of FMCSA regulations and DOT requirements.",
      "Strong attention to detail and record-keeping skills.",
      "Comfortable having direct conversations with drivers about performance.",
    ],
    niceToHave: [
      "Certification in transportation safety or compliance.",
      "Experience with ELD and safety scoring software.",
    ],
  },
  {
    slug: "staff-accountant",
    title: "Staff Accountant",
    department: "Accounting & Finance",
    location: "On-site — [City], [State]",
    employmentType: "Full-Time",
    postedDate: "2026-08-05",
    summary:
      "Support day-to-day accounting operations, including billing, accounts payable/receivable, and financial reporting.",
    responsibilities: [
      "Process accounts payable and accounts receivable transactions.",
      "Prepare and issue customer invoices and reconcile carrier settlements.",
      "Assist with month-end close and financial reporting.",
      "Maintain accurate financial records in accordance with company policy.",
      "Support the finance team with audits and ad hoc reporting requests.",
    ],
    requirements: [
      "Associate's or Bachelor's degree in Accounting, Finance, or a related field.",
      "1–3 years of accounting experience; trucking or logistics industry a plus.",
      "Proficiency with accounting software and Microsoft Excel.",
      "Strong organizational skills and attention to detail.",
    ],
    niceToHave: ["Experience with freight billing or carrier settlement processes."],
  },
  {
    slug: "fleet-maintenance-coordinator",
    title: "Fleet Maintenance Coordinator",
    department: "Maintenance",
    location: "On-site — [City], [State]",
    employmentType: "Full-Time",
    postedDate: "2026-07-29",
    summary:
      "Schedule and track preventive maintenance and repairs to keep our fleet safe and on the road.",
    responsibilities: [
      "Schedule preventive maintenance based on mileage and engine hours.",
      "Coordinate repairs with vendors and track vehicle downtime.",
      "Maintain accurate maintenance records for every vehicle in the fleet.",
      "Flag recurring issues and work with drivers on inspection follow-ups.",
      "Support budgeting and cost tracking for maintenance spend.",
    ],
    requirements: [
      "Experience in fleet maintenance coordination or a related role preferred.",
      "Familiarity with commercial vehicle maintenance requirements.",
      "Strong organizational and vendor coordination skills.",
      "Comfortable using maintenance tracking or fleet management software.",
    ],
    niceToHave: ["Background as a diesel technician or mechanic."],
  },
  {
    slug: "customer-service-representative",
    title: "Customer Service Representative",
    department: "Customer Service",
    location: "On-site — [City], [State]",
    employmentType: "Full-Time",
    postedDate: "2026-07-22",
    summary:
      "Be the first point of contact for customers, providing shipment updates and resolving questions quickly and professionally.",
    responsibilities: [
      "Respond to customer inquiries by phone and email about shipment status.",
      "Coordinate with dispatch to provide accurate, real-time updates.",
      "Process quote requests and route them to the appropriate team.",
      "Document customer interactions and escalate issues when needed.",
      "Help maintain strong, long-term relationships with repeat customers.",
    ],
    requirements: [
      "1+ years of customer service experience; logistics industry a plus.",
      "Excellent verbal and written communication skills.",
      "Comfortable multitasking across phone, email, and internal systems.",
      "A calm, professional approach to resolving customer concerns.",
    ],
    niceToHave: ["Experience with CRM or freight management software."],
  },
];

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