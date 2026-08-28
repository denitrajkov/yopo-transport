import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { CTASection } from "@/components/CTASection";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Yopo Transport's freight transportation services, including Full Truckload, Less Than Truckload, regional and long-distance transportation, and logistics solutions.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden bg-navy-950 pb-16 pt-32">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2200&auto=format&fit=crop"
            alt="Aerial view of shipping containers at a logistics port"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/50" />
        </div>
        <div className="container-page relative">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-purple-300">
            Our Services
          </span>
          <h1 className="font-display text-balance max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Transportation Solutions Built Around Your Freight
          </h1>
          <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-navy-100/85 sm:text-lg">
            Whether you ship a single pallet or a full trailer, our service
            lines are designed to move your freight efficiently, safely, and
            on schedule.
          </p>
        </div>
      </section>

      <section className="bg-navy-50 py-24 sm:py-28">
        <div className="container-page">
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

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

      <CTASection />
    </>
  );
}