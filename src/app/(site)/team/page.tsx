import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { TeamCard } from "@/components/TeamCard";
import { CTASection } from "@/components/CTASection";
import { teamDepartments, teamMembers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the Yopo Transport team behind our freight transportation and logistics operations.",
};

export default function TeamPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden bg-navy-950 pb-16 pt-32">
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
            Our Team
          </span>
          <h1 className="font-display text-balance max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
            The People Behind Every Shipment
          </h1>
          <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-navy-100/85 sm:text-lg">
            From dispatch to delivery, our team is committed to moving your
            freight with care and professionalism.
          </p>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-28">
        <div className="container-page">
          <SectionHeading
            eyebrow="Meet the Team"
            title="Placeholder Team Profiles"
            description="The profiles below are placeholders for layout purposes. Replace names, titles, bios, and photos with your real team once available."
            align="center"
          />
          <div className="mt-14 space-y-16">
            {teamDepartments.map((department) => {
              const members = teamMembers.filter(
                (member) => member.department === department
              );
              if (members.length === 0) return null;

              return (
                <div key={department}>
                  <h3 className="font-display text-xl font-semibold text-navy-950">
                    {department}
                  </h3>
                  <div className="mt-6 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
                    {members.map((member) => (
                      <TeamCard key={member.id} member={member} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}