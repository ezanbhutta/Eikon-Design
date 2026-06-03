"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import type { Project } from "@/data/projects";
import { LogoMark } from "@/components/logo-mark";
import { cn } from "@/lib/cn";

export function WorkCard({
  project,
  className,
  priority,
}: {
  project: Project;
  className?: string;
  /** Slightly larger logo for hero/featured placements. */
  priority?: boolean;
}) {
  const { from, to, ink } = project.palette;
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : ["-7%", "7%"],
  );

  return (
    <Link
      ref={ref}
      href={`/work/${project.slug}`}
      data-cursor-label="View"
      className={cn("group block", className)}
    >
      <div
        className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-line/60"
        style={{
          backgroundImage: `linear-gradient(155deg, ${from}, ${to})`,
          color: ink,
        }}
      >
        {/* Meta corners */}
        <div className="absolute inset-0 z-10 flex items-start justify-between p-5">
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] opacity-70">
            {project.sector}
          </span>
          <span className="font-mono text-[0.7rem] tracking-widest opacity-70">
            {project.year}
          </span>
        </div>

        {/* Parallax mark */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <LogoMark
            mark={project.mark}
            strokeWidth={2.2}
            className={cn(
              "transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110",
              priority ? "h-28 w-28" : "h-20 w-20",
            )}
          />
        </motion.div>

        {/* Hover veil */}
        <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/10" />
      </div>

      {/* Caption */}
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-xl text-bone transition-colors duration-300 group-hover:text-accent">
          {project.name}
        </h3>
        <span className="text-sm text-muted">{project.services.join(" · ")}</span>
      </div>
      <p className="mt-1 text-sm leading-relaxed text-muted">{project.summary}</p>
    </Link>
  );
}
