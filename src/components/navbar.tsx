"use client";

import { useState } from "react";
import { SiteLogo } from "@/components/site-logo";
import { ButtonLink } from "@/components/ui/button-link";

const links = [
  { href: "#problem", label: "Problem" },
  { href: "#inventory-urgency", label: "Capital risk" },
  { href: "#product", label: "Product" },
  { href: "#agentic-decision", label: "System" },
  { href: "#outcomes", label: "Outcomes" },
  { href: "#roadmap", label: "Roadmap" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-brand-navy/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cyan"
          aria-label="Tihranix home"
        >
          <SiteLogo size="md" />
        </a>

        <nav
          className="hidden min-w-0 flex-1 flex-wrap items-center justify-end gap-x-4 gap-y-2 lg:flex"
          aria-label="Primary"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium text-brand-muted transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <ButtonLink href="#assessment" variant="primary" className="px-3 py-2.5 text-xs sm:text-sm">
            Partner conversation
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.03] p-2 text-white transition hover:border-brand-cyan/30 hover:bg-brand-cyan/[0.05] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-white/[0.06] bg-brand-navy/98 px-4 py-4 lg:hidden"
        >
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-2 py-2 text-sm font-medium text-white/95 hover:bg-white/[0.05]"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <ButtonLink
              href="#assessment"
              variant="primary"
              className="mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              Partner conversation
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
