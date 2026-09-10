import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "For Brokers",
  description:
    "Freight broker resources for Yopo Transport — reliable capacity, responsive dispatch, and a straightforward booking process.",
};

const iconProps = {
  className: "h-6 w-6",
  strokeWidth: 1.75,
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

type Reason = {
  title: string;
  description: string;
  icon: ReactNode;
};

const reasons: Reason[] = [
  {
    title: "24/7 Dedicated Team",
    description:
      "Our team is available 24/7 to provide support, monitor shipments, and ensure smooth communication from pickup to delivery.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="8.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5V12l3 2" />
      </svg>
    ),
  },
  {
    title: "Reliable Transportation",
    description:
      "We provide reliable and efficient transportation solutions designed to keep your freight moving safely and on schedule.",
    icon: (
      <svg {...iconProps}>
        <rect x="2.5" y="9" width="12" height="7" rx="1" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.5 11h3.2l3.3 3v2h-6.5"
        />
        <circle cx="7" cy="17.5" r="1.6" />
        <circle cx="16.5" cy="17.5" r="1.6" />
      </svg>
    ),
  },
  {
    title: "Clear Communication",
    description:
      "We believe communication is key. Our team keeps customers and partners informed throughout every step of the transportation process.",
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
    title: "$250K Cargo Insurance",
    description:
      "Your freight is protected with up to $250,000 in cargo insurance, providing added peace of mind with every shipment.",
    icon: (
      <svg {...iconProps}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3l7 3.5v5c0 4.5-3 8-7 9.5-4-1.5-7-5-7-9.5v-5L12 3z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.5 12l1.8 1.8L15 10"
        />
      </svg>
    ),
  },
  {
    title: "170+ Dry Vans",
    description:
      "With a fleet of 170+ dry vans, we have the capacity to handle a wide range of freight transportation needs.",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="7" width="18" height="11" rx="1.5" />
        <path strokeLinecap="round" d="M3 11h18" />
      </svg>
    ),
  },
  {
    title: "7,000+ Loads Annually",
    description:
      "Our team handles over 7,000 loads every year, demonstrating our experience, capacity, and commitment to reliable service.",
    icon: (
      <svg {...iconProps}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 20V11M10 20V5M16 20v-8M20 20v-4"
        />
      </svg>
    ),
  },
];

type Capability = {
  title: string;
  description: string;
  icon: ReactNode;
  locations?: string[];
};

const capabilities: Capability[] = [
  {
    title: "Recovery Drivers",
    description:
      "We have a dedicated team of company drivers available for recovery situations. If a booked truck experiences a breakdown or unexpected issue, our recovery drivers can step in to help keep your shipment moving and minimize delays.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="8.5" />
        <circle cx="12" cy="12" r="2.5" />
        <path
          strokeLinecap="round"
          d="M12 3.5v6M12 14.5v6M4.5 8.5l5 3M14.5 12.5l5-3"
        />
      </svg>
    ),
  },
  {
    title: "Nationwide Coverage",
    description:
      "Our trucks operate across the entire United States, providing reliable freight transportation solutions wherever your business needs us.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="8.5" />
        <path
          strokeLinecap="round"
          d="M3.5 12h17M12 3.5c2.5 2.4 3.8 5.3 3.8 8.5s-1.3 6.1-3.8 8.5c-2.5-2.4-3.8-5.3-3.8-8.5S9.5 5.9 12 3.5z"
        />
      </svg>
    ),
  },
  {
    title: "Cross-Dock Services",
    description:
      "We offer convenient cross-dock solutions through our facilities in Markham, Illinois and Waterloo, Iowa. Our cross-dock locations help customers efficiently transfer, consolidate, and redistribute freight while reducing handling time and keeping shipments moving.",
    icon: (
      <svg {...iconProps}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 21V10l9-6 9 6v11"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 21v-7h6v7" />
      </svg>
    ),
    locations: ["Markham, IL", "Waterloo, IA"],
  },
];

const bookingSteps = [
  "Send us the load details — origin, destination, equipment type, and pickup date.",
  "Our dispatch team confirms capacity and rate, usually within the hour.",
  "We assign a driver and share tracking details for the load.",
  "Your load is delivered on schedule, with POD and paperwork sent promptly.",
];

