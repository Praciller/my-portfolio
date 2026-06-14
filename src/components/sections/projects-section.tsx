import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { flagshipProjects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      title="Selected Work"
      intro="Three evidence-led case studies across agentic RAG, multimodal product engineering, and time-series ML evaluation."
      tone="soft"
    >
      <div>
        {flagshipProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            priority={index === 0}
            featured={index === 0}
            reverse={index === 2}
            revealDelay={index * 90}
          />
        ))}
        <Reveal delay={120} className="mt-5">
          <Link
            href="/projects"
            className="group flex min-h-20 items-center justify-between gap-5 rounded-2xl border border-accent bg-accent px-5 py-5 font-bold text-accent-contrast transition-[background-color,color,transform] duration-300 hover:-translate-y-0.5 hover:bg-transparent hover:text-accent focus-visible:-translate-y-0.5 focus-visible:bg-transparent focus-visible:text-accent sm:px-7"
          >
            <span>
              <span className="block text-lg">Explore all 6 case studies</span>
              <span className="mt-1 block text-sm font-medium opacity-80">
                AI engineering, data systems, and applied ML evidence
              </span>
            </span>
            <ArrowRight
              aria-hidden="true"
              className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1"
              strokeWidth={1.75}
            />
          </Link>
        </Reveal>
      </div>
    </Section>
  );
}
