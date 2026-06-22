export type ProjectStatus = "completed" | "in-progress";
export type ProjectCategory = "ai-engineering" | "data-ml";

export type Project = {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  problem: string;
  solution: string;
  outcome: string;
  whatIBuilt: string;
  whatItProves: string;
  roleSignal: string;
  techStack: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  screenshotUrl?: string;
  screenshotAlt: string;
  status: ProjectStatus;
  presentationStatus: "Case study" | "Demo available" | "Frontend showcase";
  featured: boolean;
  priority: number;
  tags: string[];
  highlights: string[];
  architecture: string[];
  technicalDecisions: string[];
  verificationEvidence: string[];
  securityPrivacy: string[];
  limitations: string[];
  futureImprovements: string[];
  sourceNote: string;
};

export const projects = ([
  {
    id: "urban-mobility-data-platform",
    title: "Urban Mobility Data Platform",
    slug: "urban-mobility-data-platform",
    category: "data-ml",
    categoryLabel: "Data Engineering / Analytics Platform",
    description:
      "Local-first data engineering and analytics platform for urban mobility datasets.",
    problem:
      "Mobility data projects need a reproducible path from raw inputs to trustworthy analytical outputs without requiring reviewers to provision cloud infrastructure.",
    solution:
      "Built a deterministic sample pipeline with data validation, DuckDB and dbt-style analytical modeling, an API, and a reviewer-facing dashboard.",
    outcome:
      "The repository provides a local review path with pipeline guardrails, analytical outputs, API and frontend surfaces, tests, and CI checks.",
    whatIBuilt:
      "A local-first data platform connecting ingestion, validation, analytical modeling, APIs, and dashboard evidence.",
    whatItProves:
      "Data pipelines, SQL modeling, reproducibility, API delivery, frontend integration, and CI-safe engineering.",
    roleSignal:
      "Data pipelines, analytical modeling, API/dashboard delivery, and CI-safe reproducibility.",
    techStack: ["Python", "DuckDB", "dbt-style SQL", "FastAPI", "React", "CI", "Data validation"],
    githubUrl: "https://github.com/Praciller/urban-mobility-data-platform",
    screenshotAlt: "Abstract system view for the urban mobility data platform.",
    status: "completed",
    presentationStatus: "Case study",
    featured: true,
    priority: 1,
    tags: ["Data engineering", "DuckDB", "Analytics", "Local-first"],
    highlights: [
      "Deterministic sample pipeline keeps the reviewer path reproducible.",
      "Validation and guardrails protect the analytical model inputs.",
      "API and dashboard surfaces expose modeled data for inspection.",
    ],
    architecture: [
      "Sample mobility data",
      "Validation and ingestion",
      "DuckDB storage",
      "dbt-style SQL models",
      "FastAPI service",
      "React dashboard",
      "CI guardrails",
    ],
    technicalDecisions: [
      "Local-first defaults avoid cloud accounts and private infrastructure in the review path.",
      "Deterministic fixtures make pipeline behavior repeatable in development and CI.",
    ],
    verificationEvidence: ["Deterministic sample pipeline", "Automated tests and CI", "Repository readiness guardrails"],
    securityPrivacy: ["No real private mobility data is required for the default workflow.", "Local artifacts and environment files remain outside version control."],
    limitations: ["The portfolio links to the repository rather than claiming a public live deployment.", "Sample data demonstrates the pipeline contract, not production scale."],
    futureImprovements: ["Add approved production-scale sources when available.", "Expand data-quality monitoring for larger datasets."],
    sourceNote: "Claims limited to the public repository and its documented local verification path.",
  },
  {
    id: "customer-support-rag-triage-agent",
    title: "Customer Support RAG Triage Agent",
    slug: "customer-support-rag-triage-agent",
    category: "ai-engineering",
    categoryLabel: "RAG / AI Agent Systems",
    description:
      "Offline-capable RAG triage system for support tickets with grounded responses.",
    problem:
      "Support triage combines classification, retrieval, response drafting, and escalation decisions that need to remain inspectable and safely bounded.",
    solution:
      "Built a typed workflow for ticket normalization, intent and urgency handling, retrieval, grounded answer generation, source checks, and safe fallback behavior.",
    outcome:
      "The project provides an API contract, a deterministic offline path, evaluation artifacts, guardrails, and a public reviewer demo.",
    whatIBuilt:
      "A retrieval-grounded support triage workflow with observable steps, citations, evaluation, and fallback behavior.",
    whatItProves:
      "Retrieval, ranking, grounded generation, guardrails, offline evaluation, API contracts, and full-stack delivery.",
    roleSignal: "Retrieval, ranking, guardrails, evaluation, and API contracts.",
    techStack: ["Python", "FastAPI", "RAG", "LangGraph", "Qdrant", "React", "TypeScript", "Evaluation"],
    githubUrl: "https://github.com/Praciller/customer-support-rag-triage-agent",
    liveDemoUrl: "https://pracill-customer-support-rag-triage-agent.hf.space/",
    screenshotUrl: "/images/projects/customer-support-rag-triage-agent.png",
    screenshotAlt: "Customer support RAG triage dashboard and workflow.",
    status: "completed",
    presentationStatus: "Demo available",
    featured: true,
    priority: 2,
    tags: ["RAG", "Grounding", "Evaluation", "Guardrails"],
    highlights: [
      "Typed workflow state keeps triage behavior inspectable.",
      "Grounding and source checks constrain generated responses.",
      "Offline evaluation and deterministic fallbacks preserve a stable review path.",
    ],
    architecture: ["Ticket input", "Intent and urgency", "Retrieval", "Ranking", "Grounded generation", "Source checks", "Human action"],
    technicalDecisions: ["A fixed workflow replaces an open-ended agent loop.", "Provider failures degrade to bounded output rather than bypassing guardrails."],
    verificationEvidence: ["Offline deterministic demo", "Retrieval and grounding evaluation", "API contract checks"],
    securityPrivacy: ["Provider credentials remain server-side.", "Guardrails and escalation preserve human review for uncertain output."],
    limitations: ["The bundled support corpus is a review fixture, not a private production knowledge base.", "Generated drafts still require policy-aware human review."],
    futureImprovements: ["Add stronger reranking and multilingual retrieval.", "Capture structured reviewer feedback for evaluation."],
    sourceNote: "Repository, evaluation artifacts, and public deployment are the evidence sources.",
  },
  {
    id: "climate-co2-forecasting-ml",
    title: "Climate CO2 Forecasting ML",
    slug: "climate-co2-forecasting-ml",
    category: "data-ml",
    categoryLabel: "ML/MLOps / Forecasting",
    description:
      "Local-first forecasting and MLOps demo with backtesting and interval monitoring.",
    problem:
      "Time-series models can appear strong when evaluation leaks future information or compares models on inconsistent windows.",
    solution:
      "Built a reproducible forecasting workflow with leakage-safe rolling backtesting, interval evaluation, experiment tracking, registry-style metadata, API contracts, and a frontend evidence view.",
    outcome:
      "The project keeps model comparison reproducible and reports limitations instead of treating model complexity as evidence of quality.",
    whatIBuilt:
      "A forecasting workflow spanning validation, backtesting, interval monitoring, experiment evidence, serving, and visualization.",
    whatItProves:
      "Time-series validation, model comparison, experiment tracking, model metadata, API delivery, and honest ML communication.",
    roleSignal: "Time-series validation, model registry metadata, and experiment tracking.",
    techStack: ["Python", "Forecasting", "Backtesting", "Intervals", "FastAPI", "React", "Experiment tracking"],
    githubUrl: "https://github.com/Praciller/climate-co2-forecasting-ml",
    screenshotUrl: "/images/projects/climate-co2-forecasting-ml.png",
    screenshotAlt: "CO2 forecasting dashboard with model comparison and atmospheric trend.",
    status: "completed",
    presentationStatus: "Case study",
    featured: true,
    priority: 3,
    tags: ["Forecasting", "MLOps", "Backtesting", "Intervals"],
    highlights: ["Rolling-origin evaluation prevents future leakage.", "Interval monitoring complements point forecasts.", "Experiment and registry metadata connect training evidence to serving."],
    architecture: ["CO2 dataset", "Validation", "Rolling backtest", "Model comparison", "Interval evaluation", "Registry metadata", "API and frontend"],
    technicalDecisions: ["Chronological evaluation is shared across model families.", "The local deterministic demo remains separate from optional hosted infrastructure."],
    verificationEvidence: ["Leakage-safe rolling backtesting", "Interval evaluation", "Offline deterministic demo and API checks"],
    securityPrivacy: ["The workflow uses public climate data and requires no private user data.", "Environment-specific credentials are not part of the default review path."],
    limitations: ["Forecast results are an educational engineering demonstration, not climate-policy guidance.", "Public repository evidence is provided without claiming a live full-stack deployment."],
    futureImprovements: ["Extend probabilistic forecast calibration.", "Compare additional rolling windows and drift signals."],
    sourceNote: "Claims limited to documented repository artifacts and reproducible local outputs.",
  },
  {
    id: "receipt-ai-expense-tracker",
    title: "Receipt AI Expense Tracker",
    slug: "receipt-ai-expense-tracker",
    category: "ai-engineering",
    categoryLabel: "Multimodal AI Product",
    description:
      "Privacy-aware Thai and English receipt extraction app with a local-first review workflow.",
    problem:
      "Receipt extraction must handle multilingual text, Buddhist Era dates, inconsistent layouts, and unsafe model output without silently saving incorrect financial records.",
    solution:
      "Built a Next.js application with capability-aware provider routing, strict schema validation, Buddhist Era normalization, editable review, and IndexedDB persistence.",
    outcome:
      "Users explicitly review extracted data before it enters the local ledger, while deterministic mock extraction keeps the product flow testable without provider credentials.",
    whatIBuilt:
      "A multimodal receipt-to-expense workflow with schema validation, human review, local storage, and provider guardrails.",
    whatItProves:
      "Multimodal extraction, Thai and English normalization, provider routing, local-first data design, and privacy-aware product engineering.",
    roleSignal: "Multimodal extraction, schema validation, provider routing, and IndexedDB.",
    techStack: ["Next.js", "TypeScript", "Zod", "IndexedDB", "AI provider routing", "Privacy guardrails"],
    githubUrl: "https://github.com/Praciller/receipt-ai-expense-tracker",
    liveDemoUrl: "https://receipt-ai-expense-tracker-eta.vercel.app/",
    screenshotUrl: "/images/projects/receipt-ai-expense-tracker.png",
    screenshotAlt: "Receipt expense tracker dashboard with totals, categories, and receipt history.",
    status: "completed",
    presentationStatus: "Demo available",
    featured: true,
    priority: 4,
    tags: ["Multimodal AI", "Thai/English", "Local-first", "Validation"],
    highlights: ["Provider capability checks prevent images from reaching text-only routes.", "Strict schemas validate extracted receipt records.", "Explicit human confirmation is required before IndexedDB persistence."],
    architecture: ["Receipt upload", "Provider router", "Structured extraction", "Schema validation", "Human review", "IndexedDB", "Local analytics"],
    technicalDecisions: ["Local persistence avoids a required account or cloud database.", "Mock extraction exercises the same validation and review contract as provider output."],
    verificationEvidence: ["Synthetic extraction evaluation", "Schema-validation tests", "Deterministic mock workflow"],
    securityPrivacy: ["Receipt data stays local after review.", "Provider keys remain server-side and AI output is never saved automatically."],
    limitations: ["Browser-local storage is device-specific and is not a synchronized backup.", "Extraction accuracy depends on image quality and provider capability."],
    futureImprovements: ["Add encrypted export and import.", "Expose field-level confidence and duplicate detection."],
    sourceNote: "Repository, tests, and the existing public deployment are the evidence sources.",
  },
  {
    id: "thai-review-sentiment-intelligence",
    title: "Thai Review Sentiment Intelligence",
    slug: "thai-review-sentiment-intelligence",
    category: "ai-engineering",
    categoryLabel: "Thai NLP / ML Governance",
    description:
      "Thai sentiment intelligence platform with governance, confidence routing, and a monitoring demo.",
    problem:
      "Sentiment predictions need transparent confidence handling, review queues, and monitoring when uncertain Thai-language inputs affect downstream decisions.",
    solution:
      "Built a Thai NLP workflow with classification, confidence routing, human review, explainability metadata, monitoring, and an active-learning queue.",
    outcome:
      "The project exposes model behavior and governance evidence instead of presenting classification output as an unquestioned decision.",
    whatIBuilt:
      "A Thai sentiment workflow connecting inference, confidence-aware routing, human review, monitoring, and governance reports.",
    whatItProves:
      "Thai NLP, ML governance, explainability metadata, monitoring, feedback queues, FastAPI, and React delivery.",
    roleSignal: "Thai NLP, model governance, explainability metadata, and active-learning workflows.",
    techStack: ["Python", "scikit-learn", "FastAPI", "React", "Thai NLP", "Monitoring"],
    githubUrl: "https://github.com/Praciller/thai-review-sentiment-intelligence",
    screenshotAlt: "Abstract system view for Thai sentiment governance and review.",
    status: "completed",
    presentationStatus: "Case study",
    featured: true,
    priority: 5,
    tags: ["Thai NLP", "Governance", "Monitoring", "Human review"],
    highlights: ["Confidence routing sends uncertain predictions to human review.", "Explainability metadata accompanies model output.", "Monitoring and active-learning queues turn feedback into governance evidence."],
    architecture: ["Thai review", "Text preprocessing", "Classifier", "Confidence routing", "Human review", "Monitoring", "Active-learning queue"],
    technicalDecisions: ["A deterministic classical ML baseline keeps behavior inspectable.", "Low-confidence output is routed for review instead of forced into automation."],
    verificationEvidence: ["Model evaluation artifacts", "Monitoring demo", "Governance and active-learning reports"],
    securityPrivacy: ["The public workflow does not require private customer review data.", "Human review remains part of the decision path for uncertain predictions."],
    limitations: ["Sentiment labels simplify context such as sarcasm, mixed sentiment, and domain-specific language.", "The portfolio links to repository evidence without claiming a public deployment."],
    futureImprovements: ["Expand evaluation across domains and language variation.", "Calibrate confidence thresholds with reviewer feedback."],
    sourceNote: "Claims limited to the public repository and its documented reports and demo workflow.",
  },
  {
    id: "thai-procurement-intelligence",
    title: "Thai Procurement Intelligence",
    slug: "thai-procurement-intelligence",
    category: "data-ml",
    categoryLabel: "Public Data / Procurement Analytics",
    description:
      "Public procurement intelligence project using an official DGA procurement snapshot.",
    problem:
      "Procurement analysis needs source provenance, quality checks, bilingual evidence, and clear dataset-state communication before records can support credible comparisons.",
    solution:
      "Built provenance-aware ingestion and validation around an official DGA procurement snapshot, with bilingual evidence views, quality reports, security controls, and CI validation.",
    outcome:
      "The project separates official and demonstration data states and routes users from analytics back to source-aware evidence.",
    whatIBuilt:
      "A bilingual public-data analytics workflow spanning official-source ingestion, provenance, validation, evidence views, and quality reporting.",
    whatItProves:
      "Public-data ingestion, provenance design, bilingual UX, quality controls, security checks, and CI-safe analytics delivery.",
    roleSignal: "Public-data ingestion, provenance, bilingual evidence UI, and validation.",
    techStack: ["Python", "FastAPI", "Next.js", "Data validation", "Evidence UI", "CI", "Public data analytics"],
    githubUrl: "https://github.com/Praciller/thai-procurement-intelligence",
    liveDemoUrl: "https://thai-procurement-intelligence.vercel.app",
    screenshotUrl: "/images/projects/thai-procurement-intelligence.png",
    screenshotAlt: "Thai procurement intelligence dashboard with bilingual public-data evidence.",
    status: "completed",
    presentationStatus: "Demo available",
    featured: true,
    priority: 6,
    tags: ["Public data", "Provenance", "Bilingual", "Validation"],
    highlights: ["Official snapshot provenance is retained through ingestion.", "Dataset-state labeling distinguishes official evidence from demo modes.", "Quality reports, security controls, and CI checks protect the reviewer path."],
    architecture: ["Official DGA snapshot", "Provenance-aware ingestion", "Validation", "Analytics API", "Bilingual evidence UI", "Quality reports", "CI controls"],
    technicalDecisions: ["Source identifiers and dataset mode remain visible rather than being collapsed into generic records.", "The application preserves a deterministic fallback path when official data is unavailable."],
    verificationEvidence: ["Official-source provenance", "Quality and evaluation reports", "CI validation and security controls"],
    securityPrivacy: ["Only public procurement data belongs in the official dataset path.", "Secrets and environment-specific configuration remain outside the repository."],
    limitations: ["Coverage is bounded by the approved snapshot rather than all procurement activity.", "The interface must continue to disclose which dataset mode is active."],
    futureImprovements: ["Add approved incremental official snapshots.", "Expand provenance and quality monitoring across source revisions."],
    sourceNote: "Claims limited to the public repository, official-source metadata, reports, and existing public deployment.",
  },
] satisfies Project[]).sort((left, right) => left.priority - right.priority);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const flagshipProjects = projects.filter((project) => project.featured).slice(0, 3);
export const aiEngineeringProjects = projects.filter((project) => project.category === "ai-engineering");
export const dataMlProjects = projects.filter((project) => project.category === "data-ml");
