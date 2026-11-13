export interface Tool {
  logo: string;
  name: string;
}

const t = (logo: string, name: string): Tool => ({ logo: `/logos/${logo}.svg`, name });

export const contact = {
  email: "Hasanjamal4141@gmail.com",
  linkedin: "https://www.linkedin.com/in/hasan-jamal-6b4b34262/",
  whatsapp: "https://wa.me/923014141994",
  phone: "+92 301 4141994",
  resume: "/Hasan-Jamal-Resume.pdf",
};

export const navLinks = [
  { id: "stack", label: "Stack" },
  { id: "capabilities", label: "Capabilities" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

export const marqueeRows: Tool[][] = [
  [
    t("kubernetes", "Kubernetes"), t("docker", "Docker"), t("terraform", "Terraform"), t("aws", "AWS"),
    t("azure", "Azure"), t("argo", "ArgoCD"), t("helm", "Helm"), t("flux", "FluxCD"),
    t("jenkins", "Jenkins"), t("githubactions", "GitHub Actions"), t("gitlab", "GitLab CI"), t("azuredevops", "Azure DevOps"),
    t("ansible", "Ansible"), t("python", "Python"), t("git", "Git"), t("vault", "Vault"),
  ],
  [
    t("prometheus", "Prometheus"), t("grafana", "Grafana"), t("elasticsearch", "Elastic"), t("datadog", "Datadog"),
    t("opentelemetry", "OpenTelemetry"), t("sonarqubeserver", "SonarQube"), t("trivy", "Trivy"), t("owasp", "OWASP ZAP"),
    t("apachekafka", "Kafka"), t("temporal", "Temporal"), t("keycloak", "Keycloak"), t("redis", "Redis"),
    t("nginx", "Nginx"), t("linux", "Linux"), t("redhat", "RHEL"), t("ubuntu", "Ubuntu"),
  ],
];

export const stats = [
  { to: 3.5, decimals: 1, suffix: "+", label: "Years in DevOps & cloud", grad: true },
  { to: 20, decimals: 0, suffix: "+", label: "Projects secured with DevSecOps", grad: false },
  { to: 3, decimals: 0, suffix: "", label: "Companies across 2 countries", grad: false },
  { to: 2, decimals: 0, suffix: "", label: "Clouds in production — AWS & Azure", grad: true },
];

export const capabilityTools = {
  cicd: [t("githubactions", "GitHub Actions"), t("jenkins", "Jenkins"), t("gitlab", "GitLab CI"), t("azuredevops", "Azure Pipelines"), t("ansible", "Ansible"), t("python", "Python")],
  k8s: [t("kubernetes", "Kubernetes"), t("docker", "Docker"), t("argo", "ArgoCD"), t("flux", "FluxCD")],
  obs: [t("prometheus", "Prometheus"), t("grafana", "Grafana"), t("elasticsearch", "ELK"), t("datadog", "Datadog")],
  sec: [t("sonarqubeserver", "SonarQube"), t("trivy", "Trivy"), t("owasp", "OWASP ZAP"), t("vault", "Key Vault")],
  iac: [t("terraform", "Terraform"), t("helm", "Helm"), t("aws", "CloudFormation"), t("git", "Git")],
  linux: [t("redhat", "RHEL"), t("ubuntu", "Ubuntu"), t("linux", "SELinux"), t("nginx", "Nginx")],
};

export interface Role {
  ref: string;
  current?: boolean;
  title: string;
  company: string;
  meta: string;
  tagline: string;
  points: string[];
  tools: Tool[];
}

export const roles: Role[] = [
  {
    ref: "HEAD → main",
    current: true,
    title: "DevOps Engineer",
    company: "TEO International",
    meta: "2025 — Present · Islamabad, Pakistan",
    tagline: "Securing 20+ production delivery pipelines, one scan at a time.",
    points: [
      "Delivered DevSecOps across 20+ projects — SonarQube, Trivy and OWASP ZAP built into the SDLC, backed by regular penetration testing.",
      "Architected an enterprise integration platform on AKS: Apache Camel, Kafka, Temporal, KrakenD and full GitOps delivery.",
      "Locked down secrets with Azure Key Vault across every AKS cluster — GDPR-compliant by design.",
      "Built an AI-powered observability platform with LLM root-cause analysis for real-time triage.",
      "Hardened Nginx reverse proxies with rate limiting, IP allow/deny lists and DDoS mitigation.",
    ],
    tools: [t("azure", "AKS"), t("apachekafka", "Kafka"), t("argo", "ArgoCD"), t("sonarqubeserver", "SonarQube"), t("trivy", "Trivy"), t("nginx", "Nginx")],
  },
  {
    ref: "2024",
    title: "DevOps Engineer",
    company: "Omnivex Corporation",
    meta: "2024 · Vaughan, Canada",
    tagline: "Zero-downtime releases, even on the roughest nights.",
    points: [
      "Led AKS deployments with blue-green releases — zero downtime, clean rollbacks, every time.",
      "Designed complex CI/CD in Azure Pipelines, automating build, test and deploy end to end.",
      "Stood up HA Redis (Sentinel + HAProxy) for fault-tolerant caching under heavy load.",
      "Wired Datadog across metrics, logs and traces for full-stack observability.",
      "Carried on-call, led RCA on production outages and wrote the runbooks and DR plan.",
    ],
    tools: [t("azure", "Azure"), t("azuredevops", "Azure Pipelines"), t("redis", "Redis"), t("datadog", "Datadog"), t("kubernetes", "Kubernetes")],
  },
  {
    ref: "2022 — 2023",
    title: "Linux System Administrator",
    company: "Techsea",
    meta: "2022 — 2023 · Lahore, Pakistan",
    tagline: "Where the Kubernetes instincts were built on bare metal first.",
    points: [
      "Administered enterprise RHEL 7/8 — patching, configuration and updates via YUM/RPM.",
      "Managed LVM, partitioning and RAID; kept Apache, DNS, NFS and FTP production-ready.",
      "Built high availability with Keepalived and automated routine work with shell and cron.",
      "Enforced access control with SUID/SGID discipline and iptables firewall rules.",
    ],
    tools: [t("redhat", "RHEL"), t("linux", "Linux"), t("ubuntu", "Ubuntu")],
  },
];

export const projectTools = {
  integration: [t("azure", "AKS"), t("apachekafka", "Kafka"), t("temporal", "Temporal"), t("keycloak", "Keycloak"), t("helm", "Helm"), t("argo", "ArgoCD")],
  observability: [t("kubernetes", "Kubernetes"), t("docker", "Docker"), t("prometheus", "Prometheus"), t("grafana", "Grafana"), t("opentelemetry", "OpenTelemetry")],
  devsecops: [t("sonarqubeserver", "SonarQube"), t("trivy", "Trivy"), t("owasp", "OWASP ZAP"), t("linux", "Nmap")],
};
