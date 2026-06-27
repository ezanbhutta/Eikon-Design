import Link from "next/link";
import { site } from "@/data/site";
import { services } from "@/data/studio";
import { Container } from "@/components/container";
import { EikonIcon } from "@/components/eikon-logo";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-[1.5px] border-ink bg-paper">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-ink"
              aria-label={`${site.name} — home`}
            >
              <EikonIcon className="h-9 w-9" />
              <span className="font-display text-xl">{site.fullName}</span>
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-charcoal">
              {site.description}
            </p>
            <p className="mt-6 inline-flex items-center gap-2 text-sm text-ink">
              <span className="h-2 w-2 rounded-full bg-dusty" aria-hidden="true" />
              {site.availability}
            </p>
          </div>

          <FooterColumn title="Studio">
            {site.nav.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Services">
            {services.map((service) => (
              <FooterLink key={service.id} href="/#services">
                {service.title}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Connect">
            {site.socials.map((social) => (
              <FooterLink key={social.label} href={social.href} external>
                {social.label}
              </FooterLink>
            ))}
            <FooterLink href={site.fiverrGig} external>
              Order on Fiverr
            </FooterLink>
          </FooterColumn>
        </div>

        <div className="mt-16 space-y-4 border-t-[1.5px] border-line-soft pt-8">
          <p className="text-xs uppercase tracking-[0.12em] text-faint">
            Set in Playfair Display &amp; Manrope &middot; built with Next.js
          </p>
          <div className="flex flex-col gap-2 text-sm text-faint sm:flex-row sm:items-center sm:justify-between">
            <p>
              &copy; {year} {site.name}. All rights reserved.
            </p>
            <p>{site.location}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-charcoal">
        {title}
      </h3>
      <ul className="mt-5 space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <li>
      <Link
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="link-line text-sm text-charcoal transition-colors hover:text-ink"
      >
        {children}
      </Link>
    </li>
  );
}
