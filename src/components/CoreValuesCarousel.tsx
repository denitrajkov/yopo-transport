"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import type { ValueIcon, ValueItem } from "@/lib/data";

const AUTOPLAY_DELAY = 5000;
const ITEMS_PER_PAGE = 3;

const iconProps = {
  className: "h-6 w-6",
  strokeWidth: 1.75,
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

const icons: Record<ValueIcon, ReactNode> = {
  safety: (
    <svg {...iconProps}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3.5v5c0 4.5-3 8-7 9.5-4-1.5-7-5-7-9.5v-5L12 3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 12l1.8 1.8L15 10" />
    </svg>
  ),
  reliability: (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="8.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5V12l3 2" />
    </svg>
  ),
  commitment: (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  transparency: (
    <svg {...iconProps}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z" />
      <circle cx="12" cy="12" r="2.75" />
    </svg>
  ),
  technology: (
    <svg {...iconProps}>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path strokeLinecap="round" d="M9.5 7V4M14.5 7V4M9.5 20v-3M14.5 20v-3M7 9.5H4M7 14.5H4M20 9.5h-3M20 14.5h-3" />
    </svg>
  ),
  standards: (
    <svg {...iconProps}>
      <circle cx="12" cy="9" r="5.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 13.5L7.5 20l4.5-2.5 4.5 2.5-1.5-6.5" />
    </svg>
  ),
  positivity: (
    <svg {...iconProps}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 20s-7-4.35-9.5-8.5C1 8.5 2.5 5 6 5c2 0 3.5 1.2 4 2.5C10.5 6.2 12 5 14 5c3.5 0 5 3.5 3.5 6.5C19.5 15.65 12 20 12 20z" />
    </svg>
  ),
  accountability: (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="8.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 12.5l2.3 2.3L16 10" />
    </svg>
  ),
  improvement: (
    <svg {...iconProps}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 16l5.5-5.5 3.5 3.5 7.5-7.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 6h5v5" />
    </svg>
  ),
};

function chunk<T>(items: T[], size: number): T[][] {
  const pages: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    pages.push(items.slice(i, i + size));
  }
  return pages;
}

export function CoreValuesCarousel({ values }: { values: ValueItem[] }) {
  const pages = useMemo(() => chunk(values, ITEMS_PER_PAGE), [values]);
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
    <div className="relative" onMouseEnter={stopAutoplay} onMouseLeave={startAutoplay}>
      <div className="-mt-2 overflow-hidden">
        <div
          className="flex pt-2 transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
          aria-live="polite"
        >
          {pages.map((page, pageIndex) => (
            <div key={pageIndex} className="w-full shrink-0 px-1">
              <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {page.map((value) => (
                  <div
                    key={value.title}
                    className="flex h-full flex-col items-start rounded-2xl border border-gold-300/70 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold-400 hover:shadow-xl hover:shadow-navy-900/10"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/10 text-gold-700">
                      {icons[value.icon]}
                    </div>
                    <h3 className="font-display mt-5 text-lg font-semibold text-navy-950">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-700">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {pages.length > 1 ? (
        <div className="mt-10 flex items-center justify-center gap-2">
          {pages.map((page, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to values page ${i + 1} of ${pages.length}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-gold-500" : "w-2 bg-navy-900/15 hover:bg-navy-900/30"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}