"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { Container } from "@/components/container";
import { SectionLabel } from "@/components/section-label";
import { ArrowLink } from "@/components/arrow-link";
import { Magnetic } from "@/components/magnetic";
import { useIntroDone } from "@/components/intro";
import { site } from "@/data/site";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const stage: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const headline: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const line: Variants = {
  hidden: { y: "115%" },
  show: { y: 0, transition: { duration: 0.95, ease: EASE } },
};

function HeadlineLine({ children }: { children: React.ReactNode }) {
  return (
    <span className="block overflow-hidden pb-[0.12em]">
      <motion.span variants={line} className="block">
        {children}
      </motion.span>
    </span>
  );
}

export function SiteHero() {
  const introDone = useIntroDone();

  return (
    <section className="relative overflow-hidden pb-20 pt-40 sm:pt-48 lg:pb-28 lg:pt-56">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-32 h-[38rem] w-[38rem] rounded-full opacity-[0.18] blur-[130px]"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #ff4f93, #ff6b4c 45%, transparent 72%)",
        }}
      />
      <Container className="relative">
        <motion.div
          variants={stage}
          initial="hidden"
          animate={introDone ? "show" : "hidden"}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>{site.tagline}</SectionLabel>
          </motion.div>

          <motion.h1
            variants={headline}
            className="font-display mt-7 max-w-5xl text-5xl leading-[1.02] text-bone sm:text-6xl lg:text-8xl"
          >
            <HeadlineLine>Logos &amp; identities,</HeadlineLine>
            <HeadlineLine>built to be</HeadlineLine>
            <HeadlineLine>
              <em className="italic text-accent">remembered.</em>
            </HeadlineLine>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted"
          >
            {site.name} is an independent studio shaping distinctive marks,
            complete identity systems, and the guidelines that keep them sharp —
            for founders and brands who refuse to blend in.
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
            className="mt-20 grid max-w-2xl grid-cols-2 gap-8 border-t border-line pt-8 sm:grid-cols-3"
          >
            <HeroMeta term="Established" value={`${site.founded}`} />
            <HeroMeta term="Based" value="Worldwide" />
            <HeroMeta term="Status" value={site.availability} accent />
          </motion.dl>
        </motion.div>
      </Container>
    </section>
  );
}

function HeroMeta({
  term,
  value,
  accent,
}: {
  term: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div>
      <dt className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
        {term}
      </dt>
      <dd className={accent ? "mt-2 text-sm text-accent" : "mt-2 text-sm text-bone"}>
        {value}
      </dd>
    </div>
  );
}
