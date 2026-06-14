# Portfolio UI Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve recruiter readability, project evidence, visual hierarchy, and mobile presentation without replacing the existing portfolio architecture.

**Architecture:** Preserve the current data-driven Next.js App Router structure. Update shared tokens and focused components, add project presentation metadata, reorder existing homepage sections, and verify responsive behavior through the browser.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS 4, next/font, next/image, Node test runner, ESLint.

---

### Task 1: Strengthen Content Contracts

**Files:**
- Modify: `src/data/profile.ts`
- Modify: `src/data/projects.ts`
- Modify: `src/data/skills.ts`
- Modify: `tests/content.test.ts`

- [ ] Add a focused hero value proposition and proof statements to the profile data.
- [ ] Add explicit public presentation status labels to every project.
- [ ] Consolidate skills into five recruiter-readable categories.
- [ ] Extend content tests to require project status labels and the approved skill categories.
- [ ] Run `npm test` and confirm all content contract tests pass.

### Task 2: Update Global Design Tokens And Navigation

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/globals.css`
- Modify: `src/components/layout/navbar.tsx`
- Modify: `src/components/ui/button-link.tsx`
- Modify: `src/components/ui/section.tsx`

- [ ] Replace Inter and IBM Plex Mono with Manrope and JetBrains Mono.
- [ ] Add tinted neutral and cobalt accent tokens for light and dark themes.
- [ ] Add a skip link and stronger active interaction styles.
- [ ] Improve button radius, tap height, transitions, and focus visibility.
- [ ] Add section variants for stronger homepage rhythm without duplicating layout code.

### Task 3: Rebuild The Homepage Hierarchy

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/components/sections/hero-section.tsx`
- Modify: `src/components/sections/projects-section.tsx`
- Modify: `src/components/sections/about-section.tsx`
- Modify: `src/components/sections/skills-section.tsx`
- Modify: `src/components/sections/hiring-section.tsx`
- Modify: `src/components/sections/contact-section.tsx`

- [ ] Move flagship projects directly below the hero.
- [ ] Replace the avatar card with a project-evidence visual.
- [ ] Add role, focus, and delivery proof statements to the hero.
- [ ] Make About concise and remove audit-oriented public copy.
- [ ] Redesign skills as five readable capability groups.
- [ ] Compress hiring content and combine resume access with the final contact CTA.
- [ ] Remove the redundant homepage Resume section while retaining `/resume`.

### Task 4: Improve Project Cards And Case Studies

**Files:**
- Modify: `src/components/project-card.tsx`
- Modify: `src/components/project-visual.tsx`
- Modify: `src/app/projects/page.tsx`
- Modify: `src/app/projects/[slug]/page.tsx`

- [ ] Add clear project status badges.
- [ ] Support featured and alternating project-card layouts.
- [ ] Move screenshots earlier on mobile and improve image framing.
- [ ] Improve project-index hierarchy and section spacing.
- [ ] Add a concise summary rail to case-study pages.
- [ ] Improve architecture steps, evidence lists, and source-note presentation.

### Task 5: Metadata And Verification

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/opengraph-image.tsx`

- [ ] Align title and description with the requested AI Engineer positioning.
- [ ] Update the Open Graph image to match the revised visual system.
- [ ] Run `npm test`.
- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Start the local app and verify desktop and mobile layouts in the browser.
- [ ] Confirm no horizontal scrolling, broken links, missing images, or console errors.
