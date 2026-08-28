import Image from "next/image";
import type { TeamMember } from "@/lib/data";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-navy-900/10">
      <div className="relative h-72 w-full overflow-hidden">
        <Image
          src={member.image}
          alt={`Portrait placeholder for ${member.name}`}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-lg font-semibold text-navy-950">
          {member.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-purple-600">{member.role}</p>
        <p className="mt-3 text-sm leading-relaxed text-navy-700">
          {member.bio}
        </p>
      </div>
    </article>
  );
}