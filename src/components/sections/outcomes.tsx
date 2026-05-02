import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

const outcomes = [
  "Unlock working capital",
  "Improve operational efficiency",
  "Increase resource utilization",
  "Accelerate decision cycles",
  "Improve execution reliability",
] as const;

export function OutcomesSection() {
  return (
    <PageSection
      id="outcomes"
      aria-labelledby="outcomes-heading"
      className="border-y border-white/[0.06] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          headingId="outcomes-heading"
          title="Designed to unlock measurable value."
          description="Focused on operational and financial outcomes your leadership team can recognize on the P&L and on the floor."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {outcomes.map((label) => (
            <li key={label}>
              <GlassCard className="flex h-full flex-col justify-between py-6">
                <span
                  className="mb-4 inline-block h-1 w-10 rounded-full bg-gradient-to-r from-[#22C55E] to-[#00C2A8]"
                  aria-hidden
                />
                <p className="text-sm font-semibold leading-snug text-brand-soft">
                  {label}
                </p>
              </GlassCard>
            </li>
          ))}
        </ul>
      </div>
    </PageSection>
  );
}
