"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const raf = useRef<number>(0);

  useEffect(() => {
    // Only show on desktop
    if (window.matchMedia("(pointer: fine)").matches === false) return;

    const dot = dotRef.current;
    const circle = ringRef.current;
    if (!dot || !circle) return;

    const onMouseMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      dot.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`;
    };

    const animate = () => {
      // Smooth follow with lerp
      ring.current.x += (pos.current.x - ring.current.x) * 0.15;
      ring.current.y += (pos.current.y - ring.current.y) * 0.15;
      circle.style.transform = `translate(${ring.current.x - 16}px, ${ring.current.y - 16}px)`;
      raf.current = requestAnimationFrame(animate);
    };

    // Scale ring on hover over interactive elements
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        target.closest(".cursor-pointer")
      ) {
        circle.style.transform += " scale(1.6)";
        circle.style.borderColor = "rgba(139, 115, 85, 0.6)";
        dot.style.opacity = "0";
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']") ||
        target.closest(".cursor-pointer")
      ) {
        circle.style.borderColor = "rgba(139, 115, 85, 0.35)";
        dot.style.opacity = "1";
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("mouseout", onMouseOut);
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mouseout", onMouseOut);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        style={{ willChange: "transform" }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
      </div>
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] hidden md:block"
        style={{ willChange: "transform" }}
      >
        <div
          className="w-8 h-8 rounded-full border-2 border-accent/35 transition-transform duration-200"
          style={{ willChange: "transform, border-color" }}
        />
      </div>
    </>
  );
}
