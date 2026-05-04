import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

const cards = [
  {
    title: "Trapped cash",
    body: "Non-movers and slow-movers sit on the balance sheet while opportunity cost compounds—often without a single source of truth across finance and operations.",
  },
  {
    title: "Margin leakage",
    body: "Fire-sale discounts and reactive promotions erode margin when liquidation is decoupled from pricing, assortment, and channel strategy.",
  },
  {
    title: "Fragmented decisions",
    body: "Finance sees the cash story, supply chain sees service risk, and commercial sees price—yet scenario modeling rarely lands in one governed decision loop.",
  },
] as const;

export function ProblemSection() {
  return (
    <PageSection
      id="problem"
      aria-labelledby="problem-heading"
      className="py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl space-y-14 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          headingId="problem-heading"
          title="Inventory is where cash goes to sleep."
          description="Excess and slow-moving stock quietly traps millions in working capital. Finance teams see the cash impact, supply chain teams see the operational risk, and commercial teams see margin pressure — but decisions remain fragmented."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((c) => (
            <GlassCard key={c.title} as="article" className="flex flex-col">
              <h3 className="text-lg font-semibold text-white">{c.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-muted">
                {c.body}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
