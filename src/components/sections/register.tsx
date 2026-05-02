import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";
import { InterestForm } from "@/components/interest-form";

export function RegisterSection() {
  return (
    <PageSection
      id="register"
      aria-labelledby="register-heading"
      className="py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-3xl space-y-10 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          headingId="register-heading"
          align="center"
          title="Interested in optimizing operations and unlocking capital?"
          description="We are working with forward-thinking teams to explore how agentic AI can improve operational efficiency and capital performance."
        />
        <InterestForm />
      </div>
    </PageSection>
  );
}
