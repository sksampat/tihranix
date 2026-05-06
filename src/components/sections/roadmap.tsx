import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

const phases = [
  {
    title: "Phase 1 — Dead and slow-moving inventory recovery",
    summary:
      "Turn trapped inventory into governed recovery decisions with fast working-capital impact.",
    current: true,
    bullets: [
      "Detect trapped and slow-moving inventory",
      "Simulate redeploy, markdown, liquidation, bundle, and scrap options",
      "Recommend governed actions with financial and service impact",
      "Deliver near-term working-capital improvement",
    ],
  },
  {
    title: "Phase 2 — Continuous inventory capital optimization",
    summary: "Prevent inventory from becoming dead in the first place.",
    current: false,
    bullets: [
      "Identify inventory at risk of becoming slow-moving or excess",
      "Improve redeployment, replenishment, and inventory policy decisions",
      "Balance service levels with capital efficiency",
      "Shift from one-time clean-up to ongoing optimization",
    ],
  },
  {
    title: "Phase 3 — Constrained inventory allocation and planning",
    summary:
      "Extend the engine to moving inventory decisions under real-world constraints.",
    current: false,
    bullets: [
      "Support constrained allocation across customers, channels, and locations",
      "Help teams evaluate service, margin, compliance, and policy trade-offs",
      "Connect working capital with inventory movement decisions",
      "Expand into broader supply chain and finance planning workflows",
    ],
  },
] as const;

export function RoadmapSection() {
  return (
    <PageSection
      id="roadmap"
      aria-labelledby="roadmap-heading"
      className="border-t border-white/[0.06] bg-wash-section-violet py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          headingId="roadmap-heading"
          align="center"
          title="Start with trapped inventory. Expand into constrained inventory decisions."
          description="Tihranix begins with dead and slow-moving inventory because it is the most visible inventory-capital problem in the enterprise. The roadmap extends the same decision engine upstream — first to prevent excess inventory, then to support broader constrained inventory decisions across the network."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {phases.map((p) => (
            <GlassCard
              key={p.title}
              as="article"
              className={`flex h-full flex-col p-5 ${
                p.current
                  ? "ring-1 ring-brand-cyan/25 border-brand-cyan/20"
                  : ""
              }`}
            >
              {p.current ? (
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-cyan">
                  Current wedge
                </p>
              ) : (
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-muted">
                  Adjacent · strategic
                </p>
              )}
              <h3 className="mt-3 text-base font-semibold leading-snug text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-snug text-brand-muted">{p.summary}</p>
              <ul className="mt-4 flex-1 space-y-2.5 text-sm leading-relaxed text-brand-muted">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-cyan/70"
                      aria-hidden
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
