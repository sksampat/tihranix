import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

const agents = [
  {
    title: "Research Agent",
    description:
      "Continuously analyzes inventory, demand, sales, supplier, and market signals to identify where cash is trapped.",
  },
  {
    title: "Policy Agent",
    description:
      "Understands business rules, KPI constraints, margin thresholds, service-level requirements, and approval boundaries.",
  },
  {
    title: "Simulation Agent",
    description:
      "Runs what-if scenarios across liquidation, reallocation, discounting, purchasing, and demand-shaping options.",
  },
  {
    title: "Recommendation Agent",
    description:
      "Prioritizes actions based on cash unlock potential, margin risk, operational feasibility, and service-level impact.",
  },
  {
    title: "Feedback Learning Agent",
    description:
      "Learns from executed actions and business feedback to improve future recommendations and outcomes.",
  },
] as const;

export function AgenticSystemSection() {
  return (
    <PageSection
      id="agentic-system"
      aria-labelledby="agentic-system-heading"
      className="border-t border-white/[0.06] bg-fade-navy-down py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          headingId="agentic-system-heading"
          align="center"
          title="An agentic system for capital decisions."
          description="Tihranix is building specialized agents that research, reason, simulate, recommend, and learn from operational decisions — starting with dead and slow-moving inventory."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {agents.map((agent) => (
            <GlassCard key={agent.title} as="article" className="flex h-full flex-col p-5">
              <div className="mb-4 h-1.5 w-10 rounded-full bg-gradient-to-r from-brand-electric to-brand-cyan" />
              <h3 className="text-base font-semibold text-white">{agent.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                {agent.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
