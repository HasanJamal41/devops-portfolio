interface Role {
  id: number;
  company: string;
  title: string;
  location: string;
  period: string;
  tagline: string;
  highlights: string[];
}

const roles: Role[] = [
  {
    id: 1,
    company: "TEO International",
    title: "DevOps Engineer",
    location: "Islamabad, Pakistan",
    period: "2025 — Present",
    tagline: "Securing 20+ production delivery pipelines, one scan at a time.",
    highlights: [
      "Delivered DevSecOps across 20+ projects — SonarQube, Trivy, and OWASP ZAP baked into the SDLC, backed by regular penetration testing.",
      "Architected an enterprise cloud-native Integration Platform on AKS: Apache Camel, Kafka, Temporal, KrakenD API Gateway, and full GitOps delivery.",
      "Locked down secrets and sensitive data with Azure Key Vault across every AKS cluster, enforcing GDPR compliance by design.",
      "Built an AI-powered observability platform for Kubernetes and Docker — automated diagnostics and LLM-based root cause analysis for real-time incident triage.",
      "Configured Nginx as a hardened reverse proxy — rate limiting, IP allow/deny lists, and DDoS mitigation on every edge.",
    ],
  },
  {
    id: 2,
    company: "Omnivex Corporation",
    title: "DevOps Engineer",
    location: "Vaughan, Canada",
    period: "2024",
    tagline: "Zero-downtime releases, even on the roughest nights.",
    highlights: [
      "Led Azure AKS deployments with blue-green strategies and versioning — zero-downtime releases, clean rollbacks, every time.",
      "Designed complex CI/CD pipelines in Azure Pipelines, automating build, test, and deploy end to end.",
      "Stood up HA Redis clusters (Sentinel + HAProxy) for fault-tolerant caching and session management under heavy load.",
      "Wired up Datadog across metrics, logs, and traces for full-stack observability on every Azure resource.",
      "Carried on-call rotation, led RCA on production AKS outages, and wrote the runbooks and DR plan so the next page is boring.",
    ],
  },
  {
    id: 3,
    company: "Techsea",
    title: "Linux System Administrator",
    location: "Lahore, Pakistan",
    period: "2022 — 2023",
    tagline: "Where the Kubernetes instincts were built on bare metal first.",
    highlights: [
      "Administered enterprise RHEL 7/8 systems — patching, configuration, and updates via YUM/RPM.",
      "Managed storage with LVM, partitioning, and RAID; kept Apache, DNS, NFS, and FTP services production-ready.",
      "Built high availability with Keepalived and automated routine administration with cron and shell scripting.",
      "Enforced access control with SUID/SGID/sticky-bit discipline and iptables firewall rules.",
    ],
  },
];

export default function Timeline(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <p className="text-purple-400 text-center text-lg font-medium mb-3">
          3.5+ Years in the Trenches
        </p>
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-16 text-center">
          Professional Experience
        </h2>

        <div className="relative">
          <div className="absolute left-[11px] md:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-purple-600/60 via-purple-700/40 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {roles.map((role, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={role.id}
                  className={`relative pl-10 md:pl-0 md:grid md:grid-cols-2 md:gap-10 ${
                    isEven ? "" : ""
                  }`}
                >
                  <span className="absolute left-0 md:left-1/2 top-1.5 md:-translate-x-1/2 w-6 h-6 rounded-full bg-[#110720] border-2 border-purple-500 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-purple-400" />
                  </span>

                  <div className={`${isEven ? "md:col-start-2" : "md:col-start-1 md:text-right"}`}>
                    {!isEven && <div className="hidden md:block" />}
                  </div>

                  <div
                    className={`${
                      isEven ? "md:col-start-2" : "md:col-start-1 md:row-start-1"
                    } bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900 transition-shadow`}
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <h3 className="text-xl font-semibold text-white">
                        {role.title}
                      </h3>
                      <span className="text-xs font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full px-2.5 py-1 whitespace-nowrap">
                        {role.period}
                      </span>
                    </div>
                    <p className="text-purple-400 font-medium mb-1">
                      {role.company} · <span className="text-white/50 font-normal">{role.location}</span>
                    </p>
                    <p className="text-white/80 italic text-sm mb-4">
                      &ldquo;{role.tagline}&rdquo;
                    </p>
                    <ul className="space-y-2">
                      {role.highlights.map((point) => (
                        <li key={point} className="text-white/70 text-sm leading-relaxed flex gap-2">
                          <span className="text-purple-400 mt-1">▸</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
