import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { Container } from "@/components/container";
import { SectionLabel } from "@/components/section-label";

export function WorkShowcase() {
  return (
    <section id="work" className="scroll-mt-24 py-20 lg:py-28">
      <Container>
        <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>Selected work</SectionLabel>
            <h2 className="font-display mt-5 max-w-2xl text-4xl leading-[1.02] tracking-tight text-bone sm:text-5xl lg:text-6xl">
              Recent logos &amp; identities.
            </h2>
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-faint">
            {projects.length} marks · 2024&ndash;25
          </p>
        </header>

        <ul className="mt-12 border-t border-line lg:mt-16">
          {projects.map((project, i) => (
            <li key={project.slug}>
              <Link
                href={`/work/${project.slug}`}
                data-cursor-label="View"
                className="group grid grid-cols-[1fr_auto] items-center gap-x-5 gap-y-3 border-b border-line py-5 sm:grid-cols-[2.5rem_11rem_1fr_auto] sm:gap-6"
              >
                <span className="hidden self-center font-mono text-xs text-faint transition-colors duration-300 group-hover:text-accent sm:block">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="order-last col-span-2 aspect-[16/10] w-full overflow-hidden rounded-lg border border-line/60 bg-ink-soft sm:order-none sm:col-span-1 sm:w-44">
                  <Image
                    src={project.board}
                    alt={`${project.name} — ${project.sector}`}
                    width={440}
                    height={275}
                    sizes="(max-width: 640px) 90vw, 11rem"
                    className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="font-display text-3xl leading-none tracking-tight text-bone transition-colors duration-300 group-hover:text-accent sm:text-4xl lg:text-5xl">
                    {project.name}
                  </h3>
                  <p className="mt-2 truncate font-serif text-base italic text-muted">
                    {project.sector}
                  </p>
                </div>

                <div className="text-right font-mono text-xs tracking-widest text-faint sm:self-center">
                  {project.year}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
