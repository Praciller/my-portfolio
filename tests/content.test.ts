import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { hiringFit, hiringServices } from "@/data/hiring";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

describe("portfolio content contract", () => {
  it("keeps required profile links and identity factual", () => {
    assert.equal(profile.name, "Pakon Poomson");
    assert.equal(profile.email, "pakon.poomson@gmail.com");
    assert.equal(profile.githubUrl, "https://github.com/Praciller");
    assert.equal(profile.linkedinUrl, "https://www.linkedin.com/in/pakon-poomson/");
  });

  it("ships the approved GitHub-backed portfolio projects", () => {
    assert.equal(projects.length, 7);
    assert.ok(projects.every((project) => project.githubUrl?.startsWith("https://github.com/Praciller/")));
    assert.deepEqual(projects.map((project) => project.slug), [
      "urban-mobility-data-platform",
      "customer-support-rag-triage-agent",
      "climate-co2-forecasting-ml",
      "receipt-ai-expense-tracker",
      "thai-review-sentiment-intelligence",
      "thai-procurement-intelligence",
      "retailguard-data-platform",
    ]);
    assert.ok(projects.every((project) => project.problem && project.solution && project.outcome));
    assert.ok(projects.every((project) => project.whatIBuilt && project.whatItProves));
    assert.ok(projects.every((project) => !project.screenshotUrl || project.screenshotUrl.startsWith("/images/projects/")));
    assert.ok(projects.every((project) => project.presentationStatus));
    assert.ok(projects.every((project) => project.featured));
    assert.ok(projects.every((project) => project.roleSignal && project.categoryLabel));
    assert.ok(projects.every((project) => project.verificationEvidence.length > 0));
    assert.ok(projects.every((project) => project.securityPrivacy.length > 0));
    assert.ok(projects.every((project) => project.limitations.length > 0));
  });

  it("uses unique project slugs for detail routes", () => {
    const slugs = projects.map((project) => project.slug);
    assert.deepEqual(slugs, [...new Set(slugs)]);
  });

  it("describes hiring and freelance services with public evidence", () => {
    assert.ok(hiringFit.length >= 3);
    assert.ok(hiringServices.length >= 3);
    assert.ok(hiringServices.every((service) => service.title && service.description));
    assert.ok(hiringServices.every((service) => service.evidence.length > 0));
  });

  it("keeps capabilities grouped for recruiter scanning", () => {
    assert.deepEqual(
      skillGroups.map((group) => group.category),
      [
        "Data Engineering",
        "AI Systems",
        "ML/MLOps",
        "Full Stack",
        "Thai AI/Data",
      ],
    );
    assert.ok(skillGroups.every((group) => group.skills.length >= 5));
    assert.equal(profile.proofPoints.length, 3);
    assert.equal(profile.workingPrinciples.length, 3);
  });
});
