"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { Container } from "@/components/container";
import { ArrowLink } from "@/components/arrow-link";
import { Magnetic } from "@/components/magnetic";
import { HeroCanvas } from "@/components/hero-canvas";
import { LiveClock } from "@/components/live-clock";
import { useIntroDone } from "@/components/intro";
import { site } from "@/data/site";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const stage: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const word: Variants = {
  hidden: { opacity: 0, y: 56 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } },
};

export function SiteHero() {
  const introDone = useIntroDone();

  return (
    <section className="relative overflow-hidden pb-16 pt-36 sm:pt-44 lg:pb-20 lg:pt-52">
      <HeroCanvas className="pointer-events-none absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-ink via-ink/40 to-transparent" />
      <Container className="relative z-10">
        <motion.div
          variants={stage}
          initial="hidden"
          animate={introDone ? "show" : "hidden"}
        >
          <motion.p
            variants={fadeUp}
            className="font-mono text-xs uppercase tracking-[0.24em] text-faint"
          >
            Independent logo &amp; identity studio
          </motion.p>

          <motion.h1
            variants={word}
            className="wordmark-sheen font-display mt-6 text-[24vw] font-extrabold leading-[0.85] tracking-[-0.04em] lg:text-[19vw]"
          >
            {site.name}
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-3 flex flex-wrap items-baseline gap-x-5 gap-y-1"
          >
            <p className="font-serif text-3xl italic leading-none text-bone sm:text-4xl lg:text-5xl">
              Logos, drawn properly.
            </p>
            <span className="font-mono text-xs tracking-[0.18em] text-faint">
              ↘ since {site.founded}
            </span>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-9 max-w-xl text-lg leading-relaxed text-muted"
          >
            We&rsquo;re a small studio making clean, modern logos and complete
            brand kits — for founders who want their business to look the part
            from day one.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4"
          >
            <Magnetic>
              <Link
                href="/work"
                className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-ink transition-transform hover:-translate-y-0.5"
              >
                View selected work
              </Link>
            </Magnetic>
            <ArrowLink href="/contact" className="text-bone">
              Start a project
            </ArrowLink>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-5 font-mono text-xs uppercase tracking-[0.16em] text-faint"
          >
            <span>Multan — worldwide</span>
            <Divider />
            <span>
              Local <LiveClock className="text-muted" />
            </span>
            <Divider />
            <span className="inline-flex items-center gap-2 text-muted">
              <span className="inline-block h-1.5 w-1.5 bg-accent" aria-hidden="true" />
              Open for new work
            </span>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

function Divider() {
  return <span className="h-3 w-px bg-line" aria-hidden="true" />;
}
