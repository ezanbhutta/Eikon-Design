import Link from "next/link";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { Marquee } from "@/components/marquee";
import { SectionLabel } from "@/components/section-label";
import { ArrowLink } from "@/components/arrow-link";
import { SiteHero } from "@/components/site-hero";
import { Magnetic } from "@/components/magnetic";
import { Logo3D } from "@/components/logo-3d";
import { WorkShowcase } from "@/components/work-showcase";
import {
  services,
  process,
  stats,
  testimonials,
  clients,
  packages,
} from "@/data/studio";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

export default function Home() {
  return (
    <>
      <SiteHero />
      <ClientStrip />
      <WorkShowcase />
      <DimensionShowcase />
      <Services />
      <Pricing />
      <Process />
      <Philosophy />
      <Voices />
      <ClosingCta />
    </>
  );
}

function ClientStrip() {
  return (
    <section className="border-y border-line py-8" aria-label="Selected clients">
      <Marquee items={clients} />
    </section>
  );
}

function DimensionShowcase() {
  return (
    <section className="relative overflow-hidden border-t border-line py-24 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="max-w-xl">
            <Reveal>
              <SectionLabel index="◇">In three dimensions</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display mt-5 text-4xl leading-tight text-bone sm:text-5xl">
                Your logo has to work everywhere.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-muted">
                On a phone, a shopfront, a business card, a t-shirt — it all has
                to look right. Give the mark a spin; it holds up from every
                angle.
              </p>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <Logo3D className="h-[24rem] w-full sm:h-[28rem] lg:h-[32rem]" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

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
                We make logos — and everything around them.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-md text-muted">
                Take just the logo, or the full kit. Either way, every piece is
                designed to fit together.
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

function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 border-t border-line py-24 lg:py-32">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <SectionLabel>Pricing</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="font-display mt-5 text-4xl leading-tight tracking-tight text-bone sm:text-5xl">
                Simple packages, delivered fast.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <p className="max-w-xs font-mono text-xs uppercase leading-relaxed tracking-[0.16em] text-faint">
              Ordered through Fiverr · unlimited revisions · 389 five-star
              reviews
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 80}>
              <div
                className={cn(
                  "flex h-full flex-col rounded-2xl border p-8",
                  pkg.featured ? "border-accent/60 bg-ink-soft" : "border-line",
                )}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
                    {pkg.name}
                  </span>
                  {pkg.featured && (
                    <span className="rounded-full bg-accent px-3 py-1 text-[0.6rem] font-medium uppercase tracking-wider text-accent-ink">
                      Popular
                    </span>
                  )}
                </div>
                <p className="font-display mt-6 text-5xl tracking-tight text-bone">
                  {pkg.price}
                </p>
                <p className="mt-2 text-sm text-muted">{pkg.summary}</p>
                <ul className="mt-8 flex-1 space-y-3">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm text-muted"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={site.fiverrGig}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5",
                    pkg.featured
                      ? "bg-accent text-accent-ink"
                      : "border border-line text-bone hover:bg-bone hover:text-ink",
                  )}
                >
                  Order {pkg.name}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

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
              From your brief to the final files.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border-y border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <Reveal key={step.index} delay={i * 70} className="bg-ink">
              <div className="group flex h-full flex-col p-8 lg:p-10">
                <span className="font-mono text-3xl text-faint transition-colors duration-300 group-hover:text-accent">
                  {step.index}
                </span>
                <h3 className="font-display mt-12 text-2xl tracking-tight text-bone">
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
                People size up a brand in seconds. A good logo is what makes
                those seconds <em className="italic">land in your favour.</em>
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

function ClosingCta() {
  return (
    <section className="overflow-hidden border-t border-line py-24 lg:py-36">
      <Container>
        <Reveal>
          <SectionLabel>Start a project</SectionLabel>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display mt-8 text-[16vw] font-extrabold leading-[0.84] tracking-[-0.04em] text-bone lg:text-[12vw]">
            Let&rsquo;s build it.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <div className="mt-10 flex flex-col gap-8 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-muted">
              Got a business that deserves a sharper logo? Tell us about it —
              we&rsquo;ll take it from there.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              <Magnetic>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-medium text-accent-ink transition-transform hover:-translate-y-0.5"
                >
                  Start a project
                </Link>
              </Magnetic>
              <ArrowLink href={site.fiverr} external className="text-bone">
                Message us on Fiverr
              </ArrowLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
