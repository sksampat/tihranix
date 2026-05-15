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
              Recover trapped working capital—then widen the decision fabric with trust.
            </h2>
            <p className="mx-auto max-w-xl text-sm leading-relaxed text-brand-muted sm:text-base">
              Tihranix starts where dead inventory is undeniable, then reuses the same governed
              decision layer for broader constrained inventory and supply chain flows. Book a
              review to map exposure, controls, and integration paths with your stack.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
              <ButtonLink href="#assessment" variant="primary" className="px-6 py-3.5 text-sm sm:px-8">
                Book a working capital review
              </ButtonLink>
              <ButtonLink href="#how-it-works" variant="secondary" className="text-sm">
                See how Tihranix works
              </ButtonLink>
            </div>
          </div>
        </GlassCard>
      </div>
    </PageSection>
  );
}
