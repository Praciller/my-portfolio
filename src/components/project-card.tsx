import { ArrowRight, ExternalLink, GitBranch } from "lucide-react";
import Link from "next/link";

import { ProjectVisual } from "@/components/project-visual";
import { ButtonLink } from "@/components/ui/button-link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
  featured?: boolean;
  reverse?: boolean;
};

export function ProjectCard({
  project,
  priority,
  featured = false,
  reverse = false,
}: ProjectCardProps) {
  const copyColumn = reverse ? "lg:col-start-2" : "lg:col-start-1";
  const visualColumn = reverse ? "lg:col-start-1" : "lg:col-start-2";

  return (
    <article
      className={
        featured
          ? "group grid gap-7 rounded-3xl border border-border bg-background p-5 sm:p-7 lg:grid-cols-[minmax(0,1.02fr)_minmax(360px,0.98fr)] lg:gap-12 lg:p-10"
          : "group grid gap-7 border-b border-border-soft py-10 last:border-b-0 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.85fr)] lg:gap-12 lg:py-14"
      }
    >
      <div className={copyColumn}>
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1.5 text-xs font-bold text-accent">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
            {project.presentationStatus}
          </span>
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-muted">
            {project.techStack.slice(0, 3).join(" + ")}
          </span>
        </div>
        <h3 className="mt-5 text-[clamp(1.6rem,3.5vw,2.65rem)] font-extrabold leading-[1.08] tracking-[-0.035em]">
          <Link href={`/projects/${project.slug}`} className="transition-colors hover:text-accent">
            {project.title}
          </Link>
        </h3>
        <p className="mt-4 max-w-2xl text-base leading-[1.7] text-muted">
          {project.description}
        </p>
      </div>

      <div className={`${visualColumn} lg:row-span-3 lg:row-start-1`}>
        <ProjectVisual project={project} priority={priority} />
      </div>

      <div className={`${copyColumn} grid gap-4 text-sm leading-[1.65] sm:grid-cols-2`}>
        <div className="rounded-2xl bg-surface p-4">
          <p className="font-bold text-foreground">What I built</p>
          <p className="mt-2 text-muted">{project.whatIBuilt}</p>
        </div>
        <div className="rounded-2xl bg-surface p-4">
          <p className="font-bold text-foreground">What it proves</p>
          <p className="mt-2 text-muted">{project.whatItProves}</p>
        </div>
      </div>

      <div className={copyColumn}>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex min-h-7 items-center rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          <ButtonLink href={`/projects/${project.slug}`} variant="primary" icon={ArrowRight}>
            Details
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
    </article>
  );
}
