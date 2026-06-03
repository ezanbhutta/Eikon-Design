"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { projects } from "@/data/projects";
import { Container } from "@/components/container";
import { SectionLabel } from "@/components/section-label";
import { WorkCard } from "@/components/work-card";
import { cn } from "@/lib/cn";

type View = "index" | "grid";

export function WorkShowcase() {
  const [view, setView] = useState<View>("index");

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
              >
                {projects.map((project, i) => (
                  <li key={project.slug}>
                    <Link
                      href={`/work/${project.slug}`}
                      data-cursor-label="View"
                      className="group flex items-center gap-4 border-b border-line py-4 sm:gap-6 sm:py-5"
                    >
                      <span className="w-6 shrink-0 font-mono text-xs text-faint transition-colors duration-300 group-hover:text-accent">
                        0{i + 1}
                      </span>

                      <div className="relative aspect-[16/10] w-28 shrink-0 overflow-hidden rounded-lg border border-line/60 bg-ink-soft sm:w-44 lg:w-56">
                        <Image
                          src={project.board}
                          alt={`${project.name} — ${project.sector}`}
                          fill
                          sizes="(max-width: 640px) 33vw, 13rem"
                          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="truncate font-display text-2xl leading-none tracking-tight text-bone transition-colors duration-300 group-hover:text-accent sm:text-3xl lg:text-4xl">
                          {project.name}
                        </h3>
                        <p className="mt-2 truncate text-sm text-muted">
                          {project.sector}
                          <span className="hidden sm:inline">
                            {" "}
                            · {project.services.join(", ")}
                          </span>
                        </p>
                      </div>

                      <div className="hidden shrink-0 items-center gap-8 sm:flex">
                        <span className="font-mono text-xs tracking-widest text-faint">
                          {project.year}
                        </span>
                        <span className="text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-bone">
                          →
                        </span>
                      </div>
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
