"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Buttery smooth scrolling via Lenis. Disabled when the visitor prefers
 * reduced motion. Also intercepts in-page hash links (e.g. /#services)
 * so they glide instead of jumping. Renders nothing.
 */
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest<HTMLAnchorElement>(
        'a[href*="#"]',
      );
      if (!anchor) return;
      const href = anchor.getAttribute("href") ?? "";
      // Only handle same-page hash links ("#id" or "/#id").
      if (!(href.startsWith("#") || href.startsWith("/#"))) return;
      const id = href.split("#")[1];
      const target = id ? document.getElementById(id) : null;
      if (target) {
        event.preventDefault();
        lenis.scrollTo(target, { offset: -90 });
      }
    };

    document.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return null;
}
