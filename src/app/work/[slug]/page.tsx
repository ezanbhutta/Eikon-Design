import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { ArrowLink } from "@/components/arrow-link";
import { LogoMark } from "@/components/logo-mark";
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
  const { from, to, ink } = project.palette;

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
                  {project.sector}
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="font-display mt-5 text-6xl text-bone lg:text-8xl">
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

      {/* Mark canvas */}
      <section className="py-12 lg:py-16">
        <Container>
          <Reveal>
            <div
              className="flex aspect-[16/10] items-center justify-center rounded-3xl border border-line/60 lg:aspect-[16/8]"
              style={{
                backgroundImage: `linear-gradient(155deg, ${from}, ${to})`,
                color: ink,
              }}
            >
              <LogoMark mark={project.mark} strokeWidth={1.8} className="h-40 w-40 lg:h-56 lg:w-56" />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Details */}
      <section className="py-12 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            <Detail term="Year" value={`${project.year}`} />
            <Detail term="Services" value={project.services.join(", ")} />
            <Detail term="Discipline" value="Logo & Brand Identity" />
          </div>

          <Reveal>
            <div className="mt-16 max-w-2xl rounded-2xl border border-line bg-ink-soft p-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Case study in progress
              </p>
              <p className="mt-4 text-muted">
                The full breakdown — strategy, sketches, and the final system —
                is being written up. Want to see more in the meantime, or talk
                about a project like this?
              </p>
              <div className="mt-6">
                <ArrowLink href="/contact" className="text-bone">
                  Get in touch
                </ArrowLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Next project */}
      <section className="border-t border-line py-16">
        <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
            Next project
          </span>
          <Link
            href={`/work/${next.slug}`}
            className="font-display text-3xl text-bone transition-colors hover:text-accent sm:text-4xl"
          >
            {next.name} →
          </Link>
        </Container>
      </section>

      <section className="border-t border-line py-16 text-center">
        <Container>
          <ArrowLink href={`mailto:${site.email}`} external className="text-bone">
            {site.email}
          </ArrowLink>
        </Container>
      </section>
    </>
  );
}

function Detail({ term, value }: { term: string; value: string }) {
  return (
    <div className="border-t border-line pt-5">
      <dt className="font-mono text-xs uppercase tracking-[0.18em] text-faint">
        {term}
      </dt>
      <dd className="mt-2 text-bone">{value}</dd>
    </div>
  );
}
