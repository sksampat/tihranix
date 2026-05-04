import type { ReactNode } from "react";

type Variant = "primary" | "secondary";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-brand-electric to-brand-cyan text-brand-navy shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_12px_40px_-12px_rgba(34,211,238,0.35)] hover:scale-[1.02] hover:shadow-[0_0_32px_-4px_rgba(56,189,248,0.4),0_12px_40px_-12px_rgba(34,211,238,0.45)] active:scale-[0.99]",
  secondary:
    "border border-white/[0.14] bg-white/[0.04] text-brand-soft hover:border-brand-cyan/40 hover:bg-brand-cyan/[0.06]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
