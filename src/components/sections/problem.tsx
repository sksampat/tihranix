import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

const cards = [
  {
    title: "Capital stays trapped in inventory that no longer supports demand",
    body: "The balance-sheet impact is visible, but recovery paths are often unclear until margin and service costs compound.",
  },
  {
    title: "Teams lack a governed way to compare recovery options and trade-offs",
    body: "Decisions need the same facts, constraints, and scenario math in front of supply chain and finance—not parallel spreadsheets.",
  },
  {
    title: "One-off clean-up efforts do not prevent the next wave of excess inventory",
    body: "Without a continuous layer, yesterday’s clearance becomes tomorrow’s surprise stock position.",
  },
] as const;

export function ProblemSection() {
  return (
    <PageSection
      id="problem"
      aria-labelledby="problem-heading"
      className="py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl space-y-14 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          headingId="problem-heading"
          eyebrow="Why this matters"
          title="Dead inventory is where poor inventory decisions become visible."
          description="Most enterprises discover trapped inventory after value has already eroded through carrying cost, markdown pressure, write-offs, and operational friction. Tihranix starts here because this is where the financial impact is measurable, the urgency is real, and better decisions can release capital quickly."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((c) => (
            <GlassCard key={c.title} as="article" className="flex flex-col">
              <h3 className="text-base font-semibold leading-snug text-brand-soft">{c.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-muted">
                {c.body}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
