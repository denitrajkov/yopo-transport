import type { ReactNode } from "react";

type Badge = {
  label: string;
  icon: ReactNode;
};

const iconProps = {
  className: "h-5 w-5 shrink-0",
  strokeWidth: 1.75,
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

const badges: Badge[] = [
  {
    label: "Fully Insured Carrier Network",
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
    label: "Nationwide Lane Coverage",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="8.5" />
        <path strokeLinecap="round" d="M3.5 12h17M12 3.5c2.5 2.4 3.8 5.3 3.8 8.5s-1.3 6.1-3.8 8.5c-2.5-2.4-3.8-5.3-3.8-8.5S9.5 5.9 12 3.5z" />
      </svg>
    ),
  },
  {
    label: "24/7 Dispatch Support",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="8.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5V12l3 2" />
      </svg>
    ),
  },
  {
    label: "Dedicated Account Management",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="8" r="3.25" />
        <path strokeLinecap="round" d="M5.5 20c1-3.5 3.8-5.5 6.5-5.5s5.5 2 6.5 5.5" />
      </svg>
    ),
  },
];

export function TrustStrip() {
  return (
    <div className="relative overflow-hidden border-y border-gold-500/15 bg-navy-900">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(194,143,58,0.12),_transparent_65%)]"
      />
      <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="container-page relative">
        <div className="grid grid-cols-2 divide-x divide-y divide-white/10 lg:grid-cols-4 lg:divide-y-0">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex flex-col items-center gap-3 px-4 py-8 text-center sm:flex-row sm:justify-center sm:text-left"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500/10 text-gold-400">
                {badge.icon}
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-navy-100">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
    </div>
  );
}