import { ProjectCard } from "@/components/project-card";
import { ButtonLink } from "@/components/ui/button-link";
import { Section } from "@/components/ui/section";
import { flagshipProjects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      title="Selected Work"
      intro="Three evidence-led case studies across agentic RAG, multimodal product engineering, and time-series ML evaluation."
      tone="soft"
    >
      <div className="space-y-4">
        {flagshipProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            priority={index === 0}
            featured={index === 0}
            reverse={index === 2}
          />
        ))}
        <div className="pt-6">
          <ButtonLink href="/projects" variant="secondary">
            View all six projects
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
