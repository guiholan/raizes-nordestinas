import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  y?: number;
  delay?: number;
  duration?: number;
};

/**
 * Renders content directly, always visible. Previously drove a
 * scroll-linked GSAP fade-in, but ScrollTrigger's default toggle
 * behavior (and its interaction with Lenis) could leave sections
 * hidden after scrolling past them. Not worth the risk for a fade-in.
 */
export function Reveal({ children, as: Tag = "div", className }: RevealProps) {
  const Comp = Tag as ElementType;
  return <Comp className={cn(className)}>{children}</Comp>;
}
