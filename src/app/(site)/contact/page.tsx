import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact & Request a Quote",
  description:
    "Contact Yopo Transport or request a freight transportation quote. Our team will respond with a custom transportation plan.",
};

const contactDetails = [
  {
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`,
  },
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    label: "Address",
    value: siteConfig.address,
    href: siteConfig.mapsUrl,
    newTab: true,
  },
  {
    label: "Hours",
    value: siteConfig.hoursShort,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden bg-navy-950 pb-16 pt-32">
        <div className="absolute inset-0">
          <Image
            src="/images/yopo-our-story.png"
            alt="Yopo Transport freight trailers staged at the distribution yard"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/50" />
        </div>
        <div className="container-page relative">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-purple-300">
            Contact Us
          </span>
          <h1 className="font-display text-balance max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Request a Quote
          </h1>
          <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-navy-100/85 sm:text-lg">
            Tell us about your shipment and our team will follow up with a
            custom transportation plan. Prefer to talk it through? Reach us
            directly using the information below.
          </p>
        </div>
      </section>

      <section className="bg-navy-50 py-24 sm:py-28">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
            <div className="space-y-8">
              <div className="rounded-2xl border border-navy-900/10 bg-white p-7">
                <h2 className="font-display text-lg font-semibold text-navy-950">
                  Get in Touch
                </h2>
                <dl className="mt-5 space-y-4">
                  {contactDetails.map((detail) => (
                    <div key={detail.label}>
                      <dt className="text-xs font-medium uppercase tracking-wider text-navy-400">
                        {detail.label}
                      </dt>
                      <dd className="mt-1 text-sm text-navy-800">
                        {detail.href ? (
                          <a
                            href={detail.href}
                            target={detail.newTab ? "_blank" : undefined}
                            rel={detail.newTab ? "noopener noreferrer" : undefined}
                            className="transition-colors hover:text-purple-600"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          detail.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-6 text-xs text-navy-400">
                  Placeholder contact information shown above — update with
                  your company&rsquo;s real details.
                </p>
              </div>

              <div className="rounded-2xl bg-navy-950 p-7">
                <h2 className="font-display text-lg font-semibold text-white">
                  What Happens Next?
                </h2>
                <ol className="mt-5 space-y-3 text-sm text-navy-200">
                  <li>1. We review your shipment details.</li>
                  <li>2. Our team follows up with pricing and options.</li>
                  <li>3. We confirm pickup and get your freight moving.</li>
                </ol>
              </div>
            </div>

            <div className="rounded-2xl border border-navy-900/10 bg-white p-7 sm:p-9">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-purple-600">
              Our Location
            </span>
            <h2 className="font-display text-3xl font-semibold text-navy-950 sm:text-4xl">
              Find Us
            </h2>
          </div>

          <div className="mt-10 overflow-hidden rounded-3xl border border-navy-900/10 shadow-xl shadow-navy-950/10">
            <iframe
              src={siteConfig.mapsEmbedUrl}
              width="100%"
              height="450"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Yopo Transport location on Google Maps"
              className="h-[320px] w-full border-0 sm:h-[440px]"
            />
          </div>

          <a
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 transition-colors hover:text-purple-600"
          >
            Open in Google Maps
            <span aria-hidden className="transition-transform duration-300">
              &rarr;
            </span>
          </a>
        </div>
      </section>
    </>
  );
}