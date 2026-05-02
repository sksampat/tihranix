import { SiteLogo } from "@/components/site-logo";

const footerLinks = [
  { href: "#top", label: "About" },
  { href: "#use-cases", label: "Use Cases" },
  { href: "#register", label: "Register Interest" },
  { href: "mailto:hello@tihranix.ai", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#070d18]">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="max-w-md space-y-4">
          <SiteLogo size="sm" />
          <p className="text-sm leading-relaxed text-brand-muted">
            Optimize Operations. Unlock Capital.
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
      <div className="border-t border-white/[0.04] py-6 text-center text-xs text-brand-muted/80">
        © {new Date().getFullYear()} Tihranix. All rights reserved.
      </div>
    </footer>
  );
}
