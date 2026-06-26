import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { ArrowLink } from "@/components/arrow-link";
import { Squiggle } from "@/components/squiggle";
import { stats, services } from "@/data/studio";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Eikon is an independent logo and brand identity studio. Meet the practice, the principles, and the way we work.",
};

const principles = [
  {
    title: "Meaning before style",
    body: "A logo should say something, not just look nice. We start from what your business actually needs to get across.",
  },
  {
    title: "Black & white first",
    body: "If an idea doesn't work in plain black and white at a tiny size, it doesn't work. Colour comes later, on purpose.",
  },
  {
    title: "Built to scale",
    body: "From a favicon to a billboard, we draw it to look sharp everywhere it'll end up.",
  },
  {
    title: "Made to hand over",
    body: "You leave with tidy, editable files and simple guidelines, so anyone on your side can keep things consistent.",
  },
];

export default function StudioPage() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-40 sm:pt-48">
        <Squiggle
          variant="loop"
          className="absolute right-[8%] top-40 hidden h-16 w-24 text-ink opacity-60 lg:block"
        />
        <Container>
          <Reveal>
            <SectionLabel>The studio</SectionLabel>
            <h1 className="font-display mt-5 max-w-5xl text-5xl leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
              A small studio,{" "}
              <em className="font-normal italic">slightly obsessed</em> with
              logos.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-10 grid gap-8 text-lg leading-[1.55] text-charcoal lg:grid-cols-2">
              <p>
                Eikon Designs is a small, independent studio. Over the last few
                years we&rsquo;ve made logos and full brand kits for hundreds of
                founders and small teams around the world &mdash; and earned 389
                five-star reviews doing it.
              </p>
              <p>
                We keep things small on purpose: the person you talk to is the
                person doing the work. No handoffs, no juniors learning on your
                budget &mdash; just clean, modern design and unlimited revisions
                until it feels right.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-y-[1.5px] border-line-soft py-12">
        <Container>
          <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <Reveal key={stat.label}>
                <div>
                  <dt className="font-display text-5xl text-ink lg:text-6xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-2 text-sm text-charcoal">{stat.label}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      <section className="py-24 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <h2 className="font-display text-4xl leading-tight text-ink sm:text-5xl lg:sticky lg:top-28">
                How we <em className="font-normal italic">think.</em>
              </h2>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2">
              {principles.map((p, i) => (
                <Reveal key={p.title}>
                  <div
                    className={cn(
                      "paper-card h-full p-8",
                      i % 2 === 1 && "sm:mt-8",
                    )}
                  >
                    <span className="font-display text-xl italic text-ink/35">
                      0{i + 1}
                    </span>
                    <h3 className="font-display mt-6 text-2xl text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-[1.55] text-charcoal">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-24 lg:py-32">
        <Container>
          <Reveal>
            <SectionLabel>Capabilities</SectionLabel>
            <h2 className="font-display mt-4 text-4xl leading-tight text-ink sm:text-5xl">
              What we can make{" "}
              <em className="font-normal italic">for you.</em>
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-x-12 sm:grid-cols-2">
            {services.map((service) => (
              <Reveal as="li" key={service.id}>
                <div className="flex items-baseline justify-between border-b-[1.5px] border-dusty py-5">
                  <span className="font-display text-2xl text-ink">
                    {service.title}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-[0.06em] text-charcoal">
                    {service.deliverables.length} deliverables
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <section className="relative overflow-hidden border-t-[1.5px] border-line-soft py-24 lg:py-32">
        <Squiggle
          variant="scribble"
          className="absolute right-[10%] top-16 hidden h-20 w-20 text-ink opacity-60 lg:block"
        />
        <Container>
          <Reveal>
            <h2 className="font-display max-w-3xl text-4xl leading-tight text-ink sm:text-5xl lg:text-6xl">
              Let&rsquo;s give your business a logo{" "}
              <em className="font-normal italic">worth keeping.</em>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10">
              <Link href="/contact" className="pill pill-accent">
                Start a project
              </Link>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-8">
              <ArrowLink href={site.fiverrGig} external className="ink-link">
                389 five-star reviews on Fiverr
              </ArrowLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
