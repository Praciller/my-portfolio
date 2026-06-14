import { BriefcaseBusiness, Download, GitBranch, PanelsTopLeft } from "lucide-react";

import { ProjectVisual } from "@/components/project-visual";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export function HeroSection() {
  const evidenceProject =
    projects.find((project) => project.id === "customer-support-rag-triage-agent") ??
    projects[0];

  return (
    <section className="relative overflow-hidden border-b border-border-soft">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)] lg:gap-16 lg:py-24">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-accent-soft px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-accent">
              {profile.heroLabel}
            </span>
            <span className="text-sm font-semibold text-muted">{profile.name}</span>
          </div>
          <h1 className="mt-6 max-w-[16ch] text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold leading-[0.98] tracking-[-0.055em] text-balance">
            {profile.heroTitle}
          </h1>
          <p className="mt-7 max-w-[68ch] text-base leading-[1.75] text-muted sm:text-lg">
            {profile.shortIntro}
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
            <ButtonLink href="/projects" icon={PanelsTopLeft}>
              View Projects
            </ButtonLink>
            <ButtonLink
              href="/resume.pdf"
              variant="secondary"
              download
              icon={Download}
            >
              Resume
            </ButtonLink>
            <ButtonLink href={profile.githubUrl} variant="ghost" external icon={GitBranch}>
              GitHub
            </ButtonLink>
            <ButtonLink href={profile.linkedinUrl} variant="ghost" external icon={BriefcaseBusiness}>
              LinkedIn
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={140} className="relative">
          <div aria-hidden="true" className="absolute -inset-5 -z-10 rounded-[2rem] bg-accent-soft" />
          <ProjectVisual project={evidenceProject} priority />
          <div className="mt-4 flex items-start justify-between gap-5">
            <div>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-accent">
                Selected engineering evidence
              </p>
              <p className="mt-2 text-sm font-bold">{evidenceProject.title}</p>
            </div>
            <span className="shrink-0 rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-muted">
              {evidenceProject.presentationStatus}
            </span>
          </div>
        </Reveal>
      </div>

      <Reveal delay={220}>
        <dl className="mx-auto grid max-w-7xl border-t border-border-soft px-5 sm:px-8 md:grid-cols-3">
          {profile.proofPoints.map((point) => (
            <div
              key={point.label}
              className="border-b border-border-soft py-5 md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <dt className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-accent">
                {point.label}
              </dt>
              <dd className="mt-2 text-sm font-semibold leading-[1.5]">{point.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
