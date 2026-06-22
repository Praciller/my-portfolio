export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Data Engineering",
    skills: ["Python", "SQL", "DuckDB", "dbt-style modeling", "Data validation", "Reproducibility"],
  },
  {
    category: "AI Systems",
    skills: ["RAG", "Retrieval", "Provider routing", "Guardrails", "Offline evaluation", "Multimodal extraction"],
  },
  {
    category: "ML/MLOps",
    skills: ["Backtesting", "Interval monitoring", "Experiment tracking", "Model registry metadata", "scikit-learn", "PyTorch"],
  },
  {
    category: "Full Stack",
    skills: ["FastAPI", "React", "Next.js", "TypeScript", "Pydantic", "REST APIs"],
  },
  {
    category: "Thai AI/Data",
    skills: ["Thai NLP", "Buddhist Era normalization", "Bilingual evidence UI", "Confidence routing", "Public data provenance"],
  },
];
