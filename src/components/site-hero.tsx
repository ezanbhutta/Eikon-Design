"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { Container } from "@/components/container";
import { ArrowLink } from "@/components/arrow-link";
import { Magnetic } from "@/components/magnetic";
import { LiveClock } from "@/components/live-clock";
import { useIntroDone } from "@/components/intro";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const stage: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const rise: Variants = {
  hidden: { y: "115%" },
  show: { y: 0, transition: { duration: 1.05, ease: EASE } },
};

export function SiteHero() {
  const introDone = useIntroDone();

  return (
    <section className="relative overflow-hidden pb-16 pt-36 sm:pt-44 lg:pb-24 lg:pt-52">
      <Container>
        <motion.div
          variants={stage}
          initial="hidden"
          animate={introDone ? "show" : "hidden"}
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-between gap-4 font-mono text-xs uppercase tracking-[0.2em] text-faint"
          >
            <span>
              {site.name} — {site.tagline}
            </span>
            <span className="hidden sm:inline">/ˈaɪ·kɒn/ · the image of a thing</span>
          </motion.div>

          <h1 className="mt-6 overflow-hidden">
            <motion.span
              variants={rise}
              className="wordmark-sheen font-display block text-[24vw] font-extrabold leading-[0.82] tracking-[-0.04em] lg:text-[19vw]"
            >
              {site.name}
            </motion.span>
          </h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
          >
            We design the smallest, sharpest expression of who you are — logos,
            identity systems, and the guidelines that keep them sharp.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
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

          <motion.dl
            variants={fadeUp}
            className="mt-16 grid grid-cols-2 gap-6 border-t border-line pt-6 font-mono text-xs uppercase tracking-[0.14em] sm:grid-cols-4"
          >
            <Meta term="Discipline" value="Logo & Identity" />
            <Meta term="Established" value={String(site.founded)} />
            <Meta term="Local" value={<LiveClock />} />
            <Meta
              term="Status"
              accent
              value={
                <span className="inline-flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                  Available
                </span>
              }
            />
          </motion.dl>
        </motion.div>
      </Container>
    </section>
  );
}

function Meta({
  term,
  value,
  accent,
}: {
  term: string;
  value: React.ReactNode;
  accent?: boolean;
}) {
  return (
    <div>
      <dt className="text-faint">{term}</dt>
      <dd className={cn("mt-1.5", accent ? "text-accent" : "text-bone")}>{value}</dd>
    </div>
  );
}
