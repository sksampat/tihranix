import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";

export function ContactSection() {
  return (
    <PageSection
      id="assessment"
      aria-labelledby="contact-heading"
      className="border-t border-white/[0.08] bg-brand-navy-deep py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-3xl space-y-10 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          headingId="contact-heading"
          align="center"
          eyebrow="Working capital review"
          title="Book a conversation with the Tihranix team."
          description="Share your inventory footprint, governance requirements, and systems landscape. We will align on trapped capital signals, approval patterns, and a practical path from dead inventory resolution into broader decision flows."
        />
        <ContactForm />
        <p className="text-center text-xs leading-relaxed text-brand-muted">
          Built for finance, supply chain, and operations teams who need governed decisions—not
          another passive dashboard.
        </p>
        <p className="text-center text-sm text-brand-muted">
          Email:{" "}
          <a
            href="mailto:contact@tihranix.ai"
            className="font-medium text-brand-soft underline decoration-white/35 underline-offset-4 transition hover:decoration-brand-cyan/60"
          >
            contact@tihranix.ai
          </a>
        </p>
      </div>
    </PageSection>
  );
}
