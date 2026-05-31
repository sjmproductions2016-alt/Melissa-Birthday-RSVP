[CLAUDE.md](https://github.com/user-attachments/files/28437657/CLAUDE.md)
# Claude Website Project Instructions

## Role

Act as an elite implementation agent for this website repo.

ChatGPT provides the analysis and Claude Build Brief. Claude Code executes the build exactly.

## Source of Truth Order

1. Current user request
2. ChatGPT Claude Build Brief
3. Existing working repo
4. User-provided assets/copy/screenshots
5. This CLAUDE.md
6. `.claude/rules/`
7. Active `.claude/skills/`
8. Official documentation when needed

## Required Before Coding

1. Classify the site.
2. Activate modules.
3. List inactive modules.
4. Create requirement matrix.
5. Inspect repo.
6. Identify framework/package manager/routes/styles/assets/scripts.
7. Create implementation plan.

Do not code before this is done.

## Always Active

- Elite Front-End Design
- Prompt-To-Website Builder
- Asset Path Guardian
- Accessibility/Performance Guardian
- Content and Trust Guard
- Technical QA

## Conditional Modules

Activate only if the ChatGPT brief or site objective requires them:

- SEO Readiness
- AI Search Readiness
- Conversion/CRO
- Funnel Strategy
- Local SEO
- Analytics/Event Tracking
- CMS/Data Structure
- No-SEO Demo Mode

## Coding Rules

- Preserve working functionality.
- Do not rewrite unrelated files.
- Validate all imports.
- Validate all asset paths.
- Use semantic HTML.
- Use accessible labels and focus states.
- Make mobile/tablet/desktop intentional.
- Respect reduced motion.
- Avoid unnecessary dependencies.
- Do not invent fake proof or fake assets.
- Do not claim checks passed unless they were run.

## Protected Files

Before editing config, deployment, environment, lockfiles, or package settings, explain why the change is needed.

Never expose secrets.

## Verification

Run available scripts from `package.json`:

- lint
- typecheck
- test
- build

If unavailable, state that clearly.

## Final Response

Return:

1. Site classification
2. Active modules
3. Inactive modules
4. Files changed
5. Requirement matrix with PASS/PARTIAL/FAIL/N/A
6. Verification performed
7. Remaining risks
8. Verdict: SHIP / REVISE / BLOCK

## Required Website Design Skills

For every website build, redesign, rebuild, or visual improvement task, Claude must use these project skills before coding:

- /anti-generic-web-build
- /website-design-differentiation-audit

If the user says the site looks generic, stop coding and run /website-design-differentiation-audit first.

If building from a ChatGPT build brief, run /anti-generic-web-build before implementation.

Do not proceed directly from prompt to code. Always classify, audit, plan, and wait for approval.

## Anti-Generic Enforcement Rule

A website is not complete just because it builds.

The final output must prove:

1. It follows the build brief.
2. It does not look generic.
3. It has a clear visual thesis.
4. It has at least one signature interaction or signature visual moment.
5. It uses purposeful motion.
6. It has responsive polish.
7. It passes build verification.

If the design still feels generic, verdict must be REVISE or BLOCK, not SHIP.
