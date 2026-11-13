"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Page-wide progressive enhancements: smooth scrolling, scroll reveals, counters,
// cursor spotlight on cards and the experience rail fill.
export default function Effects(): null {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: (() => void)[] = [];

    if (!reduce) {
      const lenis = new Lenis({ autoRaf: true, lerp: 0.09, anchors: { offset: -88 } });
      cleanups.push(() => lenis.destroy());
    }

    const reveal = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            reveal.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".rv").forEach((el) => reveal.observe(el));
    cleanups.push(() => reveal.disconnect());

    const counters = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          counters.unobserve(e.target);
          const el = e.target as HTMLElement;
          const to = parseFloat(el.dataset.to ?? "0");
          const dec = Number(el.dataset.dec ?? 0);
          if (reduce) {
            el.textContent = to.toFixed(dec);
            return;
          }
          let start: number | null = null;
          const step = (now: number) => {
            start ??= now;
            const p = Math.min((now - start) / 1800, 1);
            el.textContent = (to * (1 - Math.pow(1 - p, 4))).toFixed(dec);
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }),
      { threshold: 0.6 }
    );
    document.querySelectorAll(".count").forEach((el) => counters.observe(el));
    cleanups.push(() => counters.disconnect());

    document.querySelectorAll<HTMLElement>(".spot").forEach((el) => {
      const move = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
      };
      el.addEventListener("pointermove", move);
      cleanups.push(() => el.removeEventListener("pointermove", move));
    });

    const xp = document.getElementById("xp");
    const rail = document.getElementById("railfill");
    const onScroll = () => {
      if (!xp || !rail) return;
      const r = xp.getBoundingClientRect();
      const p = (window.innerHeight * 0.6 - r.top) / r.height;
      rail.style.setProperty("--fill", String(Math.max(0, Math.min(1, p))));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    cleanups.push(() => window.removeEventListener("scroll", onScroll));

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
