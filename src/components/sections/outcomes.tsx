import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

const outcomes = [
  {
    title: "Unlock trapped working capital",
    body: "Quantify recovery paths and release cash tied up in non-performing stock.",
  },
  {
    title: "Reduce recurring write-offs and surprise liquidation events",
    body: "Compare scenarios before urgency forces narrow, costly choices.",
  },
  {
    title: "Improve inventory mix without sacrificing service commitments",
    body: "Keep service floors explicit in every path you evaluate.",
  },
  {
    title: "Create a shared decision model across supply chain and finance",
    body: "One governed view of trade-offs for approval and audit.",
  },
] as const;

export function OutcomesSection() {
  return (
    <PageSection
      id="outcomes"
      aria-labelledby="outcomes-heading"
      className="py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl space-y-14 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          headingId="outcomes-heading"
          align="center"
          title="Built for measurable impact."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {outcomes.map((o) => (
            <GlassCard key={o.title} as="article" className="flex flex-col">
              <h3 className="text-base font-semibold text-brand-soft">{o.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">{o.body}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
