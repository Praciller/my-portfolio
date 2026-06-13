export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "C#", "Java"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS", "Responsive UI"],
  },
  {
    category: "Backend",
    skills: ["FastAPI", "Pydantic", "REST APIs", "Node.js", "SQLAlchemy", "Provider routing"],
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "Qdrant", "pgvector", "SQLite", "IndexedDB", "Data normalization"],
  },
  {
    category: "AI / LLM",
    skills: [
      "Gemini API",
      "Groq",
      "Cerebras",
      "LangGraph",
      "RAG",
      "Embeddings",
      "Multimodal extraction",
      "Structured AI output",
      "Offline evaluation",
    ],
  },
  {
    category: "Data / Infrastructure",
    skills: ["Apache Kafka", "Apache Flink", "VictoriaMetrics", "Time-series data", "Ingestion validation"],
  },
  {
    category: "Delivery",
    skills: ["Git", "GitHub", "Docker", "Vercel", "Render", "GitHub Actions"],
  },
];
