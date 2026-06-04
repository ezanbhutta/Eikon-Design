"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "motion/react";

/** Three.js can't SSR — load the constellation client-only. */
const BackgroundScene = dynamic(
  () => import("@/components/hero-canvas-scene"),
  { ssr: false },
);

/**
 * Site-wide moving background: a single fixed constellation behind all
 * content, at low opacity. Skipped entirely for reduced-motion.
 */
export function SiteBackground() {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 opacity-50"
    >
      <BackgroundScene />
    </div>
  );
}
