import { cn } from "@/lib/cn";

/**
 * Consistent page gutter + max width. Use `bleed` for full-width sections
 * that still need horizontal padding on small screens.
 */
export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[88rem] px-6 sm:px-8 lg:px-12", className)}>
      {children}
    </div>
  );
}
