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
 * Custom cursor:
 *  - default: a lagging ring + a snappy dot (mix-blend-difference so it
 *    reads on dark and light sections), growing over interactive elements;
 *  - labelled: any element with [data-cursor-label] swaps the cursor for a
 *    filled coral disc showing that label (e.g. "View" on work cards).
 * Desktop + non-reduced-motion only.
 */
export function Cursor() {
  const finePointer = useMediaQuery("(pointer: fine)");
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const enabled = finePointer && !reduceMotion;

  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState("");

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
      const labelled = target?.closest<HTMLElement>("[data-cursor-label]");
      setLabel(labelled?.dataset.cursorLabel ?? "");
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

  const showLabel = Boolean(label);

  return (
    <>
      {/* Ring + dot (inverted blend) */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[100] mix-blend-difference"
      >
        <motion.div className="absolute left-0 top-0" style={{ x: ringX, y: ringY }}>
          <motion.div
            className="h-9 w-9 rounded-full border border-white"
            style={{ marginLeft: -18, marginTop: -18 }}
            animate={{
              scale: active && !showLabel ? 1.8 : 1,
              opacity: visible && !showLabel ? 1 : 0,
            }}
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
            animate={{ opacity: visible && !active && !showLabel ? 1 : 0 }}
            transition={{ duration: 0.15 }}
          />
        </motion.div>
      </div>

      {/* Label disc */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100]"
        style={{ x: ringX, y: ringY }}
      >
        <motion.div
          className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-[0.7rem] font-medium uppercase tracking-wider text-accent-ink"
          style={{ marginLeft: -32, marginTop: -32 }}
          animate={{ scale: showLabel && visible ? 1 : 0 }}
          transition={{ type: "spring", stiffness: 350, damping: 22 }}
        >
          {label}
        </motion.div>
      </motion.div>
    </>
  );
}
