import Link from "next/link";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { Squiggle } from "@/components/squiggle";
import { SiteHero } from "@/components/site-hero";
import { WorkShowcase } from "@/components/work-showcase";
import { services, process, testimonials, clients, packages } from "@/data/studio";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

export default function Home() {
  return (
    <>
      <SiteHero />
      <ClientStrip />
      <WorkShowcase />
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
    <section
      aria-label="Selected clients"
      className="border-y-[1.5px] border-line-soft"
    >
      <Container className="flex flex-col gap-3 py-7 md:flex-row md:items-baseline md:gap-8">
        <p className="shrink-0 text-xs font-medium uppercase tracking-[0.08em] text-charcoal">
          ( recently for )
        </p>
        <ul className="flex flex-wrap items-center gap-x-3 gap-y-1 font-display text-lg text-ink/70 sm:text-xl">
          {clients.map((name, i) => (
            <li key={name} className="flex items-center gap-3">
              {i > 0 && <span className="text-dusty">&middot;</span>}
              {name}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="scroll-mt-24 py-24 lg:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <span className="font-display text-2xl italic text-ink/35">01</span>
              <h2 className="font-display mt-3 text-4xl leading-[1.05] text-ink sm:text-5xl">
                We make logos.{" "}
                <em className="font-normal italic">
                  And everything around them.
                </em>
              </h2>
              <p className="mt-6 max-w-md text-charcoal">
                ( Take just the logo, or the full kit. Either way, every piece is
                drawn to sit together. )
              </p>
            </Reveal>
          </div>

          <ul>
            {services.map((service) => (
              <Reveal as="li" key={service.id}>
                <div className="group border-b-[1.5px] border-dusty py-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h3 className="font-display text-2xl text-ink sm:text-3xl">
                      {service.title}
                    </h3>
                    <span className="text-xs font-medium uppercase tracking-[0.06em] text-charcoal">
                      {service.deliverables.length} deliverables
                    </span>
                  </div>
                  <p className="mt-3 max-w-lg text-charcoal">
                    {service.description}
                  </p>
                  <p className="mt-3 text-sm text-charcoal/75">
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
    <section id="pricing" className="scroll-mt-24 py-24 lg:py-32">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-display text-2xl italic text-ink/35">02</span>
          <h2 className="font-display mt-3 text-4xl leading-[1.05] text-ink sm:text-5xl">
            Pick your <em className="font-normal italic">package.</em>
          </h2>
          <p className="mt-5 text-charcoal">
            ( Ordered through Fiverr &middot; unlimited revisions &middot; 389
            five-star reviews )
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.name}>
              <div
                className={cn(
                  "paper-card flex h-full flex-col p-8 sm:p-10",
                  i === 1 && "lg:-translate-y-5",
                )}
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-2xl text-ink">
                    {pkg.name}
                  </span>
                  {pkg.featured && (
                    <span className="font-display text-sm italic text-cobalt">
                      most ordered
                    </span>
                  )}
                </div>
                <p className="mt-5 text-6xl font-semibold tabular-nums text-ink">
                  {pkg.price}
                </p>
                <p className="mt-2 text-sm text-charcoal">{pkg.summary}</p>
                <ul className="mt-7 flex-1 space-y-2.5 text-sm text-charcoal">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={site.fiverrGig}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn("pill mt-8 w-full", pkg.featured && "pill-accent")}
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
    <section className="py-24 lg:py-32">
      <Container>
        <Reveal className="max-w-2xl">
          <span className="font-display text-2xl italic text-ink/35">03</span>
          <h2 className="font-display mt-3 text-4xl leading-[1.05] text-ink sm:text-5xl">
            From your brief to the{" "}
            <em className="font-normal italic">final files.</em>
          </h2>
        </Reveal>

        <ol className="mt-12 lg:mt-16">
          {process.map((step) => (
            <Reveal as="li" key={step.index}>
              <div className="grid items-baseline gap-3 border-b-[1.5px] border-dusty py-8 sm:grid-cols-[5rem_1fr] sm:gap-10 lg:py-10">
                <span className="font-display text-5xl italic text-ink/30">
                  {step.index}
                </span>
                <div className="grid gap-3 sm:grid-cols-[1fr_1.5fr] sm:gap-10">
                  <h3 className="font-display text-2xl text-ink">
                    {step.title}
                  </h3>
                  <p className="leading-[1.55] text-charcoal">
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
    <section className="bg-brand relative overflow-hidden text-white">
      <Squiggle
        solid
        variant="loop"
        className="absolute left-[8%] top-16 hidden h-16 w-24 text-white opacity-50 lg:block"
      />
      <Squiggle
        solid
        variant="scribble"
        className="absolute right-[9%] bottom-14 hidden h-16 w-16 text-white opacity-40 lg:block"
      />
      <Container className="py-24 text-center lg:py-32">
        <Reveal>
          <blockquote className="font-display mx-auto max-w-4xl text-3xl leading-[1.18] sm:text-4xl lg:text-5xl">
            People size up a brand in seconds. A good logo is what makes those
            seconds <em className="font-normal italic">land in your favour.</em>
          </blockquote>
        </Reveal>
        <Reveal>
          <p className="mt-8 text-sm text-white/80">
            ( 389 five-star reviews &middot; 4.9&#9733; average &middot; replies
            within the hour, in five languages )
          </p>
        </Reveal>
        <Reveal>
          <div className="mt-8">
            <Link
              href="/studio"
              className="link-line font-medium text-white"
            >
              More about the studio &rarr;
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function Voices() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <Reveal>
          <h2 className="font-display text-4xl leading-[1] text-ink sm:text-5xl">
            In their <em className="font-normal italic">words.</em>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal as="figure" key={t.author}>
              <figure
                className={cn(
                  "paper-card h-full p-8 sm:p-10",
                  i % 2 === 1 && "sm:mt-12",
                )}
              >
                <blockquote className="font-display text-xl italic leading-[1.4] text-ink sm:text-2xl">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm text-charcoal">
                  <span className="font-medium text-ink">{t.author}</span>,{" "}
                  {t.role}
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
    <section className="relative overflow-hidden border-t-[1.5px] border-line-soft py-24 text-center lg:py-36">
      <Squiggle
        variant="scribble"
        className="absolute right-[10%] top-20 hidden h-20 w-20 text-ink opacity-60 lg:block"
      />
      <Container>
        <Reveal>
          <h2 className="font-display mx-auto max-w-4xl text-5xl leading-[1.04] text-ink sm:text-6xl lg:text-7xl">
            Let&rsquo;s make your logo{" "}
            <em className="font-normal italic">worth keeping.</em>
          </h2>
        </Reveal>
        <Reveal>
          <p className="mx-auto mt-6 max-w-md text-charcoal">
            ( Got a business that deserves a sharper mark? Tell us about it.
            We&rsquo;ll take it from there. )
          </p>
        </Reveal>
        <Reveal>
          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <Link href="/contact" className="pill pill-accent">
              Start a project
            </Link>
            <a
              href={site.fiverr}
              target="_blank"
              rel="noopener noreferrer"
              className="ink-link link-line font-medium"
            >
              Message us on Fiverr &rarr;
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
