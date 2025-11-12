# Medintegro React — Monorepo

Monorepo for the Medintegro rebuild:
- **apps/web** — Next.js (App Router) + Tailwind + shadcn/ui
- **apps/cms** — Strapi v5 (SQLite local) + GraphQL
- **packages/ui** — Shared UI components

## Quick Start

```bash
# from repo root
npm install
npm run dev:web      # runs Next.js (http://localhost:3000)
npm run dev:cms      # runs Strapi (http://localhost:1337)
