import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";

const flow = [
  { label: "Customer Problem", muted: true },
  { label: "Discovery Layer", muted: false },
  { label: "PLDM Layer", muted: false },
  { label: "Semantic Layer", muted: false },
  { label: "Reasoning Layer", muted: false },
  { label: "Outcome Agent", muted: false },
] as const;

const layers = [
  {
    title: "Discovery Layer",
    body: "Understands the business problem, asks the right questions, and defines the desired outcome.",
  },
  {
    title: "PLDM Layer",
    body: "Discovers patterns, associations, relationships, and operational context across imported enterprise data.",
  },
  {
    title: "Semantic Layer",
    body: "Defines KPIs, guardrails, policies, thresholds, and business rules.",
  },
  {
    title: "Reasoning Layer",
    body: "Runs forecasting, root cause analysis, simulations, recommendations, and scenario planning.",
  },
  {
    title: "Outcome Agents",
    body: "Deliver customer-facing business outcomes such as dead inventory reduction, inventory health, and demand forecasting.",
  },
] as const;

export function IntelligenceEngineSection() {
  return (
    <PageSection
      id="technology"
      aria-labelledby="technology-heading"
      className="border-t border-brand-border bg-brand-navy py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          headingId="technology-heading"
          eyebrow="Technology"
          title="The Intelligence Engine Behind Every Outcome"
          description="Every outcome is powered by a layered architecture working underneath. The customer sees the business result; Tihranix orchestrates the engine."
        />

        <div
          className="flex flex-col gap-2 lg:flex-row lg:flex-wrap lg:items-center"
          aria-hidden
        >
          {flow.map((node, i) => (
            <div key={node.label} className="flex items-center gap-2">
              <span
                className={`inline-flex items-center rounded-xl border px-4 py-2.5 text-sm font-medium ${
                  node.muted
                    ? "border-brand-border bg-brand-surface/50 text-brand-muted"
                    : "border-brand-border-accent bg-brand-cyan/[0.07] text-brand-soft"
                }`}
              >
                {node.label}
              </span>
              {i < flow.length - 1 ? (
                <span className="text-brand-cyan" aria-hidden>
                  <span className="hidden lg:inline">→</span>
                  <span className="inline lg:hidden">↓</span>
                </span>
              ) : null}
            </div>
          ))}
        </div>

        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {layers.map((layer, i) => (
            <li
              key={layer.title}
              className="flex flex-col rounded-2xl border border-brand-border bg-brand-card p-5"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-cyan">
                Layer {i + 1}
              </p>
              <h3 className="mt-3 text-base font-semibold text-brand-soft">{layer.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{layer.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </PageSection>
  );
}
