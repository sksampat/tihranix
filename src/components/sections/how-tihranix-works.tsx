import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";

const steps = [
  {
    title: "Tell Tihranix the Problem",
    body: "Start in plain business language—for example, “We have too much dead inventory.”",
  },
  {
    title: "Tihranix Discovers Business Context",
    body: "The Discovery Layer asks the right questions about KPIs, goals, constraints, actions, and guardrails.",
  },
  {
    title: "Tihranix Builds the Intelligence Stack",
    body: "Behind the scenes, Tihranix assembles the operational intelligence, business governance, scenario simulation, and decision intelligence needed to deliver the outcome.",
  },
  {
    title: "Tihranix Delivers the Outcome",
    body: "The customer receives governed recommendations, dashboards, and next-best actions.",
  },
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
          eyebrow="How It Works"
          title="Tell us the outcome. Tihranix assembles the intelligence to achieve it."
          description="You describe the business outcome you want. Tihranix discovers the context, builds the intelligence stack, and deploys the right outcome agent—no technical setup required."
        />

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="flex flex-col rounded-2xl border border-brand-border bg-brand-card p-6"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-brand-border-accent bg-brand-cyan/[0.08] text-sm font-semibold text-brand-cyan">
                {i + 1}
              </span>
              <h3 className="mt-4 text-base font-semibold text-brand-soft">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </PageSection>
  );
}
