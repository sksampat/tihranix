import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

const agents = [
  {
    tag: "Wedge",
    title: "Dead Inventory Optimization Agent",
    body: "Finds aging, slow-moving, and trapped inventory. Identifies root causes and recommends recovery actions.",
    href: "#how-it-works",
    cta: "See how it works",
  },
  {
    tag: "Live",
    title: "Inventory Health Agent",
    body: "Monitors aging, turns, excess stock, stockout risk, and working capital exposure.",
    href: "#technology",
    cta: "Explore the engine",
  },
  {
    tag: "Live",
    title: "Demand Forecast Agent",
    body: "Predicts demand shifts, future inventory exposure, and replenishment risks.",
    href: "#technology",
    cta: "Explore the engine",
  },
  {
    tag: "Live",
    title: "Executive Insights Agent",
    body: "Produces weekly business summaries, risks, recommendations, and actions for leadership.",
    href: "#technology",
    cta: "Explore the engine",
  },
] as const;

export function OutcomeAgentsSection() {
  return (
    <PageSection
      id="outcome-agents"
      aria-labelledby="outcome-agents-heading"
      className="py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          headingId="outcome-agents-heading"
          eyebrow="Outcome Agents"
          title="Start with a business problem—not a technical configuration."
          description="Tihranix does not ask customers to configure technical agents. It starts with a business problem, then deploys the right outcome agent powered by internal intelligence agents."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {agents.map((a) => (
            <a
              key={a.title}
              href={a.href}
              className="group rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-electric"
            >
              <GlassCard as="article" className="flex h-full flex-col p-6">
                <span className="inline-flex w-fit rounded-full border border-brand-border-accent bg-brand-cyan/[0.08] px-3 py-1 text-[11px] font-medium text-brand-cyan">
                  {a.tag}
                </span>
                <h3 className="mt-4 text-base font-semibold text-brand-soft">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">{a.body}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-xs font-semibold text-brand-cyan transition group-hover:text-brand-electric">
                  {a.cta}
                  <span
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden
                  >
                    →
                  </span>
                </span>
              </GlassCard>
            </a>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
