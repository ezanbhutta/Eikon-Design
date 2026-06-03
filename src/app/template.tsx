"use client";

import { motion } from "motion/react";

/**
 * A `template` (unlike `layout`) remounts on every navigation, so this
 * gives each route a smooth enter transition. Reduced-motion is handled
 * globally by MotionConfig in IntroProvider.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
