import { processSteps } from "@/lib/data";

export function ProcessSteps() {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {processSteps.map((item, index) => (
        <li
          key={item.step}
          className="group relative rounded-2xl border border-navy-900/10 bg-white p-7 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy-900/10"
        >
          <span className="font-display text-4xl font-semibold text-navy-900/10 transition-colors duration-500 group-hover:text-gold-500/30">
            {item.step}
          </span>
          <h3 className="font-display mt-4 text-lg font-semibold text-navy-950">
            {item.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-navy-700">
            {item.description}
          </p>
          {index < processSteps.length - 1 ? (
            <span
              aria-hidden
              className="absolute right-[-14px] top-1/2 hidden -translate-y-1/2 text-2xl text-navy-900/15 lg:block"
            >
              &rarr;
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  );
}