import { Download } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Section } from "@/components/ui/section";
import { profile } from "@/data/profile";

export function ResumeSection() {
  return (
    <Section id="resume" title="Resume" intro="Web summary plus an updated downloadable PDF.">
      <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
        <div className="space-y-5 text-base font-light leading-[1.65] text-muted">
          <p>
            {profile.name} targets AI Engineer, GenAI Engineer, and Data Engineer roles with projects spanning RAG, multimodal extraction, document analysis, forecasting, explainable ML, and public-data systems.
          </p>
          <p>
            The PDF highlights current engineering experience and the three flagship portfolio projects.
          </p>
        </div>
        <div className="border border-border p-5">
          <p className="font-mono text-xs uppercase tracking-[0.05em] text-muted">Download</p>
          <p className="mt-4 text-xl font-semibold">Resume PDF</p>
          <div className="mt-6">
            <ButtonLink href="/resume.pdf" download icon={Download}>
              Download Resume
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
