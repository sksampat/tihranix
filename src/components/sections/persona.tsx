import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

const personas = [
  {
    role: "CFO",
    body: "Unlock trapped cash, improve cash conversion, and make working capital measurable with scenarios leadership can trust.",
  },
  {
    role: "Supply chain leader",
    body: "Reduce excess stock while protecting availability and service levels—so liquidation does not create the next fire drill.",
  },
  {
    role: "FP&A / finance transformation",
    body: "Replace static spreadsheets with live scenario-based capital intelligence that ties inventory decisions to cash outcomes.",
  },
] as const;

export function PersonaSection() {
  return (
    <PageSection
      id="personas"
      aria-labelledby="personas-heading"
      className="py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl space-y-14 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          headingId="personas-heading"
          align="center"
          title="Built for finance. Adopted by supply chain."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {personas.map((p) => (
            <GlassCard key={p.role} as="article">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-cyan">
                {p.role}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-brand-muted">
                {p.body}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
