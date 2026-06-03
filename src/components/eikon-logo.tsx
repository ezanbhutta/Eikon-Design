import { cn } from "@/lib/cn";
import { site } from "@/data/site";

/**
 * The studio's own mark — an "E" monogram set in a lens/seal ring
 * (a nod to "eikon" = image). PLACEHOLDER: replace with the final
 * studio logo vector when available. Uses currentColor so it adapts
 * to any background.
 */
export function EikonMark({
  className = "h-8 w-8",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle
        cx="20"
        cy="20"
        r="18.5"
        stroke="currentColor"
        strokeWidth="1.6"
        opacity="0.55"
      />
      <path
        d="M14 12.5 V27.5 M14 12.5 H27 M14 20 H23.5 M14 27.5 H27"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Full lockup: mark + wordmark. Defaults to inheriting text color.
 */
export function EikonLogo({
  className,
  markClassName,
  showWordmark = true,
}: {
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <EikonMark className={cn("h-7 w-7", markClassName)} />
      {showWordmark && (
        <span className="text-[1.05rem] font-medium uppercase tracking-[0.32em] leading-none">
          {site.name}
        </span>
      )}
    </span>
  );
}
