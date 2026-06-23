import Image from "next/image";
import { cn } from "@/lib/cn";
import { site } from "@/data/site";

export function EikonIcon({
  className = "h-8 w-8",
  title,
  priority,
}: {
  className?: string;
  title?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/eikon-logo.png"
      alt={title ?? "Eikon Designs"}
      width={128}
      height={128}
      priority={priority}
      sizes="96px"
      className={cn("rounded-[24%]", className)}
    />
  );
}

export function EikonLogo({
  className,
  iconClassName,
  showWordmark = true,
  priority,
}: {
  className?: string;
  iconClassName?: string;
  showWordmark?: boolean;
  priority?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <EikonIcon className={cn("h-7 w-7", iconClassName)} priority={priority} />
      {showWordmark && (
        <span className="text-[1.05rem] font-medium uppercase tracking-[0.32em] leading-none">
          {site.name}
        </span>
      )}
    </span>
  );
}
