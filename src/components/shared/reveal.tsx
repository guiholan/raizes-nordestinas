"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  y?: number;
  delay?: number;
  duration?: number;
};

export function Reveal({
  children,
  as: Tag = "div",
  className,
  y = 32,
  delay = 0,
  duration = 0.9,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !ref.current) return;
    const el = ref.current;
    gsap.set(el, { opacity: 0, y });
    const tween = gsap.to(el, {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        once: true,
      },
    });
    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [reducedMotion, y, delay, duration]);

  const Comp = Tag as ElementType;
  return (
    <Comp ref={ref} className={cn(className)}>
      {children}
    </Comp>
  );
}
