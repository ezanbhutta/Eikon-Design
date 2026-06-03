import Link from "next/link";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { Marquee } from "@/components/marquee";
import { SectionLabel } from "@/components/section-label";
import { ArrowLink } from "@/components/arrow-link";
import { WorkCard } from "@/components/work-card";
import { featuredProjects } from "@/data/projects";
import { services, process, stats, testimonials, clients } from "@/data/studio";
import { site } from "@/data/site";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientStrip />
      <FeaturedWork />
      <Services />
      <Process />
      <Philosophy />
      <Voices />
      <ClosingCta />
    </>
  );
}

/* ----------------------------------------------------------------- Hero */
function Hero() {
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
        <Reveal>
          <SectionLabel>{site.tagline}</SectionLabel>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="font-display mt-7 max-w-5xl text-balance text-5xl leading-[1.02] text-bone sm:text-6xl lg:text-8xl">
            Logos &amp; identities, built to be{" "}
            <em className="italic text-accent">remembered.</em>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            {site.name} is an independent studio shaping distinctive marks,
            complete identity systems, and the guidelines that keep them sharp —
            for founders and brands who refuse to blend in.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link
              href="/work"
              className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-ink transition-transform hover:-translate-y-0.5"
            >
              View selected work
            </Link>
            <ArrowLink href="/contact" className="text-bone">
              Start a project
            </ArrowLink>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <dl className="mt-20 grid max-w-2xl grid-cols-2 gap-8 border-t border-line pt-8 sm:grid-cols-3">
            <HeroMeta term="Established" value={`${site.founded}`} />
            <HeroMeta term="Based" value="Worldwide" />
            <HeroMeta term="Status" value={site.availability} accent />
          </dl>
        </Reveal>
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

/* ---------------------------------------------------------- Client strip */
function ClientStrip() {
  return (
    <section className="border-y border-line py-8" aria-label="Selected clients">
      <Marquee items={clients} />
    </section>
  );
}

/* --------------------------------------------------------- Featured work */
function FeaturedWork() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <SectionLabel index="01">Selected work</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display mt-5 text-4xl leading-tight text-bone sm:text-5xl">
                Marks that earn a second look.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <ArrowLink href="/work" className="text-bone">
              All projects
            </ArrowLink>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 100}>
              <WorkCard project={project} priority={i === 0} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------------------------------------- Services */
function Services() {
  return (
    <section id="services" className="scroll-mt-24 border-t border-line py-24 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <SectionLabel index="02">What we do</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display mt-5 text-4xl leading-tight text-bone sm:text-5xl">
                One focus: brands that look unmistakably themselves.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-md text-muted">
                From the first mark to the final guidelines, every layer of the
                identity is designed to work together.
              </p>
            </Reveal>
          </div>

          <ul className="lg:pt-2">
            {services.map((service, i) => (
              <Reveal as="li" key={service.id} delay={i * 60}>
                <div className="group grid gap-4 border-t border-line py-8 sm:grid-cols-[auto_1fr]">
                  <span className="font-mono text-sm text-accent">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl text-bone transition-colors group-hover:text-accent sm:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-lg text-muted">
                      {service.description}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {service.deliverables.map((d) => (
                        <li
                          key={d}
                          className="rounded-full border border-line px-3 py-1 text-xs text-faint"
                        >
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

/* --------------------------------------------------------------- Process */
function Process() {
  return (
    <section className="border-t border-line py-24 lg:py-32">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel index="03">How we work</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display mt-5 text-4xl leading-tight text-bone sm:text-5xl">
              A clear path from first call to final handover.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <Reveal key={step.index} delay={i * 70} className="bg-ink-soft">
              <div className="flex h-full flex-col p-8">
                <span className="font-mono text-sm text-accent">{step.index}</span>
                <h3 className="font-display mt-10 text-2xl text-bone">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------ Philosophy/light */
function Philosophy() {
  return (
    <section className="bg-paper text-paper-ink">
      <Container className="py-24 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <Reveal>
              <SectionLabel index="04" tone="light">
                Why {site.name}
              </SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <blockquote className="font-display mt-7 text-balance text-3xl leading-[1.15] sm:text-4xl lg:text-5xl">
                A logo is not a picture of what you do. It is the smallest,
                sharpest expression of <em className="italic">who you are.</em>
              </blockquote>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-10">
                <ArrowLink href="/studio" className="text-paper-ink">
                  More about the studio
                </ArrowLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <dl className="grid grid-cols-2 gap-x-8 gap-y-10 border-t border-paper-ink/15 pt-10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-display text-5xl lg:text-6xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-2 text-sm text-paper-muted">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------------------------------------------- Voices */
function Voices() {
  return (
    <section className="border-t border-line py-24 lg:py-32">
      <Container>
        <Reveal>
          <SectionLabel index="05">In their words</SectionLabel>
        </Reveal>
        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 100}>
              <figure className="flex h-full flex-col">
                <blockquote className="font-display text-2xl leading-snug text-bone sm:text-3xl">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-8 text-sm text-muted">
                  <span className="text-bone">{t.author}</span> — {t.role}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------- CTA */
function ClosingCta() {
  return (
    <section className="relative overflow-hidden border-t border-line py-28 lg:py-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full opacity-[0.16] blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, #ff6b4c, #ff4f93 50%, transparent 72%)",
        }}
      />
      <Container className="relative text-center">
        <Reveal>
          <SectionLabel className="justify-center">
            Let us build it together
          </SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display mx-auto mt-7 max-w-4xl text-balance text-5xl leading-[1.05] text-bone sm:text-6xl lg:text-7xl">
            Have a brand worth remembering?
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mx-auto mt-7 max-w-xl text-lg text-muted">
            Tell us where you want to go. We will design the mark that gets you
            noticed — and keeps you there.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-medium text-accent-ink transition-transform hover:-translate-y-0.5"
            >
              Start a project
            </Link>
            <ArrowLink href={`mailto:${site.email}`} external className="text-bone">
              {site.email}
            </ArrowLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
