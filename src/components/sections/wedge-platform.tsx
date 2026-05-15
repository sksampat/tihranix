import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";

const phases = [
  {
    flow: "Decision flow 1",
    title: "Dead inventory resolution",
    body: "Detect trapped exposure, simulate recovery paths, route approvals, and execute governed actions with full traceability.",
  },
  {
    flow: "Decision flow 2",
    title: "Dead inventory prevention and rebalancing",
    body: "Shift from reactive clearance to earlier signals—rebalancing, repricing, and transfers before stock hardens into write-down risk.",
  },
  {
    flow: "Decision flow 3",
    title: "Broader constrained inventory decisions",
    body: "Extend the same decision objects and policies into allocation, network trade-offs, and service-aware capital trade-offs across the footprint.",
  },
] as const;

export function WedgePlatformSection() {
  return (
    <PageSection
      id="evolution"
      aria-labelledby="evolution-heading"
      className="border-t border-white/[0.08] bg-brand-navy-deep/50 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          headingId="evolution-heading"
          eyebrow="Roadmap"
          title="Start with dead inventory. Expand into broader supply chain decision flows."
          description="Tihranix begins where working capital is easiest to quantify and hardest to ignore. Each phase reuses the same decision model, policies, and human controls—widening scope only as trust and data allow."
        />
        <ol className="grid gap-6 lg:grid-cols-3">
          {phases.map((phase, i) => (
            <li
              key={phase.flow}
              className="flex flex-col rounded-2xl border border-white/[0.08] bg-brand-navy/30 p-6"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-cyan">
                {phase.flow}
              </p>
              <p className="mt-3 text-xs text-brand-muted">Phase {i + 1}</p>
              <h3 className="mt-2 text-lg font-semibold text-brand-soft">{phase.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-muted">
                {phase.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </PageSection>
  );
}
