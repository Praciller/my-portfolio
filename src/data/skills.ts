export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "AI & Retrieval",
    skills: [
      "Python",
      "LangGraph",
      "RAG",
      "Qdrant",
      "Embeddings",
      "Gemini",
      "Groq",
      "Cerebras",
      "Multimodal extraction",
      "Structured outputs",
      "Offline evaluation",
    ],
  },
  {
    category: "Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Recharts", "Responsive UI"],
  },
  {
    category: "Backend & APIs",
    skills: [
      "FastAPI",
      "Pydantic",
      "REST APIs",
      "Node.js",
      "SQLAlchemy",
      "Provider routing",
      "C#",
      "Java",
    ],
  },
  {
    category: "Data & Infrastructure",
    skills: [
      "PostgreSQL",
      "pgvector",
      "IndexedDB",
      "Apache Kafka",
      "Apache Flink",
      "VictoriaMetrics",
      "Time-series data",
      "Data normalization",
      "Ingestion validation",
    ],
  },
  {
    category: "Delivery & Operations",
    skills: ["Git", "GitHub", "Docker", "Vercel", "Render", "GitHub Actions"],
  },
];
