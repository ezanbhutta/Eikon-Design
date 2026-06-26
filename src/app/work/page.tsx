import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { Squiggle } from "@/components/squiggle";
import { WorkCard } from "@/components/work-card";
import { projects } from "@/data/projects";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Recent logo and branding projects from Eikon Designs — clean, modern identities for founders around the world.",
};

export default function WorkPage() {
  return (
    <>
      <section className="pb-12 pt-40 sm:pt-48">
        <Container>
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.1em] text-charcoal">
              ( Portfolio )
            </p>
            <h1 className="font-display mt-5 max-w-4xl text-5xl leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
              A few brands we&rsquo;ve{" "}
              <em className="font-normal italic">shaped lately.</em>
            </h1>
            <p className="mt-6 max-w-xl text-charcoal">
              ( A selection of recent projects. Each one started as a rough idea
              and a blank page &mdash; here&rsquo;s where they landed. )
            </p>
          </Reveal>
          <Squiggle
            variant="wave"
            className="mt-10 hidden h-5 w-full text-ink opacity-50 sm:block"
          />
        </Container>
      </section>

      <section className="pb-28 lg:pb-36">
        <Container>
          <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.slug}>
                <WorkCard
                  project={project}
                  priority={i < 2}
                  className={cn(i % 2 === 1 && "sm:mt-12")}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
