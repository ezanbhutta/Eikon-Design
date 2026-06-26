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
        "inline-block text-xs font-medium uppercase tracking-[0.1em]",
        tone === "dark" ? "text-charcoal" : "text-paper/70",
        className,
      )}
    >
      ( {children} )
    </span>
  );
}
