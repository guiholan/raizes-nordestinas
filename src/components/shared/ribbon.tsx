"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

gsap.registerPlugin(ScrollTrigger);

/**
 * The site's signature motif: a wavy ribbon, echoing both the costume
 * ribbons in the group's photos and the sail on the group's emblem.
 */
const WAVE_PATH =
  "M0,20 C 60,0 120,40 180,20 C 240,0 300,40 360,20 C 420,0 480,40 540,20 C 600,0 660,40 720,20 C 780,0 840,40 900,20 C 960,0 1020,40 1080,20 C 1140,0 1200,40 1260,20 L 1260,40 L 0,40 Z";

const WAVE_STROKE =
  "M0,20 C 60,0 120,40 180,20 C 240,0 300,40 360,20 C 420,0 480,40 540,20 C 600,0 660,40 720,20 C 780,0 840,40 900,20 C 960,0 1020,40 1080,20 C 1140,0 1200,40 1260,20";

/** Fixed hairline ribbon that fills as the page scrolls. */
export function RibbonProgress() {
  const barRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !barRef.current) return;
    const el = barRef.current;
    const trigger = ScrollTrigger.create({
      trigger: document.documentElement,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.3,
      onUpdate: (self) => {
        gsap.set(el, { scaleX: self.progress });
      },
    });
    return () => trigger.kill();
  }, [reducedMotion]);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[5px] bg-surface/40">
      <div
        ref={barRef}
        className="h-full w-full origin-left bg-gradient-to-r from-azul via-azul-claro to-amarelo"
        style={{ transform: reducedMotion ? undefined : "scaleX(0)" }}
      />
    </div>
  );
}

type RibbonDividerProps = {
  className?: string;
  tone?: "azul" | "amarelo";
  flip?: boolean;
};

/** Decorative wavy divider that draws itself in as it enters view. */
export function RibbonDivider({
  className,
  tone = "azul",
  flip = false,
}: RibbonDividerProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !pathRef.current) return;
    const el = pathRef.current;
    gsap.set(el, { strokeDasharray: 1, strokeDashoffset: 1 });
    const tween = gsap.to(el, {
      strokeDashoffset: 0,
      ease: "power2.out",
      duration: 1.4,
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
    });
    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [reducedMotion]);

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
          ref={pathRef}
          d={WAVE_STROKE}
          fill="none"
          stroke={tone === "azul" ? "var(--azul-claro)" : "var(--amarelo)"}
          strokeWidth={2}
          pathLength={1}
          style={
            reducedMotion
              ? undefined
              : { strokeDasharray: 1, strokeDashoffset: 1 }
          }
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
