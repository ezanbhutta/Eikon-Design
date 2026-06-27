"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { Container } from "@/components/container";
import { Squiggle } from "@/components/squiggle";
import { useIntroDone } from "@/components/intro";
import { site } from "@/data/site";

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const stage: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export function SiteHero() {
  const introDone = useIntroDone();

  return (
    <section className="relative overflow-hidden pb-20 pt-36 sm:pt-44 lg:pb-28 lg:pt-52">
      <Squiggle
        variant="scribble"
        className="absolute left-[6%] top-32 hidden h-20 w-20 text-ink opacity-80 lg:block"
      />
      <Squiggle
        variant="loop"
        className="absolute right-[8%] top-44 hidden h-16 w-24 lg:block"
      />

      <Container className="relative">
        <motion.div
          variants={stage}
          initial="hidden"
          animate={introDone ? "show" : "hidden"}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-medium uppercase tracking-[0.04em] text-charcoal"
          >
            ( {site.fullName} · est. {site.founded} )
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display mt-8 text-[2.65rem] font-normal leading-[1.04] tracking-[-0.01em] text-ink sm:text-6xl lg:text-[5rem] lg:leading-[1.02]"
          >
            We draw logos that make{" "}
            <span className="relative inline-block">
              <Image
                src="/eikon-logo.png"
                alt=""
                width={120}
                height={120}
                priority
                className="inline-block h-[0.92em] w-[0.92em] translate-y-[0.12em] rounded-full border-[1.5px] border-ink align-baseline"
              />
            </span>{" "}
            founders look{" "}
            <em className="relative font-normal italic">
              the part
              <Squiggle
                variant="underline"
                className="absolute -bottom-2 left-0 h-3 w-full text-ink"
              />
            </em>{" "}
            from day one.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-9 max-w-md text-base leading-[1.55] text-charcoal"
          >
            ( A small logo &amp; brand identity studio in Multan, working with
            founders worldwide. Clean, modern marks, and the full kit
            around them. )
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-11 flex flex-col items-center justify-center gap-6 sm:flex-row"
          >
            <Link href="/work" className="pill pill-accent">
              See the work
            </Link>
            <Link
              href="/contact"
              className="ink-link text-base font-medium link-line"
            >
              or start a project &rarr;
            </Link>
          </motion.div>
        </motion.div>
      </Container>

      <Squiggle
        variant="wave"
        className="mx-auto mt-16 hidden h-6 w-72 text-ink opacity-70 lg:block"
      />
    </section>
  );
}
