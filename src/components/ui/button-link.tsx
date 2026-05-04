import type { ReactNode } from "react";
import { primaryCtaBaseClass } from "@/components/ui/primary-cta-styles";

type Variant = "primary" | "secondary";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
};

const secondaryClass =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.03] px-5 py-3 text-sm font-semibold tracking-tight text-white shadow-[inset_0_1px_0_0_rgb(255_255_255/0.04)] transition-[border-color,background-color,box-shadow] duration-200 hover:border-brand-cyan/35 hover:bg-brand-cyan/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: ButtonLinkProps) {
  const merged =
    variant === "primary"
      ? `${primaryCtaBaseClass} ${className}`
      : `${secondaryClass} ${className}`;

  return (
    <a href={href} onClick={onClick} className={merged}>
      {children}
    </a>
  );
}
