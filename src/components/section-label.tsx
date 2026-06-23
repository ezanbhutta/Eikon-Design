import { cn } from "@/lib/cn";

export function SectionLabel({
  children,
  className,
  tone = "dark",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.28em]",
        tone === "dark" ? "text-faint" : "text-paper-muted",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="h-px w-7 bg-current opacity-50"
      />
      {children}
    </span>
  );
}
