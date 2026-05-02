import { ButtonLink } from "@/components/ui/button-link";
import { HeroVisual } from "@/components/hero-visual";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden border-b border-white/[0.06]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,194,168,0.14),transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-28">
        <div className="space-y-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-accent">
            Enterprise operations intelligence
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-brand-soft sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
            Optimize Operations. Unlock Capital.
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-brand-muted">
            Tihranix helps enterprises identify inefficiencies, improve decisions,
            and coordinate execution across fragmented systems—driving measurable
            operational and financial impact.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="#register" variant="primary">
              Register Interest
            </ButtonLink>
            <ButtonLink href="#how-it-works" variant="secondary">
              See How It Works
            </ButtonLink>
          </div>
        </div>
        <HeroVisual />
      </div>
    </div>
  );
}
