import type { BlogContentBlock } from "@/lib/blog";

function ContentBlock({ block, index }: { block: BlogContentBlock; index: number }) {
  switch (block.type) {
    case "heading2":
      return (
        <h2 className="font-display mt-10 text-2xl font-semibold text-navy-950 first:mt-0 sm:text-[1.75rem]">
          {block.text}
        </h2>
      );
    case "heading3":
      return (
        <h3 className="font-display mt-8 text-xl font-semibold text-navy-950">
          {block.text}
        </h3>
      );
    case "list":
      return (
        <ul className="mt-5 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-navy-700">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "paragraph":
    default:
      return (
        <p className={`text-base leading-relaxed text-navy-700 ${index === 0 ? "" : "mt-5"}`}>
          {block.text}
        </p>
      );
  }
}

export function BlogArticle({ content }: { content: BlogContentBlock[] }) {
  return (
    <div className="max-w-none">
      {content.map((block, index) => (
        <ContentBlock key={index} block={block} index={index} />
      ))}
    </div>
  );
}