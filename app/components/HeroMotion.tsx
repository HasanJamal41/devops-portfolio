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
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
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
      const n = Math.round(Math.min(90, (w * h) / 16000));
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

    size();
    draw();
    host.addEventListener("pointermove", move);
    host.addEventListener("pointerleave", leave);
    window.addEventListener("resize", size);
    io.observe(cv);
    return () => {
      cancelAnimationFrame(raf);
      host.removeEventListener("pointermove", move);
      host.removeEventListener("pointerleave", leave);
      window.removeEventListener("resize", size);
      io.disconnect();
    };
  }, []);

  return <canvas id="net" ref={ref} aria-hidden="true" />;
}

const WORDS = ["confidence.", "zero downtime.", "GitOps.", "guardrails."];

// Types and deletes the last word of the hero headline.
export function TypedWord(): React.JSX.Element {
  const [text, setText] = useState(WORDS[0]);

  useEffect(() => {
    if (reduced()) return;
    let timer = 0;
    let wi = 0;
    const cycle = () => {
      const word = WORDS[wi];
      let n = word.length;
      const del = () => {
        if (n > 0) {
          setText(word.slice(0, --n) || " ");
          timer = window.setTimeout(del, 40);
          return;
        }
        wi = (wi + 1) % WORDS.length;
        const next = WORDS[wi];
        let k = 0;
        const type = () => {
          setText(next.slice(0, ++k));
          timer = window.setTimeout(k < next.length ? type : cycle, k < next.length ? 75 : 0);
        };
        type();
      };
      timer = window.setTimeout(del, 2400);
    };
    cycle();
    return () => window.clearTimeout(timer);
  }, []);

  return <span className="typed grad">{text}</span>;
}

type Line = { cmd: string } | { out: React.ReactNode };

const LINES: Line[] = [
  { cmd: "kubectl get engineer hasan -o wide" },
  { out: <span className="dim">NAME    ROLE      EXP    CLOUDS      STATUS</span> },
  { out: <>hasan   devops    3.5y   aws,azure   <span className="okc">Ready</span></> },
  { cmd: "argocd app sync career --prune" },
  { out: <><span className="okc">✔ Synced</span>   <span className="okc">✔ Healthy</span>   <span className="vio">rev HEAD</span></> },
  { out: <span className="dim">→ open to new roles · Islamabad / remote</span> },
];

const Prompt = () => <span className="pr">~ $ </span>;

// Replays a short kubectl / argocd session on a loop.
export function Terminal(): React.JSX.Element {
  // Each shown line, plus how many characters of the line currently being typed are visible.
  const [shown, setShown] = useState<number>(0);
  const [typed, setTyped] = useState<number>(0);

  useEffect(() => {
    let timer = 0;
    if (reduced()) {
      timer = window.setTimeout(() => setShown(LINES.length), 0);
      return () => window.clearTimeout(timer);
    }
    let li = 0;
    const next = () => {
      if (li >= LINES.length) {
        timer = window.setTimeout(() => {
          li = 0;
          setShown(0);
          setTyped(0);
          next();
        }, 7000);
        return;
      }
      const line = LINES[li];
      if ("out" in line) {
        li++;
        setShown(li);
        timer = window.setTimeout(next, 260);
        return;
      }
      let c = 0;
      setTyped(0);
      setShown(li + 1);
      const t = () => {
        setTyped(++c);
        if (c < line.cmd.length) timer = window.setTimeout(t, 38);
        else {
          li++;
          timer = window.setTimeout(next, 380);
        }
      };
      t();
    };
    timer = window.setTimeout(next, 700);
    return () => window.clearTimeout(timer);
  }, []);

  const done = shown >= LINES.length;

  return (
    <div
      className="cbody"
      role="img"
      aria-label="Terminal showing engineer hasan: DevOps, 3.5 years, AWS and Azure, status Ready; career sync Synced and Healthy, open to new roles."
    >
      {LINES.slice(0, shown).map((line, i) => {
        const typing = "cmd" in line && i === shown - 1 && typed < line.cmd.length;
        return (
          <div className="row" key={i}>
            {"cmd" in line ? (
              <>
                <Prompt />
                {typing ? line.cmd.slice(0, typed) : line.cmd}
                {typing && <span className="cursor" />}
              </>
            ) : (
              line.out
            )}
          </div>
        );
      })}
      {done && (
        <div className="row">
          <Prompt />
          <span className="cursor" />
        </div>
      )}
    </div>
  );
}
