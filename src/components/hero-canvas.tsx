"use client";

import dynamic from "next/dynamic";

/** Three.js can't SSR — load the constellation client-only. */
const HeroScene = dynamic(() => import("@/components/hero-canvas-scene"), {
  ssr: false,
});

export function HeroCanvas({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden>
      <HeroScene />
    </div>
  );
}
