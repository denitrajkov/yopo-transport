import type { ReactNode } from "react";

type Feature = {
  title: string;
  description: string;
  icon: ReactNode;
};

const iconProps = {
  className: "h-6 w-6",
  strokeWidth: 1.75,
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

const features: Feature[] = [
  {
    title: "Safety-Driven Operations",
    description:
      "Every shipment is handled under rigorous safety standards, from carrier vetting to on-road conduct.",
    icon: (
      <svg {...iconProps}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3l7 3.5v5c0 4.5-3 8-7 9.5-4-1.5-7-5-7-9.5v-5L12 3z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 12l1.8 1.8L15 10" />
      </svg>
    ),
  },
  {
    title: "Nationwide Reach",
    description:
      "Coverage across regional and long-haul lanes throughout the United States, tailored to your network.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="8.5" />
        <path strokeLinecap="round" d="M3.5 12h17M12 3.5c2.5 2.4 3.8 5.3 3.8 8.5s-1.3 6.1-3.8 8.5c-2.5-2.4-3.8-5.3-3.8-8.5S9.5 5.9 12 3.5z" />
      </svg>
    ),
  },
  {
    title: "Transparent Communication",
    description:
      "Proactive updates and honest timelines from quote to delivery — no guessing where your freight stands.",
    icon: (
      <svg {...iconProps}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 5h16v11H8l-4 4V5z"
        />
        <path strokeLinecap="round" d="M8 9.5h8M8 12.5h5" />
      </svg>
    ),
  },
  {
    title: "Dedicated Account Support",
    description:
      "A single point of contact who understands your business, your freight, and your priorities.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="8" r="3.25" />
        <path strokeLinecap="round" d="M5.5 20c1-3.5 3.8-5.5 6.5-5.5s5.5 2 6.5 5.5" />
      </svg>
    ),
  },
  {
    title: "Modern, Well-Maintained Fleet",
    description:
      "Our equipment is inspected and maintained to a high standard, reducing breakdowns and keeping your freight moving without unnecessary delays.",
    icon: (
      <svg {...iconProps}>
        <rect x="2.5" y="9" width="12" height="7" rx="1" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.5 11h3.2l3.3 3v2h-6.5" />
        <circle cx="7" cy="17.5" r="1.6" />
        <circle cx="16.5" cy="17.5" r="1.6" />
      </svg>
    ),
  },
  {
    title: "Round-the-Clock Dispatch",
    description:
      "Our dispatch team is available around the clock to answer questions, address issues, and keep your shipment on track — nights and weekends included.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="8.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5V12l3 2" />
      </svg>
    ),
  },
];

export function WhyChooseUs() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => (
        <div
          key={feature.title}
          className="group rounded-2xl border border-purple-500/40 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-purple-500/70 hover:shadow-xl hover:shadow-navy-900/10"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 transition-colors duration-500 group-hover:bg-purple-500 group-hover:text-white">
            {feature.icon}
          </div>
          <h3 className="font-display mt-5 text-lg font-semibold text-navy-950">
            {feature.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-navy-700">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}