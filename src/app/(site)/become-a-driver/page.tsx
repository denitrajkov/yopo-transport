import type { Metadata } from "next";
import Image from "next/image";
import { BecomeDriverForm } from "@/components/BecomeDriverForm";

export const metadata: Metadata = {
  title: "Become a Driver",
  description:
    "Apply to drive for Yopo Transport. Submit your information and CDL to be considered for open driving positions.",
};

const highlights = [
  "Consistent, well-planned routes and schedules",
  "Direct communication with dispatch — no runaround",
  "Modern, well-maintained equipment",
];

export default function BecomeADriverPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden bg-navy-950 pb-16 pt-32">
        <div className="absolute inset-0">
          <Image
            src="/images/yopo-truck.png"
            alt="Yopo Transport driver's truck on the road"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/50" />
        </div>
        <div className="container-page relative">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-purple-300">
            Become a Driver
          </span>
          <h1 className="font-display text-balance max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Drive With Yopo Transport
          </h1>
          <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-navy-100/85 sm:text-lg">
            Tell us about yourself and upload your CDL to be considered for
            our driving positions. Our recruiting team will follow up to
            discuss next steps.
          </p>
        </div>
      </section>

      <section className="bg-navy-50 py-24 sm:py-28">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
          <div className="space-y-8">
            <div className="rounded-2xl border border-navy-900/10 bg-white p-7">
              <h2 className="font-display text-lg font-semibold text-navy-950">
                Why Drive With Us
              </h2>
              <ul className="mt-5 space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-navy-700">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-navy-950 p-7">
              <h2 className="font-display text-lg font-semibold text-white">
                What Happens Next?
              </h2>
              <ol className="mt-5 space-y-3 text-sm text-navy-200">
                <li>1. We review your application and CDL.</li>
                <li>2. A member of our recruiting team reaches out.</li>
                <li>3. We walk through next steps and onboarding.</li>
              </ol>
            </div>
          </div>

            <div className="rounded-2xl border border-navy-900/10 bg-white p-7 sm:p-9">
              <BecomeDriverForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}