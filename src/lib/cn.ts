/**
 * Tiny classNames combiner — joins truthy class fragments.
 * Keeps the foundation dependency-free; swap for clsx + tailwind-merge
 * later if class-conflict resolution becomes necessary.
 */
export type ClassValue = string | number | false | null | undefined;

export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
