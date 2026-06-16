import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";

const pressures = [
  "Demand volatility",
  "Increasing inventory carrying costs",
  "Pressure to improve cash flow",
  "Overloaded planning teams",
  "Disconnected operational systems",
] as const;

export function WhyNowSection() {
  return (
    <PageSection
      id="why-now"
      aria-labelledby="why-now-heading"
      className="border-t border-brand-border bg-brand-navy py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="space-y-6">
            <SectionHeading
              headingId="why-now-heading"
              eyebrow="Why now"
              title="Why Now"
              description="Supply chain teams face increasing pressure to improve working capital efficiency while operating with fragmented systems and growing uncertainty."
            />
            <p className="max-w-xl text-base leading-relaxed text-brand-muted lg:text-lg">
              Traditional analytics explain what happened. Tihranix helps teams decide what to
              do next.
            </p>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {pressures.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 rounded-2xl border border-brand-border bg-brand-card p-5 text-sm leading-relaxed text-brand-soft"
              >
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-cyan"
                  aria-hidden
                />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageSection>
  );
}
