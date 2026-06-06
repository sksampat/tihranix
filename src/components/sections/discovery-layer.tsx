import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

const questions = [
  "How do you define dead inventory?",
  "What is the target reduction goal?",
  "Which actions are allowed: transfer, markdown, liquidation, supplier return?",
  "Which customers, products, or service levels must be protected?",
  "What KPIs should improve without creating downstream risk?",
] as const;

export function DiscoveryLayerSection() {
  return (
    <PageSection
      id="discovery"
      aria-labelledby="discovery-heading"
      className="py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <SectionHeading
            headingId="discovery-heading"
            eyebrow="Discovery Layer"
            title="Start With the Business Problem, Not the Agent"
            description="Most AI platforms ask customers to choose an agent. Tihranix asks what outcome they want to achieve. The Discovery Layer interviews the customer, understands the business goal, defines KPIs and guardrails, and determines which internal agents are needed."
          />

          <GlassCard className="p-6 sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-muted">
              Example interaction
            </p>
            <p className="mt-4 rounded-xl border border-brand-border bg-brand-surface/60 px-4 py-3 text-sm text-brand-soft">
              <span className="font-semibold text-brand-cyan">Problem:</span>{" "}
              “We have too much dead inventory.”
            </p>
            <p className="mt-6 text-sm font-medium text-brand-soft">Tihranix asks:</p>
            <ul className="mt-3 space-y-3">
              {questions.map((q) => (
                <li
                  key={q}
                  className="flex gap-3 text-sm leading-relaxed text-brand-muted"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-cyan"
                    aria-hidden
                  />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-xl border border-brand-border-accent bg-brand-cyan/[0.06] px-4 py-3 text-sm leading-relaxed text-brand-soft">
              Then Tihranix deploys the{" "}
              <span className="font-semibold text-brand-cyan">
                Dead Inventory Optimization Agent
              </span>
              .
            </p>
          </GlassCard>
        </div>
      </div>
    </PageSection>
  );
}
