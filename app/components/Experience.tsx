interface SkillCard {
  id: number;
  title: string;
  description: string;
  tags: string[];
  icon: React.JSX.Element;
}

const iconProps = {
  className: "w-9 h-9 text-purple-400",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

const skillCards: SkillCard[] = [
  {
    id: 1,
    title: "CI/CD & Automation",
    description:
      "Pipelines that ship on their own schedule, not on hope. Build, test, and release automated end to end.",
    tags: ["Jenkins", "GitHub Actions", "GitLab CI/CD", "Azure Pipelines", "Ansible", "Python"],
    icon: (
      <svg {...iconProps}>
        <path d="M13 3l-4 9h4l-1 9 7-11h-4l2-7z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Multi-Cloud (AWS + Azure)",
    description:
      "Comfortable in both clouds — provisioning, scaling, and securing workloads wherever the workload lives.",
    tags: ["AKS", "EKS", "EC2", "Lambda", "VPC", "IAM", "Key Vault"],
    icon: (
      <svg {...iconProps}>
        <path d="M6.5 19a4.5 4.5 0 01-.5-8.98A6 6 0 0117.5 9h.5a4 4 0 010 8h-11z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Infrastructure as Code",
    description:
      "Infrastructure that's versioned, reviewed, and reproducible — never a hand-clicked snowflake.",
    tags: ["Terraform", "CloudFormation", "Helm", "Multi-Tenant Architecture"],
    icon: (
      <svg {...iconProps}>
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18M3 9v10a2 2 0 002 2h4M21 9v10a2 2 0 01-2 2h-4" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Containers & Orchestration",
    description:
      "Kubernetes clusters managed like production, not like a demo — GitOps-driven and self-healing.",
    tags: ["Docker", "Kubernetes", "ArgoCD", "FluxCD", "Kind"],
    icon: (
      <svg {...iconProps}>
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <path d="M3.27 6.96L12 12l8.73-5.04M12 22.08V12" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Observability & Security",
    description:
      "If it's running in production, it's being watched, scanned, and stress-tested — before attackers get the chance.",
    tags: ["Prometheus", "Grafana", "ELK", "SonarQube", "Trivy", "OWASP ZAP", "Nmap"],
    icon: (
      <svg {...iconProps}>
        <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Linux & Systems",
    description:
      "Production-grade Linux administration, from storage and networking to hardening and high availability.",
    tags: ["RHEL/CentOS/Ubuntu", "LVM/RAID", "SELinux", "Keepalived", "iptables"],
    icon: (
      <svg {...iconProps}>
        <path d="M4 17l6-6-6-6M12 19h8" />
      </svg>
    ),
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <p className="text-purple-400 text-center text-lg font-medium mb-3">
          What I Bring to the Table
        </p>
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Core Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900 transition-shadow"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-white/70 text-sm mb-4">{card.description}</p>
              <div className="flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
