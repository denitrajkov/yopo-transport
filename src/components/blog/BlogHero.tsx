import Image from "next/image";

export function BlogHero() {
  return (
    <section className="relative flex min-h-[46vh] items-end overflow-hidden bg-navy-950 pb-16 pt-32">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1774116196662-a9e1e4fa1612?q=80&w=2200&auto=format&fit=crop"
          alt="Freight truck silhouetted against mountains at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/80 to-navy-950/50" />
      </div>
      <div className="container-page relative">
        <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-purple-300">
          Blog
        </span>
        <h1 className="font-display text-balance max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
          Transportation Insights
        </h1>
        <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-navy-100/85 sm:text-lg">
          Expert insights, strategies and technology helping modern fleets
          operate smarter, safer and more efficiently.
        </p>
      </div>
    </section>
  );
}