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
  "inline-flex items-center justify-center gap-2 rounded-xl border border-[rgb(148_163_184/0.22)] bg-[rgb(15_23_42/0.72)] px-5 py-3 text-sm font-semibold tracking-tight text-brand-secondary shadow-[inset_0_1px_0_0_rgb(255_255_255/0.04)] transition-[border-color,background-color,box-shadow,color] duration-200 hover:border-[rgb(34_211_238/0.38)] hover:bg-[rgb(15_23_42/0.88)] hover:text-brand-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-electric";

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
