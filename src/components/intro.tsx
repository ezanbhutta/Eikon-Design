"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import { EikonIcon } from "@/components/eikon-logo";

/**
 * Coordinates the first-load intro. `useIntroDone()` lets the hero (and
 * anything else) hold its entrance until the loader has lifted away.
 * Also installs MotionConfig so every Motion animation respects the
 * visitor's reduced-motion preference automatically.
 */
const IntroContext = createContext(true);
export const useIntroDone = () => useContext(IntroContext);

export function IntroProvider({ children }: { children: React.ReactNode }) {
  const [done, setDone] = useState(false);

  return (
    <MotionConfig reducedMotion="user">
      <IntroContext.Provider value={done}>
        <Loader onDone={() => setDone(true)} />
        {children}
      </IntroContext.Provider>
    </MotionConfig>
  );
}

function Loader({ onDone }: { onDone: () => void }) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem("eikon_intro") === "1";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = seen || reduce ? 0 : 1500;

    const timer = window.setTimeout(() => {
      sessionStorage.setItem("eikon_intro", "1");
      setOpen(false);
      onDone();
    }, duration);

    return () => window.clearTimeout(timer);
  }, [onDone]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <EikonIcon className="h-16 w-16" />
          </motion.div>
          <div className="mt-7 h-px w-44 overflow-hidden bg-line">
            <motion.div
              className="h-full bg-accent"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.3, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