const carrierInfo = [
  { label: "MC Number", value: "[MC Number]" },
  { label: "DOT Number", value: "[DOT Number]" },
  { label: "Insurance Coverage", value: "[Insurance Coverage Details]" },
  { label: "Payment Terms", value: "[Payment Terms / Quick Pay Details]" },
];

export default function ForBrokersPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden bg-navy-950 pb-16 pt-32">
        <div className="absolute inset-0">
          <Image
            src="/images/for-brokers.png"
            alt="Aerial view of a freight truck on a highway between fields"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/50" />
        </div>
        <div className="container-page relative">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-purple-300">
            For Brokers
          </span>
          <h1 className="font-display text-balance max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
            A Carrier Partner You Can Count On
          </h1>
          <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-navy-100/85 sm:text-lg">
            Reliable capacity, responsive dispatch, and a booking process that
            respects your time.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" variant="primary">
              Get a Quote
            </Button>
            <a
              href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-2.5 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:border-white/70 hover:bg-white/5"
            >
              Call Dispatch: {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Why brokers work with us */}
      <section className="bg-white py-24 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why Brokers Work With Us"
            title="Capacity You Can Depend On"
            description="We know your reputation rides on every load. Here's what brokers can expect when they book with Yopo Transport."
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="group rounded-2xl border border-purple-500/40 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-purple-500/70 hover:shadow-xl hover:shadow-navy-900/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600 transition-colors duration-500 group-hover:bg-purple-500 group-hover:text-white">
                  {reason.icon}
                </div>
                <h3 className="font-display mt-5 text-lg font-semibold text-navy-950">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional capabilities */}
      <section className="bg-navy-950 py-24 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Built to Support Your Freight"
            title="More Ways We Keep Loads Moving"
            description="Beyond day-to-day capacity, here's what backs every load we haul for you."
            align="center"
            tone="light"
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <div
                key={capability.title}
                className="rounded-2xl border border-transparent bg-white p-8 transition-colors duration-500 hover:border-purple-500/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-600">
                  {capability.icon}
                </div>
                <h3 className="font-display mt-6 text-xl font-semibold text-purple-800">
                  {capability.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-purple-700">
                  {capability.description}
                </p>
                {capability.locations ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {capability.locations.map((location) => (
                      <span
                        key={location}
                        className="inline-flex items-center gap-1.5 rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-3 w-3"
                          aria-hidden
                        >
                          <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
                        </svg>
                        {location}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to book a load + carrier info */}
      <section className="bg-navy-50 py-24 sm:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="rounded-2xl bg-navy-950 p-8 sm:p-10">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
              How It Works
            </span>
            <h2 className="font-display text-2xl font-semibold text-white">
              Booking a Load Is Simple
            </h2>
            <ol className="mt-6 space-y-4">
              {bookingSteps.map((step, index) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="font-display flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple-500/15 text-sm font-semibold text-purple-400">
                    {index + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-navy-200">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl border border-navy-900/10 bg-white p-8 sm:p-10">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-purple-600">
              Carrier Information
            </span>
            <h2 className="font-display text-2xl font-semibold text-navy-950">
              Authority &amp; Insurance
            </h2>
            <dl className="mt-6 space-y-4">
              {carrierInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between border-b border-navy-900/10 pb-3"
                >
                  <dt className="text-sm text-navy-600">{item.label}</dt>
                  <dd className="text-sm font-semibold text-navy-950">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-xs text-navy-400">
              Placeholder carrier details shown above — update with your
              company&rsquo;s real MC/DOT numbers and insurance information.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 sm:py-28">
        <div className="container-page text-center">
          <h2 className="font-display text-balance text-3xl font-semibold text-navy-950 sm:text-4xl">
            Ready to Book Your Next Load?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-base leading-relaxed text-navy-700">
            Reach out to our dispatch team with your load details, and
            we&rsquo;ll get back to you with capacity and rate.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="primary">
              Contact Dispatch
            </Button>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center justify-center rounded-full border-2 border-purple-500 px-7 py-3.5 text-sm font-semibold tracking-wide text-purple-600 transition-all duration-300 hover:bg-purple-500 hover:text-navy-950"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
