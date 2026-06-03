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
 * Minimal custom cursor: a single small dot that follows the pointer,
 * blended with mix-blend-difference so it reads on any background, and
 * nudges a little larger over interactive elements. Desktop + non-reduced
 * motion only.
 */
export function Cursor() {
  const finePointer = useMediaQuery("(pointer: fine)");
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const enabled = finePointer && !reduceMotion;

  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const dotX = useSpring(x, { stiffness: 750, damping: 42 });
  const dotY = useSpring(y, { stiffness: 750, damping: 42 });

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const target = e.target as HTMLElement | null;
      setActive(
        Boolean(
          target?.closest(
            "a, button, [data-cursor], [data-cursor-label], input, textarea, select",
          ),
        ),
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
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] mix-blend-difference"
      style={{ x: dotX, y: dotY }}
    >
      <motion.div
        className="h-2 w-2 rounded-full bg-white"
        style={{ marginLeft: -4, marginTop: -4 }}
        animate={{ scale: active ? 1.8 : 1, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.18 }}
      />
    </motion.div>
  );
}
