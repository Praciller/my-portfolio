export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  needsConfirmation: boolean;
};

export const experience: ExperienceItem[] = [
  {
    role: "AI Engineer",
    company: "Seagate Technology",
    period: "Jan 2026 - Present",
    description:
      "Builds practical GenAI automation and internal engineering workflow tooling while supporting backend and data-infrastructure work.",
    responsibilities: [
      "Develop multi-agent workflows for requirements analysis, debugging, testing, and pull-request preparation.",
      "Build and maintain internal C# engineering software.",
      "Support time-series storage and Kafka-to-TSDB ingestion validation.",
    ],
    achievements: [
      "Applied agentic AI patterns to repeatable engineering workflows.",
      "Contributed to VictoriaMetrics TSDB setup and ingestion verification.",
      "Connected AI application work with operational backend and data concerns.",
    ],
    technologies: ["GenAI agents", "C#", "VictoriaMetrics", "Apache Kafka", "Apache Flink", "Java"],
    needsConfirmation: false,
  },
  {
    role: "Full-stack Developer",
    company: "WANG CORPORATION CO., LTD.",
    period: "Sep 2023 - Jan 2026",
    description:
      "Delivered full-stack applications and internal automation tools spanning computer vision, data extraction, civic-safety systems, multilingual meeting workflows, and operational web applications.",
    responsibilities: [
      "Designed React and Next.js interfaces backed by APIs and relational data.",
      "Built AI-assisted extraction, summarization, and computer-vision workflows.",
      "Delivered internal tools for queueing, maintenance requests, and reporting.",
    ],
    achievements: [
      "Built reusable full-stack and automation patterns across multiple internal products.",
      "Converted unstructured inputs into structured datasets and operational dashboards.",
      "Shipped Dockerized services and data-backed applications for remote stakeholders.",
    ],
    technologies: ["React", "Next.js", "FastAPI", "PostgreSQL", "Directus", "Supabase", "Docker"],
    needsConfirmation: false,
  },
];
