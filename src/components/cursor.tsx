"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

/** SSR-safe reactive media-query hook (no setState-in-effect). */
function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

/**
 * Custom cursor: a lagging ring + a snappy dot, blended with
 * mix-blend-difference so it reads on both dark and light sections.
 * Only mounts on fine pointers without a reduced-motion preference, and
 * grows over interactive elements.
 */
export function Cursor() {
  const finePointer = useMediaQuery("(pointer: fine)");
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const enabled = finePointer && !reduceMotion;

  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.6 });
  const dotX = useSpring(x, { stiffness: 1000, damping: 50 });
  const dotY = useSpring(y, { stiffness: 1000, damping: 50 });

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const target = e.target as HTMLElement | null;
      setActive(
        Boolean(target?.closest("a, button, [data-cursor], input, textarea, select")),
      );
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100] mix-blend-difference"
    >
      <motion.div className="absolute left-0 top-0" style={{ x: ringX, y: ringY }}>
        <motion.div
          className="h-9 w-9 rounded-full border border-white"
          style={{ marginLeft: -18, marginTop: -18 }}
          animate={{ scale: active ? 1.8 : 1, opacity: visible ? 1 : 0 }}
          transition={{
            scale: { type: "spring", stiffness: 300, damping: 20 },
            opacity: { duration: 0.2 },
          }}
        />
      </motion.div>
      <motion.div className="absolute left-0 top-0" style={{ x: dotX, y: dotY }}>
        <motion.div
          className="h-1.5 w-1.5 rounded-full bg-white"
          style={{ marginLeft: -3, marginTop: -3 }}
          animate={{ opacity: visible && !active ? 1 : 0 }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>
    </div>
  );
}
