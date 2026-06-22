import { PageShell } from "@/components/layout/page-shell";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { EngineeringEvidenceSection } from "@/components/sections/engineering-evidence-section";
import { HiringSection } from "@/components/sections/hiring-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";

export default function Home() {
  return (
    <PageShell>
      <HeroSection />
      <ProjectsSection />
      <EngineeringEvidenceSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <HiringSection />
      <ContactSection />
    </PageShell>
  );
}
