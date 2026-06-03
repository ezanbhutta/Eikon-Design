# Eikon — Logo & Brand Identity Studio

A premium portfolio website for a logo & brand identity studio, built with
**Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

> ⚠️ **This is a foundation with placeholder content.** The studio name
> ("Eikon"), copy, projects, and logo marks are stand-ins designed to be
> replaced with real material — inspirations, editable logo vectors, and
> content — as it is provided.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

## Project structure

```
src/
├─ app/
│  ├─ layout.tsx            # Root layout: fonts, metadata, header/footer
│  ├─ page.tsx              # Home (hero, work, services, process, CTA…)
│  ├─ work/page.tsx         # Portfolio grid
│  ├─ work/[slug]/page.tsx  # Case-study pages (SSG from project data)
│  ├─ studio/page.tsx       # About the studio
│  ├─ contact/page.tsx      # Contact + enquiry form
│  ├─ not-found.tsx         # Custom 404
│  ├─ icon.svg              # Favicon (studio mark)
│  ├─ opengraph-image.tsx   # Generated social share image
│  └─ globals.css           # Design tokens + base styles (Tailwind v4)
├─ components/              # Header, footer, cards, marquee, reveal, etc.
├─ data/                    # Editable content: site, projects, studio
└─ lib/                     # Small utilities
```

## Where to plug in real content

| What | File |
| --- | --- |
| Studio name, tagline, email, socials, nav | `src/data/site.ts` |
| Portfolio projects + logo marks | `src/data/projects.ts` |
| Services, process, stats, testimonials, clients | `src/data/studio.ts` |
| Studio story & principles | `src/app/studio/page.tsx` |
| Colours & typography | `src/app/globals.css` (`@theme`) + `src/app/layout.tsx` (fonts) |
| Exported logo files (SVG/PNG) | `public/work/` |

The contact form composes a prefilled email via the visitor's mail client
(no backend required). Swap it for a Server Action or an email service
(Resend, Formspree, etc.) when ready — see `src/components/contact-form.tsx`.

## Deployment

Optimised for **Vercel**: every route prerenders as static content. Connect the
repository and deploy — no extra configuration needed.
