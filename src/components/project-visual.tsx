import Image from "next/image";

import type { Project } from "@/data/projects";

type ProjectVisualProps = {
  project: Project;
  priority?: boolean;
};

export function ProjectVisual({ project, priority = false }: ProjectVisualProps) {
  if (project.screenshotUrl) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden border border-border bg-surface-strong">
        <Image
          src={project.screenshotUrl}
          alt={project.screenshotAlt}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 480px, 100vw"
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div
      className="project-frame aspect-[16/10] border border-border bg-background p-5"
      role="img"
      aria-label={project.screenshotAlt}
    >
      <div className="flex h-full flex-col justify-between border border-foreground/80 bg-background">
        <div className="grid grid-cols-[96px_1fr] border-b border-border">
          <div className="border-r border-border p-3 font-mono text-[10px] uppercase leading-none text-muted">
            {project.tags[0] ?? "Project"}
          </div>
          <div className="grid grid-cols-4 gap-2 p-3">
            <span className="h-2 bg-foreground" />
            <span className="h-2 bg-border" />
            <span className="h-2 bg-border" />
            <span className="h-2 bg-border" />
          </div>
        </div>
        <div className="grid flex-1 grid-cols-[1fr_120px] gap-4 p-5">
          <div className="space-y-3">
            <div className="h-4 w-3/4 bg-foreground" />
            <div className="h-3 w-full bg-border" />
            <div className="h-3 w-5/6 bg-border" />
            <div className="mt-6 grid grid-cols-3 gap-3">
              <span className="h-16 border border-border bg-surface-strong" />
              <span className="h-16 border border-border bg-surface-strong" />
              <span className="h-16 border border-border bg-surface-strong" />
            </div>
          </div>
          <div className="space-y-2 border-l border-border pl-4">
            <div className="h-3 bg-foreground" />
            <div className="h-3 bg-border" />
            <div className="h-3 bg-border" />
            <div className="h-20 border border-border" />
          </div>
        </div>
      </div>
    </div>
  );
}
