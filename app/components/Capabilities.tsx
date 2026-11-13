import { capabilityTools } from "../data";
import { Chips, Icon, Logo } from "./ui";

const delay = (s: number) => ({ "--d": `${s}s` }) as React.CSSProperties;
const reveal = (s: number) => ({ "--rd": `${s}s` }) as React.CSSProperties;

const stages = [
  { label: "commit", icon: <><circle cx="12" cy="12" r="3" /><path d="M3 12h6M15 12h6" /></> },
  { label: "build", icon: <path d="M21 16V8l-9-5-9 5v8l9 5 9-5z" /> },
  { label: "test", icon: <><path d="M9 11l3 3 8-8" /><path d="M20 12v7a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2h9" /></> },
  { label: "scan", icon: <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" /> },
  { label: "deploy", icon: <path d="M5 12l5 5L20 7" /> },
];

const barHeights = [62, 80, 45, 90, 70, 55, 85, 40, 75, 95, 60, 50, 88, 66, 78, 52, 70, 84];

export default function Capabilities(): React.JSX.Element {
  return (
    <section className="wrap sec" id="capabilities">
      <div className="head">
        <div>
          <span className="kicker scramble">01 / Capabilities</span>
          <h2 className="h2 rv">
            Everything between <span className="grad nw">git push</span> and a healthy pod.
          </h2>
        </div>
        <p className="sub rv">Six areas I own end to end — each one running live below.</p>
      </div>

      <div className="bento">
        <article className="spot tile s4 rv">
          <div className="ticon"><Icon.bolt /></div>
          <h3 className="tt">CI/CD &amp; automation</h3>
          <p className="td">Pipelines that ship on their own schedule, not on hope. Build, test, scan and release — automated end to end.</p>
          <div className="viz v-pipe" aria-hidden="true">
            <div className="stages">
              {stages.map((s, i) => (
                <div key={s.label} className="stg">
                  <i style={delay(i * 0.55)}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>{s.icon}</svg>
                  </i>
                  {s.label}
                </div>
              ))}
            </div>
            <div className="pbar"><b /></div>
            <div className="plog"><span>main → production</span><span className="okc">● passing</span></div>
          </div>
          <Chips tools={capabilityTools.cicd} />
        </article>

        <article className="spot tile s2 rv" style={reveal(0.08)}>
          <div className="ticon"><Icon.cloud /></div>
          <h3 className="tt">Multi-cloud</h3>
          <p className="td">Provisioned, scaled and secured wherever the workload lives.</p>
          <div className="viz v-orbit" aria-hidden="true">
            <div className="ring r2"><b /></div>
            <div className="ring r1"><b /></div>
            <div className="core">
              <span><Logo src="/logos/aws.svg" size={28} /></span>
              <span><Logo src="/logos/azure.svg" size={28} /></span>
            </div>
          </div>
          <div className="chips">
            {["EKS", "AKS", "EC2", "Lambda", "IAM"].map((s) => <span key={s} className="chip">{s}</span>)}
          </div>
        </article>

        <article className="spot tile s2 rv">
          <div className="ticon"><Icon.cube /></div>
          <h3 className="tt">Kubernetes &amp; GitOps</h3>
          <p className="td">Declarative, self-healing clusters. A pod dies — it’s back before anyone notices.</p>
          <div className="viz v-pods" aria-hidden="true">
            <div className="pods">
              {Array.from({ length: 24 }, (_, i) => (
                <span key={i} className={i === 13 ? "pod heal" : "pod"} style={delay(+(i * 0.13).toFixed(2))} />
              ))}
            </div>
            <div className="vlbl"><span>24/24 running</span><span className="okc">self-healed</span></div>
          </div>
          <Chips tools={capabilityTools.k8s} />
        </article>

        <article className="spot tile s2 rv" style={reveal(0.08)}>
          <div className="ticon"><Icon.chart /></div>
          <h3 className="tt">Observability</h3>
          <p className="td">Metrics, logs and traces — plus an LLM that reads them for root cause.</p>
          <div className="viz v-chart" aria-hidden="true">
            <div className="bars">
              {barHeights.map((h, i) => (
                <i key={i} style={{ "--h": `${h}px`, "--d": `${(i * 0.11).toFixed(2)}s` } as React.CSSProperties} />
              ))}
              <span className="scan" />
            </div>
            <div className="vlbl"><span>live metrics</span><span style={{ color: "var(--c1)" }}>streaming</span></div>
          </div>
          <Chips tools={capabilityTools.obs} />
        </article>

        <article className="spot tile s2 rv" style={reveal(0.16)}>
          <div className="ticon"><Icon.shield /></div>
          <h3 className="tt">DevSecOps</h3>
          <p className="td">Scanned, stress-tested and pentested before an attacker gets the chance.</p>
          <div className="viz v-radar" aria-hidden="true">
            <span className="sweep2" />
            <span className="sweep" />
            <span className="blip" style={{ left: "34%", top: "30%" }} />
            <span className="blip" style={{ left: "64%", top: "62%", animationDelay: "1.4s" }} />
            <svg viewBox="0 0 24 28" fill="none" stroke="#3DF5A6" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l9 4v7c0 6-4 10.5-9 13-5-2.5-9-7-9-13V6l9-4z" />
              <path d="M8 14l3 3 5-6" />
            </svg>
          </div>
          <Chips tools={capabilityTools.sec} />
        </article>

        <article className="spot tile s3 rv">
          <div className="ticon"><Icon.code /></div>
          <h3 className="tt">Infrastructure as code</h3>
          <p className="td">Versioned, reviewed, reproducible. Never a hand-clicked snowflake.</p>
          <div className="viz v-code" aria-hidden="true">
            <span className="k">module</span> <span className="s">&quot;aks_platform&quot;</span> {"{"}
            {"\n  source  = "}<span className="s">&quot;./modules/aks&quot;</span>
            {"\n  zones   = ["}<span className="n">1</span>, <span className="n">2</span>, <span className="n">3</span>]
            {"\n  gitops  = "}<span className="k">true</span>{"   "}<span className="dim"># argocd bootstrap</span>
            {"\n  secrets = "}<span className="s">&quot;key-vault&quot;</span>
            {"\n}"}<span className="cursor" style={{ marginLeft: 4 }} />
          </div>
          <Chips tools={capabilityTools.iac} />
        </article>

        <article className="spot tile s3 rv" style={reveal(0.08)}>
          <div className="ticon"><Icon.terminal /></div>
          <h3 className="tt">Linux &amp; systems</h3>
          <p className="td">Production Linux from storage and networking to hardening and HA — where it all started.</p>
          <div className="viz v-code" aria-hidden="true">
            <span className="pr">root@edge-01</span>:~# systemctl is-active keepalived
            {"\n"}<span className="s">active</span>
            {"\n"}<span className="pr">root@edge-01</span>:~# getenforce
            {"\n"}<span className="s">Enforcing</span>
            {"\n"}<span className="pr">root@edge-01</span>:~# <span className="cursor" />
          </div>
          <Chips tools={capabilityTools.linux} />
        </article>
      </div>
    </section>
  );
}
