import { ArrowLeft, ExternalLink, GitBranch } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageShell } from "@/components/layout/page-shell";
import { ProjectVisual } from "@/components/project-visual";
import { ButtonLink } from "@/components/ui/button-link";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Pakon Poomson`,
      description: project.description,
      url: `/projects/${project.slug}`,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <PageShell>
      <article className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:py-20">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted hover:text-foreground">
          <ArrowLeft aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
          Projects
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_460px] lg:items-start">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.05em] text-muted">
              {project.flagship ? "Flagship case study" : project.status} / {project.tags.join(" / ")}
            </div>
            <h1 className="mt-5 max-w-4xl text-[clamp(2.5rem,7vw,4rem)] font-bold leading-[1.05]">
              {project.title}
            </h1>
            <p className="mt-6 max-w-[70ch] text-lg font-light leading-[1.65] text-muted">
              {project.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={project.githubUrl} external icon={GitBranch}>
                GitHub
              </ButtonLink>
              {project.liveDemoUrl ? (
                <ButtonLink href={project.liveDemoUrl} variant="secondary" external icon={ExternalLink}>
                  Live Demo
                </ButtonLink>
              ) : null}
            </div>
          </div>
          <ProjectVisual project={project} priority />
        </div>

        <div className="mt-16 grid gap-10 border-t border-border pt-10 lg:grid-cols-[280px_1fr]">
          <h2 className="text-2xl font-semibold leading-[1.2]">Case Study</h2>
          <div className="grid gap-10">
            <section>
              <h3 className="text-xl font-semibold">Problem</h3>
              <p className="mt-4 max-w-[74ch] text-base font-light leading-[1.65] text-muted">
                {project.problem}
              </p>
            </section>
            <section>
              <h3 className="text-xl font-semibold">Approach</h3>
              <p className="mt-4 max-w-[74ch] text-base font-light leading-[1.65] text-muted">
                {project.solution}
              </p>
            </section>
            <section>
              <h3 className="text-xl font-semibold">Outcome</h3>
              <p className="mt-4 max-w-[74ch] text-base font-light leading-[1.65] text-muted">
                {project.outcome}
              </p>
            </section>
            <section className="grid gap-6 md:grid-cols-2">
              <div className="border-t border-border pt-5">
                <h3 className="text-xl font-semibold">What I Built</h3>
                <p className="mt-4 text-base font-light leading-[1.65] text-muted">
                  {project.whatIBuilt}
                </p>
              </div>
              <div className="border-t border-border pt-5">
                <h3 className="text-xl font-semibold">What It Proves</h3>
                <p className="mt-4 text-base font-light leading-[1.65] text-muted">
                  {project.whatItProves}
                </p>
              </div>
            </section>
            <section>
              <h3 className="text-xl font-semibold">Key Features</h3>
              <ul className="mt-4 grid gap-3 text-base font-light leading-[1.65] text-muted">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="border-t border-border-soft pt-3">
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold">Architecture</h3>
              <ol className="mt-4 grid gap-2 text-sm text-muted sm:grid-cols-2 lg:grid-cols-3">
                {project.architecture.map((step, index) => (
                  <li key={step} className="border border-border p-4">
                    <span className="font-mono text-xs uppercase tracking-[0.05em] text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-3 text-foreground">{step}</p>
                  </li>
                ))}
              </ol>
            </section>
            <section>
              <h3 className="text-xl font-semibold">Tech Stack</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <li key={tech} className="inline-flex h-7 items-center border border-border px-3 text-xs uppercase tracking-[0.05em] text-muted">
                    {tech}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold">Metrics &amp; Lessons</h3>
              <ul className="mt-4 grid gap-3 text-base font-light leading-[1.65] text-muted">
                {project.metricsOrLessons.map((entry) => (
                  <li key={entry} className="border-t border-border-soft pt-3">
                    {entry}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-semibold">Future Improvements</h3>
              <ul className="mt-4 grid gap-3 text-base font-light leading-[1.65] text-muted">
                {project.futureImprovements.map((improvement) => (
                  <li key={improvement} className="border-t border-border-soft pt-3">
                    {improvement}
                  </li>
                ))}
              </ul>
            </section>
            <p className="border-t border-border pt-6 font-mono text-xs uppercase tracking-[0.05em] text-muted">
              {project.sourceNote}
            </p>
          </div>
        </div>
      </article>
    </PageShell>
  );
}
