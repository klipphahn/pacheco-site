# Root to Rise Therapy agent guide

## Project

Root to Rise Therapy is a public TypeScript website built with Next.js-compatible
Vinext and deployed through Sites at `https://pacheco.thebrokie.com`. The
canonical GitHub repository is `https://github.com/klipphahn/pacheco-site` on
`main`.

## Architecture and commands

- `app/`: page, layout, metadata, global styles, and auth helpers.
- `public/`: approved brand and office imagery.
- `tests/rendered-html.test.mjs`: production-render checks.
- `worker/`, `vite.config.ts`, and `.openai/hosting.json`: Sites/Vinext runtime.
- Install: `npm ci`
- Develop: `npm run dev`
- Lint: `npm run lint`
- Test/build: `npm test`

Use Node 22 or newer and npm. Keep `package-lock.json` authoritative.

## Standards

- Preserve the calm sage/lavender visual system, accessible contrast, responsive
  layouts, semantic headings, and useful image alt text.
- Treat all therapy and contact copy as user-approved content. Do not invent
  credentials, services, guarantees, diagnoses, pricing, or legal/privacy claims.
- Optimize images before adding them and keep metadata/social previews accurate.
- Keep the site static and simple unless the requested feature needs server data.
- Never expose private client or patient information.

## Workflow and deployment

Work on a feature branch, run lint and `npm test`, and provide screenshots for
visual changes. GitHub and Sites are separate links: merging to GitHub does not
prove the Sites deployment is current. Do not publish a new Sites version unless
the user explicitly asks.

