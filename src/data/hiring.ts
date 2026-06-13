export type HiringService = {
  title: string;
  description: string;
  evidence: string[];
};

export const hiringServices: HiringService[] = [
  {
    title: "AI application prototypes",
    description:
      "Build working AI product prototypes that connect user input, model calls, structured output, and a usable web interface.",
    evidence: ["AI Resume Matcher", "Receipt AI Expense Tracker", "Customer Support RAG Triage Agent"],
  },
  {
    title: "RAG and document-grounded chat",
    description:
      "Create retrieval workflows for documents, embeddings, vector search, chat history, and streamed assistant responses.",
    evidence: ["Customer Support RAG Triage Agent", "Thai Procurement Intelligence"],
  },
  {
    title: "Multimodal extraction workflows",
    description:
      "Turn images, receipts, screenshots, product photos, and PDFs into normalized records that can be searched or analyzed.",
    evidence: ["Receipt AI Expense Tracker", "AI Resume Matcher"],
  },
  {
    title: "Full-stack web applications",
    description:
      "Ship recruiter-ready web apps with Next.js, React, TypeScript, API routes, backend services, and deployment setup.",
    evidence: ["Next.js", "React", "TypeScript", "FastAPI", "Vercel", "Supabase"],
  },
  {
    title: "Backend APIs and data systems",
    description:
      "Design API flows for ingestion, validation, search, analytics, persistence, and AI service integration.",
    evidence: ["FastAPI", "PostgreSQL", "pgvector", "SQLAlchemy", "Supabase"],
  },
];

export const hiringFit = [
  "AI Engineer roles",
  "Full-stack Developer roles",
  "Software Engineer roles",
  "Freelance AI automation projects",
  "MVP builds for AI-enabled products",
];

export const hiringNote =
  "Project evidence is linked to public GitHub repositories and deployments. Employment claims are limited to the confirmed resume and profile material used for this portfolio.";
