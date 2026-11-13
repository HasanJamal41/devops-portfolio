// Corrected, complete résumé content. The /resume page renders it and the
// downloadable PDF in /public is printed from that page, so both always match.

export const summary =
  "DevOps Engineer with 3.5+ years of experience in cloud infrastructure, platform reliability and secure software delivery across multi-cloud environments (AWS and Azure). Experienced in operating Kubernetes-based platforms, implementing GitOps workflows with ArgoCD and FluxCD, and building automated CI/CD pipelines with GitHub Actions, GitLab CI and Jenkins. Skilled in Infrastructure as Code, cloud security and high-availability architecture, managing distributed systems and production-grade Linux environments. Also experienced in offensive security and DevSecOps testing, including reconnaissance and service enumeration (Nmap), web application attacks, automated vulnerability scanning (OWASP ZAP, Nikto, ffuf) and infrastructure hardening.";

export const skills: { group: string; items: string }[] = [
  {
    group: "CI/CD and automation",
    items:
      "Jenkins, Azure DevOps Pipelines, GitHub Actions, GitLab CI/CD, AWS CodeCommit, AWS CodeBuild, ArgoCD, FluxCD, Ansible (playbooks), Terraform, Git, GitHub, Python, Bash",
  },
  {
    group: "Cloud (Azure and AWS)",
    items:
      "AKS, Azure DevOps, Azure Functions, Container Apps, Azure VMs, Azure Key Vault, App Service, Blob Storage, EC2, EKS, Lambda, S3, ECR, IAM, VPC, Route 53, CloudTrail, Security Groups, policy enforcement, Hetzner",
  },
  {
    group: "Infrastructure as Code and architecture",
    items:
      "Terraform, CloudFormation, Helm, Nginx (reverse proxy and load balancing), Apache Kafka (Strimzi), Temporal, multi-tenant architecture",
  },
  {
    group: "Containers and orchestration",
    items:
      "Docker (multi-stage builds), Kubernetes cluster management, Azure AKS, AWS EKS, Kind, container registries (Docker Hub, AWS ECR), Proxmox",
  },
  {
    group: "Monitoring and observability",
    items: "Prometheus, Grafana, Loki, OpenTelemetry, ELK Stack (Elasticsearch, Logstash, Kibana), Datadog, CloudWatch, CloudTrail logging",
  },
  {
    group: "Security and DevSecOps",
    items:
      "SonarQube, Trivy, OWASP ZAP, Nikto, ffuf, DirBuster, Nmap (reconnaissance and service identification), SSL/TLS management, Keycloak, Kyverno, Traefik, IAM policies, Security Groups and Network ACLs, SELinux hardening, UFW and iptables",
  },
  {
    group: "Linux administration",
    items:
      "RHEL 7/8, CentOS, Ubuntu; user, group and process management; LVM, partitioning, RAID, ext4 and xfs; Apache, DNS, NFS, FTP, Samba; firewalls, TCP Wrappers, advanced permissions; rsync, tape backups, snapshot management; top, iostat, netstat, tcpdump; YUM, RPM, apt; Keepalived and load balancing; IP configuration and routing",
  },
];

export interface ResumeRole {
  company: string;
  location: string;
  title: string;
  period: string;
  points: string[];
}

