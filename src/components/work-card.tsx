"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/cn";

export function WorkCard({
  project,
  className,
  priority,
}: {
  project: Project;
  className?: string;
  /** Eager-load + prioritize for above-the-fold placements. */
  priority?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : ["-6%", "6%"],
  );

  return (
    <Link
      ref={ref}
      href={`/work/${project.slug}`}
      data-cursor-label="View"
      className={cn("group block", className)}
    >
      <div className="relative aspect-[1600/1078] overflow-hidden rounded-2xl border border-line/60 bg-ink-soft">
        {/* Parallax image (slightly scaled so the drift never exposes edges) */}
        <motion.div style={{ y, scale: 1.12 }} className="absolute inset-0">
          <Image
            src={project.image}
            alt={`${project.name} — ${project.sector}`}
            fill
            priority={priority}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />
        </motion.div>

        {/* Meta corners */}
        <div className="pointer-events-none absolute inset-0 z-10 flex items-start justify-between p-5">
          <span className="rounded-full bg-ink/55 px-3 py-1 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-bone/90 backdrop-blur-sm">
            {project.sector}
          </span>
          <span className="font-mono text-[0.7rem] tracking-widest text-bone/70 mix-blend-difference">
            {project.year}
          </span>
        </div>

        {/* Hover veil */}
        <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/15" />
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
