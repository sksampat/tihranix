import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

const cards = [
  {
    title: "Volatile demand",
    body: "Forecast error and channel shifts leave inventory positions exposed faster than static planning cycles can absorb.",
  },
  {
    title: "Supply uncertainty",
    body: "Lead-time variability pushes safety stock higher—until excess becomes structural without a capital-aware release valve.",
  },
  {
    title: "Margin pressure",
    body: "Promotions and price moves interact with inventory in ways that are hard to see until margin and cash diverge.",
  },
  {
    title: "Capital discipline",
    body: "Finance is asking for tighter working capital and clearer accountability for inventory outcomes—not another dashboard export.",
  },
] as const;

export function WhyNowSection() {
  return (
    <PageSection
      id="why-now"
      aria-labelledby="why-now-heading"
      className="border-t border-white/[0.06] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl space-y-14 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          headingId="why-now-heading"
          align="center"
          title="Why inventory capital needs a new operating layer now."
          description="Volatile demand, supply uncertainty, margin pressure, and higher capital discipline have made inventory decisions more financially consequential. Teams can no longer rely only on dashboards, spreadsheets, or static planning cycles. Enterprises need governed systems that connect operational signals to capital-aware actions."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <GlassCard key={c.title} as="article" className="flex flex-col">
              <h3 className="text-base font-semibold text-white">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{c.body}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
