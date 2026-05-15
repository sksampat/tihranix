import { SiteLogo } from "@/components/site-logo";

const footerLinks = [
  { href: "#top", label: "Home" },
  { href: "#why-it-matters", label: "Why" },
  { href: "#how-it-works", label: "How" },
  { href: "#pillars", label: "Pillars" },
  { href: "#evolution", label: "Evolution" },
  { href: "#trust", label: "Trust" },
  { href: "#assessment", label: "Contact" },
  { href: "mailto:contact@tihranix.ai", label: "Email" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-page">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="max-w-md space-y-4">
          <SiteLogo size="sm" />
          <p className="text-sm leading-relaxed text-brand-muted">
            Human-governed decision layer for inventory capital. Starts with dead and slow-moving
            stock; expands into broader constrained inventory and supply chain decisions while
            staying policy-aware, explainable, and auditable.
          </p>
        </div>
        <nav
          className="flex flex-wrap gap-x-8 gap-y-3"
          aria-label="Footer"
        >
          {footerLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-brand-muted transition hover:text-brand-soft"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-brand-border py-6 text-center text-xs text-brand-subtle">
        © {new Date().getFullYear()} Tihranix. All rights reserved.
      </div>
    </footer>
  );
}
