import { cn } from "@/lib/cn";

export function Marquee({
  items,
  className,
  durationSeconds = 38,
}: {
  items: string[];
  className?: string;
  durationSeconds?: number;
}) {
  return (
    <div className={cn("group/marquee marquee-mask overflow-hidden", className)}>
      <div
        className="marquee-track flex w-max items-center"
        style={
          { "--marquee-duration": `${durationSeconds}s` } as React.CSSProperties
        }
      >
        {[0, 1].map((dup) => (
          <ul
            key={dup}
            className="flex shrink-0 items-center"
            aria-hidden={dup === 1}
          >
            {items.map((item, i) => (
              <li
                key={`${dup}-${i}`}
                className="flex items-center gap-10 px-5 sm:gap-14 sm:px-7"
              >
                <span className="font-display text-2xl text-bone/70 sm:text-3xl">
                  {item}
                </span>
                <span className="text-accent/70" aria-hidden="true">
                  ✦
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
