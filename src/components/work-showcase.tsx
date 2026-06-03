"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";
import { projects } from "@/data/projects";
import { Container } from "@/components/container";
import { SectionLabel } from "@/components/section-label";
import { WorkCard } from "@/components/work-card";
import { cn } from "@/lib/cn";

type View = "index" | "grid";

export function WorkShowcase() {
  const [view, setView] = useState<View>("index");
  const [hovered, setHovered] = useState<number | null>(null);
  const reduce = useReducedMotion();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 280, damping: 30, mass: 0.5 });
  const py = useSpring(my, { stiffness: 280, damping: 30, mass: 0.5 });

  function trackCursor(e: React.MouseEvent) {
    mx.set(e.clientX);
    my.set(e.clientY);
  }

  return (
    <section id="work" className="scroll-mt-24 border-t border-line py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel index="01">Selected work</SectionLabel>
            <h2 className="font-display mt-5 max-w-2xl text-4xl leading-[1.02] tracking-tight text-bone sm:text-5xl lg:text-6xl">
              Recent logos &amp; identities.
            </h2>
          </div>
          <ViewToggle view={view} onChange={setView} />
        </div>

        <div className="mt-12 lg:mt-16">
          <AnimatePresence mode="wait" initial={false}>
            {view === "index" ? (
              <motion.ul
                key="index"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t border-line"
                onMouseMove={trackCursor}
                onMouseLeave={() => setHovered(null)}
              >
                {projects.map((project, i) => (
                  <li key={project.slug}>
                    <Link
                      href={`/work/${project.slug}`}
                      onMouseEnter={() => setHovered(i)}
                      className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 border-b border-line py-5 sm:grid-cols-[3rem_1fr_10rem_5rem_2rem] sm:gap-6 sm:py-7"
                    >
                      <span className="font-mono text-xs text-faint transition-colors duration-300 group-hover:text-accent">
                        0{i + 1}
                      </span>
                      <span className="font-display text-2xl leading-none tracking-tight text-bone transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-2 group-hover:text-accent sm:text-3xl lg:text-4xl">
                        {project.name}
                      </span>
                      <span className="hidden text-sm text-muted sm:block">
                        {project.sector}
                      </span>
                      <span className="hidden font-mono text-xs tracking-widest text-faint sm:block">
                        {project.year}
                      </span>
                      <span className="justify-self-end text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-bone">
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </motion.ul>
            ) : (
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid gap-x-8 gap-y-12 sm:grid-cols-2"
              >
                {projects.map((project, i) => (
                  <WorkCard key={project.slug} project={project} priority={i < 2} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>

      {/* Cursor-following preview (index view, desktop, motion on) */}
      {!reduce && (
        <AnimatePresence>
          {view === "index" && hovered !== null && (
            <motion.div
              className="pointer-events-none fixed left-0 top-0 z-40 hidden lg:block"
              style={{ x: px, y: py }}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative -ml-8 -mt-36 h-52 w-80 overflow-hidden rounded-xl border border-line/80 shadow-2xl shadow-black/40">
                <Image
                  src={projects[hovered].image}
                  alt=""
                  fill
                  sizes="320px"
                  className="object-cover"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </section>
  );
}

function ViewToggle({
  view,
  onChange,
}: {
  view: View;
  onChange: (v: View) => void;
}) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-line p-1 font-mono text-xs uppercase tracking-wider">
      {(["index", "grid"] as const).map((v) => (
        <button
          key={v}
          type="button"
          onClick={() => onChange(v)}
          aria-pressed={view === v}
          className={cn(
            "rounded-full px-4 py-1.5 transition-colors",
            view === v ? "bg-bone text-ink" : "text-muted hover:text-bone",
          )}
        >
          {v}
        </button>
      ))}
    </div>
  );
}
