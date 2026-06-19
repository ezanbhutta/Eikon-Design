import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { ArrowLink } from "@/components/arrow-link";
import { stats, services } from "@/data/studio";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Eikon is an independent logo and brand identity studio. Meet the practice, the principles, and the way we work.",
};

const principles = [
  {
    title: "Strategy before style",
    body: "Every mark answers a brief. We design from what a brand needs to mean, not from what happens to be in fashion this year.",
  },
  {
    title: "Black & white first",
    body: "If an idea does not work as a single colour at a single centimetre, it does not work. Colour and texture come last, on purpose.",
  },
  {
    title: "Built to scale",
    body: "From a favicon to a billboard, every asset is drawn to hold up everywhere it will ever live.",
  },
  {
    title: "Made to be handed over",
    body: "You leave with organised, editable files and guidelines clear enough that any team can keep the brand sharp.",
  },
];

export default function StudioPage() {
  return (
    <>
      <section className="pb-16 pt-40 sm:pt-48">
        <Container>
          <Reveal>
            <SectionLabel>The studio</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display mt-6 max-w-5xl text-balance text-5xl leading-[1.05] text-bone sm:text-6xl lg:text-7xl">
              A small studio with a single obsession: the mark.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-10 grid gap-8 text-lg leading-relaxed text-muted lg:grid-cols-2">
              <p>
                Eikon Designs is a small, independent studio. Over the last few
                years we&rsquo;ve made logos and full brand kits for hundreds of
                founders and small teams around the world — and earned 389
                five-star reviews doing it.
              </p>
              <p>
                We keep things small on purpose: the person you talk to is the
                person doing the work. No handoffs, no juniors learning on your
                budget — just clean, modern design and unlimited revisions until
                it feels right.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Stats */}
      <section className="border-y border-line py-12">
        <Container>
          <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <Reveal key={stat.label}>
                <div>
                  <dt className="font-display text-5xl text-bone lg:text-6xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-2 text-sm text-muted">{stat.label}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      {/* Principles */}
      <section className="py-24 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <h2 className="font-display text-4xl leading-tight text-bone sm:text-5xl lg:sticky lg:top-28">
                How we think.
              </h2>
            </Reveal>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
              {principles.map((p, i) => (
                <Reveal key={p.title} delay={i * 60} className="bg-ink-soft">
                  <div className="h-full p-8">
                    <span className="font-mono text-sm text-accent">
                      0{i + 1}
                    </span>
                    <h3 className="font-display mt-8 text-2xl text-bone">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="border-t border-line py-24 lg:py-32">
        <Container>
          <Reveal>
            <SectionLabel index="—">Capabilities</SectionLabel>
          </Reveal>
          <ul className="mt-10 grid gap-x-12 gap-y-4 sm:grid-cols-2">
            {services.map((service) => (
              <Reveal as="li" key={service.id}>
                <div className="flex items-baseline justify-between border-t border-line py-5">
                  <span className="font-display text-2xl text-bone">
                    {service.title}
                  </span>
                  <span className="text-sm text-muted">
                    {service.deliverables.length} deliverables
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-line py-24 lg:py-32">
        <Container>
          <Reveal>
            <h2 className="font-display max-w-3xl text-balance text-4xl leading-tight text-bone sm:text-5xl lg:text-6xl">
              Let us give your brand a mark worth keeping.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-medium text-accent-ink transition-transform hover:-translate-y-0.5"
              >
                Start a project
              </Link>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-8">
              <ArrowLink href={site.fiverrGig} external className="text-muted">
                389 five-star reviews on Fiverr
              </ArrowLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
