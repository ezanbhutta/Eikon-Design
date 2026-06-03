"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";
import { EikonLogo } from "@/components/eikon-logo";
import { Container } from "@/components/container";
import { Magnetic } from "@/components/magnetic";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-colors duration-500",
          scrolled || open
            ? "border-b border-line/70 bg-ink/80 backdrop-blur-xl"
            : "border-b border-transparent",
        )}
      >
        <Container className="flex h-18 items-center justify-between py-4">
          <Link
            href="/"
            aria-label={`${site.name} — home`}
            className="text-bone transition-opacity hover:opacity-70"
          >
            <EikonLogo priority />
          </Link>

          <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
            {site.nav.map((item) => {
              const active =
                item.href === pathname ||
                (!item.href.startsWith("/#") &&
                  pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "link-line text-sm tracking-wide transition-colors",
                    active ? "text-bone" : "text-muted hover:text-bone",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <Magnetic className="max-sm:hidden">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-bone px-5 py-2.5 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
              >
                Start a project
              </Link>
            </Magnetic>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
            >
              <span className="sr-only">Menu</span>
              <span className="relative block h-4 w-6">
                <span
                  className={cn(
                    "absolute left-0 block h-0.5 w-6 bg-bone transition-all duration-300",
                    open ? "top-1.5 rotate-45" : "top-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-3 block h-0.5 w-6 bg-bone transition-all duration-300",
                    open ? "-rotate-45 !top-1.5" : "",
                  )}
                />
              </span>
            </button>
          </div>
        </Container>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 top-18 z-40 bg-ink transition-all duration-500 md:hidden",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <Container className="flex h-full flex-col justify-between py-10">
          <nav className="flex flex-col gap-2" aria-label="Mobile">
            {site.nav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-4xl text-bone/90 transition-colors hover:text-accent"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="space-y-6">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-4 text-base font-medium text-accent-ink"
            >
              Start a project
            </Link>
            <a
              href={site.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted"
            >
              Message us on Fiverr →
            </a>
          </div>
        </Container>
      </div>
    </header>
  );
}
