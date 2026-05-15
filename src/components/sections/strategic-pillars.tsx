import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";

const pillars = [
  {
    kicker: "01",
    title: "Model the decision",
    body: "Decisions, constraints, policies, options, and outcomes are first-class—not a bolt-on to static reporting. Teams see why a path is viable before it becomes operational.",
  },
  {
    kicker: "02",
    title: "Keep humans in control",
    body: "Review, approve, escalate, and override are explicit steps. Workflows can run in recommend, approve, or execute modes so autonomy matches your risk posture.",
  },
  {
    kicker: "03",
    title: "Close the loop from plan to action",
    body: "Planning signals connect to governed execution. Outcomes return to the model so the next detection cycle reflects what actually happened in the network.",
  },
  {
    kicker: "04",
    title: "Govern for resilience",
    body: "Policy-aware, explainable, and auditable by default. The system should feel governed—not like a black box running unattended in production systems.",
  },
] as const;

export function StrategicPillarsSection() {
  return (
    <PageSection
      id="pillars"
      aria-labelledby="pillars-heading"
      className="py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          headingId="pillars-heading"
          eyebrow="Strategic pillars"
          title="Built as a decision fabric—not another dashboard."
          description="Tihranix sits above ERP, planning, WMS, and execution as a governed layer for inventory capital. The wedge is narrow; the architecture is built to widen with trust and data."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {pillars.map((p) => (
            <article
              key={p.kicker}
              className="relative overflow-hidden rounded-2xl border border-brand-border bg-brand-card p-6 sm:p-8"
            >
              <div
                className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-brand-cyan/60"
                aria-hidden
              />
              <p className="pl-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-muted">
                {p.kicker}
              </p>
              <h3 className="mt-4 pl-3 text-lg font-semibold text-brand-soft sm:text-xl">
                {p.title}
              </h3>
              <p className="mt-3 pl-3 text-sm leading-relaxed text-brand-muted sm:text-base">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
