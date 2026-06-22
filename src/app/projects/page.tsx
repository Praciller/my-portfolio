import type { Metadata } from "next";

import { PageShell } from "@/components/layout/page-shell";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/ui/reveal";
import { aiEngineeringProjects, dataMlProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Data engineering, RAG, ML/MLOps, Thai NLP, multimodal AI, and public-data projects by Pakon Poomson.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <Reveal>
          <span className="rounded-full bg-accent-soft px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-accent">
            Public engineering evidence
          </span>
          <h1 className="mt-6 max-w-4xl text-[clamp(3rem,8vw,5.5rem)] font-extrabold leading-[0.98] tracking-[-0.055em]">
            Technical evidence across data and AI systems.
          </h1>
          <p className="mt-7 max-w-[68ch] text-lg leading-[1.75] text-muted">
            Six GitHub-backed case studies covering data platforms, RAG evaluation,
            ML/MLOps, multimodal extraction, Thai NLP governance, and public-data analytics.
          </p>
        </Reveal>
        <section className="mt-16">
          <Reveal>
            <h2 className="text-2xl font-extrabold tracking-[-0.025em]">
              AI Engineering
            </h2>
            <p className="mt-3 max-w-[68ch] text-base leading-[1.7] text-muted">
              RAG systems, multimodal extraction, and Thai NLP governance workflows.
            </p>
          </Reveal>
          <div className="mt-10">
            {aiEngineeringProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                priority={index === 0}
                featured={index === 0}
                reverse={index === 2}
                revealDelay={index * 90}
              />
            ))}
          </div>
        </section>
        <section className="mt-20">
          <Reveal>
            <h2 className="text-2xl font-extrabold tracking-[-0.025em]">
              Data &amp; ML
            </h2>
            <p className="mt-3 max-w-[68ch] text-base leading-[1.7] text-muted">
              Local-first data platforms, reproducible forecasting, and public-data intelligence.
            </p>
          </Reveal>
          <div className="mt-10">
            {dataMlProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                featured={index === 0}
                reverse={index === 2}
                revealDelay={index * 90}
              />
            ))}
          </div>
        </section>
      </section>
    </PageShell>
  );
}
