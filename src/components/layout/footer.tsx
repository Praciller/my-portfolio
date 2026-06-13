import { BriefcaseBusiness, GitBranch, Mail } from "lucide-react";
import Link from "next/link";

import { profile } from "@/data/profile";

const links = [
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "GitHub", href: profile.githubUrl, icon: GitBranch },
  { label: "LinkedIn", href: profile.linkedinUrl, icon: BriefcaseBusiness },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-inverse text-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xl font-bold">{profile.name}</p>
          <p className="mt-3 max-w-xl text-sm leading-[1.6] text-background/70">
            AI engineering, GenAI, data engineering, and applied ML portfolio.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {links.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="inline-flex items-center gap-2 text-sm text-background/70 hover:text-background"
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <Icon aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
