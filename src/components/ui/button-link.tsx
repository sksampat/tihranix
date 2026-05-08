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
  "inline-flex items-center justify-center gap-2 rounded-xl border border-brand-cyan bg-transparent px-5 py-3 text-sm font-semibold tracking-tight text-brand-cyan shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)] transition-[border-color,background-color,box-shadow] duration-200 hover:border-brand-electric hover:bg-brand-cyan/[0.08] hover:shadow-[0_0_20px_rgba(0,194,168,0.15)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan";

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
