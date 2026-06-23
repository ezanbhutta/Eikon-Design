export interface Project {
  slug: string;
  name: string;
  sector: string;
  year: number;
  services: string[];
  summary: string;
  image: string;
  board: string;
  gallery: string[];
  featured?: boolean;
}

interface ProjectSeed {
  slug: string;
  name: string;
  sector: string;
  year: number;
  services: string[];
  summary: string;
  featured?: boolean;
}

const seeds: ProjectSeed[] = [
  {
    slug: "sooshigo",
    name: "Sooshigo",
    sector: "Sushi Restaurant",
    year: 2025,
    services: ["Logo", "Brand Identity", "Packaging"],
    summary: "A bold, playful identity for a quick-service sushi brand.",
    featured: true,
  },
  {
    slug: "oceanexis",
    name: "OceanExis",
    sector: "Ocean Apparel",
    year: 2025,
    services: ["Logo", "Brand Identity", "Guidelines"],
    summary: "A fluid, considered identity for an ocean-inspired apparel label.",
    featured: true,
  },
  {
    slug: "pixoro",
    name: "Pixoro",
    sector: "Creative Studio",
    year: 2025,
    services: ["Logo", "Brand Identity"],
    summary: "A vivid, gradient-led mark for a digital creative brand.",
    featured: true,
  },
  {
    slug: "rav7n",
    name: "Rav7n",
    sector: "Outdoor Gear",
    year: 2025,
    services: ["Logo", "Brand Identity"],
    summary: "A modular mark for nomadic, design-led outdoor gear.",
    featured: true,
  },
  {
    slug: "bodytone",
    name: "Bodytone",
    sector: "Fitness & Wellness",
    year: 2025,
    services: ["Logo", "Brand Identity"],
    summary: "A strong, energetic identity for a fitness and wellness brand.",
    featured: true,
  },
  {
    slug: "cramberly",
    name: "Cramberly",
    sector: "Lifestyle",
    year: 2025,
    services: ["Logo", "Brand Identity"],
    summary: "A clean, friendly identity with a fluid signature mark.",
    featured: true,
  },
  {
    slug: "dymora-lab",
    name: "Dymora Lab",
    sector: "Science & Biotech",
    year: 2025,
    services: ["Logo", "Brand Identity", "Guidelines"],
    summary: "A precise, research-led mark for a modern science lab.",
  },
  {
    slug: "velox",
    name: "Velox",
    sector: "Bike Courier",
    year: 2025,
    services: ["Logo", "Brand Identity"],
    summary: "A fast, eco-minded identity for a bicycle courier service.",
  },
  {
    slug: "mistory",
    name: "Mistory",
    sector: "Heritage Brand",
    year: 2024,
    services: ["Logo", "Brand Identity"],
    summary: "A refined, heritage-led identity rooted in culture.",
  },
];

export const projects: Project[] = seeds.map((p) => ({
  ...p,
  image: `/work/${p.slug}-logo.webp`,
  board: `/work/${p.slug}.webp`,
  gallery: [
    `/work/${p.slug}-poster.webp`,
    `/work/${p.slug}-social.webp`,
    `/work/${p.slug}-card.webp`,
  ],
}));

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
