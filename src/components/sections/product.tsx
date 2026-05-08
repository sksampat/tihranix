import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

const capabilities = [
  {
    title: "Detection",
    body: "Identify dead, slow-moving, and at-risk inventory across the network.",
  },
  {
    title: "Simulation",
    body: "Compare recovery paths based on capital, margin, and service impact.",
  },
  {
    title: "Governance",
    body: "Apply business rules, service thresholds, and financial guardrails.",
  },
  {
    title: "Actionability",
    body: "Produce audit-friendly decisions for planner and finance approval.",
  },
] as const;

export function ProductSection() {
  return (
    <PageSection
      id="product"
      aria-labelledby="product-heading"
      className="border-t border-white/[0.08] bg-fade-navy-down py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl space-y-14 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          headingId="product-heading"
          title="A continuous operating layer for governed inventory-capital decisions."
          description="Tihranix runs continuously on top of your inventory, planning, and warehouse data to identify dead and slow-moving stock, evaluate recovery scenarios, and recommend governed actions with explicit business impact."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {capabilities.map((c) => (
            <GlassCard key={c.title} as="article" className="flex flex-col">
              <div className="mb-3 h-px w-12 bg-gradient-to-r from-brand-electric to-brand-cyan" />
              <h3 className="text-lg font-semibold text-brand-soft">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                {c.body}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
