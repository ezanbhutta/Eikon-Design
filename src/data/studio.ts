/**
 * Studio content — real data from Eikon Designs' Fiverr gig + Behance.
 */

export interface Service {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const services: Service[] = [
  {
    id: "logo",
    title: "Logo Design",
    description:
      "A distinctive primary mark — clean, minimal, and modern — with the app icon, favicon, type, and colours that anchor it.",
    deliverables: ["Logo concepts", "App icon", "Favicon", "Brand font & colours"],
  },
  {
    id: "identity",
    title: "Brand Identity",
    description:
      "A complete visual language: palette, type system, and horizontal, vertical, and black-&-white variations that hold up everywhere.",
    deliverables: ["Type system", "Colour palette", "Logo variations", "Iconography"],
  },
  {
    id: "kit",
    title: "Branding Kit",
    description:
      "Everything you need to launch — brand guidelines, stationery, polished 3D mockups, and organised, editable source files.",
    deliverables: ["Brand guidelines", "Business card & stationery", "3D mockups", "Vector source files"],
  },
  {
    id: "social",
    title: "Social Media Kit",
    description:
      "On-brand profiles, banners, and templates so you show up consistently across every platform you use.",
    deliverables: ["Profile & banners", "Post templates", "Story templates", "6-platform resize"],
  },
];

export interface ProcessStep {
  index: string;
  title: string;
  description: string;
}

export const process: ProcessStep[] = [
  {
    index: "01",
    title: "Discover",
    description:
      "We start with your brand vision — your market, audience, and the feeling the mark has to carry. Share as much or as little as you have.",
  },
  {
    index: "02",
    title: "Design",
    description:
      "Concepts are explored clean and minimal first. We pressure-test every idea at every size before colour and texture come in.",
  },
  {
    index: "03",
    title: "Refine",
    description:
      "Unlimited revisions on the chosen direction — we sharpen the curve, the kern, the optical detail until nothing is left to remove.",
  },
  {
    index: "04",
    title: "Deliver",
    description:
      "You receive an organised kit — variations, 3D mockups, stationery, social, and editable vector source files — ready to roll out.",
  },
];

export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: "389", label: "Five-star reviews" },
  { value: "4.9★", label: "Average rating" },
  { value: "1 hr", label: "Avg. response time" },
  { value: "5", label: "Languages spoken" },
];

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

/** Verbatim client reviews from the Eikon Designs Fiverr gig (389 reviews). */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Outstanding designer with an eye for clean and modern aesthetics. He delivered a minimalist brand logo that truly captures the brand's essence — very professional, timely, and highly recommended.",
    author: "freddiestock",
    role: "Fiverr client · New Zealand",
  },
  {
    quote:
      "Truly worth the investment. I trusted them with full creative control and they delivered something far beyond what I had imagined.",
    author: "flintbriar",
    role: "Fiverr client · United Kingdom",
  },
  {
    quote:
      "The seller understood the concept perfectly and delivered a clean, professional design. The final files were well organised and neatly arranged — highly satisfied with the result.",
    author: "maddoxsterling5",
    role: "Fiverr client · Germany",
  },
  {
    quote:
      "Super happy with the brand guidelines and social media kit. We will definitely come back when needed.",
    author: "a_alpha",
    role: "Fiverr client · Aruba",
  },
];

/** Real project names (Behance · ezanbhutta). */
export const clients: string[] = [
  "Sooshigo",
  "OceanExis",
  "Pixoro",
  "Rav7n",
  "Bodytone",
  "Cramberly",
  "Pexi",
  "FundRocket",
  "GoStay",
  "OfferCloud",
  "GravDrive",
  "Mistory",
];
