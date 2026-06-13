import { BriefcaseBusiness, Download, GitBranch, Mail, PanelsTopLeft } from "lucide-react";
import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { profile } from "@/data/profile";

export function HeroSection() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-8 px-6 py-10 sm:px-8 lg:grid-cols-[1fr_320px] lg:gap-12 lg:py-14">
      <div>
        <div className="flex items-start justify-between gap-5">
          <h1 className="max-w-4xl text-[clamp(3rem,8vw,4rem)] font-bold leading-[1.05] text-balance">
            {profile.name}
          </h1>
          <Image
            src={profile.avatarUrl}
            alt="GitHub avatar for Pakon Poomson"
            width={96}
            height={96}
            priority
            className="mt-1 hidden aspect-square w-20 shrink-0 border border-border object-cover grayscale max-[639px]:block"
          />
        </div>
        <p className="mt-6 max-w-2xl text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold leading-[1.1]">
          {profile.headline}
        </p>
        <p className="mt-8 max-w-[68ch] text-base font-light leading-[1.65] text-muted sm:text-lg">
          {profile.shortIntro}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <ButtonLink href="/projects" size="lg" icon={PanelsTopLeft}>
            View Projects
          </ButtonLink>
          <ButtonLink href="/resume.pdf" size="lg" variant="secondary" download icon={Download}>
            Download Resume
          </ButtonLink>
          <ButtonLink href={profile.githubUrl} variant="ghost" external icon={GitBranch}>
            GitHub
          </ButtonLink>
          <ButtonLink href={profile.linkedinUrl} variant="ghost" external icon={BriefcaseBusiness}>
            LinkedIn
          </ButtonLink>
          <ButtonLink href={`mailto:${profile.email}`} variant="ghost" icon={Mail}>
            Contact
          </ButtonLink>
        </div>
      </div>

      <div className="hidden w-full max-w-56 border border-border bg-surface-strong p-3 sm:block sm:max-w-72 sm:p-4 lg:max-w-none">
        <Image
          src={profile.avatarUrl}
          alt="GitHub avatar for Pakon Poomson"
          width={640}
          height={640}
          priority
          className="aspect-square w-full object-cover grayscale"
        />
        <dl className="mt-4 hidden gap-3 border-t border-border pt-4 text-sm sm:grid">
          <div className="flex justify-between gap-4">
            <dt className="text-muted">Location</dt>
            <dd className="text-right">{profile.location}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted">GitHub Bio</dt>
            <dd className="text-right">AI Engineer</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-muted">Public Repos</dt>
            <dd className="text-right">20</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
