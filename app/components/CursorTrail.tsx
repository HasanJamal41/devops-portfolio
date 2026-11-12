"use client";

import { useEffect, useRef } from "react";

const PARTICLE_LIFETIME_MS = 700;

// magenta -> purple gradient pairs, picked at random per particle
const COLOR_PAIRS: [string, string][] = [
  ["#ff2ec4", "#8b2fe0"],
  ["#ff5cf0", "#7c3aed"],
  ["#e0249d", "#a855f7"],
];

export default function CursorTrail(): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // No cursor to trail on touch devices, and respect reduced-motion preference.
    if (isTouchDevice || prefersReducedMotion) {
      return;
    }

    let rafPending = false;

    function spawnParticle(x: number, y: number) {
      if (!container) return;

      const size = 6 + Math.random() * 10;
      const [from, to] =
        COLOR_PAIRS[Math.floor(Math.random() * COLOR_PAIRS.length)];

      const particle = document.createElement("span");
      particle.style.position = "absolute";
      particle.style.left = `${x - size / 2}px`;
      particle.style.top = `${y - size / 2}px`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.borderRadius = "9999px";
      particle.style.background = `radial-gradient(circle at 30% 30%, ${from}, ${to})`;
      particle.style.boxShadow = `0 0 ${size}px 1px ${from}99, 0 0 ${
        size * 2
      }px ${size / 2}px ${to}66`;
      particle.style.pointerEvents = "none";
      particle.style.willChange = "transform, opacity";
      particle.style.animation = `cursor-trail-fade ${PARTICLE_LIFETIME_MS}ms ease-out forwards`;

      container.appendChild(particle);

      window.setTimeout(() => {
        particle.remove();
      }, PARTICLE_LIFETIME_MS + 50);
    }

    function handleMouseMove(e: MouseEvent) {
      // Cap spawning to roughly once per animation frame so a fast mouse
      // doesn't flood the DOM with particles.
      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(() => {
        spawnParticle(e.clientX, e.clientY);
        rafPending = false;
      });
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
    />
  );
}
