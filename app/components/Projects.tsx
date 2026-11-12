interface Project {
  id: number;
  tag: string;
  title: string;
  description: string;
  stack: string[];
  diagram: React.JSX.Element;
}

function Node({
  x,
  y,
  w,
  h,
  label,
  sub,
  accent = false,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sub?: string;
  accent?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={10}
        className={accent ? "fill-purple-600/30 stroke-purple-400" : "fill-white/5 stroke-white/20"}
        strokeWidth={1}
      />
      <text
        x={x + w / 2}
        y={y + h / 2 + (sub ? -3 : 4)}
        textAnchor="middle"
        className="fill-white"
        style={{ fontSize: 11, fontWeight: 600 }}
      >
        {label}
      </text>
      {sub && (
        <text
          x={x + w / 2}
          y={y + h / 2 + 12}
          textAnchor="middle"
          className="fill-white/50"
          style={{ fontSize: 9 }}
        >
          {sub}
        </text>
      )}
    </g>
  );
}

function Arrow({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      className="stroke-purple-400/60"
      strokeWidth={1.5}
      markerEnd="url(#arrowhead)"
    />
  );
}

function DiagramDefs() {
  return (
    <defs>
      <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L6,3 L0,6 Z" className="fill-purple-400/60" />
      </marker>
    </defs>
  );
}

function IntegrationDiagram() {
  return (
    <svg viewBox="0 0 520 340" className="w-full h-full">
      <DiagramDefs />
      <rect x={10} y={10} width={500} height={320} rx={14} className="fill-none stroke-purple-500/30" strokeDasharray="4 4" />
      <text x={30} y={32} className="fill-purple-300" style={{ fontSize: 10, fontWeight: 600, letterSpacing: 1 }}>
        AZURE KUBERNETES SERVICE (AKS)
      </text>

      <Node x={30} y={60} w={120} h={40} label="Clients" />
      <Node x={210} y={60} w={140} h={44} label="KrakenD" sub="API Gateway · JWT" accent />
      <Node x={210} y={130} w={140} h={44} label="Apache Camel" sub="REST · SOAP · SFTP" />
      <Node x={30} y={220} w={150} h={44} label="Kafka (Strimzi)" sub="Event Streaming" accent />
      <Node x={210} y={220} w={140} h={44} label="Temporal" sub="Workflow Engine" accent />
      <Node x={400} y={130} w={110} h={44} label="Keycloak" sub="Auth / RBAC" />
      <Node x={370} y={220} w={140} h={44} label="Key Vault" sub="Secrets" />
      <Node x={210} y={285} w={140} h={32} label="ArgoCD · GitOps" />

      <Arrow x1={150} y1={80} x2={208} y2={82} />
      <Arrow x1={280} y1={104} x2={280} y2={128} />
      <Arrow x1={210} y1={152} x2={180} y2={220} />
      <Arrow x1={280} y1={174} x2={280} y2={218} />
      <Arrow x1={350} y1={152} x2={400} y2={150} />
      <Arrow x1={350} y1={168} x2={375} y2={218} />
      <Arrow x1={280} y1={264} x2={280} y2={283} />
    </svg>
  );
}

function ObservabilityDiagram() {
  return (
    <svg viewBox="0 0 520 340" className="w-full h-full">
      <DiagramDefs />
      <Node x={20} y={40} w={130} h={40} label="AKS Cluster A" sub="prod" />
      <Node x={20} y={100} w={130} h={40} label="AKS Cluster B" sub="remote" />
      <Node x={20} y={160} w={130} h={40} label="Docker Hosts" sub="edge" />

      <Node x={200} y={100} w={130} h={44} label="Prometheus" sub="+ Loki logs" accent />
      <Node x={200} y={170} w={130} h={40} label="Metrics / Logs" sub="Collector Agents" />

      <Node x={380} y={120} w={130} h={56} label="LLM RCA Engine" sub="Root Cause Analysis" accent />

      <Node x={200} y={250} w={130} h={40} label="Auto Diagnostics" />
      <Node x={380} y={220} w={130} h={44} label="Live Investigation" sub="Real-time workflow" />
      <Node x={380} y={280} w={130} h={36} label="Alerts & Dashboard" />

      <Arrow x1={150} y1={60} x2={198} y2={115} />
      <Arrow x1={150} y1={120} x2={198} y2={122} />
      <Arrow x1={150} y1={180} x2={198} y2={185} />
      <Arrow x1={330} y1={122} x2={378} y2={140} />
      <Arrow x1={330} y1={190} x2={378} y2={165} />
      <Arrow x1={265} y1={144} x2={265} y2={248} />
      <Arrow x1={330} y1={260} x2={378} y2={240} />
      <Arrow x1={445} y1={176} x2={445} y2={218} />
      <Arrow x1={445} y1={264} x2={445} y2={278} />
    </svg>
  );
}

