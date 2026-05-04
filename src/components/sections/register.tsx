import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";
import { InterestForm } from "@/components/interest-form";

export function RegisterSection() {
  return (
    <PageSection
      id="assessment"
      aria-labelledby="register-heading"
      className="border-t border-white/[0.06] bg-brand-navy-deep py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-3xl space-y-10 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          headingId="register-heading"
          align="center"
          eyebrow="Cash unlock assessment"
          title="Request a structured working-capital review."
          description="Share your context and inventory scope. Our team responds with next steps for a 90-day cash unlock scenario aligned to your policies and service constraints."
        />
        <InterestForm />
      </div>
    </PageSection>
  );
}
