type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isLight = tone === "light";

  return (
    <div
      className={`max-w-2xl ${isCenter ? "mx-auto text-center" : "text-left"}`}
    >
      {eyebrow ? (
        <span
          className={`mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] ${
            isLight ? "text-purple-300" : "text-purple-600"
          }`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`font-display text-balance text-3xl font-semibold leading-tight sm:text-4xl ${
          isLight ? "text-white" : "text-navy-950"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-balance text-base leading-relaxed sm:text-lg ${
            isLight ? "text-navy-100/80" : "text-navy-700"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}