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

  it("ships the six approved GitHub-backed portfolio projects", () => {
    assert.equal(projects.length, 6);
    assert.ok(projects.every((project) => project.githubUrl?.startsWith("https://github.com/Praciller/")));
    assert.ok(projects.every((project) => project.problem && project.solution && project.outcome));
    assert.ok(projects.every((project) => project.whatIBuilt && project.whatItProves));
    assert.ok(projects.every((project) => project.screenshotUrl.startsWith("/images/projects/")));
    assert.ok(projects.every((project) => project.presentationStatus));
    assert.equal(projects.filter((project) => project.flagship).length, 3);
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
        "AI & Retrieval",
        "Frontend",
        "Backend & APIs",
        "Data & Infrastructure",
        "Delivery & Operations",
      ],
    );
    assert.ok(skillGroups.every((group) => group.skills.length >= 5));
    assert.equal(profile.proofPoints.length, 3);
    assert.equal(profile.workingPrinciples.length, 3);
  });
});
