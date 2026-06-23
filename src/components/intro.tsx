"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, MotionConfig } from "motion/react";

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

const EASE = [0.16, 1, 0.3, 1] as const;

function Loader({ onDone }: { onDone: () => void }) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem("eikon_intro") === "1";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = seen || reduce ? 0 : 2400;

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
            initial={{ opacity: 0, scale: 0.55, rotate: -12, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.15, ease: EASE }}
          >
            <Image
              src="/eikon-logo.png"
              alt="Eikon Designs"
              width={128}
              height={128}
              priority
              className="h-24 w-24 rounded-[24%] shadow-2xl shadow-black/40 sm:h-28 sm:w-28"
            />
          </motion.div>

          <span className="mt-8 block overflow-hidden">
            <motion.span
              initial={{ y: "120%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.55 }}
              className="block font-mono text-xs uppercase tracking-[0.42em] text-muted"
            >
              Eikon&nbsp;Designs
            </motion.span>
          </span>

          <div className="mt-7 h-px w-44 overflow-hidden bg-line">
            <motion.div
              className="h-full bg-accent"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
