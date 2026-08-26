import { Button } from "@/components/Button";

export function BlogCTA() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-navy-950 px-8 py-14 text-center sm:px-12 sm:py-16">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(194,143,58,0.18),_transparent_60%)]"
      />
      <div className="relative">
        <h2 className="font-display text-balance text-2xl font-semibold text-white sm:text-3xl">
          Ready to Take Control of Your Fleet?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-balance text-sm leading-relaxed text-navy-100/85 sm:text-base">
          Discover how our transportation technology can help you improve
          visibility, reduce costs and manage your fleet more efficiently.
        </p>
        <div className="mt-8">
          <Button href="/contact" variant="primary">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}