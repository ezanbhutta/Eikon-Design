import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { ArrowLink } from "@/components/arrow-link";
import { projects, getProject } from "@/data/projects";
import { site } from "@/data/site";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} — ${project.sector}`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];
  const [poster, social, card] = project.gallery;

  return (
    <>
      <section className="pt-32 sm:pt-40">
        <Container>
          <Reveal>
            <Link
              href="/work"
              className="link-line text-sm text-muted hover:text-bone"
            >
              ← Back to work
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-8 border-b border-line pb-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  {project.sector} · {project.year}
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="font-display mt-5 text-6xl tracking-tight text-bone lg:text-8xl">
                  {project.name}
                </h1>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <p className="text-lg leading-relaxed text-muted">
                {project.summary}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Logo */}
      <section className="py-12 lg:py-16">
        <Container>
          <Reveal>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl border border-line/60 bg-ink-soft">
              <Image
                src={project.image}
                alt={`${project.name} logo`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 88rem"
                className="object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Mockup gallery */}
      <section className="py-8 lg:py-12">
        <Container>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
              In context
            </p>
          </Reveal>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.4fr]">
            <GalleryTile src={poster} alt={`${project.name} poster`} ratio="9/16" />
            <GalleryTile src={social} alt={`${project.name} social post`} ratio="9/16" />
            <GalleryTile
              src={card}
              alt={`${project.name} business card`}
              ratio="4/3"
              className="sm:col-span-2 lg:col-span-1"
            />
          </div>
        </Container>
      </section>

      {/* Details */}
      <section className="py-8 lg:py-12">
        <Container>
          <div className="grid gap-12 border-t border-line pt-10 lg:grid-cols-3">
            <Detail term="Year" value={`${project.year}`} />
            <Detail term="Services" value={project.services.join(", ")} />
            <Detail term="Discipline" value="Logo & Brand Identity" />
          </div>
        </Container>
      </section>

      {/* Full board */}
      <section className="py-8 lg:py-12">
        <Container>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
              The full system
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="relative mt-6 aspect-[1600/1078] w-full overflow-hidden rounded-3xl border border-line/60 bg-ink-soft">
              <Image
                src={project.board}
                alt={`${project.name} brand identity board`}
                fill
                sizes="(max-width: 1024px) 100vw, 88rem"
                className="object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Next + CTA */}
      <section className="mt-8 border-t border-line py-16">
        <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
            Next project
          </span>
          <Link
            href={`/work/${next.slug}`}
            className="font-display text-3xl tracking-tight text-bone transition-colors hover:text-accent sm:text-4xl"
          >
            {next.name} →
          </Link>
        </Container>
      </section>

      <section className="border-t border-line py-16 text-center">
        <Container>
          <ArrowLink href={site.fiverrGig} external className="text-bone">
            Start a project on Fiverr
          </ArrowLink>
        </Container>
      </section>
    </>
  );
}

function GalleryTile({
  src,
  alt,
  ratio,
  className = "",
}: {
  src: string;
  alt: string;
  ratio: "9/16" | "4/3";
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <div
        className="relative w-full overflow-hidden rounded-2xl border border-line/60 bg-ink-soft"
        style={{ aspectRatio: ratio.replace("/", " / ") }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, 30vw"
          className="object-cover"
        />
      </div>
    </Reveal>
  );
}

function Detail({ term, value }: { term: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
        {term}
      </dt>
      <dd className="mt-2 text-bone">{value}</dd>
    </div>
  );
}
