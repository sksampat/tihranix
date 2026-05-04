import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

const metrics = [
  {
    title: "Working capital released",
    body: "Cash back on the balance sheet from disciplined liquidation and reallocation—not one-off fire sales.",
  },
  {
    title: "Dead inventory reduced",
    body: "Measured reduction in non-moving exposure with clear attribution to actions taken.",
  },
  {
    title: "Margin risk controlled",
    body: "Scenario bounds keep discount depth, channel mix, and price ladders inside executive guardrails.",
  },
  {
    title: "Service levels protected",
    body: "Availability and fill-rate constraints stay in the model so capital moves do not surprise operations.",
  },
] as const;

export function RoiSection() {
  return (
    <PageSection
      id="roi"
      aria-labelledby="roi-heading"
      className="py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl space-y-14 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          headingId="roi-heading"
          align="center"
          title="Measure the platform in cash unlocked."
          description="Executives fund programs that show up in working capital, margin, and service metrics—not slide decks."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <GlassCard key={m.title} as="article" className="flex flex-col">
              <h3 className="text-base font-semibold text-brand-soft">{m.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-muted">
                {m.body}
              </p>
            </GlassCard>
          ))}
        </div>
        <GlassCard className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-brand-soft">
            Model a 90-day cash unlock scenario using your current inventory data.
          </p>
          <p className="mt-2 text-sm text-brand-muted">
            Illustrative output only; implementation scope and data access are agreed
            under assessment.
          </p>
        </GlassCard>
      </div>
    </PageSection>
  );
}
