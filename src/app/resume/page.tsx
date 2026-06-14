import {
  ArrowUpRight,
  BriefcaseBusiness,
  Download,
  GitBranch,
  Mail,
  MapPin,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { certifications } from "@/data/certifications";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

export const metadata: Metadata = {
  title: "Resume",
  description: "Web resume summary for Pakon Poomson.",
  alternates: {
    canonical: "/resume",
  },
};

type ResumeSectionProps = {
  title: string;
  children: ReactNode;
};

function ResumeSection({ title, children }: ResumeSectionProps) {
  return (
    <Reveal className="resume-section">
      <section className="grid gap-8 border-t border-border-soft py-12 lg:grid-cols-[240px_1fr] lg:gap-16 lg:py-16">
        <h2 className="text-2xl font-extrabold tracking-[-0.03em]">{title}</h2>
        <div>{children}</div>
      </section>
    </Reveal>
  );
}

export default function ResumePage() {
  const profileDetails = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: Mail,
    },
    {
      label: "Location",
      value: profile.location,
      icon: MapPin,
    },
    {
      label: "GitHub",
      value: "github.com/Praciller",
      href: profile.githubUrl,
      icon: GitBranch,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/pakon-poomson",
      href: profile.linkedinUrl,
      icon: BriefcaseBusiness,
    },
  ];

  return (
    <PageShell>
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-16">
          <Reveal>
            <span className="rounded-full bg-accent-soft px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-accent">
              Web resume
            </span>
            <h1 className="mt-6 text-[clamp(3rem,8vw,5.5rem)] font-extrabold leading-[0.98] tracking-[-0.055em]">
              {profile.name}
            </h1>
            <p className="mt-5 text-xl font-bold text-accent sm:text-2xl">
              {profile.headline}
            </p>
            <p className="mt-7 max-w-[70ch] text-base leading-[1.75] text-muted sm:text-lg">
              {profile.summary}
            </p>
          </Reveal>

          <Reveal delay={120} className="print-hidden">
            <aside className="rounded-3xl border border-border bg-surface p-6 surface-shadow sm:p-7">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-accent">
                Downloadable PDF
              </p>
              <p className="mt-4 text-2xl font-extrabold tracking-[-0.03em]">
                AI Engineer Resume
              </p>
              <p className="mt-3 text-sm leading-[1.65] text-muted">
                Current experience, technical capabilities, and flagship project evidence.
              </p>
              <div className="mt-6">
                <ButtonLink href="/resume.pdf" download icon={Download} size="lg">
                  Download PDF
                </ButtonLink>
              </div>
            </aside>
          </Reveal>
        </div>

        <ResumeSection title="Profile">
          <dl className="grid gap-4 sm:grid-cols-2">
            {profileDetails.map(({ label, value, href, icon: Icon }) => (
              <div
                key={label}
                className="rounded-2xl border border-border bg-surface p-5 transition-colors duration-200 hover:border-accent/60"
              >
                <dt className="flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-accent">
                  <Icon aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
                  {label}
                </dt>
                <dd className="mt-3 break-words text-sm font-semibold leading-[1.55]">
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="transition-colors hover:text-accent focus-visible:text-accent"
                    >
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </ResumeSection>

        <ResumeSection title="Capabilities">
          <div className="grid gap-6 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <section key={group.category}>
                <h3 className="text-lg font-extrabold tracking-[-0.02em]">
                  {group.category}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-muted"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection title="Experience">
          <div className="relative space-y-10 before:absolute before:inset-y-2 before:left-[7px] before:w-px before:bg-border">
            {experience.map((item) => (
              <article key={`${item.company}-${item.period}`} className="relative pl-9">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-4 border-background bg-accent ring-1 ring-border"
                />
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-accent">
                  {item.period}
                </p>
                <h3 className="mt-3 text-xl font-extrabold tracking-[-0.025em]">
                  {item.role}
                </h3>
                <p className="mt-1 font-semibold">{item.company}</p>
                <p className="mt-4 max-w-[70ch] text-sm leading-[1.7] text-muted">
                  {item.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full bg-accent-soft px-3 py-1.5 text-xs font-semibold text-accent"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </ResumeSection>

        <ResumeSection title="Selected Projects">
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.slice(0, 4).map((project) => (
              <article
                key={project.id}
                className="group rounded-2xl border border-border bg-surface p-5 transition-[border-color,transform] duration-200 hover:border-accent/60 motion-safe:hover:-translate-y-0.5"
              >
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-accent">
                  {project.presentationStatus}
                </p>
                <h3 className="mt-3 text-lg font-extrabold tracking-[-0.02em]">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-start gap-2 transition-colors hover:text-accent focus-visible:text-accent"
                  >
                    {project.title}
                    <ArrowUpRight
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-focus-within:translate-x-0.5 group-focus-within:-translate-y-0.5"
                    />
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-[1.65] text-muted">
                  {project.whatIBuilt}
                </p>
              </article>
            ))}
          </div>
        </ResumeSection>

        {education.length > 0 ? (
          <ResumeSection title="Education">
            <div className="grid gap-5">
              {education.map((item) => (
                <article
                  key={`${item.institution}-${item.program}`}
                  className="rounded-2xl border border-border bg-surface p-5"
                >
                  <h3 className="text-lg font-extrabold">{item.institution}</h3>
                  <p className="mt-2 font-semibold">
                    {item.program}{item.field ? `, ${item.field}` : ""}
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    {[item.period, item.notes].filter(Boolean).join(" · ")}
                  </p>
                </article>
              ))}
            </div>
          </ResumeSection>
        ) : null}

        {certifications.length > 0 ? (
          <ResumeSection title="Certification">
            <div className="grid gap-5">
              {certifications.map((item) => (
                <article
                  key={`${item.issuer}-${item.name}`}
                  className="rounded-2xl border border-border bg-surface p-5"
                >
                  <h3 className="text-lg font-extrabold">{item.name}</h3>
                  <p className="mt-2 text-sm text-muted">
                    {[item.issuer, item.issued].filter(Boolean).join(" · ")}
                  </p>
                  {item.credentialUrl ? (
                    <a
                      href={item.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-accent hover:underline focus-visible:underline"
                    >
                      View credential
                      <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
          </ResumeSection>
        ) : null}
      </div>
    </PageShell>
  );
}
