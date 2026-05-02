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
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-[#22C55E] to-[#00C2A8] text-[#0B1220] shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_12px_40px_-12px_rgba(0,194,168,0.45)] hover:scale-[1.02] hover:shadow-[0_0_28px_-4px_rgba(74,222,128,0.35),0_12px_40px_-12px_rgba(0,194,168,0.5)] active:scale-[0.99]",
  secondary:
    "border border-[#22C55E] bg-transparent text-brand-green hover:bg-[#22C55E]/10",
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
