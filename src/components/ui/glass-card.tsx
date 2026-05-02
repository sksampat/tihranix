import type { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
};

export function GlassCard({
  children,
  className = "",
  as: Tag = "div",
}: GlassCardProps) {
  return (
    <Tag
      className={`rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur-md ${className}`}
    >
      {children}
    </Tag>
  );
}
