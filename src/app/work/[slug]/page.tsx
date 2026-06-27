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

  return (
    <>
      <section className="pt-32 sm:pt-40">
        <Container>
          <Reveal>
            <Link
              href="/work"
              className="ink-link link-line text-sm font-medium"
            >
              &larr; Back to work
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-8 border-b-[1.5px] border-line-soft pb-12 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <Reveal>
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-charcoal">
                  ( {project.sector} / {project.year} )
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="font-display mt-4 text-6xl text-ink lg:text-8xl">
                  {project.name}
                </h1>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <p className="text-lg leading-relaxed text-charcoal">
                {project.summary}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-10 lg:py-16">
        <Container>
          <Reveal>
            <div className="paper-card p-3">
              <div className="relative aspect-[1600/1078] w-full overflow-hidden rounded-[24px] bg-paper">
                <Image
                  src={project.board}
                  alt={`${project.name} brand identity presentation`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 80rem"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-8 lg:py-12">
        <Container>
          <div className="grid gap-10 border-t-[1.5px] border-line-soft pt-10 lg:grid-cols-3">
            <Detail term="Year" value={`${project.year}`} />
            <Detail term="Services" value={project.services.join(", ")} />
            <Detail term="Discipline" value="Logo & Brand Identity" />
          </div>
        </Container>
      </section>

      <section className="mt-8 py-16">
        <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs font-medium uppercase tracking-[0.12em] text-charcoal">
            ( Next project )
          </span>
          <Link
            href={`/work/${next.slug}`}
            className="font-display text-3xl text-ink transition-colors hover:text-accent sm:text-4xl"
          >
            {next.name} &rarr;
          </Link>
        </Container>
      </section>

      <section className="border-t-[1.5px] border-line-soft py-16">
        <Container>
          <ArrowLink href={site.fiverrGig} external className="ink-link">
            Start a project on Fiverr
          </ArrowLink>
        </Container>
      </section>
    </>
  );
}

function Detail({ term, value }: { term: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-medium uppercase tracking-[0.12em] text-charcoal">
        {term}
      </dt>
      <dd className="font-display mt-2 text-xl text-ink">{value}</dd>
    </div>
  );
}
