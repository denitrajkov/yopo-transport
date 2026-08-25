import type { Testimonial } from "@/lib/data";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm transition-colors duration-300 hover:border-gold-500/30 hover:bg-white/[0.06]">
      <span aria-hidden className="font-display text-4xl text-gold-500/70">
        &ldquo;
      </span>
      <blockquote className="mt-2 flex-1 text-balance text-base leading-relaxed text-navy-100">
        {testimonial.quote}
      </blockquote>
      <figcaption className="mt-6 border-t border-white/10 pt-5">
        <p className="text-sm font-semibold text-white">{testimonial.name}</p>
        <p className="text-xs text-navy-300">{testimonial.role}</p>
      </figcaption>
    </figure>
  );
}