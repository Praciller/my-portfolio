import { Section } from "@/components/ui/section";

const evidence = [
  "Deterministic offline demos keep core reviewer flows reproducible.",
  "CI, tests, data validation, and API contracts verify project boundaries where documented.",
  "Guardrails, schema validation, and human review constrain unsafe or uncertain AI output.",
  "Public-data provenance, source licensing, privacy posture, and limitations stay visible.",
];

const highlights = [
  "Built local-first data platforms with deterministic sample pipelines, analytical models, APIs, dashboards, CI, and guardrails.",
  "Implemented RAG triage workflows with grounded generation, citation checks, offline evaluation, and safe fallback behavior.",
  "Designed ML/MLOps workflows with rolling-origin backtesting, interval monitoring, experiment tracking, and registry-style metadata.",
  "Developed Thai NLP governance workflows with confidence routing, explainability metadata, monitoring, and active-learning queues.",
  "Built privacy-aware multimodal extraction apps with strict schemas, local-first storage, and provider-routing guardrails.",
];

export function EngineeringEvidenceSection() {
  return (
    <Section
      id="evidence"
      title="Engineering Evidence"
      intro="Durable proof points used across the featured repositories, without relying on private infrastructure or undocumented claims."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="text-xl font-extrabold tracking-[-0.02em]">Verification</h3>
          <ul className="mt-5 grid gap-3">
            {evidence.map((item) => (
              <li key={item} className="flex gap-3 rounded-xl bg-surface p-4 text-sm leading-[1.65] text-muted">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-extrabold tracking-[-0.02em]">Engineering Highlights</h3>
          <ul className="mt-5 grid gap-3">
            {highlights.map((item) => (
              <li key={item} className="border-t border-border-soft pt-4 text-sm leading-[1.65] text-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
