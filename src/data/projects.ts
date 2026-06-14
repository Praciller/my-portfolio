export type ProjectStatus = "completed" | "in-progress";
export type ProjectCategory = "ai-engineering" | "data-ml";

export type Project = {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  description: string;
  problem: string;
  solution: string;
  outcome: string;
  whatIBuilt: string;
  whatItProves: string;
  techStack: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  screenshotUrl: string;
  screenshotAlt: string;
  status: ProjectStatus;
  flagship: boolean;
  tags: string[];
  highlights: string[];
  architecture: string[];
  metricsOrLessons: string[];
  futureImprovements: string[];
  sourceNote: string;
};

export const projects: Project[] = [
  {
    id: "customer-support-rag-triage-agent",
    title: "Customer Support RAG Triage Agent",
    slug: "customer-support-rag-triage-agent",
    category: "ai-engineering",
    description:
      "Support teams need consistent ticket triage, relevant evidence, and grounded draft responses without relying on a generic chatbot.",
    problem:
      "High-volume support queues mix intent classification, urgency assessment, retrieval, response drafting, and escalation decisions. Treating this as one unconstrained chat prompt makes the workflow difficult to inspect, evaluate, and operate safely.",
    solution:
      "Built a typed seven-node LangGraph workflow that normalizes tickets, classifies intent, detects urgency, retrieves similar Banking77 cases from Qdrant, drafts a response, checks grounding, and recommends a human action. Provider-aware caching and Gemini, Groq, and Cerebras fallback keep the workflow usable when one model is unavailable.",
    outcome:
      "Delivered a locally verified support-operations console with deterministic mock mode, semantic search, complete graph traces, provider health, and offline evaluation. The deployment work also identified model memory as the limiting factor on free hosting rather than an application correctness issue.",
    whatIBuilt:
      "A retrieval-grounded support triage system with observable agent steps, safe fallback behavior, and measurable evaluation.",
    whatItProves:
      "RAG architecture, LangGraph orchestration, vector retrieval, provider routing, evaluation design, FastAPI, React, Docker, and deployment troubleshooting.",
    techStack: [
      "Python",
      "FastAPI",
      "LangGraph",
      "Qdrant",
      "BGE embeddings",
      "React",
      "TypeScript",
      "Docker",
    ],
    githubUrl: "https://github.com/Praciller/customer-support-rag-triage-agent",
    screenshotUrl: "/images/projects/customer-support-rag-triage-agent.png",
    screenshotAlt: "Customer support RAG triage dashboard and workflow concept.",
    status: "completed",
    flagship: true,
    tags: ["RAG", "LangGraph", "Qdrant", "Evaluation"],
    highlights: [
      "Fixed support workflow with typed state instead of an open-ended chatbot loop.",
      "Cache-first multi-provider routing with bounded retries and safe degraded output.",
      "Grounding checks, escalation logic, provider health, and end-to-end trace visibility.",
    ],
    architecture: [
      "React operations console",
      "FastAPI service",
      "LangGraph workflow",
      "Qdrant retrieval",
      "Local BGE embeddings",
      "LLM cache and provider router",
      "Grounding and next action",
    ],
    metricsOrLessons: [
      "Uses 13,069 Banking77 support queries and preserves all 77 original labels while mapping them to nine operational intents.",
      "Exposes a seven-node execution trace so reviewers can inspect classification, retrieval, generation, and verification.",
      "Free-tier deployment testing showed that embedding-model memory must be treated as an infrastructure constraint.",
    ],
    futureImprovements: [
      "Add a reranker and multilingual support.",
      "Ingest help-center policy documents with stronger provenance.",
      "Capture human feedback and response ratings for continuous evaluation.",
    ],
    sourceNote: "Repository README, implementation, and deployment verification reviewed June 14, 2026.",
  },
  {
    id: "receipt-ai-expense-tracker",
    title: "Receipt AI Expense Tracker",
    slug: "receipt-ai-expense-tracker",
    category: "ai-engineering",
    description:
      "Manual expense entry is slow and error-prone when receipts mix Thai and English text, inconsistent layouts, and Buddhist Era dates.",
    problem:
      "Receipt images contain semi-structured financial data that must be extracted, normalized, reviewed, and stored without exposing provider credentials or silently persisting incorrect AI output.",
    solution:
      "Built a local-first Next.js application with a capability-aware AI router, structured Zod validation, Buddhist Era date normalization, editable human review, IndexedDB persistence through Dexie, and client-side spending analytics.",
    outcome:
      "The full product flow works without a database or account. AI parsing returns review data only; users explicitly confirm each receipt before it enters the local ledger and dashboard. The public deployment uses deterministic mock AI until server-side provider keys are configured.",
    whatIBuilt:
      "A multimodal receipt-to-expense workflow with safe provider routing, human review, local persistence, and analytics.",
    whatItProves:
      "Multimodal AI product design, Thai/English normalization, schema enforcement, local-first architecture, Next.js, IndexedDB, and testable provider fallback.",
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Gemini",
      "Groq",
      "Cerebras",
      "Zod",
      "Dexie",
      "Recharts",
    ],
    githubUrl: "https://github.com/Praciller/receipt-ai-expense-tracker",
    liveDemoUrl: "https://receipt-ai-expense-tracker-eta.vercel.app/",
    screenshotUrl: "/images/projects/receipt-ai-expense-tracker.png",
    screenshotAlt: "Receipt expense tracker dashboard with totals, categories, and receipt history.",
    status: "completed",
    flagship: true,
    tags: ["Multimodal AI", "Local-first", "Thai/English", "Analytics"],
    highlights: [
      "Image-capability filtering prevents receipt images from being sent to text-only providers.",
      "Zod validation rejects impossible dates, negative totals, and malformed receipt structures.",
      "Reviewed records stay in the browser through a repository abstraction backed by Dexie.",
    ],
    architecture: [
      "Receipt upload",
      "Server-side AI router",
      "Structured extraction",
      "Zod normalization",
      "Human review",
      "IndexedDB repository",
      "Analytics dashboard",
    ],
    metricsOrLessons: [
      "Buddhist Era dates such as 2568 normalize to Gregorian year 2025.",
      "AI parsing never saves automatically; persistence requires explicit user confirmation.",
      "Mock mode preserves the full validation and review path without spending provider quota.",
    ],
    futureImprovements: [
      "Add encrypted export and import for local ledgers.",
      "Add duplicate receipt detection and batch upload.",
      "Expose field-level confidence and review history.",
    ],
    sourceNote: "Repository README, tests, and public deployment reviewed June 14, 2026.",
  },
  {
    id: "ai-resume-matcher",
    title: "AI Resume Matcher",
    slug: "ai-resume-matcher",
    category: "ai-engineering",
    description:
      "Candidates need an evidence-based way to compare a PDF resume with a job description and identify actionable gaps.",
    problem:
      "Resume and job-description matching combines unsafe file input, unstructured text, model variability, and complex output that can break a frontend when schemas are weak.",
    solution:
      "Modernized the product into a React and FastAPI application with PDF validation, bounded extraction, 9arm-first provider routing, Gemini/Groq/Cerebras fallback, strict Pydantic output models, deterministic mock mode, caching, and safe report rendering.",
    outcome:
      "The deployed application returns a validated report with fit score, evidence, missing skills, recommendations, learning priorities, interview questions, risk flags, provider metadata, and warnings. Its deterministic sample flow remains usable without provider credentials.",
    whatIBuilt:
      "A validated document-analysis pipeline that converts a PDF resume and job description into a structured career report.",
    whatItProves:
      "Production-minded AI APIs, provider abstraction, Pydantic contracts, secure file handling, React reporting, automated testing, and Vercel delivery.",
    techStack: [
      "React",
      "Vite",
      "FastAPI",
      "Python",
      "Pydantic",
      "pypdf",
      "9arm",
      "Gemini",
      "Groq",
      "Cerebras",
    ],
    githubUrl: "https://github.com/Praciller/ai-resume-matcher",
    liveDemoUrl: "https://ai-resume-matcher-psi-one.vercel.app",
    screenshotUrl: "/images/projects/ai-resume-matcher.png",
    screenshotAlt: "Structured AI resume analysis report with score, strengths, gaps, and recommendations.",
    status: "completed",
    flagship: false,
    tags: ["Document AI", "FastAPI", "Provider routing", "Career tooling"],
    highlights: [
      "Validates extension, MIME type, size, extractable text, and job-description length.",
      "Rejects malformed or low-quality model output before it reaches the UI.",
      "Supports deterministic sample and mock flows for reliable demos and tests.",
    ],
    architecture: [
      "PDF and job description",
      "React validation",
      "FastAPI upload endpoint",
      "PDF extraction",
      "Provider router",
      "Pydantic validation",
      "Structured report",
    ],
    metricsOrLessons: [
      "Uses a strict schema for scores, evidence, gaps, actions, learning plans, interview questions, and risk flags.",
      "Provider keys remain server-side and no frontend secret variables are required.",
      "The same FastAPI application supports local development and Vercel serverless deployment.",
    ],
    futureImprovements: [
      "Add OCR for scanned resumes.",
      "Calibrate score interpretation against a labeled evaluation set.",
      "Add comparison and export workflows for multiple target roles.",
    ],
    sourceNote: "Repository README, verification docs, and public deployment reviewed June 14, 2026.",
  },
  {
    id: "climate-co2-forecasting-ml",
    title: "Climate CO2 Forecasting ML",
    slug: "climate-co2-forecasting-ml",
    category: "data-ml",
    description:
      "Atmospheric CO2 forecasting needs leakage-safe time-series evaluation rather than a visually impressive model trained on future information.",
    problem:
      "The weekly Mauna Loa CO2 series contains missing values, long-term trend, and strong annual seasonality. A credible project must compare simple and complex models on the same chronological holdout.",
    solution:
      "Built a reproducible pipeline for validation, monthly resampling, chronological splits, feature engineering, baseline/statistical/scikit-learn/PyTorch training, shared metrics, residual analysis, anomaly signals, FastAPI inference, and a React dashboard.",
    outcome:
      "Exponential Smoothing and SARIMA clearly outperformed the more complex machine-learning models. The project reports that result directly and keeps anomaly detection framed as exploratory rather than verified climate-event detection.",
    whatIBuilt:
      "An end-to-end forecasting and anomaly-analysis system with reproducible data preparation, model comparison, API serving, and dashboard evidence.",
    whatItProves:
      "Time-series methodology, leakage prevention, honest model evaluation, statistical forecasting, PyTorch experimentation, FastAPI, React, and reproducibility.",
    techStack: [
      "Python",
      "pandas",
      "statsmodels",
      "scikit-learn",
      "PyTorch",
      "FastAPI",
      "React",
      "Recharts",
      "Docker",
    ],
    githubUrl: "https://github.com/Praciller/climate-co2-forecasting-ml",
    screenshotUrl: "/images/projects/climate-co2-forecasting-ml.png",
    screenshotAlt: "CO2 Forecast Lab dashboard showing model comparison and atmospheric trend.",
    status: "completed",
    flagship: true,
    tags: ["Forecasting", "Time series", "Evaluation", "Anomaly detection"],
    highlights: [
      "Chronological train, validation, and test splits prevent future leakage.",
      "All models share the same rolling one-step evaluation and residual analysis.",
      "Generated artifacts feed both the FastAPI service and React dashboard.",
    ],
    architecture: [
      "statsmodels CO2 dataset",
      "Validation and resampling",
      "Chronological split",
      "Forecasting models",
      "Shared evaluation",
      "Anomaly analysis",
      "API and dashboard",
    ],
    metricsOrLessons: [
      "2,284 weekly rows become 526 monthly observations after resampling and interpolation.",
      "Exponential Smoothing achieved MAE 0.237 and RMSE 0.298 on rolling one-step evaluation.",
      "The two-epoch LSTM debug run underperformed, demonstrating that complexity is not automatically better.",
    ],
    futureImprovements: [
      "Run a fully tuned LSTM experiment separately from the fast debug pipeline.",
      "Add probabilistic forecast intervals and backtesting windows.",
      "Deploy the API and dashboard together for a public interactive demo.",
    ],
    sourceNote: "Repository README, generated metrics, and public GitHub presentation reviewed June 13, 2026.",
  },
  {
    id: "explainable-cancer-diagnosis-ml",
    title: "Explainable Cancer Diagnosis ML",
    slug: "explainable-cancer-diagnosis-ml",
    category: "data-ml",
    description:
      "A medical ML portfolio project must show error costs, explainability, and strict limitations instead of presenting accuracy alone.",
    problem:
      "Breast-cancer classification requires leakage-safe comparison, safety-relevant metrics, inspection of false negatives, and clear separation between educational evidence and clinical claims.",
    solution:
      "Built a reproducible benchmark across scikit-learn models and a PyTorch MLP, selected models on validation ROC-AUC, generated SHAP explanations and error analysis, exposed strict FastAPI schemas, and published a read-only React evidence dashboard.",
    outcome:
      "Logistic Regression led the measured test results and produced one malignant-to-benign error with no benign-to-malignant errors on the shared held-out set. The public site is a read-only frontend showcase, and the system is not clinically validated.",
    whatIBuilt:
      "An explainable tabular-ML workflow that connects model comparison, safety metrics, SHAP evidence, inference contracts, and a reviewer-facing dashboard.",
    whatItProves:
      "Explainable ML, model governance, classification metrics, error analysis, scikit-learn, PyTorch, SHAP, FastAPI, React, and responsible communication.",
    techStack: [
      "Python",
      "scikit-learn",
      "PyTorch",
      "SHAP",
      "FastAPI",
      "React",
      "TypeScript",
      "Docker",
    ],
    githubUrl: "https://github.com/Praciller/explainable-cancer-diagnosis-ml",
    liveDemoUrl: "https://explainable-cancer-diagnosis-ml.vercel.app",
    screenshotUrl: "/images/projects/explainable-cancer-diagnosis-ml.png",
    screenshotAlt: "Explainable cancer diagnosis dashboard with measured model results and disclaimer.",
    status: "completed",
    flagship: false,
    tags: ["Explainable ML", "SHAP", "Classification", "Responsible AI"],
    highlights: [
      "Shared stratified split and validation-driven model selection.",
      "Sensitivity, specificity, ROC-AUC, confusion matrix, and threshold analysis.",
      "Strict 30-feature inference schema and explicit medical disclaimer.",
    ],
    architecture: [
      "scikit-learn dataset",
      "Validation and split",
      "Model training",
      "Shared test evaluation",
      "SHAP and error analysis",
      "FastAPI contracts",
      "React evidence dashboard",
    ],
    metricsOrLessons: [
      "Uses 569 rows and 30 numeric features from the Wisconsin Diagnostic Breast Cancer dataset.",
      "Logistic Regression achieved 0.9884 accuracy and 0.9954 ROC-AUC on the 86-row test set.",
      "One malignant sample was classified as benign, reinforcing why aggregate accuracy is insufficient.",
    ],
    futureImprovements: [
      "Add external validation on a meaningfully different dataset.",
      "Improve calibration and threshold-selection analysis.",
      "Add model cards and versioned artifact provenance.",
    ],
    sourceNote: "Repository README, measured reports, and public deployment reviewed June 14, 2026.",
  },
  {
    id: "thai-procurement-intelligence",
    title: "Thai Procurement Intelligence",
    slug: "thai-procurement-intelligence",
    category: "data-ml",
    description:
      "Thai public procurement records are difficult to search, compare, and explain when data is multilingual, high-volume, and inconsistently structured.",
    problem:
      "A useful procurement intelligence product needs ingestion, normalization, search, analytics, provenance, and evidence-backed answers while clearly distinguishing synthetic demo data from official records.",
    solution:
      "Built a Next.js and FastAPI platform with CSV/JSON ingestion, SQLAlchemy persistence, PostgreSQL/pgvector schemas, keyword/semantic/hybrid retrieval, bilingual UI, dashboards, exports, optional Gemini/OpenRouter summarization, and cited assistant answers.",
    outcome:
      "The public demo serves 120 clearly labeled synthetic records and preserves useful search, dashboard, detail, export, assistant, and data-readiness workflows without pretending the sample data is official.",
    whatIBuilt:
      "A bilingual public-data intelligence platform spanning ingestion, normalized storage, retrieval, analytics, and evidence-backed Q&A.",
    whatItProves:
      "Data engineering, public-data product design, PostgreSQL/pgvector, FastAPI, Next.js, bilingual UX, LLM integration, and transparent data limitations.",
    techStack: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "pgvector",
      "SQLAlchemy",
      "Gemini",
      "OpenRouter",
      "Docker",
    ],
    githubUrl: "https://github.com/Praciller/thai-procurement-intelligence",
    liveDemoUrl: "https://thai-procurement-intelligence.vercel.app",
    screenshotUrl: "/images/projects/thai-procurement-intelligence.png",
    screenshotAlt: "Thai procurement intelligence home dashboard with records, budget metrics, and province counts.",
    status: "completed",
    flagship: false,
    tags: ["Data engineering", "Hybrid search", "Bilingual", "Public data"],
    highlights: [
      "Validation, normalization, deduplication, and import counters for source ingestion.",
      "Keyword, deterministic semantic, and hybrid search modes with evidence retrieval.",
      "English and Thai UI state across navigation, metrics, tables, and loading states.",
    ],
    architecture: [
      "CSV or JSON source",
      "FastAPI ingestion",
      "PostgreSQL and pgvector",
      "Search and analytics API",
      "Optional LLM provider",
      "Next.js bilingual UI",
      "Evidence-backed assistant",
    ],
    metricsOrLessons: [
      "The public demo contains 120 synthetic records and labels them clearly in the interface.",
      "AI features are optional; search, analytics, export, and evidence retrieval remain usable without provider keys.",
      "Synthetic sample data is useful for product verification but must not be represented as official procurement evidence.",
    ],
    futureImprovements: [
      "Select and map an approved official Thai procurement source.",
      "Add stronger provenance and confidence displays.",
      "Schedule incremental ingestion and data-quality monitoring.",
    ],
    sourceNote: "Repository README and live deployment reviewed June 14, 2026.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const flagshipProjects = projects.filter((project) => project.flagship);
export const aiEngineeringProjects = projects.filter(
  (project) => project.category === "ai-engineering",
);
export const dataMlProjects = projects.filter((project) => project.category === "data-ml");
