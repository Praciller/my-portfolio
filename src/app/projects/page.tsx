import type { Metadata } from "next";

import { PageShell } from "@/components/layout/page-shell";
import { ProjectCard } from "@/components/project-card";
import { aiEngineeringProjects, dataMlProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "AI engineering, data, and machine learning projects by Pakon Poomson.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:py-24">
        <h1 className="max-w-4xl text-[clamp(2.5rem,7vw,4rem)] font-bold leading-[1.05]">
          Projects
        </h1>
        <p className="mt-6 max-w-[68ch] text-lg font-light leading-[1.65] text-muted">
          Six GitHub-backed projects selected for AI Engineer, GenAI Engineer,
          Data Engineer, and applied ML roles.
        </p>
        <section className="mt-16">
          <h2 className="text-2xl font-semibold">Featured AI Engineering Projects</h2>
          <p className="mt-3 max-w-[68ch] text-base font-light leading-[1.65] text-muted">
            Agentic RAG, multimodal extraction, and validated document-analysis products.
          </p>
          <div className="mt-8">
            {aiEngineeringProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} priority={index === 0} />
            ))}
          </div>
        </section>
        <section className="mt-20">
          <h2 className="text-2xl font-semibold">Data &amp; ML Projects</h2>
          <p className="mt-3 max-w-[68ch] text-base font-light leading-[1.65] text-muted">
            Reproducible forecasting, explainable classification, and public-data intelligence.
          </p>
          <div className="mt-8">
            {dataMlProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </section>
    </PageShell>
  );
}
