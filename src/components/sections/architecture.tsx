import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

const agents = [
  {
    title: "Research Agents",
    body: "Unify operational data across silos so teams work from one coherent picture of what is happening—grounded in systems of record.",
  },
  {
    title: "Diagnostic Agents",
    body: "Identify inefficiencies and root causes across processes, assets, and constraints—not just symptoms at the surface.",
  },
  {
    title: "Decision Agents",
    body: "Evaluate trade-offs, scenarios, and policies to recommend actions your operators can trust and defend.",
  },
  {
    title: "Coordination Agents",
    body: "Orchestrate workflows across systems and teams so the right work happens in the right sequence, with clear ownership.",
  },
  {
    title: "Learning Loop",
    body: "Measure outcomes, compare to intent, and refine playbooks—so execution quality compounds over time.",
  },
] as const;

export function ArchitectureSection() {
  return (
    <PageSection
      id="architecture"
      aria-labelledby="architecture-heading"
      className="py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          headingId="architecture-heading"
          title="Built on an agentic architecture for enterprise operations."
          description="Specialized agents collaborate under enterprise controls—aligned to how complex operations actually run."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {agents.map((a) => (
            <GlassCard key={a.title} as="article">
              <h3 className="text-lg font-semibold text-brand-soft">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                {a.body}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
