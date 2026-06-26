import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/cn";

export function WorkCard({
  project,
  className,
  priority,
}: {
  project: Project;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      data-cursor-label="View"
      className={cn(
        "paper-card group block p-4 transition-transform duration-300 hover:-translate-y-1",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] border-[1.5px] border-line-soft bg-paper">
        <Image
          src={project.board}
          alt={`${project.name} — ${project.sector} brand identity`}
          fill
          priority={priority}
          sizes="(max-width: 640px) 90vw, 45vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
        />
      </div>

      <div className="px-3 pb-2 pt-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-2xl text-ink">{project.name}</h3>
          <span className="text-xs font-medium uppercase tracking-[0.06em] text-charcoal">
            {project.year}
          </span>
        </div>
        <p className="mt-1 text-sm font-medium uppercase tracking-[0.04em] text-charcoal">
          {project.sector}
        </p>
        <p className="mt-2 text-sm leading-[1.55] text-charcoal/80">
          {project.summary}
        </p>
        <span className="ink-link mt-4 inline-block text-sm font-medium">
          View project &rarr;
        </span>
      </div>
    </Link>
  );
}
