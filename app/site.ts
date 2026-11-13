// Public URL of the deployed site. Set NEXT_PUBLIC_SITE_URL in Vercel when a custom domain is added.
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://devops-portfolio-two-sigma.vercel.app").replace(/\/$/, "");

export const siteTitle = "Hasan Jamal | DevOps Engineer: Kubernetes, Cloud and DevSecOps";

export const siteDescription =
  "DevOps Engineer with 3.5+ years building secure, automated cloud platforms on AWS and Azure: Kubernetes, GitOps with ArgoCD and FluxCD, CI/CD, Terraform and DevSecOps.";
