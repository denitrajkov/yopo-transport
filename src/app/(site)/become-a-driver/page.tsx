import type { Metadata } from "next";
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
    <section className="bg-navy-50 pb-24 pt-36 sm:pb-28 sm:pt-40">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
            Become a Driver
          </span>
          <h1 className="font-display text-balance text-4xl font-semibold leading-tight text-navy-950 sm:text-5xl">
            Drive With Yopo Transport
          </h1>
          <p className="mt-5 text-balance text-base leading-relaxed text-navy-700 sm:text-lg">
            Tell us about yourself and upload your CDL to be considered for
            our driving positions. Our recruiting team will follow up to
            discuss next steps.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
          <div className="space-y-8">
            <div className="rounded-2xl border border-navy-900/10 bg-white p-7">
              <h2 className="font-display text-lg font-semibold text-navy-950">
                Why Drive With Us
              </h2>
              <ul className="mt-5 space-y-3">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-navy-700">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
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
  );
}