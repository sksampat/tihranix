import { ButtonLink } from "@/components/ui/button-link";
import { HeroDashboardMockup } from "@/components/hero-dashboard-mockup";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden border-b border-brand-border">
      <div className="pointer-events-none absolute inset-0 bg-wash-hero" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-28">
        <div className="space-y-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-cyan">
            Inventory decision intelligence
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-brand-soft sm:text-5xl lg:text-[2.75rem] lg:leading-[1.1]">
            Reduce dead inventory and unlock working capital.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-brand-muted sm:text-lg">
            Tihranix identifies inventory at risk of becoming dead stock and recommends the
            actions planners can take to free up working capital.
          </p>
          <p className="max-w-xl text-sm leading-relaxed text-brand-muted">
            Connect ERP, WMS, spreadsheets, and operational systems. Surface inventory risk.
            Take action with governed decision intelligence.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="#assessment" variant="primary" className="text-center sm:text-left">
              Book a Discovery Call
            </ButtonLink>
            <ButtonLink href="#design-partner" variant="secondary">
              Become a Design Partner
            </ButtonLink>
          </div>
        </div>
        <HeroDashboardMockup />
      </div>
    </div>
  );
}
