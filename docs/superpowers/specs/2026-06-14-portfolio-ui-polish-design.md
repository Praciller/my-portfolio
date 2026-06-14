# Portfolio UI Polish Design

## Goal

Make the portfolio easier for recruiters and engineering interviewers to understand in the first minute, while preserving the existing Next.js architecture, factual content, six current AI/data projects, and case-study routes.

## Live Audit Findings

1. Project evidence appears too late on the homepage.
2. The mobile hero is readable but cramped by the large name and small avatar.
3. Project cards front-load dense text before screenshots on mobile.
4. Status and demo availability are not visually distinct.
5. About, Skills, Hiring, Experience, and Resume repeat the same ruled layout, making the page feel longer than it is.
6. The strict black-and-white palette provides little hierarchy between primary evidence and supporting content.
7. The case-study pages contain strong content but need clearer section rhythm and faster scanning.

## Design Direction

Use a restrained technical system inspired by well-structured engineering documentation rather than a generic SaaS landing page. The visual voice is precise, practical, and composed.

- Keep dark and light themes.
- Replace pure black and white with subtly blue-tinted neutrals.
- Introduce one cobalt accent for status, focus, links, and proof markers.
- Use Manrope for the primary typeface and JetBrains Mono only for compact metadata.
- Use moderate corner radii and quiet shadows on screenshots and key surfaces.
- Avoid decorative gradients, glass effects, excessive animation, and repeated identical cards.

## Homepage Structure

1. Navigation
2. Proof-led hero with name, role, value proposition, CTAs, and a real project screenshot
3. Flagship projects
4. About and working principles
5. Capability groups
6. Experience
7. Contribution and hiring fit
8. Contact CTA with resume access
9. Footer

The standalone Resume page and all six Project detail pages remain available. The redundant homepage Resume section is removed.

## Hero

- Present `Pakon Poomson` as a compact identity label.
- Use a value-led heading about practical AI products, data systems, and deployed applications.
- Keep View Projects, GitHub, LinkedIn, and Resume actions.
- Replace the large casual avatar card with a current project screenshot and a concise evidence caption.
- Include a small proof row for current role, core focus, and delivery scope.

## Project Presentation

- Keep the three current flagship projects on the homepage.
- Use the first project as a larger feature and alternate subsequent rows for rhythm.
- Put the screenshot after the description but before long evidence text on mobile.
- Add explicit status labels such as `Case study`, `Demo available`, and `Frontend showcase`.
- Keep separate buttons for Details, GitHub, and Demo when available.
- Use concise problem-first descriptions and preserve factual technical evidence.

## About And Skills

- Remove audit-oriented copy such as “company visible on GitHub” and “content status.”
- Replace it with current role, working principles, location, and production-minded delivery.
- Consolidate skills into five recruiter-readable groups:
  - AI and Retrieval
  - Backend and APIs
  - Data and Infrastructure
  - Frontend
  - Delivery
- Reduce the visual weight of individual skill pills and emphasize category names.

## Case Study Pages

- Preserve all existing content fields.
- Improve the top section with a clear status badge and better screenshot framing.
- Add a compact summary rail for role, stack, and delivery status.
- Improve section separation and architecture-step readability.
- Keep honest limitations and source notes visible.

## Responsive Behavior

- At mobile widths, remove the hero avatar competition and use a full-width project preview.
- Use full-width primary CTAs and two-column secondary actions only where space permits.
- Place project screenshots earlier in each card.
- Keep tap targets at least 44 pixels high.
- Prevent horizontal overflow at 390px.

## Accessibility And Performance

- Preserve semantic headings and alt text.
- Add a keyboard-visible skip link.
- Maintain strong focus states and color contrast in both themes.
- Use existing optimized local project images and `next/image`.
- Add no animation dependency; transitions remain CSS-only and reduced-motion aware.

## Verification

- Run content tests, ESLint, and production build.
- Verify homepage, projects index, and one case-study route at desktop and mobile widths.
- Confirm no horizontal scrolling and inspect browser console errors.
- Verify public links remain unchanged except where already intentionally corrected.
