import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";

const steps = [
  { label: "Understand", detail: "Unify operational context across systems." },
  { label: "Diagnose", detail: "Surface inefficiencies, variance, and constraints." },
  {
    label: "Improve Decisions",
    detail: "Evaluate trade-offs with clear, defensible recommendations.",
  },
  {
    label: "Coordinate Execution",
    detail: "Orchestrate workflows and handoffs across teams and tools.",
  },
  { label: "Optimize", detail: "Tighten the loop with measurable outcomes." },
] as const;

export function SolutionSection() {
  return (
    <PageSection
      id="solution"
      aria-labelledby="solution-heading"
      className="border-y border-white/[0.06] bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent)] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl space-y-14 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          headingId="solution-heading"
          title="Turning complexity into coordinated execution."
          description="A closed loop from operational reality to action—designed for enterprises where performance is won or lost in execution, not slides."
        />
        <ol className="grid gap-4 lg:grid-cols-5">
          {steps.map((s, i) => (
            <li
              key={s.label}
              className="relative rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-md"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.1] bg-[#0B1220]/80 text-xs font-semibold text-brand-green">
                  {i + 1}
                </span>
                {i < steps.length - 1 ? (
                  <span
                    className="hidden h-px flex-1 bg-gradient-to-r from-brand-accent/50 to-brand-teal/30 lg:block"
                    aria-hidden
                  />
                ) : null}
              </div>
              <h3 className="text-base font-semibold text-brand-soft">{s.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                {s.detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </PageSection>
  );
}
