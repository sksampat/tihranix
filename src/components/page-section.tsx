import type { ReactNode } from "react";

type PageSectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  "aria-labelledby"?: string;
};

export function PageSection({
  id,
  children,
  className = "",
  "aria-labelledby": labelledBy,
}: PageSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`scroll-mt-24 ${className}`}
    >
      {children}
    </section>
  );
}
