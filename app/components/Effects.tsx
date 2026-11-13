"use client";

import { useEffect } from "react";

const GLYPHS = "!<>-_\\/[]{}=+*^?#01";

// Page-wide progressive enhancements: scroll reveals, counters, decoding labels,
// cursor spotlight on cards, magnetic buttons and the experience rail fill.
export default function Effects(): null {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: (() => void)[] = [];

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

    const scramble = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          scramble.unobserve(e.target);
          if (reduce) return;
          const el = e.target as HTMLElement;
          const final = el.textContent ?? "";
          const total = 28;
          let frame = 0;
          const tick = () => {
            let out = "";
            for (let i = 0; i < final.length; i++) {
              out +=
                i < (frame / total) * final.length || final[i] === " "
                  ? final[i]
                  : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
            }
            el.textContent = out;
            frame++;
            if (frame <= total) window.setTimeout(tick, 30);
            else el.textContent = final;
          };
          tick();
        }),
      { threshold: 1 }
    );
    document.querySelectorAll(".scramble").forEach((el) => scramble.observe(el));
    cleanups.push(() => scramble.disconnect());

    document.querySelectorAll<HTMLElement>(".spot").forEach((el) => {
      const move = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
      };
      el.addEventListener("pointermove", move);
      cleanups.push(() => el.removeEventListener("pointermove", move));
    });

    if (!reduce && window.matchMedia("(pointer: fine)").matches) {
      document.querySelectorAll<HTMLElement>(".magnetic").forEach((b) => {
        const move = (e: PointerEvent) => {
          const r = b.getBoundingClientRect();
          const x = (e.clientX - r.left - r.width / 2) * 0.18;
          const y = (e.clientY - r.top - r.height / 2) * 0.28;
          b.style.transform = `translate(${x}px, ${y}px)`;
        };
        const leave = () => (b.style.transform = "");
        b.addEventListener("pointermove", move);
        b.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          b.removeEventListener("pointermove", move);
          b.removeEventListener("pointerleave", leave);
        });
      });
    }

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
