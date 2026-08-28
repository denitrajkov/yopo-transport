import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { ProcessSteps } from "@/components/ProcessSteps";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { CTASection } from "@/components/CTASection";
import { services, testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "For Shippers",
  description:
    "Freight transportation solutions built for shippers — reliable capacity, real-time visibility, and dedicated support from quote to delivery.",
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
    title: "On-Time Performance",
    description:
      "We build routes and schedules around your delivery windows, and communicate early if anything changes.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="8.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5V12l3 2" />
      </svg>
    ),
  },
  {
    title: "Real-Time Visibility",
    description:
      "Track shipments as they move, with proactive status updates instead of chasing down check calls.",
    icon: (
      <svg {...iconProps}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
        <circle cx="12" cy="12" r="2.75" />
      </svg>
    ),
  },
  {
    title: "Flexible Capacity",
    description:
      "From a single pallet to a full trailer, our service lines scale with the way your business ships.",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="7" width="18" height="11" rx="1.5" />
        <path strokeLinecap="round" d="M3 11h18" />
      </svg>
    ),
  },
  {
    title: "Dedicated Support",
    description:
      "A single point of contact who knows your freight, from the first quote through final delivery.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="8" r="3.25" />
        <path strokeLinecap="round" d="M5.5 20c1-3.5 3.8-5.5 6.5-5.5s5.5 2 6.5 5.5" />
      </svg>
    ),
  },
];

export default function ForShippersPage() {
  const featuredServices = services.slice(0, 3);

  return (
    <>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden bg-navy-950 pb-16 pt-32">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2200&auto=format&fit=crop"
            alt="Warehouse racking staged with freight ready for shipment"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/50" />
        </div>
        <div className="container-page relative">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold-300">
            For Shippers
          </span>
          <h1 className="font-display text-balance max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Freight Solutions Built Around Your Business
          </h1>
          <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-navy-100/85 sm:text-lg">
            Reliable capacity, clear communication, and a team that treats
            your freight like it matters — because it does.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" variant="primary">
              Request a Quote
            </Button>
            <Button href="/services" variant="secondary">
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      {/* Why ship with us */}
      <section className="bg-white py-24 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why Shippers Choose Us"
            title="A Transportation Partner You Can Plan Around"
            description="We built our operation around the details that make shipping stressful — so you don't have to worry about them."
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

      {/* Services recap */}
      <section className="bg-navy-50 py-24 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Services for Every Shipment"
            title="Whatever You Ship, We Have a Lane for It"
            description="From full truckload to dedicated capacity, our service lines are built to match how your business ships."
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {featuredServices.map((service) => (
              <div
                key={service.slug}
                className="rounded-2xl border border-navy-900/10 bg-white p-6"
              >
                <h3 className="font-display text-lg font-semibold text-navy-950">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700">
                  {service.shortDescription}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/services" variant="gold-outline">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-24 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="How It Works"
            title="Getting Your Freight Moving Is Simple"
            align="center"
          />
          <div className="mt-14">
            <ProcessSteps />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-navy-950 py-24 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Client Feedback"
            title="What Shippers Say"
            align="center"
            tone="light"
          />
          <p className="mx-auto mt-3 max-w-xl text-balance text-center text-xs text-navy-400">
            Sample testimonials shown for layout purposes — replace with
            real, permissioned client feedback.
          </p>
          <div className="mt-14">
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}