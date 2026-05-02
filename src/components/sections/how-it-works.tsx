import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";

const flow = [
  "Connect Systems",
  "Analyze Operations",
  "Identify Inefficiencies",
  "Recommend Actions",
  "Coordinate Execution",
  "Measure Impact",
] as const;

export function HowItWorksSection() {
  return (
    <PageSection
      id="how-it-works"
      aria-labelledby="how-heading"
      className="border-t border-white/[0.06] bg-[linear-gradient(180deg,transparent,rgba(0,194,168,0.04))] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          headingId="how-heading"
          align="center"
          title="From signal to action."
          description="A straight-line narrative from operational reality to coordinated outcomes—built for auditability and operator trust."
        />
        <div className="relative">
          <div
            className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block"
            aria-hidden
          />
          <ol className="grid gap-4 lg:grid-cols-6">
            {flow.map((label, i) => (
              <li
                key={label}
                className="relative rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 text-center backdrop-blur-md"
              >
                <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.12] bg-[#0B1220]/80 text-xs font-semibold text-brand-teal">
                  {i + 1}
                </div>
                <p className="text-xs font-semibold leading-snug text-brand-soft sm:text-sm">
                  {label}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </PageSection>
  );
}
