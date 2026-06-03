/**
 * Central site configuration — real data from Eikon Designs
 * (Fiverr: kamran_ali8 · Behance: ezanbhutta).
 */

export const site = {
  name: "Eikon",
  fullName: "Eikon Designs",
  /** Greek "εἰκών" — image / icon. */
  tagline: "Logo & Brand Identity Studio",
  description:
    "Eikon Designs is a creative studio offering more than logo design — clean, minimal, modern marks and complete branding kits, built around your brand vision.",
  url: "https://eikon.design",
  location: "Multan, Pakistan — working worldwide",
  availability: "Available for new projects",
  founded: 2021,

  /** Fiverr proof — Level 2 seller, 389 five-star reviews. */
  fiverr: "https://www.fiverr.com/kamran_ali8",
  fiverrGig:
    "https://www.fiverr.com/kamran_ali8/do-3d-modern-minimalist-business-logo-design",
  behance: "https://www.behance.net/ezanbhutta",

  socials: [
    { label: "Fiverr", href: "https://www.fiverr.com/kamran_ali8" },
    { label: "Behance", href: "https://www.behance.net/ezanbhutta" },
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
