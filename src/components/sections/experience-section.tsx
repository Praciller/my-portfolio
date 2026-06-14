import { Section } from "@/components/ui/section";
import { experience } from "@/data/experience";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      title="Experience"
      intro="AI engineering, full-stack delivery, automation, and data-infrastructure work."
    >
      <div className="border-t border-border">
        {experience.map((item) => (
          <article key={`${item.company}-${item.role}`} className="grid gap-6 border-b border-border py-9 lg:grid-cols-[200px_1fr]">
            <div className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-accent">
              {item.period}
            </div>
            <div>
              <h3 className="text-2xl font-extrabold leading-[1.2] tracking-[-0.025em]">{item.role}</h3>
              <p className="mt-2 text-sm font-semibold text-muted">{item.company}</p>
              <p className="mt-5 max-w-[68ch] text-base leading-[1.75] text-muted">
                {item.description}
              </p>
              <div className="mt-7 grid gap-6 text-sm leading-[1.65] md:grid-cols-3">
                <div>
                  <p className="font-extrabold">Responsibilities</p>
                  <ul className="mt-3 space-y-2 text-muted">
                    {item.responsibilities.map((entry) => (
                      <li key={entry}>{entry}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-extrabold">Achievements</p>
                  <ul className="mt-3 space-y-2 text-muted">
                    {item.achievements.map((entry) => (
                      <li key={entry}>{entry}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-extrabold">Technologies</p>
                  <ul className="mt-3 space-y-2 text-muted">
                    {item.technologies.map((entry) => (
                      <li key={entry}>{entry}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
