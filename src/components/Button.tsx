import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "gold-outline";

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-gold-500 text-navy-950 hover:bg-gold-400 shadow-lg shadow-gold-950/20 hover:shadow-gold-500/30",
  secondary:
    "bg-transparent text-white border border-white/30 hover:border-white/70 hover:bg-white/5",
  ghost:
    "bg-transparent text-navy-900 border border-navy-900/15 hover:border-navy-900/40 hover:bg-navy-900/5",
  "gold-outline":
    "bg-transparent text-gold-600 border-2 border-gold-500 hover:bg-gold-500 hover:text-navy-950 hover:shadow-lg hover:shadow-gold-500/25",
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950";

type ButtonProps = {
  variant?: Variant;
  href?: string;
  children: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"button">;

export function Button({
  variant = "primary",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}