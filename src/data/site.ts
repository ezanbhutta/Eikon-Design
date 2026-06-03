/**
 * Central site configuration.
 * PLACEHOLDER CONTENT — replace name, contact details, socials, and
 * copy with the studio's real information when provided.
 */

export const site = {
  name: "Eikon",
  /** Greek "εἰκών" — image / icon. */
  tagline: "Logo & Brand Identity Studio",
  description:
    "Eikon is an independent logo and brand identity studio crafting marks, systems, and brands that are built to be remembered.",
  url: "https://eikon.design",
  email: "hello@eikon.design",
  location: "Remote — working worldwide",
  availability: "Available for new projects",
  founded: 2016,

  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Behance", href: "https://behance.net" },
    { label: "Dribbble", href: "https://dribbble.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],

  nav: [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/#services" },
    { label: "Studio", href: "/studio" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SocialLink = (typeof site.socials)[number];
export type NavItem = (typeof site.nav)[number];
