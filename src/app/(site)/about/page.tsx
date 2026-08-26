import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { CTASection } from "@/components/CTASection";
import { CoreValuesCarousel } from "@/components/CoreValuesCarousel";
import { coreValues } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Yopo Transport's mission, values, and commitment to safe, reliable freight transportation across the United States.",
};

const commitments = [
  {
    title: "Safety",
    description:
      "Safety guides every decision we make, from the carriers we work with to the routes we plan. We hold our operations to a high standard because your freight — and the people moving it — deserve nothing less.",
  },
  {
    title: "Reliability",
    description:
      "We know your business depends on freight arriving when we say it will. That's why we plan carefully, communicate early, and treat every commitment as one we intend to keep.",
  },
  {
    title: "Customer Commitment",
    description:
      "We aim to be more than a vendor — we want to be a transportation partner you trust with your business, your timelines, and your reputation.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[55vh] items-end overflow-hidden bg-navy-950 pb-16 pt-32">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1591768793355-74d04bb6608f?q=80&w=2200&auto=format&fit=crop"
            alt="Logistics team reviewing freight operations"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/50" />
        </div>
        <div className="container-page relative">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold-300">
            About Yopo Transport
          </span>
          <h1 className="font-display text-balance max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
            A Transportation Company Built on Trust and Attention to Detail
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-24 sm:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Why We Started Yopo Transport"
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-navy-700">
              <p>
                Yopo Transport was founded on a simple belief: shipping freight
                shouldn&rsquo;t mean losing visibility, sacrificing
                communication, or wondering whether your delivery will actually
                arrive on time.
              </p>
              <p>
                We set out to build a transportation company that treats every
                shipment — large or small — with the same level of care and
                professionalism, backed by a team that answers the phone and
                follows through on what it promises.
              </p>
              <p>
                {"[Placeholder]"} Today, we continue to grow our carrier network
                and service offerings while staying focused on the fundamentals:
                safety, reliability, and honest communication with every
                customer we serve.
              </p>
            </div>
          </div>
          <div className="relative h-[420px] overflow-hidden rounded-3xl shadow-2xl shadow-navy-950/20">
            <Image
              src="https://images.unsplash.com/photo-1616432043562-3671ea2e5242?q=80&w=1600&auto=format&fit=crop"
              alt="Freight trailers staged at a distribution yard"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-navy-950 py-24 sm:py-28">
        <div className="container-page max-w-3xl text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold-300">
            Our Mission
          </span>
          <p className="font-display text-balance text-2xl font-medium leading-relaxed text-white sm:text-3xl">
            To Move Freight With Precision And Integrity, Giving Businesses A
            Transportation Partner They Can Plan Around And Trust Completely.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy-50 py-24 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Our Core Values"
            align="center"
          />
          <div className="mt-14">
            <CoreValuesCarousel values={coreValues} />
          </div>
        </div>
      </section>

      {/* Safety / Reliability / Customer commitment */}
      {/* <section className="bg-white py-24 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Commitment"
            title="Safety, Reliability, and Customers — in That Order"
            align="center"
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {commitments.map((item, index) => (
              <div key={item.title} className="relative pl-8">
                <span className="font-display absolute left-0 top-0 text-sm font-semibold text-gold-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="absolute left-3 top-2 bottom-0 w-px bg-navy-900/10" />
                <h3 className="font-display text-lg font-semibold text-navy-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <CTASection />
    </>
  );
}
