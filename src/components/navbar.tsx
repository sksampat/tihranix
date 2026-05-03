"use client";

import { useState } from "react";
import { SiteLogo } from "@/components/site-logo";
import { ButtonLink } from "@/components/ui/button-link";

const links = [
  { href: "#problem", label: "Problem" },
  { href: "#solution", label: "Solution" },
  { href: "#architecture", label: "Architecture" },
  { href: "#use-cases", label: "Use Cases" },
  { href: "#register", label: "Register Interest" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-brand-navy/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
          aria-label="Tihranix home"
        >
          <SiteLogo size="md" />
        </a>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-brand-muted transition hover:text-brand-soft"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href="#register" variant="primary" className="px-4 py-2.5">
            Register Interest
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-white/[0.1] p-2 text-brand-soft md:hidden"
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
          className="border-t border-white/[0.06] bg-brand-navy/95 px-4 py-4 md:hidden"
        >
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-2 py-2 text-sm font-medium text-brand-soft hover:bg-white/[0.04]"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <ButtonLink
              href="#register"
              variant="primary"
              className="mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              Register Interest
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
