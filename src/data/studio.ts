/**
 * Studio content — services, process, proof, testimonials, clients.
 * PLACEHOLDER CONTENT — replace with the studio's real offering and copy.
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
      "The mark at the centre of everything. Distinctive, scalable, and built to last decades — not trend cycles.",
    deliverables: ["Primary mark", "Monogram", "Responsive variants", "Favicon set"],
  },
  {
    id: "identity",
    title: "Brand Identity",
    description:
      "A complete visual language around the mark: type, colour, layout, motion, and the rules that hold it together.",
    deliverables: ["Type system", "Colour palette", "Iconography", "Layout grids"],
  },
  {
    id: "guidelines",
    title: "Brand Guidelines",
    description:
      "A precise, beautiful manual so every future touchpoint stays unmistakably on-brand.",
    deliverables: ["Usage rules", "Do & don't", "Asset library", "Templates"],
  },
  {
    id: "packaging",
    title: "Packaging & Print",
    description:
      "Identity translated to the physical world — packaging, stationery, and signage that earns a second look.",
    deliverables: ["Packaging", "Stationery", "Signage", "Print collateral"],
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
      "We dig into your market, audience, and ambition — then define the strategy the mark has to deliver on.",
  },
  {
    index: "02",
    title: "Design",
    description:
      "Concepts are explored in black and white first. We pressure-test ideas at every size before colour ever enters.",
  },
  {
    index: "03",
    title: "Refine",
    description:
      "We sharpen the chosen direction down to the curve, the kern, the optical detail — until nothing is left to remove.",
  },
  {
    index: "04",
    title: "Deliver",
    description:
      "You receive a complete, organised asset kit plus guidelines, ready to roll out everywhere with confidence.",
  },
];

export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: "120+", label: "Brands shaped" },
  { value: "9", label: "Years in practice" },
  { value: "14", label: "Design awards" },
  { value: "32", label: "Countries served" },
];

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Eikon gave us a mark our whole company rallied behind. Nine months on, customers still tell us the logo is why they trusted us first.",
    author: "Dana Reyes",
    role: "Founder, Nova Payments",
  },
  {
    quote:
      "The most rigorous design process we've experienced. Every decision had a reason — and the result is unmistakably ours.",
    author: "Marcus Hale",
    role: "Partner, Atlas Ventures",
  },
];

/** Client names for the marquee strip. */
export const clients: string[] = [
  "Lumen",
  "Atlas",
  "Verdant",
  "Nova",
  "Harbor",
  "Aria",
  "Tidewater",
  "Prism",
  "Bloom",
  "Strata",
  "Ember",
  "Monolith",
];
