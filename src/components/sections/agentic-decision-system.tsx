import { Fragment } from "react";
import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

const agents = [
  {
    title: "Research Agent",
    body: "Continuously analyzes inventory, demand, sales, supplier, and market signals to identify where cash is trapped—so recovery starts from facts, not anecdotes.",
  },
  {
    title: "Policy Agent",
    body: "Interprets business rules, KPI constraints, margin thresholds, service-level requirements, and approval boundaries so every scenario stays inside how you operate.",
  },
  {
    title: "Simulation Agent",
    body: "Runs what-if scenarios across liquidation, reallocation, discounting, purchasing, and demand-shaping options with explicit trade-offs on capital and service.",
  },
  {
    title: "Recommendation Agent",
    body: "Prioritizes actions based on cash unlock potential, margin risk, operational feasibility, and service-level impact for governed approval.",
  },
  {
    title: "Feedback Learning Agent",
    body: "Learns from executed actions and business feedback to improve future recommendations—without bypassing governance or audit expectations.",
  },
] as const;

const flowSteps = [
  "Inventory signals",
  "Detection agent",
  "Scenario simulation",
  "Governed recommendation",
  "Planner + finance approval",
  "Execution + feedback learning",
] as const;

function FlowArrow() {
  return (
    <div className="flex shrink-0 items-center justify-center py-1 text-brand-muted lg:px-1 lg:py-0" aria-hidden>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="lg:hidden">
        <path
          d="M12 5v14M12 19l-4-4M12 19l4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg width="28" height="16" viewBox="0 0 28 16" fill="none" className="hidden lg:block">
        <path
          d="M2 8h20M22 8l-4-4M22 8l-4 4"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.55"
        />
      </svg>
    </div>
  );
}

export function AgenticDecisionSystemSection() {
  return (
    <PageSection
      id="agentic-decision"
      aria-labelledby="agentic-heading"
      className="border-t border-white/[0.06] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl space-y-16 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          headingId="agentic-heading"
          align="center"
          title="An agentic decision system for inventory capital."
          description="Tihranix is building specialized agents that research, reason, simulate, recommend, and learn from operational decisions — starting with dead and slow-moving inventory."
        />
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {agents.map((a) => (
            <GlassCard key={a.title} as="article" className="flex h-full flex-col p-5">
              <div className="mb-3 h-px w-10 bg-gradient-to-r from-brand-electric to-brand-cyan" />
              <h3 className="text-sm font-semibold text-white">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{a.body}</p>
            </GlassCard>
          ))}
        </div>

        <div
          id="decision-process"
          className="rounded-2xl border border-white/[0.08] bg-white/[0.02] px-4 py-8 sm:px-8"
        >
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-cyan">
            Decision path
          </p>
          <h3 className="mt-2 text-center text-lg font-semibold text-white">
            From signals to governed action
          </h3>
          <div className="-mx-1 mt-8 overflow-x-auto px-1 pb-2 lg:mx-0 lg:overflow-visible lg:px-0">
            <div className="mx-auto flex min-w-min flex-col items-center gap-0 lg:min-w-0 lg:flex-row lg:flex-nowrap lg:justify-center">
              {flowSteps.map((label, i) => (
                <Fragment key={label}>
                  <div className="w-full min-w-0 rounded-xl border border-white/[0.1] bg-brand-navy/40 px-4 py-3 text-center shadow-[inset_0_1px_0_0_rgb(255_255_255/0.04)] lg:w-40 lg:shrink-0">
                    <p className="text-[11px] font-medium leading-snug text-white">
                      {label}
                    </p>
                  </div>
                  {i < flowSteps.length - 1 ? <FlowArrow /> : null}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
}
