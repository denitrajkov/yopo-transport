import Image from "next/image";
import type { TeamMember } from "@/lib/data";

const iconProps = {
  className: "h-4 w-4 shrink-0",
  strokeWidth: 1.75,
  fill: "none",
  stroke: "currentColor",
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group flex flex-col items-center rounded-2xl border border-purple-500/40 bg-white p-8 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-purple-500/70 hover:shadow-xl hover:shadow-navy-900/10">
      <div className="relative h-40 w-40 overflow-hidden rounded-full ring-4 ring-purple-500/10">
        <Image
          src={member.image}
          alt={`Portrait placeholder for ${member.name}`}
          fill
          sizes="160px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      <h3 className="font-display mt-5 text-lg font-semibold text-navy-950">
        {member.name}
      </h3>
      <p className="mt-1 text-sm font-medium text-purple-600">{member.role}</p>

      <div className="mt-5 flex w-full flex-col items-center gap-2.5 border-t border-navy-900/10 pt-5">
        <a
          href={`tel:${member.phone.replace(/[^\d+]/g, "")}`}
          className="inline-flex items-center gap-2 text-sm text-navy-700 transition-colors hover:text-purple-600"
        >
          <svg {...iconProps}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 4.5c0-.6.4-1 1-1h2.4c.5 0 .9.3 1 .8l.7 3a1 1 0 01-.3 1L7.8 9.7a12 12 0 006.5 6.5l1.4-1.5a1 1 0 011-.3l3 .7c.5.1.8.5.8 1v2.4c0 .6-.4 1-1 1C11.5 19.5 4.5 12.5 4.5 4.5z"
            />
          </svg>
          {member.phone}
        </a>
        <a
          href={`mailto:${member.email}`}
          className="inline-flex items-center gap-2 text-sm text-navy-700 transition-colors hover:text-purple-600"
        >
          <svg {...iconProps}>
            <rect x="4" y="5" width="16" height="14" rx="2" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 5.5l7.5 6.5 7.5-6.5" />
          </svg>
          <span className="break-all">{member.email}</span>
        </a>
      </div>
    </article>
  );
}