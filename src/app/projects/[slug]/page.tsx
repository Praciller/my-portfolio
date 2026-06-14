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
      <article className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-20">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
          Projects
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(420px,1.08fr)] lg:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1.5 text-xs font-bold text-accent">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
                {project.presentationStatus}
              </span>
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-muted">
                {project.tags.slice(0, 3).join(" / ")}
              </span>
            </div>
            <h1 className="mt-6 max-w-4xl text-[clamp(2.75rem,7vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.055em]">
              {project.title}
            </h1>
            <p className="mt-7 max-w-[68ch] text-lg leading-[1.75] text-muted">
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

        <dl className="mt-12 grid rounded-2xl border border-border bg-surface sm:grid-cols-3">
          <div className="border-b border-border p-5 sm:border-b-0 sm:border-r">
            <dt className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-accent">
              Project type
            </dt>
            <dd className="mt-2 text-sm font-bold">
              {project.category === "ai-engineering" ? "AI engineering" : "Data and ML"}
            </dd>
          </div>
          <div className="border-b border-border p-5 sm:border-b-0 sm:border-r">
            <dt className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-accent">
              Core stack
            </dt>
            <dd className="mt-2 text-sm font-bold">{project.techStack.slice(0, 3).join(", ")}</dd>
          </div>
          <div className="p-5">
            <dt className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-accent">
              Delivery
            </dt>
            <dd className="mt-2 text-sm font-bold">{project.presentationStatus}</dd>
          </div>
        </dl>

        <div className="mt-20 grid gap-10 border-t border-border pt-10 lg:grid-cols-[240px_1fr] lg:gap-16">
          <div>
            <h2 className="text-3xl font-extrabold leading-[1.1] tracking-[-0.035em]">
              Case Study
            </h2>
            <p className="mt-4 max-w-[30ch] text-sm leading-[1.65] text-muted">
              The problem, implementation decisions, measured evidence, and next improvements.
            </p>
          </div>
          <div className="grid gap-12">
            <section>
              <h3 className="text-xl font-extrabold tracking-[-0.02em]">Overview</h3>
              <p className="mt-4 max-w-[72ch] text-base leading-[1.75] text-muted">
                {project.whatIBuilt}
              </p>
            </section>
            <section>
              <h3 className="text-xl font-extrabold tracking-[-0.02em]">Problem</h3>
              <p className="mt-4 max-w-[72ch] text-base leading-[1.75] text-muted">
                {project.problem}
              </p>
            </section>
            <section>
              <h3 className="text-xl font-extrabold tracking-[-0.02em]">Solution</h3>
              <p className="mt-4 max-w-[72ch] text-base leading-[1.75] text-muted">
                {project.solution}
              </p>
            </section>
            <section>
              <h3 className="text-xl font-extrabold tracking-[-0.02em]">Outcome</h3>
              <p className="mt-4 max-w-[72ch] text-base leading-[1.75] text-muted">
                {project.outcome}
              </p>
            </section>
            <section className="rounded-2xl bg-accent-soft p-5 sm:p-6">
              <h3 className="text-xl font-extrabold tracking-[-0.02em]">What It Proves</h3>
              <p className="mt-4 text-base leading-[1.7] text-foreground">
                {project.whatItProves}
              </p>
            </section>
            <section>
              <h3 className="text-xl font-extrabold tracking-[-0.02em]">Key Features</h3>
              <ul className="mt-5 grid gap-3 text-base leading-[1.7] text-muted">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 rounded-xl bg-surface p-4">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-extrabold tracking-[-0.02em]">Architecture</h3>
              <ol className="mt-5 grid gap-3 text-sm text-muted sm:grid-cols-2 lg:grid-cols-3">
                {project.architecture.map((step, index) => (
                  <li key={step} className="rounded-xl border border-border bg-background p-4">
                    <span className="font-mono text-xs uppercase tracking-[0.08em] text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-3 font-semibold text-foreground">{step}</p>
                  </li>
                ))}
              </ol>
            </section>
            <section>
              <h3 className="text-xl font-extrabold tracking-[-0.02em]">Tech Stack</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <li key={tech} className="inline-flex min-h-8 items-center rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted">
                    {tech}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-extrabold tracking-[-0.02em]">
                Challenges &amp; Trade-offs
              </h3>
              <ul className="mt-5 grid gap-3 text-base leading-[1.7] text-muted">
                {project.metricsOrLessons.map((entry) => (
                  <li key={entry} className="border-t border-border-soft pt-4">
                    {entry}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h3 className="text-xl font-extrabold tracking-[-0.02em]">Future Improvements</h3>
              <ul className="mt-5 grid gap-3 text-base leading-[1.7] text-muted">
                {project.futureImprovements.map((improvement) => (
                  <li key={improvement} className="border-t border-border-soft pt-4">
                    {improvement}
                  </li>
                ))}
              </ul>
            </section>
            <p className="rounded-xl border border-border bg-surface p-4 font-mono text-[0.68rem] uppercase leading-[1.7] tracking-[0.08em] text-muted">
              {project.sourceNote}
            </p>
          </div>
        </div>
      </article>
    </PageShell>
  );
}
