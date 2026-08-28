"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Testimonial } from "@/lib/data";
import { TestimonialCard } from "@/components/TestimonialCard";

const AUTOPLAY_DELAY = 6000;
const ITEMS_PER_PAGE = 3;

function chunk<T>(items: T[], size: number): T[][] {
  const pages: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    pages.push(items.slice(i, i + size));
  }
  return pages;
}

export function TestimonialsCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const pages = useMemo(
    () => chunk(testimonials, ITEMS_PER_PAGE),
    [testimonials]
  );
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopAutoplay = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % pages.length);
    }, AUTOPLAY_DELAY);
  }, [stopAutoplay, pages.length]);

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, [startAutoplay, stopAutoplay]);

  function goTo(nextIndex: number) {
    setIndex((nextIndex + pages.length) % pages.length);
    startAutoplay();
  }

  return (
    <div
      className="relative"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
          aria-live="polite"
        >
          {pages.map((page, pageIndex) => (
            <div key={pageIndex} className="w-full shrink-0 px-1">
              <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {page.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {pages.length > 1 ? (
        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous testimonials"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition-colors duration-200 hover:border-purple-500 hover:text-purple-400"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-4 w-4" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 5l-7 7 7 7" />
            </svg>
          </button>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {pages.map((page, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to testimonials page ${i + 1} of ${pages.length}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-purple-500" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next testimonials"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-white transition-colors duration-200 hover:border-purple-500 hover:text-purple-400"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-4 w-4" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      ) : null}
    </div>
  );
}