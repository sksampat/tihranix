import { PageSection } from "@/components/page-section";
import { SectionHeading } from "@/components/section-heading";

const trustPoints = [
  "Explicit control modes: recommend, approve, or execute—chosen per workflow and risk tier.",
  "Policies, thresholds, escalations, and overrides defined before decisions become operational.",
  "Explainable scenarios with rationale captured for audit—not opaque model scores alone.",
  "Integrates with ERP, planning, WMS, and execution systems as the governed layer above them.",
] as const;

export function EnterpriseTrustSection() {
  return (
    <PageSection
      id="trust"
      aria-labelledby="trust-heading"
      className="py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <SectionHeading
            headingId="trust-heading"
            eyebrow="Enterprise trust"
            title="Governed, auditable, and ready for operators who answer to the balance sheet."
            description="Every Tihranix workflow operates with explicit control modes. Teams define policies, thresholds, escalations, and overrides before any decision becomes operational—so autonomy is always bounded by what your enterprise will sign."
          />
          <ul className="space-y-4 rounded-2xl border border-brand-border bg-brand-card p-6 sm:p-8">
            {trustPoints.map((t) => (
              <li key={t} className="flex gap-3 text-sm leading-relaxed text-brand-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-cyan" aria-hidden />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageSection>
  );
}
