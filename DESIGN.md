# Inti design system

Inti is the design system for Apprenticeships.me, a free directory of development and design apprenticeships for people early in their careers. It takes its name and light from Inti, the sun at the centre of Inca religion, and its structure from the andenes, the farming terraces that Andean communities cut into mountainsides so crops could grow at every altitude. Together they carry one idea: growth happens step by step, in good light, on ground that other people built for you. That is what an apprenticeship is.

## Principles

- **Sunlight, not spotlight.** Gold (`inti`) is warmth and invitation. Use it for the one action that matters on a screen and for the sun mark. A page with gold everywhere has no sun.
- **Every step counts.** The terrace rule (three steps, rising left to right) appears under every section heading. Do not use it as decoration anywhere else.
- **Built by many hands.** Terraces were communal work. The directory is too: contributor avatars, "Contribute" links and credit stay prominent.
- **Plain words for new people.** Readers are often career changers or students. No jargon, no hype.

## Voice and copy

- Speak to the reader as "you". The site speaks as a guide, not a brand: "Find an apprenticeship", "Submit a program you know about".
- Sentence case for headings, buttons and labels ("Visit apprenticeship", not "Visit Apprenticeship").
- Be concrete: name the company, the length, the city. "A 16-week paid program in Seattle" beats "an amazing opportunity".
- No exclamation marks, no emoji in UI copy. Errors say what happened and what to do: "Couldn't submit. Check the link starts with https:// and try again."
- Real copy to reuse: hero "Find a new career learning from the industry itself."; search placeholder "Search by company, description, or location"; empty state "No apprenticeships match “{query}”. Try a city or a skill instead."

## Colour

Two themes: **Day** (`light`, first) and **Night** (`dark`). Always style through tokens, never literals.

- Page ground is `surface`. Alternate full-width sections between `surface` and `surface-sunrise`, starting with `surface` for the hero.
- Cards and the submit form sit on `surface-raised` with `shadow-card` and a 1px `hairline` edge. On hover a card takes `shadow-sunlit`.
- Text is `ink`; secondary text is `ink-muted`. Both pass 4.5:1 on every surface in both themes.
- The primary button is `inti` with `on-inti` text, hover `inti-hover`. One primary button per view.
- Links and secondary buttons are `terrace`, hover `terrace-hover`. Links are bold and underline on hover.
- `inti` is never text and never a 1px line on Day surfaces. Where gold must be text or a stroke, use `inti-deep`.
- The footer is `terrace-fill` with `on-terrace` text.
- Success: `terrace-tint` ground, `ink` text, the word "Submitted" or a check. Error: `danger-tint` ground, `danger` text, the word "Couldn't". Never colour alone.
- Keyboard focus everywhere: `outline: 2px solid var(--focus-ring); outline-offset: 2px`.

## Type

- Headlines use the `display` family (Bricolage Grotesque), loaded from Google Fonts at weights 600 and 700. Use it for `display-xl`, `display-lg` and `heading` only.
- Everything else uses the `sans` family (Plus Jakarta Sans, the face the site already uses), weights 400, 500 and 700.
- Keep running text near 65 characters a line. Headings take `text-wrap: balance`.
- Counts and dates use `font-variant-numeric: tabular-nums`.

## Shape, space and depth

- Spacing follows a 4px base: `space-1` to `space-20`. Sections pad `space-8` on phones, `space-12` at md, `space-16` at lg, `space-20` at xl, as the site does today.
- Buttons and inputs take `radius-sm`; cards, the form and messages `radius-md`; chips and terrace steps `radius-pill`.
- Two shadows only: `shadow-card` at rest and `shadow-sunlit` on hover.

## Motifs

- **Sun mark** (`public/images/logo.svg` (also `src/app/icon.svg`)): the original Apprenticeships.me sprout inside a gold sun disc with 24 alternating rays. Use the Night variant in the design system reference on Night surfaces. Minimum size 24px. Keep clear space of half the disc's radius. Never add a face, eyes or a mouth to the sun.
- **Terrace rule** (`src/components/section-heading.tsx`): two `terrace` steps and a top `inti` step, 96 × 12px, under every section heading. It reads as a career rising toward the light.
- **Sunrise rays** (in the design system reference): a half sun on the horizon. Use once per page at most, behind the hero illustration or on the 404 page.
- Illustrations stay flat and geometric. Show people learning and working together. No stock photos of faces.

## Motion

- Hover transitions are 150ms ease-out on colour and shadow only.
- Respect `prefers-reduced-motion`: no movement, colour changes only.
- No spinning suns, no parallax.

## Using Inti with care

Inti is not a mascot. Inca religion and its symbols still matter to Andean communities today, many of them Quechua speakers, and Inti Raymi, the festival of the sun at the June solstice, is still celebrated in Cusco every 24 June. The sun with a face appears on the flags of Argentina and Uruguay as the Sol de Mayo. So:

- Draw the sun as an abstract disc with rays. Never give it a face, a costume or a personality, and never animate it as a character.
- Do not use the chakana (the stepped Andean cross) or copy specific textile (tocapu) designs. They carry meanings that are not ours to borrow. The terrace step is an architectural and agricultural form and is used here for that reason.
- Say "Inca", not "Aztec" or "Mayan"; those are different peoples and regions. In Quechua, *inti* means sun and *quri* means gold.
- If the site explains the name, keep it short and factual, and credit the Andean peoples whose sun and terraces inspired it. Invite feedback from Quechua and Andean readers, and change course if they ask.

## Iconography

- The site uses almost no icons. Keep it that way: text labels first.
- Where an icon is needed (the GitHub link), use the brand's own SVG at 24px in `ink`.
- Arrows in links are text characters (← →), not icons.

## Not covered yet

- The hero (`header.svg`) and About (`section-one.svg`) illustrations still use the old `#77b255` green. Recolour them to `terrace` and `inti` in a follow-up.
- Fonts are hosted by Google Fonts; no font files are stored here.

## Tokens in code

Every colour token is a CSS variable in `src/app/globals.css`, with Night values under `prefers-color-scheme: dark`, and a Tailwind colour of the same name: `bg-surface-sunrise`, `text-ink-muted`, `bg-inti`, `text-on-inti`, `text-terrace`, `border-hairline` and so on. Shadows are `shadow-card` and `shadow-sunlit`; radii `rounded-sm` (6px) and `rounded-md` (12px); the headline face is `font-display`. Don't write hex values or Tailwind's stock greys in components.
