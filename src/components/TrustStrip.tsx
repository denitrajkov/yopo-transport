const badges = [
  "Fully Insured Carrier Network",
  "Nationwide Lane Coverage",
  "24/7 Dispatch Support",
  "Dedicated Account Management",
];

export function TrustStrip() {
  return (
    <div className="border-y border-white/10 bg-navy-950">
      <div className="container-page flex flex-wrap items-center justify-center gap-x-10 gap-y-4 py-8 text-center">
        {badges.map((badge) => (
          <span
            key={badge}
            className="text-xs font-medium uppercase tracking-[0.15em] text-navy-300"
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}