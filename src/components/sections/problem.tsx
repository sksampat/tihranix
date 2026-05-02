import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

const cards = [
  {
    title: "Fragmented Systems",
    body: "Operational truth is split across ERPs, fleet tools, warehouses, and spreadsheets—making end-to-end performance hard to see and harder to improve.",
  },
  {
    title: "Manual Coordination",
    body: "Teams spend cycles reconciling data, chasing updates, and bridging gaps between systems instead of running the business.",
  },
  {
    title: "Slow Decisions",
    body: "Trade-offs sit in queues while exceptions accumulate—delaying the moves that release capacity and capital.",
  },
  {
    title: "Hidden Capital Inefficiency",
    body: "Working capital and asset utilization leak through process friction, variability, and misaligned execution—not only through pricing or procurement.",
  },
] as const;

export function ProblemSection() {
  return (
    <PageSection
      id="problem"
      aria-labelledby="problem-heading"
      className="py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          headingId="problem-heading"
          title="Operational inefficiency is hidden across disconnected systems."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <GlassCard key={c.title} as="article">
              <h3 className="text-lg font-semibold text-brand-soft">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                {c.body}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
