import { Section } from "@/components/ui/section";
import { skillGroups } from "@/data/skills";

export function SkillsSection() {
  return (
    <Section id="skills" title="Skills" intro="Grouped from requirements plus public GitHub project evidence.">
      <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <section key={group.category} className="border-t border-border pt-4">
            <h3 className="text-xl font-semibold leading-[1.3]">{group.category}</h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li key={skill} className="inline-flex h-7 items-center border border-border px-3 text-xs uppercase tracking-[0.05em] text-muted">
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
