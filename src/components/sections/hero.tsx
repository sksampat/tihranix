import { ButtonLink } from "@/components/ui/button-link";
import { HeroDashboardMockup } from "@/components/hero-dashboard-mockup";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden border-b border-white/[0.08]">
      <div className="pointer-events-none absolute inset-0 bg-wash-hero" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-28">
        <div className="space-y-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-cyan">
            Wedge now · platform later
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-brand-soft sm:text-5xl lg:text-[2.75rem] lg:leading-[1.1]">
            Turn dead inventory into governed working-capital decisions.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-brand-muted sm:text-lg">
            Tihranix is a human-governed decision layer for inventory capital. Supply chain
            and finance teams use it to detect dead and slow-moving stock, simulate actions
            under policy, route decisions for approval, and expand the same fabric into
            broader constrained inventory flows—without replacing ERP, planning, or WMS.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="#assessment" variant="primary" className="text-center sm:text-left">
              Book a working capital review
            </ButtonLink>
            <ButtonLink href="#how-it-works" variant="secondary">
              See how Tihranix works
            </ButtonLink>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-brand-muted">
            Progressive autonomy by design:{" "}
            <span className="text-brand-cyan">recommend</span>,{" "}
            <span className="text-brand-cyan">human approve</span>, then{" "}
            <span className="text-brand-cyan">guardrailed execute</span>—with audit trails
            and overrides where your policies require them.
          </p>
        </div>
        <HeroDashboardMockup />
      </div>
    </div>
  );
}
