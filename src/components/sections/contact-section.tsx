import { BriefcaseBusiness, GitBranch, Mail } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Section } from "@/components/ui/section";
import { profile } from "@/data/profile";

export function ContactSection() {
  return (
    <Section id="contact" title="Contact" intro="Direct contact and public engineering profiles.">
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        <p className="max-w-[68ch] text-lg font-light leading-[1.65] text-muted">
          Use email for direct contact, or review current work through GitHub and LinkedIn.
        </p>
        <div className="flex flex-col gap-3">
          <ButtonLink href={`mailto:${profile.email}`} icon={Mail}>
            {profile.email}
          </ButtonLink>
          <ButtonLink href={profile.githubUrl} variant="secondary" external icon={GitBranch}>
            GitHub
          </ButtonLink>
          <ButtonLink href={profile.linkedinUrl} variant="secondary" external icon={BriefcaseBusiness}>
            LinkedIn
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
