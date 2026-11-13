export interface Tool {
  logo?: string;
  name: string;
}

const t = (logo: string | null, name: string): Tool => ({ logo: logo ? `/logos/${logo}.svg` : undefined, name });

export const contact = {
  email: "Hasanjamal4141@gmail.com",
  linkedin: "https://www.linkedin.com/in/hasan-jamal-6b4b34262/",
  whatsapp: "https://wa.me/923014141994",
  phone: "+92 301 4141994",
  location: "Islamabad, Pakistan",
  resume: "/Hasan-Jamal-Resume.pdf",
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const marqueeRows: Tool[][] = [
  [
    t("kubernetes", "Kubernetes"), t("docker", "Docker"), t("terraform", "Terraform"), t("aws", "AWS"),
    t("azure", "Azure"), t("argo", "ArgoCD"), t("flux", "FluxCD"), t("helm", "Helm"),
    t("githubactions", "GitHub Actions"), t("gitlab", "GitLab CI"), t("jenkins", "Jenkins"), t("azuredevops", "Azure DevOps"),
    t("ansible", "Ansible"), t("python", "Python"), t("gnubash", "Bash"), t("proxmox", "Proxmox"), t("hetzner", "Hetzner"),
  ],
  [
    t("prometheus", "Prometheus"), t("grafana", "Grafana"), t("opentelemetry", "OpenTelemetry"), t("elasticsearch", "Elasticsearch"),
    t("kibana", "Kibana"), t("logstash", "Logstash"), t("datadog", "Datadog"), t("sonarqubeserver", "SonarQube"),
    t("trivy", "Trivy"), t("owasp", "OWASP ZAP"), t("apachekafka", "Kafka"), t("temporal", "Temporal"),
    t("keycloak", "Keycloak"), t("redis", "Redis"), t("nginx", "Nginx"), t("traefikproxy", "Traefik"), t("haproxy", "HAProxy"),
  ],
];

export const facts = [
  { to: 3.5, decimals: 1, suffix: "+", label: "Years of experience" },
  { to: 20, decimals: 0, suffix: "+", label: "Projects secured with DevSecOps" },
  { to: 3, decimals: 0, suffix: "", label: "Companies in 2 countries" },
  { to: 90, decimals: 0, suffix: "+", label: "Tools and technologies" },
];

export const focusAreas = [
  "Kubernetes platforms on AKS and EKS",
  "GitOps delivery with ArgoCD and FluxCD",
  "DevSecOps and offensive security testing",
  "Observability, incident response and RCA",
  "Infrastructure as Code and high availability",
];

export interface Stage {
  name: string;
  desc: string;
  tools: Tool[];
}

export const lifecycle: Stage[] = [
  { name: "Plan", desc: "Branching strategy and reviews", tools: [t("git", "Git"), t("github", "GitHub")] },
  { name: "Code", desc: "Infrastructure defined as code", tools: [t("terraform", "Terraform"), t("helm", "Helm")] },
  { name: "Build", desc: "Multi-stage container builds", tools: [t("docker", "Docker"), t("githubactions", "Actions")] },
  { name: "Test", desc: "Static analysis and quality gates", tools: [t("sonarqubeserver", "SonarQube"), t("jenkins", "Jenkins")] },
  { name: "Secure", desc: "Image scans and DAST before release", tools: [t("trivy", "Trivy"), t("owasp", "OWASP ZAP")] },
  { name: "Release", desc: "Approval gates and auditable releases", tools: [t("azuredevops", "Azure DevOps"), t("gitlab", "GitLab CI")] },
  { name: "Deploy", desc: "GitOps sync, blue-green rollouts", tools: [t("argo", "ArgoCD"), t("flux", "FluxCD")] },
  { name: "Operate", desc: "Clusters, secrets and policy", tools: [t("kubernetes", "Kubernetes"), t("vault", "Key Vault")] },
  { name: "Monitor", desc: "Metrics, logs, traces and alerts", tools: [t("prometheus", "Prometheus"), t("grafana", "Grafana")] },
];

export const capabilityTools = {
  cicd: [t("githubactions", "GitHub Actions"), t("jenkins", "Jenkins"), t("gitlab", "GitLab CI"), t("azuredevops", "Azure Pipelines"), t("ansible", "Ansible"), t("python", "Python")],
  cloud: [t(null, "AKS"), t(null, "EKS"), t(null, "EC2"), t(null, "Lambda"), t(null, "S3"), t(null, "Route 53")],
  k8s: [t("kubernetes", "Kubernetes"), t("docker", "Docker"), t("argo", "ArgoCD"), t("flux", "FluxCD")],
  obs: [t("prometheus", "Prometheus"), t("grafana", "Grafana"), t("elasticsearch", "ELK"), t("datadog", "Datadog")],
  sec: [t("sonarqubeserver", "SonarQube"), t("trivy", "Trivy"), t("owasp", "OWASP ZAP"), t("keycloak", "Keycloak")],
  iac: [t("terraform", "Terraform"), t("helm", "Helm"), t("aws", "CloudFormation"), t("ansible", "Ansible")],
  linux: [t("redhat", "RHEL"), t("centos", "CentOS"), t("ubuntu", "Ubuntu"), t("gnubash", "Bash")],
};

export interface StackGroup {
  title: string;
  tools: Tool[];
}

export const stackGroups: StackGroup[] = [
  {
    title: "Microsoft Azure",
    tools: [t("azure", "AKS"), t("azuredevops", "Azure DevOps"), t("azure", "Azure Functions"), t("azure", "Container Apps"), t("azure", "App Service"), t("azure", "Azure VMs"), t("vault", "Key Vault"), t("azure", "Blob Storage")],
  },
  {
    title: "AWS and other clouds",
    tools: [t("aws", "EKS"), t("aws", "EC2"), t("aws", "Lambda"), t("aws", "S3"), t("aws", "ECR"), t("aws", "IAM"), t("aws", "VPC"), t("aws", "Route 53"), t("aws", "CloudTrail"), t("hetzner", "Hetzner")],
  },
  {
    title: "Containers and orchestration",
    tools: [t("kubernetes", "Kubernetes"), t("docker", "Docker"), t("helm", "Helm"), t("kubernetes", "Kind"), t("docker", "Docker Hub"), t("proxmox", "Proxmox")],
  },
  {
    title: "CI/CD and GitOps",
    tools: [t("githubactions", "GitHub Actions"), t("gitlab", "GitLab CI"), t("jenkins", "Jenkins"), t("azuredevops", "Azure Pipelines"), t("aws", "CodeBuild"), t("aws", "CodeCommit"), t("argo", "ArgoCD"), t("flux", "FluxCD")],
  },
  {
    title: "IaC and automation",
    tools: [t("terraform", "Terraform"), t("aws", "CloudFormation"), t("ansible", "Ansible"), t("python", "Python"), t("gnubash", "Bash"), t("git", "Git")],
  },
  {
    title: "Observability",
    tools: [t("prometheus", "Prometheus"), t("grafana", "Grafana"), t("grafana", "Loki"), t("opentelemetry", "OpenTelemetry"), t("elasticsearch", "Elasticsearch"), t("logstash", "Logstash"), t("kibana", "Kibana"), t("datadog", "Datadog"), t("aws", "CloudWatch")],
  },
  {
    title: "DevSecOps and compliance",
    tools: [t("sonarqubeserver", "SonarQube"), t("trivy", "Trivy"), t(null, "Kyverno"), t(null, "cert-manager"), t("letsencrypt", "SSL/TLS"), t("keycloak", "Keycloak"), t(null, "IAM policies"), t(null, "Security Groups"), t(null, "Network ACLs")],
  },
  {
    title: "Offensive security",
    tools: [t("owasp", "OWASP ZAP"), t(null, "Nmap"), t(null, "Nikto"), t(null, "ffuf"), t(null, "DirBuster"), t(null, "Reconnaissance"), t(null, "Service enumeration")],
  },
  {
    title: "Networking and traffic",
    tools: [t("nginx", "Nginx"), t("traefikproxy", "Traefik"), t("haproxy", "HAProxy"), t(null, "KrakenD"), t(null, "Keepalived"), t(null, "iptables"), t(null, "UFW"), t(null, "DNS")],
  },
  {
    title: "Messaging and workflows",
    tools: [t("apachekafka", "Kafka (Strimzi)"), t("temporal", "Temporal"), t(null, "Apache Camel"), t(null, "CloudEvents"), t("redis", "Redis Sentinel")],
  },
  {
    title: "Linux administration",
    tools: [t("redhat", "RHEL 7/8"), t("centos", "CentOS"), t("ubuntu", "Ubuntu"), t("linux", "SELinux"), t("apache", "Apache"), t(null, "NFS"), t(null, "Samba"), t(null, "FTP")],
  },
  {
    title: "Storage, backup and tuning",
    tools: [t(null, "LVM"), t(null, "RAID"), t(null, "ext4 / xfs"), t(null, "rsync"), t(null, "Snapshots"), t(null, "tcpdump"), t(null, "iostat")],
  },
];

export interface Role {
  ref: string;
  current?: boolean;
  title: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  points: string[];
  tools: Tool[];
}

export const roles: Role[] = [
  {
    ref: "HEAD -> main",
    current: true,
    title: "DevOps Engineer",
    company: "TEO International",
    period: "2025 - Present",
    location: "Islamabad, Pakistan",
    summary: "Platform, delivery and security engineering across 20+ client projects.",
    points: [
      "Delivered DevSecOps across 20+ projects, integrating SonarQube, Trivy, OWASP ZAP and regular penetration testing into the development lifecycle.",
      "Designed and built an enterprise cloud-native integration platform on AKS with Apache Camel, Kafka, Temporal, KrakenD, GitOps and Azure DevOps delivery.",
      "Implemented CI/CD for multi-tier microservices using Azure Pipelines and ArgoCD.",
      "Secured sensitive data on Kubernetes by integrating AKS clusters with Azure Key Vault, enforcing GDPR and data protection standards.",
      "Built an AI-powered observability platform for Kubernetes and Docker with automated diagnostics and LLM-based root cause analysis.",
      "Configured Nginx as a reverse proxy with rate limiting, DDoS mitigation and IP allow and deny lists.",
      "Rolled out GitFlow and trunk-based branching strategies across 20+ projects.",
      "Architected self-hosted infrastructure on Proxmox with Docker, and full-scale logging with the ELK Stack.",
    ],
    tools: [t("azure", "AKS"), t("apachekafka", "Kafka"), t("argo", "ArgoCD"), t("sonarqubeserver", "SonarQube"), t("trivy", "Trivy"), t("nginx", "Nginx"), t("proxmox", "Proxmox"), t("elasticsearch", "ELK")],
  },
  {
    ref: "v2024",
    title: "DevOps Engineer",
    company: "Omnivex Corporation",
    period: "2024",
    location: "Vaughan, Canada",
    summary: "Azure delivery, high availability and production on-call.",
    points: [
      "Led AKS deployments with blue-green strategies and versioning for zero-downtime releases and clean rollbacks.",
      "Designed and orchestrated CI/CD in Azure Pipelines, automating build, test and deployment workflows.",
      "Deployed high-availability Redis clusters with Redis Sentinel and HAProxy for fault-tolerant caching and session management.",
      "Implemented Datadog monitoring across metrics, logs, traces and alerts for all Azure resources.",
      "Managed the full lifecycle of cloud-native applications on Azure, including provisioning, scaling, hardening and cost optimization.",
      "Joined the on-call rotation, leading incident response and RCA for production AKS outages.",
      "Wrote runbooks and a DR plan for Redis and AKS services, including tested Sentinel failover.",
    ],
    tools: [t("azure", "Azure"), t("azuredevops", "Azure Pipelines"), t("kubernetes", "AKS"), t("redis", "Redis"), t("haproxy", "HAProxy"), t("datadog", "Datadog")],
  },
  {
    ref: "v2023",
    title: "Linux System Administrator",
    company: "Techsea",
    period: "2023 - 2024",
    location: "Lahore, Pakistan",
    summary: "Enterprise Linux operations, storage, networking and high availability.",
    points: [
      "Administered enterprise RHEL 7/8 systems, managing configuration, security patches and updates with YUM and RPM.",
      "Implemented storage with LVM, partitioning and RAID, and ran Apache, DNS, NFS and FTP services in production.",
      "Established backup and recovery procedures using rsync and tape backups.",
      "Monitored and tuned performance with top, htop, iostat, netstat, pidstat and custom scripts.",
      "Configured Keepalived for high availability and automated routine tasks with cron and shell scripts.",
      "Managed access with advanced permissions (SUID, SGID, sticky bits) and network rules with iptables.",
    ],
    tools: [t("redhat", "RHEL"), t("centos", "CentOS"), t("linux", "Linux"), t("apache", "Apache"), t("gnubash", "Bash")],
  },
];

export const projectTools = {
  integration: [t("azure", "AKS"), t("apachekafka", "Kafka"), t("temporal", "Temporal"), t("keycloak", "Keycloak"), t("helm", "Helm"), t("opentelemetry", "OpenTelemetry"), t("prometheus", "Prometheus"), t("grafana", "Grafana")],
  observability: [t("kubernetes", "Kubernetes"), t("docker", "Docker"), t("prometheus", "Prometheus"), t("grafana", "Grafana"), t("opentelemetry", "OpenTelemetry")],
  devsecops: [t("sonarqubeserver", "SonarQube"), t("trivy", "Trivy"), t("owasp", "OWASP ZAP"), t(null, "Nmap"), t(null, "Nikto"), t(null, "ffuf")],
};

export interface MiniProject {
  title: string;
  desc: string;
  tools: Tool[];
}

export const moreProjects: MiniProject[] = [
  {
    title: "Zero-downtime releases on AKS",
    desc: "Blue-green deployments with versioning, giving production releases instant rollback and no user-facing downtime.",
    tools: [t("azure", "AKS"), t("azuredevops", "Azure Pipelines"), t("helm", "Helm")],
  },
  {
    title: "Highly available Redis with DR",
    desc: "Redis Sentinel behind HAProxy for fault-tolerant caching and sessions, with runbooks and a tested failover plan.",
    tools: [t("redis", "Redis"), t("haproxy", "HAProxy"), t("datadog", "Datadog")],
  },
  {
    title: "Self-hosted virtualization platform",
    desc: "Proxmox for virtualization and VM management combined with Docker for containerized internal environments.",
    tools: [t("proxmox", "Proxmox"), t("docker", "Docker"), t("ubuntu", "Ubuntu")],
  },
  {
    title: "Centralized logging with ELK",
    desc: "Full-scale log collection, search and dashboards across environments using Elasticsearch, Logstash and Kibana.",
    tools: [t("elasticsearch", "Elasticsearch"), t("logstash", "Logstash"), t("kibana", "Kibana")],
  },
  {
    title: "Edge hardening with Nginx",
    desc: "Reverse proxy with rate limiting, DDoS mitigation, TLS management and IP allow and deny lists in front of every service.",
    tools: [t("nginx", "Nginx"), t("letsencrypt", "TLS"), t("traefikproxy", "Traefik")],
  },
  {
    title: "Branching strategy at scale",
    desc: "GitFlow and trunk-based development rolled out across 20+ projects, aligned with CI gates and release flow.",
    tools: [t("git", "Git"), t("github", "GitHub"), t("gitlab", "GitLab")],
  },
];

export const principles = [
  { title: "Everything as code", desc: "Infrastructure, pipelines and policy live in Git, reviewed and reproducible." },
  { title: "Security from the first commit", desc: "Scanning, secrets management and policy enforcement are part of every pipeline." },
  { title: "Observable by default", desc: "Metrics, logs and traces ship with the service, not after the first incident." },
  { title: "Automate the repeatable", desc: "If a task runs twice, it becomes a script, a pipeline step or a playbook." },
  { title: "Documented for operators", desc: "Runbooks, DR plans and clear RCAs so on-call engineers can act with confidence." },
  { title: "Design for failure", desc: "Redundancy, health checks and tested failover instead of hoping nothing breaks." },
];

export const education = {
  degree: "BS Computer Science",
  school: "University of Agriculture, Faisalabad",
  period: "2016 - 2020",
};
