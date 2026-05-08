import type { ReactNode } from "react";

const cardBase =
  "rounded-2xl border border-white/[0.08] bg-[rgba(255,255,255,0.03)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_12px_40px_-24px_rgba(0,0,0,0.5)] backdrop-blur-md transition-[border-color,box-shadow,background-color] duration-300 hover:border-[rgba(0,194,168,0.35)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07),0_0_30px_rgba(0,194,168,0.12)]";

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
