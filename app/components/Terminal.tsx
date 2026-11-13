"use client";

import { useEffect, useRef, useState } from "react";

type Line = { cmd: string } | { out: React.ReactNode };

interface Scene {
  id: string;
  label: string;
  context: string;
  lines: Line[];
}

const ok = (t: string) => <span className="okc">{t}</span>;
const dim = (t: string) => <span className="dim">{t}</span>;
const vio = (t: string) => <span className="vio">{t}</span>;

// Four short sessions that mirror the day-to-day work: ship, run, secure, observe.
const SCENES: Scene[] = [
  {
    id: "deploy",
    label: "deploy",
    context: "release · prod",
    lines: [
      { cmd: "terraform apply -auto-approve" },
      { out: <>{ok("Apply complete!")} {dim("12 added, 0 changed, 0 destroyed.")}</> },
      { cmd: "helm upgrade --install api ./charts/api -n prod" },
      { out: <>{dim("Release")} &quot;api&quot; {dim("has been upgraded.")} {ok("REVISION: 42")}</> },
      { cmd: "argocd app sync api-prod" },
      { out: <>{ok("✓ Synced")}   {ok("✓ Healthy")}   {vio("rev 4f2a9c1")}</> },
      { cmd: "kubectl rollout status deploy/api -n prod" },
      { out: dim('deployment "api" successfully rolled out') },
    ],
  },
  {
    id: "cluster",
    label: "cluster",
    context: "aks · prod",
    lines: [
      { cmd: "kubectl get nodes" },
      { out: dim("NAME                 STATUS   ROLES   VERSION") },
      { out: <>aks-system-0         {ok("Ready")}    agent   v1.30.4</> },
      { out: <>aks-apps-1           {ok("Ready")}    agent   v1.30.4</> },
      { out: <>aks-apps-2           {ok("Ready")}    agent   v1.30.4</> },
      { cmd: "kubectl get pods -n prod" },
      { out: dim("NAME                  READY   STATUS") },
      { out: <>api-7c9d5b-x2kqp      2/2     {ok("Running")}</> },
      { out: <>kafka-0               1/1     {ok("Running")}</> },
      { out: <>temporal-frontend-0   1/1     {ok("Running")}</> },
    ],
  },
  {
    id: "security",
    label: "security",
    context: "devsecops · ci",
    lines: [
      { cmd: "sonar-scanner -Dsonar.projectKey=api" },
      { out: <>{dim("Quality Gate:")} {ok("PASSED")}</> },
      { cmd: "trivy image api:1.8.0 --severity HIGH,CRITICAL" },
      { out: <>{dim("Total:")} {ok("0")} {dim("(HIGH: 0, CRITICAL: 0)")}</> },
      { cmd: "zap-baseline.py -t https://staging.api" },
      { out: <>{dim("FAIL-NEW:")} {ok("0")}  {dim("WARN-NEW:")} {ok("0")}  {dim("PASS:")} {ok("52")}</> },
      { cmd: "kubectl get clusterpolicy" },
      { out: <>require-labels  {ok("Ready")}   disallow-privileged  {ok("Ready")}</> },
    ],
  },
  {
    id: "observe",
    label: "observe",
    context: "monitoring",
    lines: [
      { cmd: "kubectl get pods -n monitoring" },
      { out: <>prometheus-0      {ok("Running")}   grafana-6d8f   {ok("Running")}</> },
      { out: <>loki-0            {ok("Running")}   otel-collector {ok("Running")}</> },
      { cmd: "curl -s prometheus:9090/-/healthy" },
      { out: ok("Prometheus Server is Healthy.") },
      { cmd: "promtool query instant :9090 'sum(up{job=\"api\"})'" },
      { out: <>{dim("{}")} =&gt; {ok("3")}</> },
      { cmd: "kubectl logs deploy/api -n prod --tail=1" },
      { out: dim('{"level":"info","msg":"request ok","latency_ms":41}') },
    ],
  },
];

const Prompt = () => <span className="pr">$ </span>;

const reduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Tabbed terminal: plays each scene, pauses, moves to the next. Clicking a tab jumps to it.
export function Terminal(): React.JSX.Element {
  const [scene, setScene] = useState(0);
  const [shown, setShown] = useState(0);
  const [typed, setTyped] = useState(0);
  const timer = useRef(0);

  useEffect(() => {
    const lines = SCENES[scene].lines;
    window.clearTimeout(timer.current);
    if (reduced()) {
      timer.current = window.setTimeout(() => setShown(lines.length), 0);
      return () => window.clearTimeout(timer.current);
    }
    let li = 0;
    const next = () => {
      if (li >= lines.length) {
        timer.current = window.setTimeout(() => setScene((s) => (s + 1) % SCENES.length), 3800);
        return;
      }
      const line = lines[li];
      if ("out" in line) {
        li++;
        setShown(li);
        timer.current = window.setTimeout(next, 180);
        return;
      }
      let c = 0;
      setTyped(0);
      setShown(li + 1);
      const t = () => {
        setTyped(++c);
        if (c < line.cmd.length) timer.current = window.setTimeout(t, 26);
        else {
          li++;
          timer.current = window.setTimeout(next, 420);
        }
      };
      t();
    };
    timer.current = window.setTimeout(() => {
      setShown(0);
      setTyped(0);
      next();
    }, 450);
    return () => window.clearTimeout(timer.current);
  }, [scene]);

  const current = SCENES[scene];
  const done = shown >= current.lines.length;

  return (
    <>
      <div className="cbar">
        <i style={{ background: "#FF5F57" }} />
        <i style={{ background: "#FEBC2E" }} />
        <i style={{ background: "#28C840" }} />
        <div className="ctabs" role="tablist" aria-label="Terminal sessions">
          {SCENES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === scene}
              className={i === scene ? "on" : undefined}
              onClick={() => setScene(i)}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
      <div
        key={current.id}
        className="cbody"
        role="img"
        aria-label={`Terminal session: ${current.label}. ${current.lines.filter((l) => "cmd" in l).map((l) => ("cmd" in l ? l.cmd : "")).join(", ")}.`}
      >
        <div className="cctx">{current.context}</div>
        {current.lines.slice(0, shown).map((line, i) => {
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
      <div className="cprog" aria-hidden="true">
        <i key={`${current.id}-${done}`} className={done ? "run" : undefined} />
      </div>
    </>
  );
}
