import { stats } from "@/lib/data";

export function StatsSection() {
  return (
    <section
      aria-labelledby="stats-heading"
      className="border-y border-white/10 bg-navy-900"
    >
      <div className="container-page py-16 sm:py-20">
        <h2 id="stats-heading" className="sr-only">
          Company statistics
        </h2>
        <dl className="grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <dd className="font-display text-4xl font-semibold text-white sm:text-5xl">
                {stat.value}
              </dd>
              <dt className="mt-2 text-xs font-medium uppercase tracking-wider text-navy-300 sm:text-sm">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
