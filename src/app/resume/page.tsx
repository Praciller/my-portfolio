import { Download } from "lucide-react";
import type { Metadata } from "next";

import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/button-link";
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

export default function ResumePage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
          <div>
            <h1 className="text-[clamp(2.5rem,7vw,4rem)] font-bold leading-[1.05]">
              Resume
            </h1>
            <p className="mt-6 max-w-[70ch] text-lg font-light leading-[1.65] text-muted">
              {profile.summary}
            </p>
          </div>
          <div className="border border-border p-5">
            <p className="font-mono text-xs uppercase tracking-[0.05em] text-muted">
              PDF
            </p>
            <p className="mt-4 text-xl font-semibold">AI Engineer Resume</p>
            <p className="mt-3 text-sm leading-[1.6] text-muted">
              Updated with current experience and flagship project evidence.
            </p>
            <div className="mt-6">
              <ButtonLink href="/resume.pdf" download icon={Download}>
                Download
              </ButtonLink>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-12 border-t border-border pt-10 lg:grid-cols-[280px_1fr]">
          <h2 className="text-2xl font-semibold">Profile</h2>
          <dl className="grid gap-4 text-sm sm:grid-cols-2">
            <div className="border-b border-border py-4">
              <dt className="text-muted">Email</dt>
              <dd className="mt-2">{profile.email}</dd>
            </div>
            <div className="border-b border-border py-4">
              <dt className="text-muted">Location</dt>
              <dd className="mt-2">{profile.location}</dd>
            </div>
            <div className="border-b border-border py-4">
              <dt className="text-muted">GitHub</dt>
              <dd className="mt-2">{profile.githubUrl}</dd>
            </div>
            <div className="border-b border-border py-4">
              <dt className="text-muted">LinkedIn</dt>
              <dd className="mt-2">{profile.linkedinUrl}</dd>
            </div>
          </dl>
        </div>

        <div className="mt-16 grid gap-12 border-t border-border pt-10 lg:grid-cols-[280px_1fr]">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <section key={group.category}>
                <h3 className="font-semibold">{group.category}</h3>
                <p className="mt-3 text-sm leading-[1.6] text-muted">{group.skills.join(", ")}</p>
              </section>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-12 border-t border-border pt-10 lg:grid-cols-[280px_1fr]">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="grid gap-6">
            {projects.slice(0, 4).map((project) => (
              <article key={project.id} className="border-b border-border pb-6">
                <h3 className="font-semibold">{project.title}</h3>
                <p className="mt-2 text-sm leading-[1.6] text-muted">{project.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-12 border-t border-border pt-10 lg:grid-cols-[280px_1fr]">
          <h2 className="text-2xl font-semibold">Experience</h2>
          <div className="grid gap-6">
            {experience.map((item) => (
              <article key={`${item.company}-${item.period}`} className="border-b border-border pb-6">
                <h3 className="font-semibold">{item.role}</h3>
                <p className="mt-2 text-sm text-muted">{item.company} / {item.period}</p>
                <p className="mt-3 text-sm leading-[1.6] text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        {education.length > 0 ? (
          <div className="mt-16 grid gap-12 border-t border-border pt-10 lg:grid-cols-[280px_1fr]">
            <h2 className="text-2xl font-semibold">Education</h2>
            <div className="grid gap-6">
              {education.map((item) => (
                <article key={`${item.institution}-${item.program}`} className="border-b border-border pb-6">
                  <h3 className="font-semibold">{item.institution}</h3>
                  <p className="mt-2 text-sm text-muted">{item.program}</p>
                </article>
              ))}
            </div>
          </div>
        ) : null}

        {certifications.length > 0 ? (
          <div className="mt-16 grid gap-12 border-t border-border pt-10 lg:grid-cols-[280px_1fr]">
            <h2 className="text-2xl font-semibold">Certifications</h2>
            <div className="grid gap-6">
              {certifications.map((item) => (
                <article key={`${item.issuer}-${item.name}`} className="border-b border-border pb-6">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="mt-2 text-sm text-muted">{item.issuer}</p>
                </article>
              ))}
            </div>
          </div>
        ) : null}
      </section>
    </PageShell>
  );
}
