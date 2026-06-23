import Link from "next/link";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { ArrowLink } from "@/components/arrow-link";
import { SiteHero } from "@/components/site-hero";
import { Magnetic } from "@/components/magnetic";
import { Logo3D } from "@/components/logo-3d";
import { WorkShowcase } from "@/components/work-showcase";
import { services, process, testimonials, clients, packages } from "@/data/studio";
import { site } from "@/data/site";

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
    <section aria-label="Selected clients" className="border-y border-line">
      <Container className="flex flex-col gap-4 py-7 md:flex-row md:items-baseline md:gap-10">
        <p className="shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-faint">
          Recently for
        </p>
        <ul className="flex flex-wrap items-center gap-x-3 gap-y-1 font-display text-lg text-bone/60 sm:text-xl">
          {clients.map((name, i) => (
            <li key={name} className="flex items-center gap-3">
              {i > 0 && <span className="text-line">·</span>}
              {name}
            </li>
          ))}
        </ul>
      </Container>
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
              <SectionLabel>Off the screen</SectionLabel>
              <h2 className="font-display mt-5 text-4xl leading-tight text-bone sm:text-5xl">
                A logo has to work{" "}
                <span className="font-serif font-normal italic">everywhere.</span>
              </h2>
              <p className="mt-6 text-muted">
                On a phone, a shopfront, a business card, a t-shirt — it all has
                to look right. Give the mark a spin; it holds up from every
                angle.
              </p>
            </Reveal>
          </div>
          <Reveal>
            <Logo3D className="h-[24rem] w-full sm:h-[28rem] lg:h-[32rem]" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-t border-line py-24 lg:py-32"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <SectionLabel>What we do</SectionLabel>
              <h2 className="font-display mt-5 text-4xl leading-tight text-bone sm:text-5xl">
                We make logos — and{" "}
                <span className="font-serif font-normal italic text-muted">
                  everything around them.
                </span>
              </h2>
              <p className="mt-6 max-w-md text-muted">
                Take just the logo, or the full kit. Either way, every piece is
                designed to fit together.
              </p>
            </Reveal>
          </div>

          <ul>
            {services.map((service) => (
              <Reveal as="li" key={service.id}>
                <div className="group border-t border-line py-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                    <h3 className="font-display text-2xl text-bone transition-colors group-hover:text-accent sm:text-3xl">
                      {service.title}
                    </h3>
                    <span className="font-mono text-xs uppercase tracking-[0.16em] text-faint">
                      {service.deliverables.length} deliverables
                    </span>
                  </div>
                  <p className="mt-3 max-w-lg text-muted">
                    {service.description}
                  </p>
                  <p className="mt-4 font-mono text-xs uppercase tracking-[0.14em] text-faint">
                    {service.deliverables.join("  ·  ")}
                  </p>
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
    <section
      id="pricing"
      className="scroll-mt-24 border-t border-line py-24 lg:py-32"
    >
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal className="max-w-2xl">
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="font-display mt-5 text-4xl leading-tight tracking-tight text-bone sm:text-5xl">
              Three ways to{" "}
              <span className="font-serif font-normal italic">start.</span>
            </h2>
          </Reveal>
          <Reveal className="max-w-xs">
            <p className="font-mono text-xs uppercase leading-relaxed tracking-[0.16em] text-faint">
              Ordered through Fiverr · unlimited revisions · 389 five-star
              reviews
            </p>
          </Reveal>
        </div>

        <div className="mt-14 border-t border-line">
          {packages.map((pkg) => (
            <Reveal key={pkg.name}>
              <div className="group grid gap-x-10 gap-y-6 border-b border-line py-10 md:grid-cols-[1fr_1.5fr_auto] md:items-start lg:py-12">
                <div>
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-display text-2xl text-bone">
                      {pkg.name}
                    </h3>
                    {pkg.featured && (
                      <span className="font-serif text-sm italic text-accent">
                        most ordered
                      </span>
                    )}
                  </div>
                  <p className="font-display mt-4 text-5xl tracking-tight text-bone lg:text-6xl">
                    {pkg.price}
                  </p>
                  <p className="mt-2 text-sm text-muted">{pkg.summary}</p>
                </div>

                <ul className="grid gap-y-2 text-sm text-muted sm:grid-cols-2 md:pt-2">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex gap-2.5">
                      <span className="text-accent" aria-hidden="true">
                        —
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="md:pt-2">
                  <ArrowLink
                    href={site.fiverrGig}
                    external
                    className="text-bone"
                  >
                    Order {pkg.name}
                  </ArrowLink>
                </div>
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
        <Reveal className="max-w-2xl">
          <SectionLabel>How we work</SectionLabel>
          <h2 className="font-display mt-5 text-4xl leading-tight text-bone sm:text-5xl">
            From your brief to the{" "}
            <span className="font-serif font-normal italic">final files.</span>
          </h2>
        </Reveal>

        <ol className="mt-12 lg:mt-16">
          {process.map((step) => (
            <Reveal as="li" key={step.index}>
              <div className="grid items-baseline gap-3 border-t border-line py-8 sm:grid-cols-[5rem_1fr] sm:gap-10 lg:py-10">
                <span className="font-serif text-4xl italic text-faint sm:text-5xl">
                  {step.index}
                </span>
                <div className="grid gap-3 sm:grid-cols-[1fr_1.5fr] sm:gap-10">
                  <h3 className="font-display text-2xl tracking-tight text-bone">
                    {step.title}
                  </h3>
                  <p className="leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="bg-paper text-paper-ink">
      <Container className="py-24 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-end">
          <div>
            <Reveal>
              <SectionLabel tone="light">Why {site.name}</SectionLabel>
              <blockquote className="font-display mt-7 text-balance text-3xl leading-[1.15] sm:text-4xl lg:text-5xl">
                People size up a brand in seconds. A good logo is what makes
                those seconds{" "}
                <em className="font-serif font-normal italic">
                  land in your favour.
                </em>
              </blockquote>
            </Reveal>
            <Reveal>
              <div className="mt-10">
                <ArrowLink href="/studio" className="text-paper-ink">
                  More about the studio
                </ArrowLink>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <p className="font-serif text-2xl italic leading-relaxed text-paper-ink/75 lg:text-[1.7rem] lg:leading-relaxed">
              389 five-star reviews. A 4.9 average. We usually reply within the
              hour — in any of five languages.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Voices() {
  const [lead, ...rest] = testimonials;
  return (
    <section className="border-t border-line py-24 lg:py-32">
      <Container>
        <Reveal>
          <SectionLabel>In their words</SectionLabel>
        </Reveal>
        <Reveal>
          <figure className="mt-10 max-w-4xl">
            <blockquote className="font-display text-3xl leading-snug text-bone sm:text-4xl">
              &ldquo;{lead.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 font-mono text-xs uppercase tracking-[0.16em] text-faint">
              {lead.author} — {lead.role}
            </figcaption>
          </figure>
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-12 border-t border-line pt-12 sm:grid-cols-3">
          {rest.map((t) => (
            <Reveal as="figure" key={t.author}>
              <blockquote className="font-serif text-lg italic leading-relaxed text-muted">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-faint">
                {t.author}
              </figcaption>
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
        <Reveal>
          <h2 className="font-display mt-8 text-[14vw] font-extrabold leading-[0.85] tracking-[-0.04em] text-bone lg:text-[11vw]">
            Let&rsquo;s draw{" "}
            <span className="font-serif font-normal italic tracking-normal">
              your
            </span>{" "}
            logo.
          </h2>
        </Reveal>
        <Reveal>
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
