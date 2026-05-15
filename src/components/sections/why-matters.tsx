import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

const costs = [
  {
    title: "Trapped cash",
    body: "Slow and non-moving stock ties up working capital while demand and replenishment move on elsewhere.",
  },
  {
    title: "Carrying cost",
    body: "Storage, handling, insurance, and obsolescence quietly erode margin before a write-down forces the issue.",
  },
  {
    title: "Write-downs and margin pressure",
    body: "Late discovery narrows recovery options and pushes teams toward discounts that are hard to unwind in the P&L.",
  },
  {
    title: "Warehouse drag and reactive liquidation",
    body: "Space, labor, and expedited moves compound cost; urgent clearance often trades service or margin for speed.",
  },
] as const;

export function WhyMattersSection() {
  return (
    <PageSection
      id="why-it-matters"
      aria-labelledby="why-matters-heading"
      className="py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          headingId="why-matters-heading"
          title="Why dead inventory is still one of the clearest capital leaks."
          description="It is measurable in cash, visible in operations, and painful for both finance and supply chain. That is why Tihranix starts here—before expanding the same decision fabric upstream."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {costs.map((c) => (
            <GlassCard key={c.title} as="article" className="p-5">
              <h3 className="text-sm font-semibold text-brand-soft">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{c.body}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
