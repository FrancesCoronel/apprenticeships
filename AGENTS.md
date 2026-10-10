# AGENTS.md

Guidance for AI coding agents (Claude Code, Copilot, Codex, and others) working in this repository. Humans should read [CONTRIBUTING.md](.github/CONTRIBUTING.md), which this summarizes.

## What this repo is

A curated directory of development and design apprenticeships, published at [apprenticeships.me](https://apprenticeships.me). It's a Next.js site; each listing is one Markdown file.

## Adding or editing a listing

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
- Images go in `public/images/apprenticeships/`, 1000×500 with the company logo, no photos of faces.
- Don't add listings for programs you can't verify exist, and don't add your own company without saying so in the PR.

## Pull requests

- One listing per PR, titled `Add <Company>`, `Edit <Company>` or `Remove <Company>`.
- Fill in the PR template, including the checklist. PRs that skip the template may be closed.
- Don't touch `package.json`, workflows or site code in a listing PR.

## Checks

CI comes from the shared workflows in [FrancesCoronel/workflows](https://github.com/FrancesCoronel/workflows). Run `npm run lint` and `npm run build` locally before opening a code PR.
