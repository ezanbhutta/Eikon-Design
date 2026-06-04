"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "motion/react";

/** Three.js can't SSR — load the constellation client-only. */
const HeroScene = dynamic(() => import("@/components/hero-canvas-scene"), {
  ssr: false,
});

/** Constellation scoped to the hero (not the whole page). */
export function HeroCanvas({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <div className={className} aria-hidden>
      <HeroScene />
    </div>
  );
}
