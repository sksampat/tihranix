import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

const values = [
  "Lower implementation complexity",
  "Reduced data movement",
  "Improved governance and compliance",
  "Faster time-to-value",
] as const;

export function BringIntelligenceSection() {
  return (
    <PageSection
      id="intelligence"
      aria-labelledby="intelligence-heading"
      className="py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="space-y-6">
            <SectionHeading
              headingId="intelligence-heading"
              eyebrow="Distributed intelligence architecture"
              title="Bring Intelligence to the Data"
              description="Enterprise data is fragmented across ERPs, warehouse systems, spreadsheets, and operational tools. Traditional AI platforms require organizations to centralize data before generating insights."
            />
            <p className="max-w-xl text-base leading-relaxed text-brand-muted lg:text-lg">
              Tihranix deploys governed intelligence directly where enterprise data resides,
              reducing unnecessary data movement while accelerating decision-making.
            </p>
            <p className="max-w-xl text-sm font-medium leading-relaxed text-brand-soft">
              Dead inventory is what we solve. Distributed intelligence is why we win.
            </p>
          </div>

          <GlassCard className="p-6 sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-muted">
              What this unlocks
            </p>
            <ul className="mt-5 space-y-4">
              {values.map((v) => (
                <li
                  key={v}
                  className="flex items-start gap-3 text-sm leading-relaxed text-brand-soft"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-cyan"
                    aria-hidden
                  />
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    </PageSection>
  );
}
