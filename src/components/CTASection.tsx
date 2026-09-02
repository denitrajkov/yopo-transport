import Image from "next/image";
import { Button } from "@/components/Button";

type CTAVariant = "quote" | "driver";

type CTASectionProps = {
  variant?: CTAVariant;
};

const content: Record<
  CTAVariant,
  {
    title: string;
    description: string;
    primaryHref: string;
    primaryLabel: string;
    primaryVariant: "primary" | "primary-white";
    secondaryHref: string;
    secondaryLabel: string;
  }
> = {
  quote: {
    title: "Ready to Move Your Freight With a Partner You Can Trust?",
    description:
      "Tell us about your shipment and our team will put together a transportation plan built around your timeline and budget.",
    primaryHref: "/contact",
    primaryLabel: "Request a Quote",
    primaryVariant: "primary",
    secondaryHref: "/services",
    secondaryLabel: "Explore Services",
  },
  driver: {
    title: "Ready to Drive With a Company That Has Your Back?",
    description:
      "Join a growing fleet built on consistent miles, respectful dispatch, and a team that treats drivers like professionals.",
    primaryHref: "/become-a-driver",
    primaryLabel: "Become a Driver",
    primaryVariant: "primary-white",
    secondaryHref: "/team",
    secondaryLabel: "Meet Our Team",
  },
};

export function CTASection({ variant = "quote" }: CTASectionProps) {
  const copy = content[variant];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1616432043562-3671ea2e5242?q=80&w=2000&auto=format&fit=crop"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/40" />
      </div>

      <div className="container-page relative py-24 text-center sm:py-28">
        <h2 className="font-display text-balance text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
          {copy.title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-balance text-base leading-relaxed text-navy-100/85 sm:text-lg">
          {copy.description}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={copy.primaryHref} variant={copy.primaryVariant}>
            {copy.primaryLabel}
          </Button>
          <Button href={copy.secondaryHref} variant="secondary">
            {copy.secondaryLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
