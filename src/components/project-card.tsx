import { ArrowRight, ExternalLink, GitBranch } from "lucide-react";
import Link from "next/link";

import { ProjectVisual } from "@/components/project-visual";
import { ButtonLink } from "@/components/ui/button-link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
};

export function ProjectCard({ project, priority }: ProjectCardProps) {
  return (
    <article className="grid gap-8 border-t border-border py-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,460px)] lg:items-start">
      <div>
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.05em] text-muted">
          <span>{project.flagship ? "Flagship case study" : project.status}</span>
          <span aria-hidden="true">/</span>
          <span>{project.techStack.slice(0, 3).join(" + ")}</span>
        </div>
        <h3 className="mt-4 text-[clamp(1.35rem,3vw,2rem)] font-semibold leading-[1.2]">
          <Link href={`/projects/${project.slug}`} className="hover:underline">
            {project.title}
          </Link>
        </h3>
        <p className="mt-4 max-w-2xl text-base font-light leading-[1.65] text-muted">
          {project.description}
        </p>
        <div className="mt-6 grid gap-4 text-sm leading-[1.6] md:grid-cols-2">
          <p>
            <span className="font-semibold text-foreground">What I built: </span>
            {project.whatIBuilt}
          </p>
          <p>
            <span className="font-semibold text-foreground">What it proves: </span>
            {project.whatItProves}
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="inline-flex h-7 items-center border border-border px-3 text-xs uppercase tracking-[0.05em] text-muted">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href={`/projects/${project.slug}`} variant="primary" icon={ArrowRight}>
            Case Study
          </ButtonLink>
          <ButtonLink href={project.githubUrl} variant="secondary" external icon={GitBranch}>
            GitHub
          </ButtonLink>
          {project.liveDemoUrl ? (
            <ButtonLink href={project.liveDemoUrl} variant="ghost" external icon={ExternalLink}>
              Demo
            </ButtonLink>
          ) : null}
        </div>
      </div>
      <ProjectVisual project={project} priority={priority} />
    </article>
  );
}
