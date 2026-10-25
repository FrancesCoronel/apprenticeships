# AGENTS.md

Guidance for AI coding agents (Claude Code, Copilot, Codex, and others) working in this repository. Humans should read [CONTRIBUTING.md](.github/CONTRIBUTING.md), which this summarizes.

## What this repo is

A curated directory of development and design apprenticeships, published at [apprenticeships.me](https://apprenticeships.me). It's a Next.js site; each listing is one Markdown file.

## Adding or editing a listing

The `add-listing` skill (`.claude/skills/add-listing/`) walks through these steps.

- One listing per file in `content/apprenticeships/<company-name>.md`. Check that the company isn't already listed before adding it.
- Frontmatter only, no body:

  ```markdown
  ---
  company: "Company Name"
  description: "1 to 2 sentences about the apprenticeship."
  image: "company-name.jpg"
  link: "https://company.com/apprenticeship"
  location:
    - "Remote"
    - "City, State"
  ---
  ```

- `link` points to the page describing the program, not the application form unless that's all there is. Make sure it loads.
- `location`: leave it out if unclear; use "Multiple Locations" for more than 10.
- Images go in `public/images/apprenticeships/`, 1000×500 with the company logo, no photos of faces. Tests fail if a listing's `image` file is missing.
- Don't add listings for programs you can't verify exist, and don't add your own company without saying so in the PR.

## Pull requests

- One listing per PR, titled `Add <Company>`, `Edit <Company>` or `Remove <Company>`.
- Fill in the PR template, including the checklist. PRs that skip the template may be closed.
- Agents don't add themselves to `src/data/contributors.json` or the README credits; leave that checklist item unchecked.
- Don't touch `package.json`, workflows or site code in a listing PR.

## Code layout

Next.js App Router with a `src/` directory, deployed on Vercel.

| Path | What's there |
|---|---|
| `content/apprenticeships/` | One Markdown file per listing (frontmatter only) |
| `public/images/apprenticeships/` | Listing images, named to match the listing's `image` field |
| `src/app/` | Pages (`page.tsx`, `[slug]/page.tsx`), layout, `robots.ts`, `sitemap.ts` |
| `src/components/` | UI components, one per file, kebab-case names |
| `src/lib/` | Listing loading (`apprenticeships.ts`), GitHub API, JSON-LD, shared types |
| `src/actions/` | Server actions (the submit form opens a GitHub issue) |
| `src/data/` | Static data such as `contributors.json` |

Imports use the `@/` alias for `src/`. Environment variables are listed in `.env.example`. Never read or edit `.env` / `.env.local` (they hold a GitHub token); a hook blocks it.

## Checks

CI comes from the shared workflows in [FrancesCoronel/workflows](https://github.com/FrancesCoronel/workflows). Before opening any PR (listing or code), run:

```bash
npm ci
npm run lint
npm run typecheck
npm run test:coverage   # CI requires 100% coverage of src/
npm run build
```

`npm run dev` starts the local site. There is no Prettier in this repo, so don't run it; ESLint is the only style check.

Node version is in `.nvmrc`. npm is the only package manager; don't add another lockfile.
