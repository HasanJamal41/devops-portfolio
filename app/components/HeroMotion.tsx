"use client";

import { useEffect, useRef, useState } from "react";

const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  hot: boolean;
}

// Drifting node graph behind the hero; nodes lean toward the cursor.
export function NetworkCanvas(): React.JSX.Element {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    const ctx = cv?.getContext("2d");
    if (!cv || !ctx) return;
    const host = cv.parentElement!;
    const reduce = reduced();
    const touch = window.matchMedia("(pointer: coarse)").matches;
    // Phones get fewer nodes and a 1x canvas; the effect is ambient, not detail.
    const dpr = touch ? 1 : Math.min(window.devicePixelRatio || 1, 1.5);
    const maxNodes = touch ? 28 : 60;
    const mouse = { x: -999, y: -999 };
    let pts: Point[] = [];
    let w = 0;
    let h = 0;
    let visible = true;
    let raf = 0;

    const size = () => {
      w = cv.offsetWidth;
      h = cv.offsetHeight;
      cv.width = w * dpr;
      cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(Math.min(maxNodes, (w * h) / 18000));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.6,
        hot: Math.random() < 0.12,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        if (!reduce) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
        }
        const dm = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (dm < 160) {
          p.x += (mouse.x - p.x) * 0.006;
          p.y += (mouse.y - p.y) * 0.006;
        }
        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 130) {
            ctx.strokeStyle = `rgba(79,227,255,${(1 - d / 130) * 0.18})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
        if (dm < 180) {
          ctx.strokeStyle = `rgba(139,124,255,${(1 - dm / 180) * 0.5})`;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
        ctx.fillStyle = p.hot ? "rgba(61,245,166,.9)" : "rgba(180,200,255,.55)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.hot ? p.r + 0.8 : p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      if (visible && !reduce) raf = requestAnimationFrame(draw);
    };

    const move = (e: PointerEvent) => {
      const r = cv.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const leave = () => {
      mouse.x = mouse.y = -999;
    };
    const io = new IntersectionObserver(([entry]) => {
      const was = visible;
      visible = entry.isIntersecting;
      if (visible && !was) draw();
    });

    let lastW = window.innerWidth;
    // Mobile browsers fire resize when the address bar hides; only rebuild on a real width change.
    const onResize = () => {
      if (window.innerWidth === lastW) return;
      lastW = window.innerWidth;
      size();
    };

    size();
    draw();
    if (!touch) {
      host.addEventListener("pointermove", move, { passive: true });
      host.addEventListener("pointerleave", leave);
    }
    window.addEventListener("resize", onResize, { passive: true });
    io.observe(cv);
    return () => {
      cancelAnimationFrame(raf);
      host.removeEventListener("pointermove", move);
      host.removeEventListener("pointerleave", leave);
      window.removeEventListener("resize", onResize);
      io.disconnect();
    };
  }, []);

  return <canvas id="net" ref={ref} aria-hidden="true" />;
}

const WORDS = ["secure.", "reliable.", "observable.", "compliant."];

// Cycles the last headline word with a vertical slide. Every word sits in the same
// grid cell, so the line width is fixed and nothing around it shifts.
export function Rotator(): React.JSX.Element {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduced()) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % WORDS.length), 2600);
    return () => window.clearInterval(id);
  }, []);

  const prev = (index + WORDS.length - 1) % WORDS.length;
  return (
    <span className="rotator" aria-hidden="true">
      {WORDS.map((w, i) => (
        <span key={w} className={`grad${i === index ? " on" : i === prev ? " out" : ""}`} >
          {w}
        </span>
      ))}
    </span>
  );
}

