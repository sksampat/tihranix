import { ButtonLink } from "@/components/ui/button-link";
import { HeroDashboardMockup } from "@/components/hero-dashboard-mockup";

const bullets = [
  "Detect dead, slow-moving, and at-risk inventory across plants, DCs, and channels",
  "Simulate redeploy, reprice, liquidate, bundle, and scrap options",
  "Produce audit-ready recommendations supply chain and finance can approve with confidence",
] as const;

export function HeroSection() {
  return (
    <div className="relative overflow-hidden border-b border-white/[0.08]">
      <div className="pointer-events-none absolute inset-0 bg-wash-hero" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-28">
        <div className="space-y-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-cyan">
            Inventory-capital decisions under business constraints
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-brand-soft sm:text-5xl lg:text-[2.85rem] lg:leading-[1.1]">
            Tihranix turns dead and slow-moving inventory into governed working-capital
            decisions.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-brand-muted sm:text-lg">
            Tihranix continuously detects trapped inventory, simulates recovery paths, and
            recommends actions that unlock working capital without breaking service,
            margin, or policy constraints.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="#assessment" variant="primary" className="text-center sm:text-left">
              Request a Design Partner Conversation
            </ButtonLink>
            <ButtonLink href="#product" variant="secondary">
              See how it works
            </ButtonLink>
          </div>
          <ul className="max-w-xl space-y-3 border-l-2 border-brand-cyan/35 pl-4">
            {bullets.map((line) => (
              <li
                key={line}
                className="text-sm leading-relaxed text-brand-muted sm:text-[0.9375rem]"
              >
                {line}
              </li>
            ))}
          </ul>
          <p className="max-w-lg text-sm leading-relaxed text-brand-muted">
            For CSCO, VP Supply Chain, heads of inventory and planning, supply chain finance
            leaders, and CFO partners who need clear trade-offs under constraint—in one
            governed system.
          </p>
        </div>
        <HeroDashboardMockup />
      </div>
    </div>
  );
}
