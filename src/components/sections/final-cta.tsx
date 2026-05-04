import { PageSection } from "@/components/page-section";
import { ButtonLink } from "@/components/ui/button-link";

export function FinalCtaSection() {
  return (
    <PageSection
      id="final-cta"
      aria-labelledby="final-cta-heading"
      className="border-t border-white/[0.06] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-brand-navy-mid via-brand-navy to-[#0a1628] px-6 py-14 text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_0_80px_-20px_rgba(34,211,238,0.15)] sm:px-12 sm:py-16">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(34,211,238,0.12),transparent)]"
            aria-hidden
          />
          <div className="relative space-y-6">
            <h2
              id="final-cta-heading"
              className="mx-auto max-w-2xl text-2xl font-semibold tracking-tight text-brand-soft sm:text-3xl lg:text-4xl"
            >
              Turn trapped inventory into working capital.
            </h2>
            <p className="mx-auto max-w-xl text-sm text-brand-muted sm:text-base">
              Start with a governed assessment: inventory posture, unlock range,
              and service-level-safe paths—before you commit to a broader rollout.
            </p>
            <div className="flex justify-center pt-2">
              <ButtonLink href="#assessment" variant="primary" className="px-8 py-3.5">
                Start a Cash Unlock Assessment
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
}
