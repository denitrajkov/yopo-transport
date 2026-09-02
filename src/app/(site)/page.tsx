import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { StatsSection } from "@/components/StatsSection";
import { ProcessSteps } from "@/components/ProcessSteps";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { CTASection } from "@/components/CTASection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { TrustStrip } from "@/components/TrustStrip";
import { services, testimonials } from "@/lib/data";

export default function HomePage() {
  const featuredServices = services.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-navy-950">
        <div className="absolute inset-0">
          <video
            src="/videos/video-truck.mp4"
            poster="/videos/video-truck-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-navy-950/60 to-navy-950/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />
        </div>

        <div className="container-page relative pt-24">
          <div className="max-w-2xl animate-fade-up">
            <span className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-purple-300">
              Premium Freight &amp; Logistics
            </span>
            <h1 className="font-display text-balance text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Freight Moved With Precision, Across the Country
            </h1>
            <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-navy-100/85 sm:text-lg">
              Yopo Transport delivers dependable freight transportation and
              logistics solutions for businesses that need their shipments
              handled with care, communicated clearly, and delivered on
              schedule.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact" variant="primary">
                Request a Quote
              </Button>
              <Button href="/services" variant="secondary">
                Our Services
              </Button>
            </div>
          </div>
        </div>

        <div
          aria-hidden
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-fade-in flex-col items-center gap-2 text-navy-200 lg:flex"
          style={{ animationDelay: "0.6s" }}
        >
          <span className="text-[11px] uppercase tracking-[0.2em]">Scroll</span>
          <span className="h-10 w-px bg-gradient-to-b from-navy-200 to-transparent" />
        </div>
      </section>

      <TrustStrip />

      {/* About preview */}
      <section className="bg-white py-24 sm:py-28">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2">
          <div className="relative order-2 h-[420px] overflow-hidden rounded-3xl shadow-2xl shadow-navy-950/20 lg:order-1">
            <Image
              src="/images/yopo-truck.webp"
              alt="Yopo Transport truck parked outside the company office"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="About Yopo Transport"
              title="A Transportation Partner Built Around Reliability"
              description="Yopo Transport was founded to bring a more attentive, professional standard to freight transportation — one where communication is clear, timelines are honored, and every shipment gets the attention it deserves."
            />
            <ul className="mt-8 space-y-4">
              {[
                "Careful carrier vetting and route planning",
                "Consistent, proactive communication",
                "Service built around your schedule, not ours",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-purple-500/15 text-purple-600">
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-3 w-3"
                      aria-hidden
                    >
                      <path d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 111.4-1.4l3.6 3.6 6.7-6.7a1 1 0 011.4 0z" />
                    </svg>
                  </span>
                  <span className="text-sm leading-relaxed text-navy-700 sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <Button href="/about" variant="purple-outline">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Shippers & Brokers */}
      <section className="bg-navy-950 py-24 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Who We Serve"
            title="Built for Shippers and Brokers Alike"
            description="Whether you're moving freight or booking capacity, we make it simple to work with us."
            align="center"
            tone="light"
          />
          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <Link
              href="/for-shippers"
              className="group relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-3xl border border-purple-500/30 shadow-xl shadow-navy-950/40 transition-all duration-500 hover:-translate-y-1.5 hover:border-purple-500/60 hover:shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1600&auto=format&fit=crop"
                alt="Warehouse racking staged with freight ready for shipment"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/10" />
              <div className="relative p-8 sm:p-10">
                <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
                  For Shippers
                </span>
                <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                  Ship With Confidence
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-navy-100/85">
                  Reliable capacity, real-time visibility, and dedicated support
                  — built around how your business ships.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors group-hover:text-purple-300">
                  Explore Shipper Solutions
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </span>
              </div>
            </Link>

            <Link
              href="/for-brokers"
              className="group relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-3xl border border-purple-500/30 shadow-xl shadow-navy-950/40 transition-all duration-500 hover:-translate-y-1.5 hover:border-purple-500/60 hover:shadow-2xl"
            >
              <Image
                src="/images/for-brokers.png"
                alt="Aerial view of a freight truck on a highway between fields"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/10" />
              <div className="relative p-8 sm:p-10">
                <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
                  For Brokers
                </span>
                <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                  Partner With a Carrier You Trust
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-navy-100/85">
                  Reliable capacity, responsive dispatch, and a booking process
                  that respects your time.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors group-hover:text-purple-300">
                  Explore Broker Resources
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    &rarr;
                  </span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="bg-navy-50 py-24 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="What We Offer"
            title="Transportation Solutions for Every Shipment"
            description="From single pallets to full trailers, our service lines are built to match the way your business ships."
            align="center"
          />
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-14 text-center">
            <Button href="/services" variant="purple-outline">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-28">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_at_top,_rgba(131,85,184,0.08),_transparent_65%)]"
        />
        <div className="container-page relative">
          <SectionHeading
            eyebrow="Why Choose Yopo Transport"
            title="Freight Handled the Way It Should Be"
            description="We built our operation around the details that make freight transportation stressful — so you don't have to worry about them."
            align="center"
          />
          <div className="mt-14">
            <WhyChooseUs />
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Process */}
      <section className="bg-navy-50 py-24 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="How It Works"
            title="A Simple, Transparent Process"
            description="From your first request to final delivery, here's what working with Yopo Transport looks like."
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
            title="What Our Clients Say"
            align="center"
            tone="light"
          />
          <p className="mx-auto mt-3 max-w-xl text-balance text-center text-xs text-navy-400">
            Sample testimonials shown for layout purposes — replace with real,
            permissioned client feedback.
          </p>
          <div className="mt-14">
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>

      <CTASection variant="driver" />
    </>
  );
}
