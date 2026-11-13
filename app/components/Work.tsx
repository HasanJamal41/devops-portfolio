import { projectTools, type Tool } from "../data";
import { Chips, Logo } from "./ui";

interface Node {
  label: string;
  sub?: string;
  logo?: string;
  icon?: React.ReactNode;
  kind?: "hot" | "okn";
}

// A diagram is rows of nodes joined top-to-bottom by animated connectors;
// a row marked `linked` also gets a horizontal connector between its two nodes.
interface Row {
  nodes: Node[];
  linked?: boolean;
}

interface Project {
  tag: string;
  title: string;
  description: string;
  wins: { title: string; sub: string }[];
  tools: Tool[];
  diagramLabel: string;
  diagramAlt: string;
  rows: Row[];
}

const svg = (stroke: string, children: React.ReactNode, width = 1.8) => (
  <svg viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {children}
  </svg>
);

const projects: Project[] = [
  {
    tag: "01 — Azure AKS · Integration",
    title: "Enterprise cloud-native integration platform",
    description:
      "A secure, tenant-aware platform on AKS. KrakenD fronts traffic with JWT auth and rate limiting, Apache Camel orchestrates REST, SOAP and SFTP connectors, and Kafka with Temporal keep every workflow event-driven and fault-tolerant.",
    wins: [
      { title: "Tenant-isolated", sub: "Topics, RBAC and secrets per tenant" },
      { title: "100% GitOps", sub: "Azure DevOps → Helm → ArgoCD" },
    ],
    tools: projectTools.integration,
    diagramLabel: "live architecture",
    diagramAlt: "Clients flow to the KrakenD gateway, then Apache Camel, then Kafka and Temporal, on a platform of Keycloak, Key Vault and ArgoCD.",
    rows: [
      { nodes: [{ label: "Clients", sub: "REST · SOAP · SFTP", icon: svg("#949AAF", <><rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8" /></>) }] },
      { nodes: [{ label: "KrakenD", sub: "JWT · rate limit", kind: "hot", icon: svg("#4FE3FF", <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />) }] },
      { nodes: [{ label: "Apache Camel", sub: "connectors", icon: svg("#949AAF", <path d="M4 12h4l3-8 2 16 3-8h4" />) }] },
      { nodes: [{ label: "Kafka", sub: "Strimzi", logo: "apachekafka", kind: "hot" }, { label: "Temporal", sub: "workflows", logo: "temporal", kind: "hot" }] },
      { nodes: [{ label: "Keycloak", logo: "keycloak" }, { label: "Key Vault", logo: "azure" }, { label: "ArgoCD", logo: "argo", kind: "okn" }] },
    ],
  },
  {
    tag: "02 — Kubernetes · AI",
    title: "AI-powered Kubernetes observability",
    description:
      "Automated diagnostics across multiple clusters and remote Docker hosts, with LLM-based root-cause analysis that turns a wall of logs into an answer — plus live investigation workflows for the incident in front of you.",
    wins: [
      { title: "Hours → minutes", sub: "Incident triage after rollout" },
      { title: "Multi-cluster", sub: "AKS + edge Docker hosts" },
    ],
    tools: projectTools.observability,
    diagramLabel: "signal flow",
    diagramAlt: "Clusters and Docker hosts feed Prometheus and Loki, then an LLM root-cause engine, then alerts, live investigation and dashboards.",
    rows: [
      { nodes: [{ label: "AKS prod", logo: "kubernetes" }, { label: "AKS remote", logo: "kubernetes" }, { label: "Docker edge", logo: "docker" }] },
      { nodes: [{ label: "Prometheus", sub: "metrics", logo: "prometheus" }, { label: "Loki", sub: "logs", logo: "grafana" }] },
      {
        nodes: [{
          label: "LLM RCA engine",
          sub: "root-cause analysis",
          kind: "hot",
          icon: svg("#4FE3FF", <><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" /><circle cx="12" cy="12" r="3" /></>),
        }],
      },
      { nodes: [{ label: "Alerts", kind: "okn" }, { label: "Live investigation", kind: "okn" }, { label: "Dashboards", logo: "grafana", kind: "okn" }] },
    ],
  },
  {
    tag: "03 — DevSecOps",
    title: "Pipeline hardening across 20+ projects",
    description:
      "Security rolled into the pipeline instead of bolted on after. Every project runs static analysis, image scanning and dynamic testing before a single pod ships — backed by regular penetration testing.",
    wins: [
      { title: "20+ projects", sub: "Every release scanned" },
      { title: "Gated deploys", sub: "A failed scan blocks the release" },
    ],
    tools: projectTools.devsecops,
    diagramLabel: "release gate",
    diagramAlt: "Pipeline: commit, build, SonarQube, Trivy, OWASP ZAP, then a gated deploy.",
    rows: [
      { linked: true, nodes: [{ label: "Commit", logo: "git" }, { label: "Build", logo: "docker" }] },
      { linked: true, nodes: [{ label: "SonarQube", sub: "SAST", logo: "sonarqubeserver", kind: "hot" }, { label: "Trivy", sub: "image scan", logo: "trivy", kind: "hot" }] },
      { nodes: [{ label: "OWASP ZAP", sub: "DAST + pentest", logo: "owasp", kind: "hot" }] },
      { nodes: [{ label: "Deploy", sub: "gated · audited", kind: "okn", icon: svg("#3DF5A6", <path d="M20 6L9 17l-5-5" />, 2.2) }] },
    ],
  },
];

function DiagramNode({ node }: { node: Node }) {
  return (
    <div className={`dn${node.kind ? ` ${node.kind}` : ""}`}>
      {node.logo ? <Logo src={`/logos/${node.logo}.svg`} size={22} /> : node.icon}
      {node.sub ? (
        <span>
          {node.label}
          <small>{node.sub}</small>
        </span>
      ) : (
        node.label
      )}
    </div>
  );
}

export default function Work(): React.JSX.Element {
  return (
    <section className="wrap sec" id="work" style={{ paddingBottom: 40 }}>
      <div className="head">
        <div>
          <span className="kicker scramble">03 / Selected work</span>
          <h2 className="h2 rv">
            Systems, <span className="grad">not screenshots.</span>
          </h2>
        </div>
        <p className="sub rv">Three platforms I architected and shipped — with the traffic flowing through them.</p>
      </div>

      <div className="stack">
        {projects.map((p) => (
          <article key={p.title} className="spot case">
            <div className="cb">
              <span className="cnum">{p.tag.toUpperCase()}</span>
              <h3 className="ct">{p.title}</h3>
              <p className="cd">{p.description}</p>
              <div className="wins">
                {p.wins.map((w) => (
                  <div key={w.title} className="win">
                    <b>{w.title}</b>
                    <span>{w.sub}</span>
                  </div>
                ))}
              </div>
              <Chips tools={p.tools} />
            </div>
            <div className="dia" role="img" aria-label={p.diagramAlt}>
              <span className="dtag">
                <span className="live" />
                {p.diagramLabel}
              </span>
              {p.rows.map((row, i) => (
                <div key={i} style={{ display: "contents" }}>
                  {i > 0 && <div className="vl" />}
                  <div className="drow">
                    {row.nodes.map((n, j) => (
                      <div key={n.label} style={{ display: "contents" }}>
                        {row.linked && j > 0 && <span className="hl" />}
                        <DiagramNode node={n} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