function DevSecOpsDiagram() {
  const stages = [
    { label: "Git Commit", sub: "trigger" },
    { label: "Build", sub: "compile & package" },
    { label: "SonarQube", sub: "SAST" },
    { label: "Trivy", sub: "image scan" },
    { label: "OWASP ZAP", sub: "DAST + pentest" },
  ];
  const w = 90;
  const gap = 12;
  return (
    <svg viewBox="0 0 520 260" className="w-full h-full">
      <DiagramDefs />
      {stages.map((s, i) => (
        <Node key={s.label} x={20 + i * (w + gap)} y={90} w={w} h={56} label={s.label} sub={s.sub} accent={i >= 2} />
      ))}
      {stages.slice(0, -1).map((_, i) => (
        <Arrow
          key={i}
          x1={20 + i * (w + gap) + w}
          y1={118}
          x2={20 + (i + 1) * (w + gap)}
          y2={118}
        />
      ))}
      <Arrow x1={20 + 4 * (w + gap) + w / 2} y1={146} x2={20 + 4 * (w + gap) + w / 2} y2={185} />
      <Node x={20 + 4 * (w + gap) + w / 2 - 70} y={185} w={140} h={48} label="Deploy — gated" sub="auditable release" accent />
      <text x={260} y={40} textAnchor="middle" className="fill-purple-300" style={{ fontSize: 10, fontWeight: 600, letterSpacing: 1 }}>
        20+ PROJECTS · EVERY RELEASE SCANNED
      </text>
    </svg>
  );
}

const featuredProjects: Project[] = [
  {
    id: 1,
    tag: "Featured Project",
    title: "Enterprise Cloud-Native Integration Platform",
    description:
      "Architected and shipped a secure, scalable, tenant-aware integration platform on Azure Kubernetes Service. KrakenD fronts the traffic with JWT auth, rate limiting, and centralized routing; Apache Camel orchestrates REST, SOAP, SFTP, and database connectors; Kafka (Strimzi) and Temporal handle event-driven, fault-tolerant workflows across tenant-isolated topics. GitOps-driven delivery through Azure DevOps and Helm, with Keycloak, Key Vault, cert-manager, and Kyverno enforcing security end to end.",
    stack: ["Azure AKS", "Kafka/Strimzi", "Temporal", "KrakenD", "Apache Camel", "Keycloak", "GitOps"],
    diagram: <IntegrationDiagram />,
  },
  {
    id: 2,
    tag: "Featured Project",
    title: "AI-Powered Kubernetes Observability Platform",
    description:
      "Designed and built an AI-powered observability and troubleshooting platform for Kubernetes and Docker environments. Automated diagnostics across multi-cluster and remote infrastructure, with LLM-based root cause analysis that turns a wall of logs into an answer — and real-time investigation workflows that cut incident triage from hours to minutes.",
    stack: ["Kubernetes", "Docker", "Prometheus", "Grafana", "LLM/RCA", "Multi-cluster"],
    diagram: <ObservabilityDiagram />,
  },
  {
    id: 3,
    tag: "Featured Project",
    title: "DevSecOps Pipeline Hardening",
    description:
      "Rolled security into the pipeline instead of bolting it on after. Every one of 20+ projects runs through SonarQube static analysis, Trivy container scanning, and OWASP ZAP dynamic testing before a single pod ships — backed by regular penetration testing, reconnaissance (Nmap), and infrastructure hardening practice.",
    stack: ["SonarQube", "Trivy", "OWASP ZAP", "Nmap", "Nikto", "ffuf"],
    diagram: <DevSecOpsDiagram />,
  },
];

export default function Projects(): React.JSX.Element {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <div key={project.id} className="mb-20 last:mb-0">
              <div
                className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  isEven ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Text Content */}
                <div className={`${isEven ? "lg:col-start-2" : ""}`}>
                  <p className="text-purple-400 text-lg lg:text-xl mb-2 font-medium">
                    {project.tag}
                  </p>
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                    {project.title}
                  </h3>
                  {/* Description Card */}
                  <div className="relative z-10 mb-6">
                    <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10 shadow-lg">
                      <p className="text-white/90 text-base lg:text-lg leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full px-2.5 py-1"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Diagram Content */}
                <div className={`${isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 p-4 lg:p-6 shadow-2xl border border-white/5">
                    {project.diagram}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
