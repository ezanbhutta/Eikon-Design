import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { Container } from "@/components/container";
import { Squiggle } from "@/components/squiggle";
import { cn } from "@/lib/cn";

export function WorkShowcase() {
  return (
    <section id="work" className="scroll-mt-24 py-20 lg:py-28">
      <Container>
        <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-4xl leading-[1] text-ink sm:text-5xl lg:text-6xl">
            Selected <em className="font-normal italic">work.</em>
          </h2>
          <p className="text-sm text-charcoal">
            {`( ${projects.length} recent identities )`}
          </p>
        </header>

        <Squiggle
          variant="wave"
          className="mt-8 hidden h-5 w-full text-ink opacity-50 sm:block"
        />

        <div className="mt-12 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:mt-16">
          {projects.map((project, i) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              data-cursor-label="View"
              className={cn(
                "paper-card group block p-8 transition-transform duration-300 hover:-translate-y-1 sm:p-10",
                i % 2 === 1 && "sm:mt-14",
              )}
            >
              <div className="relative w-fit">
                <div className="h-36 w-36 overflow-hidden rounded-full border-[1.5px] border-ink bg-paper">
                  <Image
                    src={project.image}
                    alt={`${project.name} logo`}
                    width={220}
                    height={220}
                    sizes="9rem"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {project.featured && (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1 right-1 flex h-9 w-9 items-center justify-center rounded-full border-[1.5px] border-ink bg-white text-sm"
                  >
                    🏆
                  </span>
                )}
              </div>

              <div className="mt-7 flex items-baseline gap-3">
                <span className="font-display text-xl text-ink/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-3xl leading-tight text-ink">
                  {project.name}
                </h3>
              </div>

              <p className="mt-1 text-sm font-medium uppercase tracking-[0.02em] text-charcoal">
                {project.sector}
              </p>
              <p className="mt-3 max-w-sm text-sm leading-[1.55] text-charcoal">
                {project.summary}
              </p>
              <span className="ink-link mt-5 inline-block text-sm font-medium">
                View project &rarr;
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
