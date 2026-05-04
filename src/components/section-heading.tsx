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
    <div className={`max-w-3xl space-y-5 ${alignClass}`}>
      {eyebrow ? (
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-cyan">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={headingId}
        className="text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-[2.35rem] lg:leading-[1.12]"
      >
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-brand-muted lg:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
