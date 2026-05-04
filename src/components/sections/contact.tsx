import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";

export function ContactSection() {
  return (
    <PageSection
      id="assessment"
      aria-labelledby="contact-heading"
      className="border-t border-white/[0.06] bg-brand-navy-deep py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-3xl space-y-10 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          headingId="contact-heading"
          align="center"
          eyebrow="Contact us"
          title="Ready to unlock trapped working capital?"
          description="Tell us about your inventory challenges, and we’ll help estimate where cash may be trapped across your operations."
        />
        <ContactForm />
        <p className="text-center text-sm text-brand-muted">
          Email:{" "}
          <a
            href="mailto:contact@tihranix.ai"
            className="font-medium text-white underline decoration-white/35 underline-offset-4 transition hover:decoration-brand-cyan/60"
          >
            contact@tihranix.ai
          </a>
        </p>
      </div>
    </PageSection>
  );
}
