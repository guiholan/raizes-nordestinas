import { cn } from "@/lib/utils";

/**
 * The site's signature motif: a wavy ribbon, echoing both the costume
 * ribbons in the group's photos and the sail on the group's emblem.
 */
const WAVE_PATH =
  "M0,20 C 60,0 120,40 180,20 C 240,0 300,40 360,20 C 420,0 480,40 540,20 C 600,0 660,40 720,20 C 780,0 840,40 900,20 C 960,0 1020,40 1080,20 C 1140,0 1200,40 1260,20 L 1260,40 L 0,40 Z";

const WAVE_STROKE =
  "M0,20 C 60,0 120,40 180,20 C 240,0 300,40 360,20 C 420,0 480,40 540,20 C 600,0 660,40 720,20 C 780,0 840,40 900,20 C 960,0 1020,40 1080,20 C 1140,0 1200,40 1260,20";

type RibbonDividerProps = {
  className?: string;
  tone?: "azul" | "amarelo";
  flip?: boolean;
};

/** Decorative wavy divider between sections. Static — no scroll-linked JS. */
export function RibbonDivider({
  className,
  tone = "azul",
  flip = false,
}: RibbonDividerProps) {
  return (
    <div
      className={cn(
        "pointer-events-none w-full overflow-hidden",
        flip && "rotate-180",
        className
      )}
      aria-hidden
    >
      <svg
        viewBox="0 0 1260 40"
        preserveAspectRatio="none"
        className="h-6 w-full sm:h-10"
      >
        <path
          d={WAVE_STROKE}
          fill="none"
          stroke={tone === "azul" ? "var(--azul-claro)" : "var(--amarelo)"}
          strokeWidth={2}
        />
      </svg>
    </div>
  );
}

/** Small filled ribbon glyph, used as a bullet / section kicker mark. */
export function RibbonMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1260 40"
      preserveAspectRatio="none"
      className={cn("h-2 w-10", className)}
      aria-hidden
    >
      <path d={WAVE_PATH} fill="currentColor" />
    </svg>
  );
}

/** Ribbon trail that sweeps in behind a card on hover/focus. Pure CSS. */
export function RibbonTrail({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1260 40"
      preserveAspectRatio="none"
      className={cn(
        "pointer-events-none absolute inset-x-0 bottom-0 h-8 origin-left scale-x-0 opacity-0 transition-[transform,opacity] duration-500 ease-out group-hover:scale-x-100 group-hover:opacity-100 group-focus-visible:scale-x-100 group-focus-visible:opacity-100",
        className
      )}
      aria-hidden
    >
      <path d={WAVE_PATH} fill="url(#ribbon-trail-gradient)" />
      <defs>
        <linearGradient id="ribbon-trail-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--azul)" />
          <stop offset="100%" stopColor="var(--amarelo)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
