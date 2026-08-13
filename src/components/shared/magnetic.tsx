"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function Magnetic({
  children,
  strength = 0.35,
}: {
  children: ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const el = ref.current;
    if (!el) return;

    const moveX = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3.out" });
    const moveY = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3.out" });

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      moveX(relX * strength);
      moveY(relY * strength);
    };
    const handleLeave = () => {
      moveX(0);
      moveY(0);
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [reducedMotion, strength]);

  return (
    <div ref={ref} className="inline-block will-change-transform">
      {children}
    </div>
  );
}
