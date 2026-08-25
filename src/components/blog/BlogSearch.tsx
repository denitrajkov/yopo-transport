type BlogSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export function BlogSearch({ value, onChange }: BlogSearchProps) {
  return (
    <div className="relative w-full sm:max-w-xs">
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.75}
        className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-400"
      >
        <circle cx="11" cy="11" r="7" />
        <path strokeLinecap="round" d="M20 20l-3.5-3.5" />
      </svg>
      <label htmlFor="blog-search" className="sr-only">
        Search articles
      </label>
      <input
        id="blog-search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search articles..."
        className="w-full rounded-full border border-navy-900/15 bg-white py-2.5 pl-10 pr-4 text-sm text-navy-950 placeholder:text-navy-400 transition-colors duration-200 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/30"
      />
    </div>
  );
}