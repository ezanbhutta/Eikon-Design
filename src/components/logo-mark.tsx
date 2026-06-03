import type { ProjectMark } from "@/data/projects";

/**
 * Generated placeholder logo marks for the portfolio grid.
 * PLACEHOLDER: each maps to a fictional brand. Replace with imported
 * client logo vectors (SVG) when the editable files are added.
 * All marks draw with `currentColor`, so the parent sets the colour.
 */

const marks: Record<ProjectMark, React.ReactNode> = {
  lens: (
    <>
      <circle cx="32" cy="32" r="20" />
      <circle cx="32" cy="32" r="11" />
      <circle cx="32" cy="32" r="3" fill="currentColor" stroke="none" />
    </>
  ),
  monogram: (
    <>
      <path d="M16 48 L32 16 L48 48" />
      <path d="M23 38 H41" />
    </>
  ),
  leaf: (
    <>
      <path d="M32 14 C18 22 18 42 32 50 C46 42 46 22 32 14 Z" />
      <path d="M32 18 V46" />
    </>
  ),
  orbit: (
    <>
      <circle cx="32" cy="32" r="8" />
      <ellipse cx="32" cy="32" rx="22" ry="9" transform="rotate(-28 32 32)" />
      <circle cx="50" cy="22" r="3" fill="currentColor" stroke="none" />
    </>
  ),
  arc: (
    <>
      <path d="M14 42 A18 18 0 0 1 50 42" />
      <path d="M14 48 H50" />
    </>
  ),
  peak: (
    <>
      <path d="M12 46 L26 24 L36 38 L44 28 L52 46" />
    </>
  ),
  wave: (
    <>
      <path d="M12 36 C20 24 24 24 32 36 C40 48 44 48 52 36" />
      <path d="M12 26 C20 14 24 14 32 26 C40 38 44 38 52 26" opacity="0.5" />
    </>
  ),
  prism: (
    <>
      <path d="M32 14 L52 48 H12 Z" />
      <path d="M32 14 V48" />
      <path d="M32 31 L52 48" />
    </>
  ),
  bloom: (
    <>
      <circle cx="32" cy="22" r="9" />
      <circle cx="42" cy="38" r="9" />
      <circle cx="22" cy="38" r="9" />
    </>
  ),
  stack: (
    <>
      <rect x="16" y="18" width="32" height="8" rx="4" />
      <rect x="16" y="30" width="32" height="8" rx="4" />
      <rect x="16" y="42" width="20" height="8" rx="4" />
    </>
  ),
};

export function LogoMark({
  mark,
  className = "h-16 w-16",
  strokeWidth = 2.4,
}: {
  mark: ProjectMark;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {marks[mark]}
    </svg>
  );
}
