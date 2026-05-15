import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";

const flowSteps = [
  { id: "signals", label: "Signals", detail: "ERP, planning, WMS, demand, and service context." },
  { id: "detect", label: "Detect", detail: "Dead and slow-moving exposure surfaced with policy context." },
  { id: "simulate", label: "Simulate", detail: "Options modeled under constraints before anything ships." },
  {
    id: "human",
    label: "Human approval",
    detail: "Route, escalate, override, and attach rationale in the audit trail.",
  },
  { id: "execute", label: "Execute", detail: "Guardrailed actions pushed to execution systems." },
  { id: "learn", label: "Learn", detail: "Outcomes feed back into detection and scenario quality." },
] as const;

const autonomy = [
  { mode: "Recommend", copy: "Surface options, trade-offs, and policy checks for review." },
  { mode: "Approve", copy: "Humans sign off where capital, service, or risk warrants it." },
  { mode: "Execute", copy: "Automated steps run only inside defined thresholds and guardrails." },
] as const;

export function HowTihranixWorksSection() {
  return (
    <PageSection
      id="how-it-works"
      aria-labelledby="how-heading"
      className="border-t border-brand-border bg-brand-navy py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl space-y-14 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          headingId="how-heading"
          eyebrow="Operating model"
          title="How Tihranix runs inventory-capital decisions end to end."
          description="Agents, policy logic, and simulation propose paths; humans stay in the loop where your operating model requires it. The same loop tightens as trust, data quality, and governance mature."
        />

        <div className="lg:grid lg:grid-cols-12 lg:gap-10 lg:items-start">
          <div className="lg:col-span-7 space-y-4">
            <p className="text-sm font-medium text-brand-soft">Decision path</p>
            <ol className="space-y-3">
              {flowSteps.map((step, i) => (
                <li
                  key={step.id}
                  className={`rounded-xl border px-4 py-4 sm:flex sm:items-start sm:gap-4 sm:px-5 sm:py-4 ${
                    step.id === "human"
                      ? "border-brand-border-accent bg-brand-cyan/[0.06] shadow-[inset_0_0_0_1px_rgb(20_184_166/0.12)]"
                      : "border-brand-border bg-brand-surface/50"
                  }`}
                >
                  <span className="inline-flex h-7 min-w-[1.75rem] items-center justify-center rounded-md border border-brand-border bg-brand-card text-[11px] font-semibold text-brand-muted">
                    {i + 1}
                  </span>
                  <div className="mt-3 sm:mt-0 sm:min-w-0 sm:flex-1">
                    <p className="text-sm font-semibold text-brand-soft">{step.label}</p>
                    <p className="mt-2 text-sm leading-relaxed text-brand-muted">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="text-xs text-brand-muted">
              Human approval sits between simulation and execution so finance and supply chain
              retain explicit control before capital moves.
            </p>
          </div>

          <div className="mt-10 border-t border-brand-border pt-10 lg:col-span-5 lg:mt-0 lg:border-l lg:border-brand-border lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="text-sm font-medium text-brand-soft">Progressive autonomy</p>
            <p className="mt-2 text-sm leading-relaxed text-brand-muted">
              Each workflow can operate in the mode that matches risk and policy maturity—without
              bypassing auditability.
            </p>
            <ul className="mt-6 space-y-4">
              {autonomy.map((a) => (
                <li
                  key={a.mode}
                  className="rounded-xl border border-brand-border bg-brand-card px-4 py-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-cyan">
                    {a.mode}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">{a.copy}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </PageSection>
  );
}
