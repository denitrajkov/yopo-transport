import type { ReactNode } from "react";
import Link from "next/link";
import type { BlogContentBlock } from "@/lib/blog";

const INLINE_LINK_PATTERN = /\[([^\]]+)\]\((\/[a-z0-9-/]*)\)/gi;

function renderInlineText(text: string): ReactNode {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  INLINE_LINK_PATTERN.lastIndex = 0;

  while ((match = INLINE_LINK_PATTERN.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    nodes.push(
      <Link
        key={`${match[2]}-${match.index}`}
        href={match[2]}
        className="font-medium text-purple-600 underline-offset-2 hover:underline"
      >
        {match[1]}
      </Link>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

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
              <span>{renderInlineText(item)}</span>
            </li>
          ))}
        </ul>
      );
    case "paragraph":
    default:
      return (
        <p className={`text-base leading-relaxed text-navy-700 ${index === 0 ? "" : "mt-5"}`}>
          {renderInlineText(block.text)}
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