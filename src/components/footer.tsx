import { SiteLogo } from "@/components/site-logo";

const footerLinks = [
  { href: "#top", label: "Home" },
  { href: "#solution", label: "Platform" },
  { href: "#roi", label: "ROI" },
  { href: "#assessment", label: "Assessment" },
  { href: "mailto:contact@tihranix.ai", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-brand-navy-deep">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="max-w-md space-y-4">
          <SiteLogo size="sm" />
          <p className="text-sm leading-relaxed text-brand-muted">
            Free up cash trapped in dead inventory — without hurting service levels.
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
              className="text-sm font-medium text-brand-muted transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/[0.05] py-6 text-center text-xs text-brand-muted">
        © {new Date().getFullYear()} Tihranix. All rights reserved.
      </div>
    </footer>
  );
}
