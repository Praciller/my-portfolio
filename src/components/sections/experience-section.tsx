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
          <article key={`${item.company}-${item.role}`} className="grid gap-6 border-b border-border py-8 lg:grid-cols-[220px_1fr]">
            <div className="font-mono text-xs uppercase tracking-[0.05em] text-muted">
              {item.period}
            </div>
            <div>
              <h3 className="text-xl font-semibold leading-[1.3]">{item.role}</h3>
              <p className="mt-2 text-sm text-muted">{item.company}</p>
              <p className="mt-5 max-w-[72ch] text-base font-light leading-[1.65] text-muted">
                {item.description}
              </p>
              <div className="mt-6 grid gap-5 text-sm leading-[1.6] md:grid-cols-3">
                <div>
                  <p className="font-semibold">Responsibilities</p>
                  <ul className="mt-3 space-y-2 text-muted">
                    {item.responsibilities.map((entry) => (
                      <li key={entry}>{entry}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Achievements</p>
                  <ul className="mt-3 space-y-2 text-muted">
                    {item.achievements.map((entry) => (
                      <li key={entry}>{entry}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold">Technologies</p>
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
