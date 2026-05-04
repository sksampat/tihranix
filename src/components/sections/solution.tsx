import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";

const steps = [
  {
    title: "Detect dead and slow-moving SKUs",
    body: "Continuous identification across regions, channels, and categories—aligned to your definitions of non-movement and aging.",
  },
  {
    title: "Simulate liquidation and reallocation options",
    body: "Stress-test channels, price ladders, bundles, and transfers before capital hits the P&L.",
  },
  {
    title: "Recommend margin-safe actions",
    body: "Ranked moves that respect margin floors, brand constraints, and service targets—not generic clearance rules.",
  },
  {
    title: "Learn from executed outcomes",
    body: "Closed-loop feedback tightens forecasts and recommendations as actions roll through finance and operations.",
  },
] as const;

export function SolutionSection() {
  return (
    <PageSection
      id="solution"
      aria-labelledby="solution-heading"
      className="border-t border-white/[0.06] bg-[linear-gradient(180deg,rgba(10,18,34,0.5),transparent)] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl space-y-14 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          headingId="solution-heading"
          eyebrow="Dead inventory liquidation engine"
          title="From inventory visibility to autonomous capital action."
        />
        <ol className="grid gap-6 lg:grid-cols-2">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur-md"
            >
              <div className="flex gap-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand-cyan/30 bg-brand-cyan/[0.08] text-sm font-bold text-brand-cyan">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-brand-soft">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                    {step.body}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </PageSection>
  );
}
