"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
};

/**
 * Fades content up into place once, the first time it scrolls into
 * view. Uses IntersectionObserver (not GSAP ScrollTrigger) and
 * unobserves itself the moment it fires — it only ever turns
 * visibility ON, never back off, so scrolling back up can't hide
 * content again. A timeout failsafe also guarantees visibility even
 * if the observer never fires for some reason.
 */
export function Reveal({ children, as: Tag = "div", className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || visible) return;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);

    const failsafe = setTimeout(() => setVisible(true), 2000);

    return () => {
      observer.disconnect();
      clearTimeout(failsafe);
    };
  }, [reducedMotion, visible]);

  const Comp = Tag as ElementType;
  return (
    <Comp
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-out",
        !reducedMotion && (visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"),
        className
      )}
      style={!reducedMotion && delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </Comp>
  );
}
