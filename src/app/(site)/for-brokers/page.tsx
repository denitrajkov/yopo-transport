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
    title: "Reliable Capacity",
    description:
      "Consistent truck availability across regional and long-haul lanes, so your loads don't fall through at the last minute.",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="7" width="18" height="11" rx="1.5" />
        <path strokeLinecap="round" d="M3 11h18" />
      </svg>
    ),
  },
  {
    title: "Responsive Communication",
    description:
      "Quick load confirmations and status updates from a team that actually answers the phone.",
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
    title: "On-Time Performance",
    description:
      "Dependable pickup and delivery windows that help protect your relationship with the shipper.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="8.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5V12l3 2" />
      </svg>
    ),
  },
  {
    title: "Easy to Work With",
    description:
      "A straightforward booking process with minimal back-and-forth, so you can move on to your next load.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="8.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 12.5l2.3 2.3L16 10" />
      </svg>
    ),
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
            src="https://images.unsplash.com/photo-1761133381018-aed5063d22fe?q=80&w=2200&auto=format&fit=crop"
            alt="Aerial view of a freight truck on a highway between fields"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/50" />
        </div>
        <div className="container-page relative">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold-300">
            For Brokers
          </span>
          <h1 className="font-display text-balance max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
            A Carrier Partner You Can Count On
          </h1>
          <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-navy-100/85 sm:text-lg">
            Reliable capacity, responsive dispatch, and a booking process
            that respects your time.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" variant="primary">
              Book a Load
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
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="group rounded-2xl border border-gold-500/40 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold-500/70 hover:shadow-xl hover:shadow-navy-900/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-950 text-gold-400 transition-colors duration-500 group-hover:bg-gold-500 group-hover:text-navy-950">
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

      {/* How to book a load + carrier info */}
      <section className="bg-navy-50 py-24 sm:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="rounded-2xl bg-navy-950 p-8 sm:p-10">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              How It Works
            </span>
            <h2 className="font-display text-2xl font-semibold text-white">
              Booking a Load Is Simple
            </h2>
            <ol className="mt-6 space-y-4">
              {bookingSteps.map((step, index) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="font-display flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-sm font-semibold text-gold-400">
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
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
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
              className="inline-flex items-center justify-center rounded-full border-2 border-gold-500 px-7 py-3.5 text-sm font-semibold tracking-wide text-gold-600 transition-all duration-300 hover:bg-gold-500 hover:text-navy-950"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}