export const experience: ResumeRole[] = [
  {
    company: "TEO International",
    location: "Islamabad, Pakistan",
    title: "DevOps Engineer",
    period: "2025 - Present",
    points: [
      "Delivered DevSecOps solutions across 20+ projects with diverse tech stacks, integrating SonarQube for static code analysis, Trivy for container image scanning, OWASP ZAP for vulnerability assessment and regular penetration testing to secure the development lifecycle.",
      "Designed and implemented an enterprise cloud-native integration platform on Azure Kubernetes Service (AKS) featuring Apache Camel, Kafka, Temporal, KrakenD API Gateway, GitOps, enterprise observability and automated Azure DevOps delivery pipelines (see Key Project).",
      "Enforced GDPR compliance and data protection standards for sensitive information.",
      "Secured sensitive data on Kubernetes clusters by integrating AKS with Azure Key Vault.",
      "Implemented CI/CD for multi-tier microservice architectures using Azure Pipelines and ArgoCD.",
      "Configured Nginx as a reverse proxy to route traffic efficiently, enforce security controls, apply rate limiting for DDoS mitigation and manage IP allow and deny lists.",
      "Designed and built an AI-powered observability and troubleshooting platform for Kubernetes and Docker environments with automated diagnostics, multi-cluster and remote infrastructure support, LLM-based root cause analysis and real-time investigation workflows.",
      "Implemented Git branching strategies, including GitFlow and trunk-based development, across 20+ projects.",
      "Architected self-hosted infrastructure using Proxmox for virtualization and VM management, combined with Docker for containerized environments.",
      "Implemented full-scale monitoring and logging with the ELK Stack.",
    ],
  },
  {
    company: "Omnivex Corporation",
    location: "Vaughan, Canada",
    title: "DevOps Engineer",
    period: "2024",
    points: [
      "Led Azure deployments on AKS clusters, implementing blue-green deployment strategies with versioning to achieve zero-downtime releases and seamless rollbacks in production.",
      "Designed and orchestrated complex CI/CD pipelines in Azure Pipelines, automating build, test and deployment workflows.",
      "Deployed high-availability Redis clusters with Redis Sentinel and HAProxy as part of the core product infrastructure, providing fault-tolerant caching, session management and better performance under high load.",
      "Implemented comprehensive monitoring and observability with Datadog, integrating metrics, logs, traces and alerts across Azure resources.",
      "Managed the full lifecycle of cloud-native applications on Azure, including resource provisioning, scaling, security hardening and cost optimization for AKS and supporting services.",
      "Participated in the on-call rotation, leading incident response and root cause analysis for production AKS outages.",
      "Wrote runbooks and a disaster recovery plan for Redis and AKS services, including tested failover with Redis Sentinel.",
    ],
  },
  {
    company: "Techsea",
    location: "Lahore, Pakistan",
    title: "Linux System Administrator",
    period: "2023 - 2024",
    points: [
      "Administered and maintained enterprise Linux systems (RHEL 7/8), managing system configuration, security patches and updates with YUM and RPM.",
      "Implemented and managed storage solutions including LVM, partitioning and RAID for optimal system performance.",
      "Configured and maintained critical network services, including Apache, DNS, NFS and FTP, in production.",
      "Established backup and recovery procedures using rsync and tape backups.",
      "Implemented system monitoring and performance tuning with top, htop, iostat, netstat, pidstat and custom scripts.",
      "Managed user access controls and advanced permissions (SUID, SGID, sticky bit) according to security best practices.",
      "Configured and maintained high availability for critical services with Keepalived.",
      "Automated routine administration tasks with cron jobs and shell scripts.",
      "Managed network configuration, including IP addressing, routing and iptables firewall rules.",
    ],
  },
];

export const keyProject = {
  title: "Enterprise Integration Platform (cloud-native runtime platform)",
  context: "TEO International",
  stack:
    "Azure AKS, Kubernetes, Apache Camel, Kafka (Strimzi), Temporal, KrakenD, Helm, Azure DevOps, Keycloak, Prometheus, Grafana, OpenTelemetry, Loki, Azure Key Vault",
  points: [
    "Architected and implemented a cloud-native enterprise integration platform on AKS supporting secure, scalable and tenant-aware application integrations.",
    "Built an API gateway layer with KrakenD providing JWT authentication, request aggregation, rate limiting and centralized routing.",
    "Developed integration services with Apache Camel orchestrating REST, SOAP, SFTP, file and database connectors with transformation, retry, timeout and dead-letter handling.",
    "Designed an event-driven architecture with Kafka (Strimzi) and CloudEvents, including tenant-isolated topics, replay support and dead-letter queue (DLQ) processing.",
    "Implemented durable business workflow orchestration with Temporal for long-running, fault-tolerant and resumable distributed processes.",
    "Established production-grade observability with Prometheus, Grafana, Loki, OpenTelemetry and centralized correlation IDs for end-to-end tracing and troubleshooting.",
    "Implemented enterprise security with Keycloak, Azure Key Vault, cert-manager and Kyverno, covering policy-as-code enforcement, RBAC, TLS certificate automation and secrets management.",
    "Automated CI/CD with Azure DevOps pipelines, Helm-based deployments, Kubernetes manifest validation, vulnerability scanning, approval gates and fully auditable production releases.",
    "Designed a scalable multi-tenant runtime supporting Shared, Isolated and Dedicated deployment models without application redesign.",
  ],
};
