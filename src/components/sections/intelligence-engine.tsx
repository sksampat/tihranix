import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";

const flow = [
  { label: "Enterprise Data (in place)", muted: true },
  { label: "Portable Intelligence Models", muted: false },
  { label: "Semantic Governance Layer", muted: false },
  { label: "Decision Intelligence", muted: false },
  { label: "Distributed Outcome Agents", muted: false },
] as const;

const layers = [
  {
    title: "Portable Intelligence Models",
    body: "Portable Logical Data Model (PLDM) — a structured intelligence contract that helps Tihranix understand enterprise data patterns while keeping governance portable across systems.",
  },
  {
    title: "Semantic Governance Layer",
    body: "Defines KPIs, policies, thresholds, guardrails, and business rules that govern every recommendation.",
  },
  {
    title: "Decision Intelligence",
    body: "Runs forecasting, root cause analysis, recommendations, simulations, and next-best-action reasoning.",
  },
  {
    title: "Distributed Outcome Agents",
    body: "Deploy governed intelligence where data already resides to deliver outcomes: dead inventory reduction, inventory health, demand forecasting, and executive insights.",
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
          eyebrow="Technical architecture"
          title="The intelligence engine underneath"
          description="A distributed intelligence architecture that brings governed intelligence to the data where it already lives—delivering portable enterprise intelligence without forcing data centralization."
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

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {layers.map((layer, i) => (
            <li
              key={layer.title}
              className="flex flex-col rounded-2xl border border-brand-border bg-brand-card p-5"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-cyan">
                {String(i + 1).padStart(2, "0")}
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
