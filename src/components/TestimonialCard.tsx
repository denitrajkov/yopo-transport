import type { Testimonial } from "@/lib/data";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-purple-500/40 bg-white/[0.04] p-7 backdrop-blur-sm transition-colors duration-300 hover:border-purple-500/70 hover:bg-white/[0.06] sm:p-8">
      <span aria-hidden className="font-display text-4xl text-purple-500/70">
        &ldquo;
      </span>
      <blockquote className="mt-2 flex-1 text-balance text-lg leading-relaxed text-navy-100">
        {testimonial.quote}
      </blockquote>
      <figcaption className="mt-8 border-t border-white/10 pt-6">
        <p className="text-base font-semibold text-white">{testimonial.name}</p>
        <p className="text-sm text-navy-300">{testimonial.role}</p>
      </figcaption>
    </figure>
  );
}