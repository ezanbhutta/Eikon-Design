"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useReducedMotion } from "motion/react";

const HeroScene = dynamic(() => import("@/components/hero-canvas-scene"), {
  ssr: false,
});

export function HeroCanvas({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: "200px 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  if (reduce) return null;

  return (
    <div ref={ref} className={className} aria-hidden>
      <HeroScene active={active} />
    </div>
  );
}
