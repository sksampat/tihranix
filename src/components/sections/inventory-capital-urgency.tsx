import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

const cards = [
  {
    title: "Trapped cash",
    body: "Slow movers tie up working capital while demand signals move elsewhere—often before leadership has a single reconciled view.",
  },
  {
    title: "Carrying cost",
    body: "Holding cost compounds quietly: storage, handling, insurance, and obsolescence pressure erode margin before a write-off ever hits.",
  },
  {
    title: "Write-off risk",
    body: "When recovery timing slips, markdown and disposal paths become more expensive—and harder to defend in the next forecast cycle.",
  },
  {
    title: "Reactive liquidation",
    body: "Urgent clearance moves cash but can break service commitments or margin floors when trade-offs are not modeled in one governed place.",
  },
] as const;

export function InventoryCapitalUrgencySection() {
  return (
    <PageSection
      id="inventory-urgency"
      aria-labelledby="inventory-urgency-heading"
      className="border-t border-white/[0.08] bg-[linear-gradient(180deg,rgba(0,194,168,0.1),transparent)] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl space-y-14 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          headingId="inventory-urgency-heading"
          title="Most companies don’t know how much inventory is already financially dead."
          description="Slow-moving inventory quietly becomes balance-sheet drag. It ties up cash, increases carrying costs, creates write-off risk, and forces teams into reactive liquidation decisions. Finance sees the capital impact, supply chain sees the service-level risk, and commercial teams see margin pressure — but the decision process remains fragmented."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <GlassCard key={c.title} as="article" className="flex flex-col border-brand-cyan/10">
              <div className="mb-3 h-px w-10 bg-gradient-to-r from-brand-electric to-brand-cyan" />
              <h3 className="text-base font-semibold text-brand-soft">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{c.body}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
