import { Section } from "@/components/ui/section";
import { profile } from "@/data/profile";

export function AboutSection() {
  return (
    <Section
      id="about"
      title="About"
      intro="Practical AI engineering backed by public implementation evidence."
      className="pt-4 lg:pt-8"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
        <div>
          <p className="max-w-[72ch] text-lg font-light leading-[1.65] text-muted">
            {profile.summary}
          </p>
          <p className="mt-6 max-w-[72ch] text-base font-light leading-[1.65] text-muted">
            The current portfolio emphasizes agentic RAG, multimodal extraction,
            validated document analysis, reproducible forecasting, explainable ML,
            and bilingual public-data intelligence.
          </p>
        </div>
        <dl className="border-t border-border text-sm">
          <div className="grid gap-2 border-b border-border py-4">
            <dt className="text-muted">Target roles</dt>
            <dd>{profile.targetRoles.join(", ")}</dd>
          </div>
          <div className="grid gap-2 border-b border-border py-4">
            <dt className="text-muted">Company visible on GitHub</dt>
            <dd>{profile.companyFromGithub}</dd>
          </div>
          <div className="grid gap-2 border-b border-border py-4">
            <dt className="text-muted">Content status</dt>
            <dd>Verified against current resume materials and public repositories.</dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}
