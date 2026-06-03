"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { cn } from "@/lib/cn";

/**
 * The real Eikon logo presented in 3D: it tilts toward the cursor (CSS
 * perspective) and gently floats, with a soft brand glow behind. Uses the
 * actual logo image — no modeled stand-in. Reduced-motion → static.
 */
export function Logo3D({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [16, -16]), {
    stiffness: 140,
    damping: 14,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-20, 20]), {
    stiffness: 140,
    damping: 14,
  });

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function reset() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div
      ref={ref}
      onMouseMove={reduce ? undefined : handleMove}
      onMouseLeave={reset}
      className={cn(
        "relative flex items-center justify-center [perspective:1200px]",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute h-2/3 w-2/3 rounded-full opacity-25 blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, #ff4f93, #ff6b4c 55%, transparent 75%)",
        }}
      />
      <motion.div
        style={{
          rotateX: reduce ? 0 : rotateX,
          rotateY: reduce ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={reduce ? undefined : { y: [0, -14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <Image
          src="/eikon-logo.png"
          alt="Eikon Designs logo"
          width={448}
          height={448}
          sizes="(max-width: 1024px) 16rem, 22rem"
          className="w-64 rounded-[24%] shadow-2xl shadow-black/50 sm:w-72 lg:w-[22rem]"
        />
      </motion.div>
    </div>
  );
}
