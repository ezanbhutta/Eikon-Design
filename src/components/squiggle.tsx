import { cn } from "@/lib/cn";

type Variant = "wave" | "loop" | "underline" | "arrow" | "scribble";

const paths: Record<Variant, { box: string; d: string }> = {
  wave: {
    box: "0 0 220 24",
    d: "M2 14 C 26 2, 44 2, 64 13 S 104 25, 128 13 S 172 1, 196 12 S 214 16, 218 11",
  },
  loop: {
    box: "0 0 90 60",
    d: "M4 40 C 10 8, 52 4, 60 26 C 66 44, 30 52, 30 34 C 30 20, 58 22, 86 16",
  },
  underline: {
    box: "0 0 200 16",
    d: "M3 9 C 40 3, 70 13, 104 8 C 140 3, 168 12, 197 6",
  },
  arrow: {
    box: "0 0 120 60",
    d: "M4 12 C 38 6, 92 10, 104 44 M104 44 L 90 34 M104 44 L 116 32",
  },
  scribble: {
    box: "0 0 80 80",
    d: "M8 40 C 8 16, 40 8, 52 24 C 62 38, 40 56, 28 48 C 18 41, 30 24, 52 30 C 70 35, 74 54, 64 66",
  },
};

export function Squiggle({
  variant = "wave",
  className,
  solid = false,
}: {
  variant?: Variant;
  className?: string;
  solid?: boolean;
}) {
  const { box, d } = paths[variant];
  return (
    <svg
      viewBox={box}
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
      className={cn("pointer-events-none", className)}
    >
      <path
        d={d}
        className={cn("squiggle", solid && "squiggle-solid")}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
