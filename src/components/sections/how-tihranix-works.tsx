import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";

const steps = [
  {
    label: "Connect",
    body: "Import data from ERP systems, spreadsheets, WMS platforms, and operational tools.",
  },
  {
    label: "Understand",
    body: "Discover inventory patterns, relationships, and operational signals.",
  },
  {
    label: "Govern",
    body: "Apply business policies, KPIs, and decision guardrails.",
  },
  {
    label: "Recommend",
    body: "Generate prioritized actions to reduce inventory risk.",
  },
  {
    label: "Execute",
    body: "Enable planners to take confident action.",
  },
] as const;

export function HowTihranixWorksSection() {
  return (
    <PageSection
      id="how-it-works"
      aria-labelledby="how-heading"
      className="border-t border-brand-border bg-brand-navy py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          headingId="how-heading"
          eyebrow="How it works"
          title="How Tihranix Works"
          description="From connecting your systems to confident action—governed decision intelligence that turns fragmented inventory data into prioritized next-best actions."
        />

        <div
          className="flex flex-wrap items-center gap-x-2 gap-y-2 text-sm font-medium"
          aria-hidden
        >
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-xl border border-brand-border-accent bg-brand-cyan/[0.07] px-4 py-2.5 text-brand-soft">
                {step.label}
              </span>
              {i < steps.length - 1 ? (
                <span className="text-brand-cyan" aria-hidden>
                  →
                </span>
              ) : null}
            </div>
          ))}
        </div>

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <li
              key={step.label}
              className="flex flex-col rounded-2xl border border-brand-border bg-brand-card p-6"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-brand-border-accent bg-brand-cyan/[0.08] text-sm font-semibold text-brand-cyan">
                {i + 1}
              </span>
              <h3 className="mt-4 text-base font-semibold text-brand-soft">{step.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </PageSection>
  );
}
