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
      "A clean, modern logo that actually suits your business, plus the app icon, favicon, font and colours that go with it.",
    deliverables: ["Logo concepts", "App icon", "Favicon", "Brand font & colours"],
  },
  {
    id: "identity",
    title: "Brand Identity",
    description:
      "The full visual language: colour palette, type, and every logo variation you'll need: horizontal, vertical, black & white.",
    deliverables: ["Type system", "Colour palette", "Logo variations", "Iconography"],
  },
  {
    id: "kit",
    title: "Branding Kit",
    description:
      "Everything to launch with: brand guidelines, business cards and stationery, 3D mockups, and tidy, editable source files.",
    deliverables: ["Brand guidelines", "Business card & stationery", "3D mockups", "Vector source files"],
  },
  {
    id: "social",
    title: "Social Media Kit",
    description:
      "Matching profiles, banners and post templates so you look consistent on every platform you're on.",
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
      "Tell us about your business, who it's for, and the feel you're after, as much or as little as you've got. We'll work with it.",
  },
  {
    index: "02",
    title: "Design",
    description:
      "We sketch concepts in black and white first, and make sure they hold up big and small before any colour goes near them.",
  },
  {
    index: "03",
    title: "Refine",
    description:
      "Pick a direction and we refine it with you. Unlimited revisions until the spacing, the curves, every detail feels right.",
  },
  {
    index: "04",
    title: "Deliver",
    description:
      "You get a tidy folder with everything: variations, mockups, stationery, social, and editable source files. Ready to use.",
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

export const testimonials: Testimonial[] = [
  {
    quote:
      "Outstanding designer with an eye for clean and modern aesthetics. He delivered a minimalist brand logo that truly captures the brand's essence. Very professional, timely, and highly recommended.",
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
      "The seller understood the concept perfectly and delivered a clean, professional design. The final files were well organised and neatly arranged. Highly satisfied with the result.",
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

export interface Package {
  name: string;
  price: string;
  summary: string;
  features: string[];
  featured?: boolean;
}

export const packages: Package[] = [
  {
    name: "Basic",
    price: "$40",
    summary: "Logo",
    features: [
      "1 logo concept",
      "App icon & favicon",
      "Brand font",
      "Brand colours",
    ],
  },
  {
    name: "Standard",
    price: "$115",
    summary: "Logo + Social Media Kit",
    features: [
      "2 logo concepts",
      "App icon, fonts & palette",
      "Social media kit",
      "Profile logos + banners",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "$165",
    summary: "Complete Branding Kit",
    features: [
      "3 to 4 logo concepts",
      "Full identity & variations",
      "Stationery + business card",
      "Social kit · 6 platforms",
      "3D mockups",
      "Vector + all source files",
      "Free consultation",
    ],
  },
];
