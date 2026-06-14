import { Section } from "@/components/ui/section";
import { profile } from "@/data/profile";

export function AboutSection() {
  return (
    <Section
      id="about"
      title="About"
      intro="Practical engineering across models, APIs, data, interfaces, and deployment."
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div>
          <p className="max-w-[68ch] text-xl font-semibold leading-[1.55] tracking-[-0.015em]">
            {profile.summary}
          </p>
          <p className="mt-6 max-w-[68ch] text-base leading-[1.75] text-muted">
            I use personal projects to show the parts that are often missing from AI demos:
            input validation, provider routing, safe fallback, measurable evaluation,
            honest limitations, and interfaces people can actually use.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-accent">
            How I work
          </p>
          <ol className="mt-5 grid gap-5">
            {profile.workingPrinciples.map((principle, index) => (
              <li key={principle} className="grid grid-cols-[2rem_1fr] gap-3 text-sm leading-[1.6]">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-soft font-mono text-xs text-accent">
                  {index + 1}
                </span>
                <span>{principle}</span>
              </li>
            ))}
          </ol>
          <p className="mt-6 border-t border-border-soft pt-5 text-sm text-muted">
            Based in {profile.location}. Targeting {profile.targetRoles.join(", ")} roles.
          </p>
        </div>
      </div>
    </Section>
  );
}
