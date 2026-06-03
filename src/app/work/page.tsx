import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { WorkCard } from "@/components/work-card";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected logo and brand identity projects — marks, systems, and guidelines crafted by the Eikon studio.",
};

export default function WorkPage() {
  return (
    <>
      <section className="pb-16 pt-40 sm:pt-48">
        <Container>
          <Reveal>
            <SectionLabel>Portfolio</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display mt-6 max-w-4xl text-balance text-5xl leading-[1.05] text-bone sm:text-6xl lg:text-7xl">
              Every brand begins with a single, deliberate mark.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg text-muted">
              A selection of recent identities. Each one starts in black and
              white and ends as a brand its owner is proud to stand behind.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-28 lg:pb-36">
        <Container>
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 3) * 80}>
                <WorkCard project={project} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
