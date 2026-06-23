import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a logo or brand identity project with Eikon Designs. Message us on Fiverr or order a package directly — 389 five-star reviews.",
};

const checklist = [
  "Company name",
  "Tagline (optional)",
  "What your business does",
  "Preferred logo style (optional)",
  "Colour preferences (optional)",
  "Sample logos you like (optional)",
];

export default function ContactPage() {
  return (
    <section className="pb-28 pt-40 sm:pt-48">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <SectionLabel>Contact</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display mt-6 text-balance text-5xl leading-[1.02] tracking-tight text-bone sm:text-6xl">
                Let&rsquo;s get your logo started.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-muted">
                We work through Fiverr — message us for a custom quote, or order
                a package directly. As a Level&nbsp;2 seller we usually reply
                within the hour.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-[0.16em] text-faint">
                <span className="text-accent">389 five-star reviews</span>
                <span>·</span>
                <span>4.9★ rating</span>
                <span>·</span>
                <span>Level 2 seller</span>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-4">
                <Link
                  href={site.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-ink transition-transform hover:-translate-y-0.5"
                >
                  Message us on Fiverr
                </Link>
                <Link
                  href={site.fiverrGig}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-line px-7 py-3.5 text-sm font-medium text-bone transition-colors hover:bg-bone hover:text-ink"
                >
                  Order a package
                </Link>
              </div>
            </Reveal>

            <Reveal delay={340}>
              <div className="mt-12 space-y-6 border-t border-line pt-8">
                <ContactDetail label="Portfolio">
                  <Link
                    href={site.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-line text-bone"
                  >
                    Behance — {site.name.toLowerCase()} works
                  </Link>
                </ContactDetail>
                <ContactDetail label="Studio">{site.location}</ContactDetail>
                <ContactDetail label="Languages">
                  English · Urdu · German · French · Spanish
                </ContactDetail>
              </div>
            </Reveal>
          </div>

          <Reveal
            delay={140}
            className="h-fit rounded-3xl border border-line bg-ink-soft p-8 sm:p-10"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
              To get started, send
            </p>
            <ul className="mt-6 space-y-4">
              {checklist.map((item, i) => (
                <li
                  key={item}
                  className="flex items-baseline gap-4 border-b border-line/70 pb-4 text-bone last:border-0"
                >
                  <span className="font-mono text-xs text-accent">
                    0{i + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Have your own idea or references? Even better — send them along and
              we&rsquo;ll take it from there.
            </p>
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
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
        {label}
      </p>
      <div className="mt-2 text-lg text-muted">{children}</div>
    </div>
  );
}
