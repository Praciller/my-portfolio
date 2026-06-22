import {
  Bot,
  CloudCog,
  Database,
  MonitorSmartphone,
  ServerCog,
} from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { skillGroups } from "@/data/skills";

const skillIcons = {
  "Data Engineering": Database,
  "AI Systems": Bot,
  "ML/MLOps": CloudCog,
  "Full Stack": ServerCog,
  "Thai AI/Data": MonitorSmartphone,
} as const;

export function SkillsSection() {
  return (
    <Section
      id="capabilities"
      title="Technical Focus"
      intro="Core engineering areas demonstrated by the public project evidence."
      tone="soft"
    >
      <div className="grid gap-x-10 gap-y-6 md:grid-cols-2">
        {skillGroups.map((group, index) => {
          const Icon = skillIcons[group.category as keyof typeof skillIcons];

          return (
            <Reveal
              key={group.category}
              delay={index * 90}
              className={index === skillGroups.length - 1 ? "md:col-span-2" : undefined}
            >
              <section className="group h-full rounded-2xl border border-border bg-background p-5 transition-[border-color,box-shadow,transform] duration-300 ease-out hover:border-accent/60 hover:shadow-[0_18px_45px_color-mix(in_oklch,var(--accent)_10%,transparent)] motion-safe:hover:-translate-y-1 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-contrast">
                    <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="text-lg font-extrabold leading-[1.3] tracking-[-0.02em]">
                    {group.category}
                  </h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-3">
                  {group.skills.map((skill) => (
                    <li key={skill} className="inline-flex items-center gap-2 text-sm font-medium text-muted">
                      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
