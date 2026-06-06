import { PageSection } from "@/components/page-section";
import { ButtonLink } from "@/components/ui/button-link";
import { GlassCard } from "@/components/ui/glass-card";

export function FinalCtaSection() {
  return (
    <PageSection
      id="final-cta"
      aria-labelledby="final-cta-heading"
      className="border-t border-brand-border py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <GlassCard className="relative overflow-hidden p-0 text-center sm:px-2">
          <div
            className="pointer-events-none absolute inset-0 bg-wash-section opacity-70"
            aria-hidden
          />
          <div className="relative space-y-6 px-6 py-14 sm:px-12 sm:py-16">
            <h2
              id="final-cta-heading"
              className="mx-auto max-w-2xl text-2xl font-semibold tracking-tight text-brand-soft sm:text-3xl lg:text-4xl"
            >
              See how much cash is trapped in your dead inventory.
            </h2>
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-brand-muted sm:text-base">
              Tell Tihranix the business outcome you want. We discover the context, build the
              intelligence stack, and deploy the right outcome agent—starting with dead inventory
              reduction and inventory health.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
              <ButtonLink href="#assessment" variant="primary" className="px-6 py-3.5 text-sm sm:px-8">
                See How Much Cash You Can Unlock
              </ButtonLink>
              <ButtonLink href="#assessment" variant="secondary" className="text-sm">
                Request Pilot
              </ButtonLink>
            </div>
          </div>
        </GlassCard>
      </div>
    </PageSection>
  );
}
