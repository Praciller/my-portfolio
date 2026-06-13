import { ProjectCard } from "@/components/project-card";
import { ButtonLink } from "@/components/ui/button-link";
import { Section } from "@/components/ui/section";
import { flagshipProjects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      title="Flagship Case Studies"
      intro="Three concise case studies covering agentic RAG, multimodal product engineering, and time-series ML evaluation."
    >
      <div>
        {flagshipProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} priority={index === 0} />
        ))}
        <div className="mt-10">
          <ButtonLink href="/projects" variant="secondary">
            View All Projects
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
