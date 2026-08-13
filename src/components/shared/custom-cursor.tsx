"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useMediaQuery } from "@/hooks/use-media-query";

const INTERACTIVE_SELECTOR =
  'a, button, input, textarea, select, [role="button"], [data-cursor]';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [active, setActive] = useState(false);
  const reducedMotion = useReducedMotion();
  const finePointer = useMediaQuery("(pointer: fine)");
  const enabled = finePointer && !reducedMotion;

  useEffect(() => {
    if (!enabled) {
      document.documentElement.classList.remove("has-custom-cursor");
      return;
    }
    document.documentElement.classList.add("has-custom-cursor");

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const moveDot = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power3.out" });
    const moveDotY = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power3.out" });
    const moveRing = gsap.quickTo(ring, "x", { duration: 0.35, ease: "power3.out" });
    const moveRingY = gsap.quickTo(ring, "y", { duration: 0.35, ease: "power3.out" });

    const handleMove = (e: MouseEvent) => {
      moveDot(e.clientX);
      moveDotY(e.clientY);
      moveRing(e.clientX);
      moveRingY(e.clientY);
    };

    const handleOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest(INTERACTIVE_SELECTOR);
      if (target) {
        setActive(true);
        setLabel((target as HTMLElement).dataset.cursor ?? null);
      }
    };
    const handleOut = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest(INTERACTIVE_SELECTOR);
      if (target) {
        setActive(false);
        setLabel(null);
      }
    };

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100]" aria-hidden>
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amarelo"
      />
      <div
        ref={ringRef}
        className="fixed left-0 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-azul-claro/70 text-center text-[10px] font-semibold uppercase tracking-wide text-ink transition-all duration-300 ease-out"
        style={{
          width: active ? 72 : 32,
          height: active ? 72 : 32,
          background: active ? "rgba(45,125,160,0.25)" : "transparent",
        }}
      >
        {label}
      </div>
    </div>
  );
}
