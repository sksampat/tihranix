type SectionHeadingProps = {
  /** Sets `id` on the heading for `aria-labelledby` on the section. */
  headingId?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  headingId,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "mx-auto text-center" : "";
  return (
    <div className={`max-w-3xl space-y-4 ${alignClass}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={headingId}
        className="text-2xl font-semibold tracking-tight text-brand-soft sm:text-3xl lg:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-brand-muted lg:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
