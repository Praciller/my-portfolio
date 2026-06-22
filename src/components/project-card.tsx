import { ArrowRight, ExternalLink, GitBranch } from "lucide-react";
import Link from "next/link";

import { ProjectVisual } from "@/components/project-visual";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
  featured?: boolean;
  reverse?: boolean;
  revealDelay?: number;
};

export function ProjectCard({
  project,
  priority,
  featured = false,
  reverse = false,
  revealDelay = 0,
}: ProjectCardProps) {
  const copyColumn = reverse ? "lg:col-start-2" : "lg:col-start-1";
  const visualColumn = reverse ? "lg:col-start-1" : "lg:col-start-2";

  return (
    <Reveal delay={revealDelay}>
      <article
        className={
          featured
            ? "group grid gap-7 rounded-3xl border border-border bg-background p-5 transition-[border-color,box-shadow] duration-300 hover:border-accent/50 hover:shadow-[0_24px_60px_color-mix(in_oklch,var(--accent)_9%,transparent)] focus-within:border-accent/60 sm:p-7 lg:grid-cols-[minmax(0,1.02fr)_minmax(360px,0.98fr)] lg:gap-12 lg:p-10"
            : "group grid gap-7 border-b border-border-soft pt-10 pb-8 last:border-b-0 last:pb-3 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.85fr)] lg:gap-12 lg:pt-14 lg:pb-10 lg:last:pb-4"
        }
      >
      <div className={copyColumn}>
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1.5 text-xs font-bold text-accent">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
            {project.presentationStatus}
          </span>
          <span className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-muted">
            {project.categoryLabel}
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
        <p className="mt-3 max-w-2xl text-sm leading-[1.65] text-muted">
          <strong className="font-bold text-foreground">Role signal:</strong> {project.roleSignal}
        </p>
      </div>

      <div className={`${visualColumn} lg:row-span-3 lg:row-start-1`}>
        <ProjectVisual project={project} priority={priority} />
      </div>

      <div className={`${copyColumn} grid gap-4 text-sm leading-[1.6] sm:grid-cols-2 lg:grid-cols-1`}>
        <div className="rounded-2xl bg-surface p-4">
          <p className="font-bold text-foreground">What I built</p>
          <ul className="mt-3 space-y-2.5 text-muted">
            <li className="grid grid-cols-[8px_1fr] gap-2.5">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
              <span><strong className="font-bold text-foreground">System:</strong> {project.whatIBuilt}</span>
            </li>
            <li className="grid grid-cols-[8px_1fr] gap-2.5">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
              <span><strong className="font-bold text-foreground">Implementation:</strong> {project.highlights[0]}</span>
            </li>
          </ul>
        </div>
        <div className="rounded-2xl bg-surface p-4">
          <p className="font-bold text-foreground">What it proves</p>
          <ul className="mt-3 space-y-2.5 text-muted">
            <li className="grid grid-cols-[8px_1fr] gap-2.5">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
              <span><strong className="font-bold text-foreground">Skills:</strong> {project.whatItProves}</span>
            </li>
            <li className="grid grid-cols-[8px_1fr] gap-2.5">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
              <span><strong className="font-bold text-foreground">Core stack:</strong> {project.techStack.slice(0, 4).join(", ")}</span>
            </li>
          </ul>
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
    </Reveal>
  );
}
