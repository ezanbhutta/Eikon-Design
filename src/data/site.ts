export const site = {
  name: "Eikon",
  fullName: "Eikon Designs",

  tagline: "Logo & Brand Identity Studio",
  description:
    "Eikon Designs is a small studio making clean, modern logos and complete brand kits for founders around the world.",
  url: "https://eikon.design",
  location: "Multan, Pakistan · working worldwide",
  availability: "Available for new projects",
  founded: 2021,

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
