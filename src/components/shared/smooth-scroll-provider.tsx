"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * Smooth scroll only — this does not drive any content visibility,
 * so it can't cause the reveal/reverse bugs the GSAP ScrollTrigger
 * setup used to. `autoRaf` lets Lenis run its own rAF loop instead
 * of hand-wiring it into gsap.ticker (that wiring was the source of
 * an earlier bug where cleanup didn't remove the right callback).
 */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      syncTouch: false,
      autoRaf: true,
    });

    return () => {
      lenis.destroy();
    };
  }, [reducedMotion]);

  return <>{children}</>;
}
