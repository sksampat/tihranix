import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

const cases = [
  {
    title: "Logistics & Fleet Operations",
    body: "Improve routing discipline, asset turns, and exception handling—coordinating planners, yards, and carriers without losing accountability.",
  },
  {
    title: "Field Operations",
    body: "Align dispatch, work orders, and parts availability so crews spend time executing—not reconciling status across tools.",
  },
  {
    title: "Manufacturing Coordination",
    body: "Connect planning, lines, and maintenance windows to stabilize throughput and reduce idle time between dependent steps.",
  },
  {
    title: "Supply Chain Execution",
    body: "Tighten purchase-to-pay and order-to-cash handoffs so commitments, inventory, and service levels move together.",
  },
  {
    title: "Service Operations",
    body: "Balance capacity, SLA risk, and parts logistics with clear priorities—so customer commitments hold under real-world variability.",
  },
] as const;

export function UseCasesSection() {
  return (
    <PageSection
      id="use-cases"
      aria-labelledby="use-cases-heading"
      className="py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          headingId="use-cases-heading"
          title="Built for operations-heavy environments."
          description="Where execution is distributed, interdependent, and constrained—Tihranix is built to coordinate work across the stack you already run."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {cases.map((c) => (
            <GlassCard key={c.title} as="article">
              <h3 className="text-lg font-semibold text-brand-soft">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                {c.body}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
