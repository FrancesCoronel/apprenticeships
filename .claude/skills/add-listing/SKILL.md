---
name: add-listing
description: Add a new apprenticeship listing to the directory (one Markdown file plus a 1000x500 image), verify it, and open a PR titled "Add <Company>". Use when asked to add, list or submit an apprenticeship program.
disable-model-invocation: true
---

# Add an apprenticeship listing

Input: the company name and a link to the program page. Ask for them if missing.

1. **Check it's new.** Search `content/apprenticeships/` for the company (file names and the `company:` field, case-insensitive). If it's already there, stop and say so; edit the existing file only if asked.
2. **Check the program exists.** Open the `link` and confirm it loads and describes an apprenticeship. Prefer the program page over an application form. If you can't verify it, stop and say so.
3. **Write the listing** at `content/apprenticeships/<company-name>.md` (lowercase, hyphenated). Frontmatter only, no body:

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

   Leave `location` out if unclear; use `"Multiple Locations"` for more than 10.
4. **Add the image** at `public/images/apprenticeships/<image>`, named exactly like the `image` field: 1000x500, the company logo, no photos of faces. If you can't get a logo, ask instead of skipping it (the tests fail without the file).
5. **Run the checks:** `npm run lint`, `npm run test:coverage`. Fix anything that fails.
6. **Open the PR** on a branch, titled `Add <Company>`, one listing only. Fill in `.github/PULL_REQUEST_TEMPLATE.md` and leave the "Added my name ... Credits" item unchecked; agents don't add themselves to `src/data/contributors.json`. Don't touch `package.json`, workflows or site code.
