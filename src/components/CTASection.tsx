import Image from "next/image";
import { Button } from "@/components/Button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1616432043562-3671ea2e5242?q=80&w=2000&auto=format&fit=crop"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/40" />
      </div>

      <div className="container-page relative py-24 text-center sm:py-28">
        <h2 className="font-display text-balance text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
          Ready to move your freight with a partner you can trust?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-balance text-base leading-relaxed text-navy-100/85 sm:text-lg">
          Tell us about your shipment and our team will put together a
          transportation plan built around your timeline and budget.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/contact" variant="primary">
            Request a Quote
          </Button>
          <Button href="/services" variant="secondary">
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
}