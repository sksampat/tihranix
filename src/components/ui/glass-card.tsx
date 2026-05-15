import type { ReactNode } from "react";

const cardBase =
  "rounded-2xl border border-brand-border bg-brand-card shadow-[inset_0_1px_0_0_rgb(255_255_255/0.05),0_12px_40px_-24px_rgb(0_0_0/0.55)] backdrop-blur-md transition-[border-color,box-shadow,background-color] duration-300 hover:border-brand-border-hover hover:shadow-[inset_0_1px_0_0_rgb(255_255_255/0.06),0_0_20px_rgb(34_211_238/0.07)]";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section" | "li";
};

export function GlassCard({
  children,
  className = "",
  as: Tag = "div",
}: GlassCardProps) {
  return (
    <Tag className={`${cardBase} p-6 ${className}`}>
      {children}
    </Tag>
  );
}
