import { PageSection } from "@/components/page-section";
import { ButtonLink } from "@/components/ui/button-link";
import { GlassCard } from "@/components/ui/glass-card";

export function FinalCtaSection() {
  return (
    <PageSection
      id="final-cta"
      aria-labelledby="final-cta-heading"
      className="border-t border-white/[0.06] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <GlassCard className="relative overflow-hidden p-0 text-center sm:px-2">
          <div
            className="pointer-events-none absolute inset-0 bg-wash-section opacity-80"
            aria-hidden
          />
          <div className="relative space-y-6 px-6 py-14 sm:px-12 sm:py-16">
            <h2
              id="final-cta-heading"
              className="mx-auto max-w-2xl text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl"
            >
              Start where inventory decisions leak capital.
            </h2>
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-brand-muted sm:text-base">
              Tihranix helps enterprises solve the most measurable inventory-capital problem
              first, then expand into broader constrained inventory decisions across supply
              chain and finance.
            </p>
            <div className="flex justify-center pt-2">
              <ButtonLink href="#assessment" variant="primary" className="px-8 py-3.5">
                Request a demo
              </ButtonLink>
            </div>
          </div>
        </GlassCard>
      </div>
    </PageSection>
  );
}
