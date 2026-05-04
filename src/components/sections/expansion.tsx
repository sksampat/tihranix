import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";

export function ExpansionSection() {
  return (
    <PageSection
      id="roadmap"
      aria-labelledby="expansion-heading"
      className="border-t border-white/[0.06] bg-wash-section-violet py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-3xl space-y-8 px-4 text-center sm:px-6 lg:px-8">
        <SectionHeading
          headingId="expansion-heading"
          align="center"
          title="Starting with dead inventory. Expanding into autonomous capital optimization."
          description="Tihranix begins with the most measurable operational capital problem: dead and slow-moving inventory. From there, it expands into purchase order optimization, promotion-to-cash planning, supplier terms, and enterprise-wide capital allocation."
        />
      </div>
    </PageSection>
  );
}
