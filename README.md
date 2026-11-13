# Hasan Jamal: DevOps Portfolio

Personal portfolio for Hasan Jamal, DevOps and DevSecOps engineer. Built with [Next.js](https://nextjs.org/) (App Router) and TypeScript, statically generated and deployed on Vercel.

## Sections

- **Hero** with an interactive node network, a release terminal (Terraform, Trivy, ArgoCD, kubectl) and a rotating headline.
- **About** with key facts, focus areas and education.
- **Delivery lifecycle** from plan to monitor, with the tools used at each stage.
- **Capabilities** shown as live tiles: CI/CD pipeline, multi-cloud, self-healing pods, metrics, security radar, IaC and Linux.
- **Tech stack** matrix of 60+ tools grouped by layer, with brand logos in `public/logos`.
- **Experience** as a git-style timeline with full role details.
- **Projects**: three featured case studies with animated architecture diagrams, plus six more.
- **Principles** and **Contact**, followed by a full footer.

Smooth scrolling uses [Lenis](https://github.com/darkroomengineering/lenis). All motion is disabled under `prefers-reduced-motion`.

## Editing content

Roles, facts, tools, projects, principles and contact details live in [`app/data.ts`](app/data.ts). The featured case studies are defined at the top of [`app/components/Work.tsx`](app/components/Work.tsx). Styles and animations are in [`app/globals.css`](app/globals.css).

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Deployment

Pushing to `main` triggers a Vercel deployment. No environment variables or secrets are required.

Tool logos come from [Simple Icons](https://simpleicons.org/) and [Devicon](https://devicon.dev/). Trademarks belong to their respective owners.
