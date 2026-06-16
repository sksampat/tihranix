import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { GlassCard } from "@/components/ui/glass-card";

const benefits = [
  "Early access to new capabilities",
  "Direct influence on product direction",
  "Dedicated onboarding support",
  "Strategic collaboration with the Tihranix team",
] as const;

export function DesignPartnerSection() {
  return (
    <PageSection
      id="design-partner"
      aria-labelledby="design-partner-heading"
      className="py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div className="space-y-6">
            <SectionHeading
              headingId="design-partner-heading"
              eyebrow="Design partner program"
              title="Become a Design Partner"
              description="We are working closely with supply chain leaders to shape the future of inventory intelligence."
            />
            <p className="max-w-xl text-sm leading-relaxed text-brand-muted">
              Interested in helping define the next generation of supply chain intelligence?
            </p>
            <div>
              <ButtonLink href="#assessment" variant="primary">
                Become a Design Partner
              </ButtonLink>
            </div>
          </div>

          <GlassCard className="p-6 sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-muted">
              Design partners receive
            </p>
            <ul className="mt-5 space-y-4">
              {benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-sm leading-relaxed text-brand-soft"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-cyan"
                    aria-hidden
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    </PageSection>
  );
}
