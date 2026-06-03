import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a logo or brand identity project with Eikon. Tell us about your brand, goals, and timeline.",
};

export default function ContactPage() {
  return (
    <section className="pb-28 pt-40 sm:pt-48">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* Intro */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <SectionLabel>Contact</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="font-display mt-6 text-balance text-5xl leading-[1.05] text-bone sm:text-6xl">
                Let us start something worth remembering.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-muted">
                Tell us a little about your brand and where you want to take it.
                We reply to every serious enquiry within two business days.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-line bg-ink-soft p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                    389 five-star reviews
                  </p>
                  <p className="mt-1.5 text-sm text-muted">
                    Prefer to order directly? We&rsquo;re a Level&nbsp;2 seller on
                    Fiverr.
                  </p>
                </div>
                <Link
                  href={site.fiverrGig}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center justify-center rounded-full border border-line px-5 py-2.5 text-sm font-medium text-bone transition-colors hover:bg-bone hover:text-ink"
                >
                  Order on Fiverr →
                </Link>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-12 space-y-8">
                <ContactDetail label="Email">
                  <Link
                    href={`mailto:${site.email}`}
                    className="link-line text-bone"
                  >
                    {site.email}
                  </Link>
                </ContactDetail>
                <ContactDetail label="Studio">{site.location}</ContactDetail>
                <ContactDetail label="Follow">
                  <span className="flex flex-wrap gap-x-5 gap-y-2">
                    {site.socials.map((s) => (
                      <Link
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-line text-bone"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </span>
                </ContactDetail>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={120} className="rounded-3xl border border-line bg-ink-soft p-8 sm:p-10">
            <ContactForm />
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
