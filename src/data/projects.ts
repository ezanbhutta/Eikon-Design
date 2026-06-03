/**
 * Portfolio projects — real work, imported from Drive and optimized to
 * WebP in /public/work via `scripts/import-drive.mjs`.
 *
 * NOTE: `sector`, `year`, `services`, and `summary` are sensible
 * placeholders inferred from each brand — please correct any that are
 * wrong; the images and names are the real deliverables.
 */

export interface Project {
  slug: string;
  name: string;
  /** Client descriptor / category. */
  sector: string;
  year: number;
  services: string[];
  /** One-line summary shown on cards and the case study. */
  summary: string;
  /** Optimized presentation image in /public/work. */
  image: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "sooshigo",
    name: "Sooshigo",
    sector: "Food & Dining",
    year: 2025,
    services: ["Logo", "Brand Identity", "Packaging"],
    summary: "A playful, appetite-led identity for a modern sushi brand.",
    image: "/work/sooshigo.webp",
    featured: true,
  },
  {
    slug: "oceanexis",
    name: "OceanExis",
    sector: "Sustainability",
    year: 2025,
    services: ["Logo", "Brand Identity", "Guidelines"],
    summary: "A fluid, considered mark for an ocean-focused venture.",
    image: "/work/oceanexis.webp",
    featured: true,
  },
  {
    slug: "pixoro",
    name: "Pixoro",
    sector: "Creative Tech",
    year: 2025,
    services: ["Logo", "Product Brand"],
    summary: "A vivid, pixel-inspired identity for a digital platform.",
    image: "/work/pixoro.webp",
    featured: true,
  },
  {
    slug: "rav7n",
    name: "Rav7n",
    sector: "Apparel & Streetwear",
    year: 2025,
    services: ["Logo", "Brand Identity"],
    summary: "A bold mark with attitude for a contemporary apparel label.",
    image: "/work/rav7n.webp",
    featured: true,
  },
  {
    slug: "bodytone",
    name: "Bodytone",
    sector: "Fitness & Wellness",
    year: 2025,
    services: ["Logo", "Brand Identity"],
    summary: "A strong, energetic identity for a fitness and wellness brand.",
    image: "/work/bodytone.webp",
    featured: true,
  },
  {
    slug: "cramberly",
    name: "Cramberly",
    sector: "Food & Beverage",
    year: 2025,
    services: ["Logo", "Packaging"],
    summary: "A warm, fruit-fresh identity for a food and beverage brand.",
    image: "/work/cramberly.webp",
    featured: true,
  },
  {
    slug: "dymora-lab",
    name: "Dymora Lab",
    sector: "Science & Biotech",
    year: 2025,
    services: ["Logo", "Brand Identity", "Guidelines"],
    summary: "A precise, research-led mark for a modern science lab.",
    image: "/work/dymora-lab.webp",
  },
  {
    slug: "velox",
    name: "Velox",
    sector: "Technology",
    year: 2025,
    services: ["Logo", "Brand Identity"],
    summary: "A fast, precise wordmark for a performance-driven company.",
    image: "/work/velox.webp",
  },
  {
    slug: "mistory",
    name: "Mistory",
    sector: "Media & Story",
    year: 2024,
    services: ["Logo", "Brand Identity"],
    summary: "An intriguing, narrative-driven mark for a storytelling brand.",
    image: "/work/mistory.webp",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
