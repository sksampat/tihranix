import { ButtonLink } from "@/components/ui/button-link";
import { HeroDashboardMockup } from "@/components/hero-dashboard-mockup";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden border-b border-white/[0.06]">
      <div className="pointer-events-none absolute inset-0 bg-wash-hero" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-28">
        <div className="space-y-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-cyan">
            Autonomous capital optimization
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.15rem] lg:leading-[1.08]">
            Free up cash trapped in dead inventory.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-brand-muted sm:text-lg">
            Tihranix autonomously identifies slow-moving and non-moving inventory,
            simulates liquidation strategies, and recommends actions that unlock
            working capital without damaging margins or service levels.
          </p>
          <p className="max-w-xl border-l-2 border-brand-cyan/45 pl-4 text-base font-medium leading-snug text-white">
            Free up cash trapped in dead inventory — without hurting service levels.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="#assessment" variant="primary">
              See How Much Cash You Can Unlock
            </ButtonLink>
            <ButtonLink href="#solution" variant="secondary">
              Explore the Platform
            </ButtonLink>
          </div>
          <p className="max-w-lg text-sm leading-relaxed text-brand-muted">
            Built for CFOs, finance transformation leaders, and supply chain
            executives at inventory-heavy enterprises.
          </p>
        </div>
        <HeroDashboardMockup />
      </div>
    </div>
  );
}
