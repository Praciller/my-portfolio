import { Section } from "@/components/ui/section";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <Section
      id="capabilities"
      title="Capabilities"
      intro="The stack behind the public case studies, grouped by the work it enables."
      tone="soft"
    >
      <div className="grid gap-x-10 gap-y-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <section
            key={group.category}
            className="rounded-2xl border border-border bg-background p-5 sm:p-6 last:md:col-span-2"
          >
            <h3 className="text-lg font-extrabold leading-[1.3] tracking-[-0.02em]">
              {group.category}
            </h3>
            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-3">
              {group.skills.map((skill) => (
                <li key={skill} className="inline-flex items-center gap-2 text-sm font-medium text-muted">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Section>
  );
}
