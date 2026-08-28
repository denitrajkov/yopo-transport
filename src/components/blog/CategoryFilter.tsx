type CategoryFilterProps = {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
};

export function CategoryFilter({
  categories,
  active,
  onChange,
}: CategoryFilterProps) {
  return (
    <div
      role="tablist"
      aria-label="Filter articles by category"
      className="flex snap-x gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible"
    >
      {categories.map((category) => {
        const isActive = category === active;
        return (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(category)}
            className={`shrink-0 snap-start rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
              isActive
                ? "border-purple-500 bg-purple-500 text-navy-950"
                : "border-navy-900/15 bg-white text-navy-700 hover:border-purple-500/50 hover:text-navy-950"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}