# Pakon Poomson Portfolio

Recruiter-facing technical evidence hub for AI Engineering and Data Engineering work. The site presents public repository evidence across data platforms, RAG systems, ML/MLOps, Thai NLP, multimodal AI, and public-data analytics.

Production: [pakon-portfolio.vercel.app](https://pakon-portfolio.vercel.app/)

## Featured Projects

- [Urban Mobility Data Platform](https://github.com/Praciller/urban-mobility-data-platform) — local-first data pipelines, DuckDB and dbt-style analytical modeling, APIs, dashboards, tests, and CI guardrails.
- [Customer Support RAG Triage Agent](https://github.com/Praciller/customer-support-rag-triage-agent) — retrieval-grounded triage, source checks, offline evaluation, guardrails, and API contracts.
- [Climate CO2 Forecasting ML](https://github.com/Praciller/climate-co2-forecasting-ml) — leakage-safe backtesting, interval evaluation, experiment tracking, and registry-style metadata.
- [Receipt AI Expense Tracker](https://github.com/Praciller/receipt-ai-expense-tracker) — Thai and English extraction, Buddhist Era normalization, strict schemas, local storage, and privacy guardrails.
- [Thai Review Sentiment Intelligence](https://github.com/Praciller/thai-review-sentiment-intelligence) — confidence routing, human review, explainability metadata, monitoring, and active-learning workflows.
- [Thai Procurement Intelligence](https://github.com/Praciller/thai-procurement-intelligence) — official-source provenance, bilingual evidence UI, quality reports, security controls, and CI validation.

## Stack

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Static typed content in `src/data`
- Node test runner for content contracts

## Local Setup

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```text
src/app/          App Router pages, metadata, sitemap, and robots
src/components/   Layout, sections, project cards, and shared UI
src/data/         Typed profile, project, skills, and career content
public/           Resume and existing project images
tests/            Content contract checks
```

## Development Commands

```bash
npm run lint
npm test
npm run build
```

No separate typecheck or format-check script is currently defined; `next build` includes TypeScript validation.

## Deployment

The repository is compatible with Vercel's standard Next.js build. Deployment is intentionally separate from local verification and requires explicit approval.

## Security and Privacy

- Environment files, local build outputs, caches, logs, and dependency directories are ignored.
- Project pages link only to public repositories and known public demos.
- Portfolio content must not include credentials, private dashboards, local paths, or private datasets.
- Claims are limited to public repository evidence and documented project limitations.

## Verification

```bash
npm ci
npm run lint
npm test
npm run build
git diff --check
git status --short
```
