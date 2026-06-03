/**
 * Portfolio projects.
 *
 * PLACEHOLDER PORTFOLIO — these are fictional brands with generated
 * vector marks so the grid reads like a finished portfolio. Replace each
 * entry with a real client project, and swap `mark` for an imported
 * SVG/asset once the studio's editable logo files are added under
 * /public/work or /src/assets.
 */

export type ProjectMark =
  | "orbit"
  | "arc"
  | "monogram"
  | "leaf"
  | "peak"
  | "wave"
  | "prism"
  | "bloom"
  | "stack"
  | "lens";

export interface Project {
  slug: string;
  name: string;
  /** Short client descriptor, e.g. "Coffee Roastery". */
  sector: string;
  year: number;
  services: string[];
  /** One-line summary shown on cards. */
  summary: string;
  /** Identifier rendered by <LogoMark />. */
  mark: ProjectMark;
  /** Card backdrop — two stops for a subtle gradient. */
  palette: { from: string; to: string; ink: string };
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "lumen-optics",
    name: "Lumen",
    sector: "Optical & Eyewear",
    year: 2024,
    services: ["Logo", "Identity", "Packaging"],
    summary: "A precision wordmark and lens motif for a modern optics house.",
    mark: "lens",
    palette: { from: "#1d2b34", to: "#0e171c", ink: "#dbe7ec" },
    featured: true,
  },
  {
    slug: "atlas-ventures",
    name: "Atlas",
    sector: "Venture Capital",
    year: 2023,
    services: ["Logo", "Identity", "Guidelines"],
    summary: "A confident monogram for a fund backing frontier founders.",
    mark: "monogram",
    palette: { from: "#2a241a", to: "#15110a", ink: "#f0e4cf" },
    featured: true,
  },
  {
    slug: "verdant",
    name: "Verdant",
    sector: "Regenerative Farming",
    year: 2024,
    services: ["Logo", "Identity", "Art Direction"],
    summary: "An organic leaf mark rooted in soil-to-table storytelling.",
    mark: "leaf",
    palette: { from: "#1c2a1f", to: "#0d1610", ink: "#d7ead9" },
    featured: true,
  },
  {
    slug: "nova-payments",
    name: "Nova",
    sector: "Fintech",
    year: 2023,
    services: ["Logo", "Identity", "Product Brand"],
    summary: "A radiant spark system for instant cross-border payments.",
    mark: "orbit",
    palette: { from: "#211d33", to: "#100e1b", ink: "#dcd8f2" },
    featured: true,
  },
  {
    slug: "harbor-co",
    name: "Harbor",
    sector: "Coffee Roastery",
    year: 2022,
    services: ["Logo", "Packaging", "Signage"],
    summary: "A warm arc mark for a neighbourhood roaster and roastery bar.",
    mark: "arc",
    palette: { from: "#2e211a", to: "#16100b", ink: "#f1ddc9" },
  },
  {
    slug: "aria-studio",
    name: "Aria",
    sector: "Architecture",
    year: 2024,
    services: ["Logo", "Identity"],
    summary: "A quiet, structural wordmark for a residential practice.",
    mark: "peak",
    palette: { from: "#23262b", to: "#111316", ink: "#e3e6ea" },
  },
  {
    slug: "tidewater",
    name: "Tidewater",
    sector: "Swimwear",
    year: 2023,
    services: ["Logo", "Identity", "Packaging"],
    summary: "A fluid wave mark for sustainable, sea-born swimwear.",
    mark: "wave",
    palette: { from: "#16282e", to: "#0a1417", ink: "#cfe7ec" },
  },
  {
    slug: "prismatic",
    name: "Prism",
    sector: "Creative Software",
    year: 2024,
    services: ["Logo", "Product Brand", "Guidelines"],
    summary: "A refractive prism icon for a colour-grading toolkit.",
    mark: "prism",
    palette: { from: "#2a1c2b", to: "#150e16", ink: "#eed7ef" },
  },
  {
    slug: "bloom-botanicals",
    name: "Bloom",
    sector: "Skincare",
    year: 2022,
    services: ["Logo", "Identity", "Packaging"],
    summary: "A blooming monoline mark for botanical, science-led skincare.",
    mark: "bloom",
    palette: { from: "#2c2320", to: "#161110", ink: "#f3ddd6" },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
