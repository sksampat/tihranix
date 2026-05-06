import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

export function HowItFitsSection() {
  return (
    <PageSection
      id="how-it-fits"
      aria-labelledby="fits-heading"
      className="border-t border-white/[0.06] bg-wash-section py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          headingId="fits-heading"
          align="center"
          title="Works with the systems you already run."
          description="Tihranix is designed to sit on top of existing ERP, planning, and warehouse workflows. It gives supply chain and finance a governed operating layer for inventory-capital decisions—without forcing a rip-and-replace transformation."
        />
        <GlassCard className="mx-auto max-w-3xl border-brand-cyan/15 text-center">
          <p className="text-sm leading-relaxed text-brand-muted">
            Ingests data from ERP, planning, and warehouse systems; outputs governed
            recommendations for operational and financial teams.
          </p>
        </GlassCard>
      </div>
    </PageSection>
  );
}
