import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/data";

export function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  return (
    <article
      id={service.slug}
      className="group relative flex scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-navy-900/15"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent" />
        <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-xs font-semibold text-navy-900">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-display text-xl font-semibold text-navy-950">
          {service.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-700">
          {service.shortDescription}
        </p>
        <ul className="mt-5 space-y-2 border-t border-navy-900/10 pt-5">
          {service.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-2 text-sm text-navy-700"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
              {highlight}
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 transition-colors group-hover:text-gold-600"
        >
          Request a Quote
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            &rarr;
          </span>
        </Link>
      </div>
    </article>
  );
}