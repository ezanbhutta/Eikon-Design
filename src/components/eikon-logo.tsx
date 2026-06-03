import { cn } from "@/lib/cn";
import { site } from "@/data/site";

/**
 * The Eikon brand icon — a pink→coral gradient squircle with three white
 * brushstroke bars forming an abstract "E". Recreated as SVG from the
 * supplied app icon so it scales crisply everywhere (favicon, header, OG).
 * Identical gradient IDs across instances are safe (defs are identical).
 */
export function EikonIcon({
  className = "h-8 w-8",
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : "true"}
    >
      {title ? <title>{title}</title> : null}
      <defs>
        <linearGradient
          id="eikonBg"
          x1="0"
          y1="0"
          x2="100"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ff4f93" />
          <stop offset="0.55" stopColor="#ff6a64" />
          <stop offset="1" stopColor="#ff6b4c" />
        </linearGradient>
        <radialGradient id="eikonGlow" cx="0.3" cy="0.24" r="0.85">
          <stop offset="0" stopColor="#ffc0d4" stopOpacity="0.55" />
          <stop offset="0.6" stopColor="#ffc0d4" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="1" y="1" width="98" height="98" rx="23" fill="url(#eikonBg)" />
      <rect x="1" y="1" width="98" height="98" rx="23" fill="url(#eikonGlow)" />
      <g stroke="#ffffff" strokeWidth="11" strokeLinecap="round">
        <line x1="30" y1="34" x2="71" y2="34" />
        <line x1="30" y1="50" x2="71" y2="50" />
        <line x1="30" y1="66" x2="69" y2="66" />
      </g>
    </svg>
  );
}

/**
 * Monochrome glyph (just the three bars) for single-colour contexts.
 * Inherits currentColor.
 */
export function EikonGlyph({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="11" strokeLinecap="round">
        <line x1="30" y1="34" x2="71" y2="34" />
        <line x1="30" y1="50" x2="71" y2="50" />
        <line x1="30" y1="66" x2="69" y2="66" />
      </g>
    </svg>
  );
}

/**
 * Full lockup: brand icon + wordmark.
 */
export function EikonLogo({
  className,
  iconClassName,
  showWordmark = true,
}: {
  className?: string;
  iconClassName?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <EikonIcon className={cn("h-7 w-7", iconClassName)} />
      {showWordmark && (
        <span className="text-[1.05rem] font-medium uppercase tracking-[0.32em] leading-none">
          {site.name}
        </span>
      )}
    </span>
  );
}
