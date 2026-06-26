import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { Squiggle } from "@/components/squiggle";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a logo or brand identity project with Eikon Designs. Send us a brief or message us on Fiverr — 389 five-star reviews.",
};

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
                ( Tell us about your project and we&rsquo;ll get back within the
                hour. Prefer Fiverr? That works too &mdash; we&rsquo;re a
                Level&nbsp;2 seller with 389 five-star reviews. )
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
              <div className="mt-8">
                <Link
                  href={site.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill"
                >
                  Message us on Fiverr
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
                    Behance &mdash; {site.name.toLowerCase()} works
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
      <p className="text-xs font-medium uppercase tracking-[0.12em] text-charcoal">
        {label}
      </p>
      <div className="mt-2 text-lg text-ink">{children}</div>
    </div>
  );
}
