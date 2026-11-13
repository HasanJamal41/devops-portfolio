# Hasan Jamal — DevOps Portfolio

Personal portfolio for Hasan Jamal, DevOps & DevSecOps engineer. Built with [Next.js](https://nextjs.org/) (App Router) and TypeScript, statically generated, and deployed on Vercel.

## Highlights

- **Animated hero** — an interactive node network on canvas, a self-typing `kubectl` / `argocd` terminal and a cycling headline.
- **Live capability tiles** — a running CI/CD pipeline, a self-healing pod grid, streaming metrics and a security radar, all in CSS.
- **Git-graph experience timeline** that fills as you scroll.
- **Architecture case studies** with traffic flowing through each diagram, stacking as you scroll.
- **Real tool logos** for the whole stack in `public/logos`.
- Scroll reveals, decoding section labels, cursor spotlight cards and magnetic buttons — all disabled under `prefers-reduced-motion`.
- Fully responsive, with SEO metadata and Vercel Analytics.

## Editing content

All copy that changes over time — roles, stats, tool lists and contact details — lives in [`app/data.ts`](app/data.ts). Project case studies are defined at the top of [`app/components/Work.tsx`](app/components/Work.tsx). Styles and animations are in [`app/globals.css`](app/globals.css).

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Deployment

Pushing to `main` triggers a Vercel deployment. No environment variables or secrets are required.

Tool logos come from [Simple Icons](https://simpleicons.org/) and [Devicon](https://devicon.dev/); trademarks belong to their respective owners.
