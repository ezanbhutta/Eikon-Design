"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "motion/react";

export function ScrollLine() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const drawn = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 28,
    restDelta: 0.001,
  });
  const dashOffset = useTransform(drawn, (v) => 1 - v);

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 hidden h-full w-full sm:block"
      preserveAspectRatio="none"
      viewBox="0 0 100 1200"
      fill="none"
    >
      <motion.path
        d="M50 0 C 16 95 84 205 50 305 S 14 485 50 610 S 86 775 50 905 S 16 1075 50 1200"
        stroke="url(#brandGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        pathLength={1}
        strokeDasharray="1"
        style={{ strokeDashoffset: reduce ? 0 : dashOffset, opacity: 0.5 }}
      />
    </svg>
  );
}
