import { cn } from "@/lib/cn";

/**
 * Small mono eyebrow with an index dot, e.g. "01 / Selected Work".
 */
export function SectionLabel({
  index,
  children,
  className,
  tone = "dark",
}: {
  index?: string;
  children: React.ReactNode;
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em]",
        tone === "dark" ? "text-faint" : "text-paper-muted",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
      {index && <span className="text-accent">{index}</span>}
      {children}
    </span>
  );
}
