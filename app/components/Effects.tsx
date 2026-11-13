"use client";

import { useEffect } from "react";
import { animate, hover, inView, scroll } from "motion";

// One soft ease used for every entrance on the page.
const EASE = [0.22, 1, 0.36, 1] as const;
const SPRING = { type: "spring", stiffness: 260, damping: 24, mass: 0.6 } as const;

// Page-wide motion, powered by Motion (motion.dev):
// - scroll reveals and count-up numbers when content enters the viewport
// - spring hover lift on cards
// - scroll-linked progress bar, experience rail and stacking project cards,
//   which run on the browser's native ScrollTimeline where available
// - off-screen sections pause their CSS loops
export default function Effects(): null {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const stops: (() => void)[] = [];

    // Reveals: fade and rise once. Inline styles are cleared afterwards so CSS hover states keep working.
    document.querySelectorAll<HTMLElement>(".rv").forEach((el) => {
      stops.push(
        inView(
          el,
          () => {
            if (reduce) {
              el.classList.add("in");
              return;
            }
            const delay = parseFloat(getComputedStyle(el).getPropertyValue("--rd")) || 0;
            el.classList.add("in");
            animate(el, { opacity: [0, 1], y: [28, 0], filter: ["blur(6px)", "blur(0px)"] }, { duration: 0.9, delay, ease: EASE }).then(
              // Motion commits final values inline when it finishes; clear them a frame later.
              () =>
                requestAnimationFrame(() => {
                  el.style.removeProperty("transform");
                  el.style.removeProperty("opacity");
                  el.style.removeProperty("filter");
                })
            );
          },
          { margin: "0px 0px -8% 0px" }
        )
      );
    });

    // Count-up numbers.
    document.querySelectorAll<HTMLElement>(".count").forEach((el) => {
      const to = parseFloat(el.dataset.to ?? "0");
      const dec = Number(el.dataset.dec ?? 0);
      stops.push(
        inView(
          el,
          () => {
            if (reduce) return;
            animate(0, to, { duration: 1.6, ease: EASE, onUpdate: (v) => (el.textContent = v.toFixed(dec)) });
          },
          { amount: 0.6 }
        )
      );
    });

    // Pause CSS loops (pipelines, radar, packets, marquee) in sections that are not visible.
    const pause = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("paused", !e.isIntersecting)),
      { rootMargin: "120px 0px" }
    );
    document.querySelectorAll(".hero, .marquee, .sec").forEach((el) => pause.observe(el));
    stops.push(() => pause.disconnect());

    const fine = window.matchMedia("(pointer: fine)").matches;

    // Cursor spotlight and spring lift on cards (desktop pointers only).
    if (fine) {
      document.querySelectorAll<HTMLElement>(".spot").forEach((el) => {
        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          el.style.setProperty("--mx", `${e.clientX - r.left}px`);
          el.style.setProperty("--my", `${e.clientY - r.top}px`);
        };
        el.addEventListener("pointermove", move, { passive: true });
        stops.push(() => el.removeEventListener("pointermove", move));
      });
      if (!reduce) {
        stops.push(
          hover(".tile, .group, .mini, .pr-card, .fact, .job", (el) => {
            animate(el, { y: -6 }, SPRING);
            return () => animate(el, { y: 0 }, SPRING);
          })
        );
      }
    }

    if (!reduce) {
      // Reading progress bar.
      const bar = document.querySelector<HTMLElement>(".progress");
      if (bar) stops.push(scroll(animate(bar, { scaleX: [0, 1] }, { ease: "linear" })));

      // Experience rail fills as the timeline passes the middle of the screen.
      const rail = document.getElementById("railfill");
      const xp = document.getElementById("xp");
      if (rail && xp) {
        stops.push(scroll(animate(rail, { scaleY: [0, 1] }, { ease: "linear" }), { target: xp, offset: ["start 0.6", "end 0.6"] }));
      }

      // Stacking project cards: as the next card slides up, the pinned one eases back and dims.
      if (window.matchMedia("(min-width: 1025px) and (min-height: 601px)").matches) {
        const cards = Array.from(document.querySelectorAll<HTMLElement>(".case"));
        cards.forEach((card, i) => {
          const next = cards[i + 1];
          if (!next) return;
          const shade = card.querySelector<HTMLElement>(".shade");
          const range = () => ({ target: next, offset: ["start end", "start 0.2"] as ["start end", "start 0.2"] });
          stops.push(scroll(animate(card, { scale: [1, 0.94] }, { ease: "linear" }), range()));
          if (shade) stops.push(scroll(animate(shade, { opacity: [0, 0.55] }, { ease: "linear" }), range()));
        });
      }
    } else {
      document.getElementById("railfill")?.style.setProperty("transform", "scaleY(1)");
    }

    return () => stops.forEach((fn) => fn());
  }, []);

  return null;
}
