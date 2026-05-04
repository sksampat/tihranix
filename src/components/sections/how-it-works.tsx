import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

const capabilities = [
  {
    title: "Raw + synthetic data modeling",
    body: "Blend enterprise signals with structured scenarios so finance and supply chain share one operational picture of inventory risk.",
  },
  {
    title: "Business policies and KPI constraints",
    body: "Encode margin floors, channel rules, and service targets so recommendations stay inside how your company actually runs.",
  },
  {
    title: "Scenario simulation",
    body: "Compare liquidation paths, timing, and mix before capital and customer experience move in production.",
  },
  {
    title: "Action recommendations",
    body: "Prioritized moves with expected cash, margin, and service impact—ready for executive review and governed execution.",
  },
  {
    title: "Closed-loop feedback learning",
    body: "Outcomes refine the next cycle of detection and simulation, so the engine improves as decisions land in the business.",
  },
] as const;

export function HowItWorksSection() {
  return (
    <PageSection
      id="how-it-works"
      aria-labelledby="how-heading"
      className="border-t border-white/[0.06] bg-wash-section py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          headingId="how-heading"
          align="center"
          title="Built for governed, closed-loop decisions."
          description="Tihranix is designed for enterprises that need audit-friendly narratives: clear inputs, explicit constraints, and measurable outcomes—without turning stakeholders into data engineers."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((c) => (
            <li key={c.title}>
              <GlassCard as="article" className="h-full p-5">
                <h3 className="text-sm font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  {c.body}
                </p>
              </GlassCard>
            </li>
          ))}
        </ul>
      </div>
    </PageSection>
  );
}
