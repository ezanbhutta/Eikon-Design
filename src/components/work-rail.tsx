"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { Container } from "@/components/container";
import { SectionLabel } from "@/components/section-label";
import { ArrowLink } from "@/components/arrow-link";
import { WorkCard } from "@/components/work-card";
import { projects } from "@/data/projects";

/**
 * Cinematic horizontal work gallery. The tall outer section pins its
 * inner panel (sticky) while vertical scroll is mapped to horizontal
 * translation of the track — a 1:1 feel because the section's height is
 * the track's overflow width plus one viewport. Falls back to a simple
 * horizontal-scroll row when reduced motion is preferred.
 */
export function WorkRail() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [maxX, setMaxX] = useState(0);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxX]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    // ResizeObserver fires async (not synchronously in the effect body).
    const observer = new ResizeObserver(() => {
      setMaxX(Math.max(0, track.scrollWidth - window.innerWidth));
    });
    observer.observe(track);
    return () => observer.disconnect();
  }, []);

  const heading = (
    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <div className="max-w-2xl">
        <SectionLabel index="01">Selected work</SectionLabel>
        <h2 className="font-display mt-5 text-4xl leading-tight text-bone sm:text-5xl">
          Marks that earn a second look.
        </h2>
      </div>
      <ArrowLink href="/work" className="text-bone">
        All projects
      </ArrowLink>
    </div>
  );

  const cards = projects.map((project, i) => (
    <div
      key={project.slug}
      className="w-[78vw] shrink-0 snap-start sm:w-[44vw] lg:w-[31vw] xl:w-[26vw]"
    >
      <WorkCard project={project} priority={i === 0} />
    </div>
  ));

  // Reduced motion → accessible native horizontal scroll, no pinning.
  if (reduce) {
    return (
      <section className="overflow-hidden py-24 lg:py-32">
        <Container>{heading}</Container>
        <div className="mt-12 flex snap-x gap-6 overflow-x-auto px-6 pb-4 sm:px-8 lg:px-12">
          {cards}
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: maxX ? `calc(100vh + ${maxX}px)` : undefined }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <Container>{heading}</Container>
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="mt-12 flex gap-6 px-6 will-change-transform sm:px-8 lg:px-12"
        >
          {cards}
        </motion.div>
      </div>
    </section>
  );
}
