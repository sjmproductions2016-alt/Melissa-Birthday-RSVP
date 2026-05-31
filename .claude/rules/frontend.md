# Front-End Build Rules

## Purpose

Use these rules for all website builds, revisions, rebuilds, and front-end implementation tasks.

## Core Standard

The website must not look like generic AI code. Every build needs:

- A clear visual thesis
- Strong typography
- Intentional section rhythm
- Responsive mobile/tablet/desktop behavior
- Clean component structure
- Accessible interactive elements
- Valid imports
- Valid asset paths
- No unrelated rewrites

## Anti-Generic Rules

Avoid:

- Generic centered hero with vague subtitle
- Purple/blue AI gradients unless brand-relevant
- Three-card sections repeated everywhere
- Random icon rows
- Placeholder marketing copy
- Fake dashboards
- Meaningless glassmorphism
- Decoration-only motion
- Same section structure repeated down the page

Prefer:

- Project-specific visual metaphor
- Strong hero mechanism
- Purposeful motion
- Custom section pacing
- Real content hierarchy
- Conversion-aware CTA placement when relevant
- Brand-specific color, typography, and layout decisions

## Implementation Rules

Before coding:

1. Inspect the repo.
2. Identify framework, package manager, routing, styling system, components, and assets.
3. Create a requirement matrix from the prompt.
4. Identify which files will change.
5. Ask one clarifying question only if implementation is blocked.

When coding:

1. Preserve existing functionality.
2. Do not rewrite unrelated files.
3. Use existing components and styles when appropriate.
4. Create new components only when useful.
5. Keep code readable and maintainable.
6. Validate imports.
7. Validate image paths.
8. Make mobile, tablet, desktop, and large desktop intentional.
9. Respect prefers-reduced-motion for major animation.
10. Avoid unnecessary dependencies.

## Final Review

Before finalizing:

1. Compare the build against the original brief.
2. Mark every requirement PASS, PARTIAL, FAIL, or N/A.
3. Run available lint, typecheck, test, and build commands.
4. Do not claim completion if major requirements are missing.
