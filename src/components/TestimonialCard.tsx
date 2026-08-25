import type { Testimonial } from "@/lib/data";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="mx-auto flex h-full max-w-3xl flex-col rounded-2xl border border-gold-500/40 bg-white/[0.04] p-8 backdrop-blur-sm transition-colors duration-300 hover:border-gold-500/70 hover:bg-white/[0.06] sm:p-10">
      <span aria-hidden className="font-display text-5xl text-gold-500/70">
        &ldquo;
      </span>
      <blockquote className="mt-2 flex-1 text-balance text-lg leading-relaxed text-navy-100 sm:text-xl">
        {testimonial.quote}
      </blockquote>
      <figcaption className="mt-8 border-t border-white/10 pt-6">
        <p className="text-base font-semibold text-white">{testimonial.name}</p>
        <p className="text-sm text-navy-300">{testimonial.role}</p>
      </figcaption>
    </figure>
  );
}