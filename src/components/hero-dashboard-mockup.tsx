import { GlassCard } from "@/components/ui/glass-card";

const stats = [
  {
    label: "Trapped inventory exposure",
    value: "Elevated",
    detail: "Cross-network view",
    trend: "Rolling detection",
  },
  {
    label: "Recovery paths modeled",
    value: "Multi-path",
    detail: "Redeploy · reprice · bundle · scrap",
    trend: "Constraint-aware",
  },
  {
    label: "Working capital posture",
    value: "Under review",
    detail: "Governed scenarios",
    trend: "Service floor held",
  },
  {
    label: "Decisions in approval queue",
    value: "Active",
    detail: "Planner + finance",
    trend: "Audit trail attached",
  },
  {
    label: "Service vs. margin trade-off",
    value: "Balanced",
    detail: "Within policy targets",
    trend: "Explicit guardrails",
  },
] as const;

const nestedCard =
  "rounded-xl border border-white/[0.08] bg-[linear-gradient(180deg,rgb(255_255_255/0.03)_0%,rgb(0_0_0/0.08)_100%)] p-4 shadow-[inset_0_1px_0_0_rgb(255_255_255/0.04)]";

export function HeroDashboardMockup() {
  return (
    <div
      className="relative w-full max-w-xl justify-self-end lg:max-w-none"
      aria-hidden
    >
      <div
        className="pointer-events-none absolute -inset-4 rounded-3xl bg-wash-hero opacity-90"
        aria-hidden
      />
      <GlassCard className="relative overflow-hidden p-0">
        <div className="border-b border-white/[0.08] bg-[linear-gradient(90deg,rgb(10_20_36/0.85)_0%,rgb(5_10_18/0.92)_100%)] px-5 py-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-muted">
                Inventory capital decisions
              </p>
              <p className="mt-1 text-sm font-semibold text-brand-soft">
                Governed scenario workspace
              </p>
            </div>
            <span className="rounded-full border border-brand-cyan/30 bg-brand-cyan/[0.08] px-3 py-1 text-[11px] font-medium text-brand-cyan">
              Continuous run
            </span>
          </div>
        </div>
        <div className="grid gap-3 p-4 sm:grid-cols-2 sm:gap-4 sm:p-5 lg:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className={`${nestedCard} lg:last:col-span-1`}>
              <p className="text-[11px] font-medium uppercase tracking-wide text-brand-muted">
                {s.label}
              </p>
              <p className="mt-2 text-xl font-semibold tracking-tight text-brand-soft sm:text-[1.35rem]">
                {s.value}
              </p>
              <p className="mt-1 text-xs text-brand-muted">{s.detail}</p>
              <p className="mt-3 text-[11px] text-brand-muted">{s.trend}</p>
            </div>
          ))}
        </div>
        <div className="border-t border-white/[0.08] bg-brand-navy-mid/50 px-5 py-3 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-brand-muted">
            <span>Service · margin · policy constraints applied</span>
            <span>ERP + planning ingest</span>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
