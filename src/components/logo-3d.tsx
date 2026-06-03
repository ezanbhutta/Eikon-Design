"use client";

import dynamic from "next/dynamic";
import { useReducedMotion } from "motion/react";
import { EikonIcon } from "@/components/eikon-logo";
import { cn } from "@/lib/cn";

/** Three.js can't SSR — load the scene client-only with a graceful fallback. */
const LogoScene = dynamic(() => import("@/components/logo-3d-scene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <EikonIcon className="h-24 w-24 animate-pulse" />
    </div>
  ),
});

export function Logo3D({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={cn("relative", className)} data-cursor-label="Drag">
      <LogoScene autoRotate={!reduceMotion} />
    </div>
  );
}
