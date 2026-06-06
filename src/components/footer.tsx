import { SiteLogo } from "@/components/site-logo";

const footerLinks = [
  { href: "#top", label: "Home" },
  { href: "#outcome-agents", label: "Outcome Agents" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#technology", label: "Technology" },
  { href: "#company", label: "Company" },
  { href: "#assessment", label: "Contact" },
  { href: "mailto:intelligence@tihranix.ai", label: "Email" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-page">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="max-w-md space-y-4">
          <SiteLogo size="sm" />
          <p className="text-sm leading-relaxed text-brand-muted">
            Outcome-driven AI platform. Tell Tihranix the business outcome you want, and it
            automatically assembles the intelligence needed to achieve it—starting with dead
            inventory and inventory health, governed by a human-in-the-loop architecture.
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
