import type { ReactNode } from "react";

const cardBase =
  "rounded-2xl border border-white/[0.08] bg-[linear-gradient(165deg,rgb(255_255_255/0.045)_0%,rgb(255_255_255/0.02)_45%,rgb(0_0_0/0.12)_100%)] shadow-[inset_0_1px_0_0_rgb(255_255_255/0.06),0_12px_40px_-24px_rgb(0_0_0/0.5)] backdrop-blur-md transition-[border-color,box-shadow,background-color] duration-300 hover:border-white/[0.11] hover:shadow-[inset_0_1px_0_0_rgb(255_255_255/0.07),0_16px_48px_-20px_rgb(0_0_0/0.55)]";

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
