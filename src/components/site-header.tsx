"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/data/site";
import { EikonLogo } from "@/components/eikon-logo";
import { Container } from "@/components/container";
import { Squiggle } from "@/components/squiggle";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-colors duration-500",
          scrolled && !open
            ? "border-b-[1.5px] border-ink bg-paper/85 backdrop-blur-md"
            : "border-b border-transparent",
        )}
      >
        <Container className="flex h-20 items-center justify-between">
          <Link
            href="/"
            aria-label={`${site.name} — home`}
            className="relative z-50 text-ink transition-opacity hover:opacity-70"
          >
            <EikonLogo priority />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="offset-sm relative z-50 flex h-12 w-12 items-center justify-center rounded-full border-[1.5px] border-ink bg-white transition-transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={cn(
                  "absolute left-0 block h-[1.5px] w-5 bg-ink transition-all duration-300",
                  open ? "top-1.5 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1.5 block h-[1.5px] w-5 bg-ink transition-all duration-300",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 block h-[1.5px] w-5 bg-ink transition-all duration-300",
                  open ? "top-1.5 -rotate-45" : "top-3",
                )}
              />
            </span>
          </button>
        </Container>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-40 overflow-hidden bg-paper transition-all duration-500",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        <Squiggle
          variant="loop"
          className="absolute right-[12%] top-28 hidden h-20 w-28 text-ink opacity-60 lg:block"
        />
        <Container className="flex h-full flex-col justify-center">
          <nav className="flex flex-col gap-1" aria-label="Primary">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-5xl leading-[1.15] text-ink transition-colors hover:italic hover:text-accent sm:text-7xl"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link href="/contact" onClick={() => setOpen(false)} className="pill pill-accent">
              Start a project
            </Link>
            <a
              href={site.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className="ink-link link-line font-medium"
            >
              Message us on Fiverr &rarr;
            </a>
          </div>
        </Container>
      </div>
    </header>
  );
}
