import { BriefcaseBusiness, Download, GitBranch, Mail } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Section } from "@/components/ui/section";
import { profile } from "@/data/profile";

export function ContactSection() {
  return (
    <Section
      id="contact"
      title="Let’s Connect"
      intro="Direct contact, public engineering evidence, and an updated resume."
      tone="soft"
    >
      <div className="rounded-3xl bg-surface-inverse p-6 text-background sm:p-8 lg:p-10">
        <h3 className="max-w-[18ch] text-[clamp(2rem,5vw,3.75rem)] font-extrabold leading-[1.05] tracking-[-0.045em]">
          Interested in practical AI work? Let’s talk.
        </h3>
        <p className="mt-5 max-w-[62ch] text-base leading-[1.7] text-background/70">
          Email is the fastest way to reach me. GitHub contains the implementation
          evidence, LinkedIn covers current experience, and the resume provides a
          concise career summary.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink
            href={`mailto:${profile.email}`}
            icon={Mail}
            variant="inverse"
          >
            Email me
          </ButtonLink>
          <ButtonLink
            href="/resume.pdf"
            download
            icon={Download}
            variant="inverse-outline"
          >
            Resume
          </ButtonLink>
          <ButtonLink
            href={profile.githubUrl}
            external
            icon={GitBranch}
            variant="inverse-outline"
          >
            GitHub
          </ButtonLink>
          <ButtonLink
            href={profile.linkedinUrl}
            external
            icon={BriefcaseBusiness}
            variant="inverse-outline"
          >
            LinkedIn
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}
