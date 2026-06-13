import { PageShell } from "@/components/layout/page-shell";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HiringSection } from "@/components/sections/hiring-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ResumeSection } from "@/components/sections/resume-section";
import { SkillsSection } from "@/components/sections/skills-section";

export default function Home() {
  return (
    <PageShell>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <HiringSection />
      <ProjectsSection />
      <ExperienceSection />
      <ResumeSection />
      <ContactSection />
    </PageShell>
  );
}
