import { BriefcaseBusiness, Mail } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Section } from "@/components/ui/section";
import { hiringFit, hiringNote, hiringServices } from "@/data/hiring";
import { profile } from "@/data/profile";

export function HiringSection() {
  return (
    <Section
      id="hire"
      title="Hiring & Freelance"
      intro="Work I can do for employers, teams, and freelance clients."
    >
      <div className="grid gap-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
          <div>
            <h3 className="text-2xl font-semibold leading-[1.2]">
              Practical AI and full-stack delivery
            </h3>
            <p className="mt-5 max-w-[72ch] text-base font-light leading-[1.65] text-muted">
              I can help build AI-enabled web applications, automation tools, data extraction flows, RAG assistants, backend APIs, and polished portfolio-ready MVPs. The work below is based on public GitHub projects and confirmed profile information.
            </p>
          </div>
          <div className="border border-border p-5">
            <p className="font-mono text-xs uppercase tracking-[0.05em] text-muted">
              Open to
            </p>
            <ul className="mt-4 grid gap-3 text-sm leading-[1.6]">
              {hiringFit.map((item) => (
                <li key={item} className="border-b border-border-soft pb-3 last:border-b-0 last:pb-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border">
          {hiringServices.map((service) => (
            <article key={service.title} className="grid gap-5 border-b border-border py-7 lg:grid-cols-[240px_1fr]">
              <h3 className="text-xl font-semibold leading-[1.3]">{service.title}</h3>
              <div>
                <p className="max-w-[72ch] text-base font-light leading-[1.65] text-muted">
                  {service.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.evidence.map((item) => (
                    <span
                      key={item}
                      className="inline-flex h-7 items-center border border-border px-3 text-xs uppercase tracking-[0.05em] text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="grid gap-6 border border-border p-5 lg:grid-cols-[1fr_auto] lg:items-center">
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
