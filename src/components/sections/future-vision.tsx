import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";

const domains = [
  "Supply chain",
  "Procurement",
  "Manufacturing",
  "Planning",
  "Risk",
  "Enterprise decision intelligence",
] as const;

export function FutureVisionSection() {
  return (
    <PageSection
      id="company"
      aria-labelledby="company-heading"
      className="py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          headingId="company-heading"
          eyebrow="Current Focus · Future Vision"
          title="Starting With Inventory. Expanding Across Enterprise Decisions."
          description="Tihranix begins with inventory intelligence because dead stock, excess inventory, forecast errors, and working capital leakage are urgent and measurable problems. Over time, the same architecture expands into supply chain, procurement, manufacturing, planning, risk, and enterprise decision intelligence."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {domains.map((d, i) => (
            <div
              key={d}
              className="flex items-center gap-4 rounded-2xl border border-brand-border bg-brand-card p-5"
            >
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-brand-border bg-brand-surface/60 text-[11px] font-semibold text-brand-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium text-brand-soft">{d}</span>
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
