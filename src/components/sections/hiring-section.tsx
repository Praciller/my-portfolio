import { BriefcaseBusiness, Mail } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Section } from "@/components/ui/section";
import { hiringFit, hiringNote, hiringServices } from "@/data/hiring";
import { profile } from "@/data/profile";

export function HiringSection() {
  return (
    <Section
      id="work"
      title="How I Can Contribute"
      intro="Practical delivery areas supported by the public projects and current engineering experience."
    >
      <div className="grid gap-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
          <div>
            <h3 className="text-2xl font-extrabold leading-[1.15] tracking-[-0.025em]">
              From uncertain inputs to a deployable workflow
            </h3>
            <p className="mt-5 max-w-[68ch] text-base leading-[1.75] text-muted">
              I can contribute across AI-enabled applications, retrieval workflows,
              structured extraction, backend APIs, data systems, and the React
              interfaces that make those systems understandable.
            </p>
          </div>
          <div className="rounded-2xl bg-accent-soft p-5">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-accent">
              Open to
            </p>
            <ul className="mt-4 grid gap-3 text-sm leading-[1.6]">
              {hiringFit.map((item) => (
                <li key={item} className="border-b border-border pb-3 last:border-b-0 last:pb-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border">
          {hiringServices.map((service) => (
            <article key={service.title} className="grid gap-5 border-b border-border py-7 lg:grid-cols-[220px_1fr]">
              <h3 className="text-lg font-extrabold leading-[1.3] tracking-[-0.015em]">
                {service.title}
              </h3>
              <div>
                <p className="max-w-[68ch] text-base leading-[1.7] text-muted">
                  {service.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.evidence.map((item) => (
                    <span
                      key={item}
                      className="inline-flex min-h-7 items-center rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="grid gap-6 rounded-2xl border border-border bg-surface p-5 lg:grid-cols-[1fr_auto] lg:items-center">
          <p className="max-w-[72ch] text-sm leading-[1.6] text-muted">{hiringNote}</p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={`mailto:${profile.email}`} icon={Mail}>
              Email Me
            </ButtonLink>
            <ButtonLink href={profile.linkedinUrl} variant="secondary" external icon={BriefcaseBusiness}>
              LinkedIn
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
