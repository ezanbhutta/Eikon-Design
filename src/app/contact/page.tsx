import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { Squiggle } from "@/components/squiggle";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a logo or brand identity project with Eikon Designs. Message us on Fiverr or order a package directly. 389 five-star reviews.",
};

const checklist = [
  "Company name",
  "What your business does",
  "Tagline (optional)",
  "A style or feel you're after",
  "Colours you like (optional)",
  "Logos you admire (optional)",
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden pb-28 pt-40 sm:pt-48">
      <Squiggle
        variant="loop"
        className="absolute left-[5%] top-44 hidden h-16 w-24 text-ink opacity-50 lg:block"
      />
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.1em] text-charcoal">
                ( Contact )
              </p>
              <h1 className="font-display mt-5 text-5xl leading-[1.02] text-ink sm:text-6xl">
                Let&rsquo;s get your logo{" "}
                <em className="font-normal italic">started.</em>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-md text-lg leading-[1.55] text-charcoal">
                ( We work through Fiverr. Message us for a custom quote, or
                order a package directly. As a Level&nbsp;2 seller we usually
                reply within the hour. )
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium uppercase tracking-[0.08em] text-charcoal">
                <span className="text-accent">389 five-star reviews</span>
                <span className="text-dusty">&middot;</span>
                <span>4.9&#9733; rating</span>
                <span className="text-dusty">&middot;</span>
                <span>Level 2 seller</span>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href={site.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill pill-accent"
                >
                  Message us on Fiverr
                </Link>
                <Link
                  href={site.fiverrGig}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill"
                >
                  Order a package
                </Link>
              </div>
            </Reveal>

            <Reveal delay={340}>
              <div className="mt-12 space-y-6 border-t-[1.5px] border-line-soft pt-8">
                <ContactDetail label="Portfolio">
                  <Link
                    href={site.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ink-link link-line"
                  >
                    Behance &middot; {site.name.toLowerCase()} works
                  </Link>
                </ContactDetail>
                <ContactDetail label="Studio">{site.location}</ContactDetail>
                <ContactDetail label="Languages">
                  English &middot; Urdu &middot; German &middot; French &middot;
                  Spanish
                </ContactDetail>
              </div>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <div className="paper-card h-fit p-8 sm:p-10">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-charcoal">
                ( To get started, send )
              </p>
              <ul className="mt-7 space-y-4">
                {checklist.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-4 border-b-[1.5px] border-line-soft pb-4 last:border-0"
                  >
                    <span className="font-display text-sm italic text-ink/40">
                      0{i + 1}
                    </span>
                    <span className="text-ink">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 text-sm leading-[1.55] text-charcoal">
                Have your own idea or references? Even better. Send them
                along on Fiverr and we&rsquo;ll take it from there.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function ContactDetail({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-[0.12em] text-charcoal">
        {label}
      </p>
      <div className="mt-2 text-lg text-ink">{children}</div>
    </div>
  );
}
