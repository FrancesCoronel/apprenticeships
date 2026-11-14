# Inti design system

Inti is the design system for Apprenticeships.me, a free directory of development and design apprenticeships for people early in their careers. It takes its name and light from Inti, the sun at the centre of Inca religion, and its green from the andenes, the farming terraces that Andean communities cut into mountainsides so crops could grow at every altitude. Together they carry one idea: growth happens in good light, on ground that other people built for you. That is what an apprenticeship is.

## Principles

- **A day under the sun.** A page moves through the day: it opens on a sunrise band (`surface-sunrise`) with the sun rising from its edge, works through daylight (`surface`), passes one full-gold band at the call to contribute, and ends on a night footer.
- **Sunlight, not spotlight.** Gold (`inti`) is warmth and invitation. Use it for the one action that matters in a section, for the sun, and for the single gold band. A page with gold everywhere has no sun.
- **Big and plain.** Headlines are large and heavy, and say one thing. Sections get room. Nothing decorative that is not the sun.
- **Built by many hands.** The directory is communal work: contributor avatars, "Add a program" and credit stay prominent.
- **Plain words for new people.** Readers are often career changers or students. No jargon, no hype.

## Voice and copy

- Speak to the reader as "you". The site speaks as a guide, not a brand: "Find an apprenticeship", "Submit a program you know about".
- Sentence case for headings, buttons and labels ("Visit apprenticeship", not "Visit Apprenticeship").
- Be concrete: name the company, the length, the city. "A 16-week paid program in Seattle" beats "an amazing opportunity".
- No exclamation marks, no emoji in UI copy. Errors say what happened and what to do: "Couldn't submit. Check the link starts with https:// and try again."
- Real copy to reuse: hero "Find a new career learning from the industry itself."; search placeholder "Try “Remote” or “design”"; empty state "No apprenticeships found matching “{query}”"; call to contribute "Know a program we’re missing?"

## Colour

Two themes: **Day** (`light`, first) and **Night** (`dark`). Always style through tokens, never literals.

- The navbar and hero share one `surface-sunrise` band. Listing pages open on the same band.
- Page ground is `surface`. The About section sits on `surface-stone`.
- Company logos sit on `surface-logo`, which stays white in Night too because logos are drawn for white.
- Cards and the submit form sit on `surface-raised` with a 1px `hairline` edge. Cards take `shadow-card` at rest and `shadow-sunlit` on hover; the form takes `shadow-form`.
- Text is `ink`; secondary text is `ink-muted`. Both pass 4.5:1 on every surface in both themes.
- The primary button is `inti` with `on-inti` text, hover `inti-hover`. One per section.
- The dark button is `ink` with `surface-sunrise` text. Use it on gold (the submit button) and for "Add a program" in the navbar. Selected filter pills take the same colours.
- Links are `terrace`, hover `terrace-hover`, and bold. `terrace-tint` with `terrace` text marks remote locations.
- `inti` is never text and never a 1px line on Day surfaces. Where gold must be text or a stroke (eyebrow labels), use `inti-deep`.
- The gold band is `inti` ground with `on-inti` text, plus the `band-inti` class, which turns the focus ring to `on-inti` (a gold ring would vanish on gold in Night). Use it once per page, for the call to contribute.
- Night surfaces stay dark in both themes: the footer and the About stat card are `night`, plus the `band-night` class (it turns the focus ring to `night-accent`, since terrace is under 3:1 on night), with `on-night` text, `on-night-muted` secondary text, `night-accent` for gold text and `night-hairline` rules.
- Success: `terrace-tint` ground, `ink` text. Error: `danger-tint` ground, `danger` text. Never colour alone; the message says what happened.
- Keyboard focus everywhere: `outline: 2px solid var(--focus-ring); outline-offset: 2px`.

## Type

- Headlines use the `display` family (Bricolage Grotesque): weight 800 for the hero, listing titles, the gold band and big numbers, 700 for section titles and card titles. Set them tight (line height near 1, letter spacing around -0.03em at the largest sizes).
- The hero headline is 88px on wide screens and 46px on phones. Section titles are 48px and 30px.
- Everything else uses the `sans` family (Plus Jakarta Sans), weights 400, 500 and 700.
- Eyebrow labels are 13px, bold, uppercase and widely tracked.
- Keep running text near 65 characters a line. Headings take `text-wrap: balance`.
- Counts use `font-variant-numeric: tabular-nums`.

## Shape, space and depth

- Content sits in a 1280px column with 48px side padding (20px on phones). Sections pad 96px top and bottom (56px on phones).
- Buttons, filter pills, the search field and chips are fully round (`rounded-full`). Form fields and messages take `radius-md` (12px), cards `radius-lg` (20px), the submit form and the stat card `radius-xl` (28px).
- Buttons and pills are at least 44px tall.
- Three shadows only: `shadow-card` at rest, `shadow-sunlit` on hover and under the hero search, `shadow-form` under the submit form.

## Motifs

- **Sun mark** (`public/images/logo.svg`, also `src/app/icon.svg`): a gold disc with an inner ring and 24 alternating rays. Nothing sits inside it. It is the logo at small sizes and the page's main image at large ones: cropped by the bottom edge of the sunrise band on the home and listing pages, and by the corner of the About stat card. Minimum size 24px. Never add a face, eyes or a mouth to the sun.
- **Rising sun eyebrow** (`Eyebrow` and `SectionHeading` in `src/components/section-heading.tsx`): a small half sun on the horizon beside a caps label ("The directory", "About", "Community"), above every section title. Use `SectionHeading` for section titles rather than a bare `h2`.
- No other illustration. Company logos on cards are the only other imagery; no stock photos of faces.

## Motion

- Hover transitions are 150ms ease-out on colour and shadow only.
- Respect `prefers-reduced-motion`: no movement, colour changes only.
- No spinning suns, no parallax.

## Using Inti with care

Inti is not a mascot. Inca religion and its symbols still matter to Andean communities today, many of them Quechua speakers, and Inti Raymi, the festival of the sun at the June solstice, is still celebrated in Cusco every 24 June. The sun with a face appears on the flags of Argentina and Uruguay as the Sol de Mayo. So:

- Draw the sun as an abstract disc with rays. Never give it a face, a costume or a personality, and never animate it as a character.
- Do not use the chakana (the stepped Andean cross) or copy specific textile (tocapu) designs. They carry meanings that are not ours to borrow. The system uses no stepped motif at all; "terrace" survives only as the name of the green, after the farming terraces.
- Say "Inca", not "Aztec" or "Mayan"; those are different peoples and regions. In Quechua, *inti* means sun and *quri* means gold.
- If the site explains the name, keep it short and factual, and credit the Andean peoples whose sun and terraces inspired it. Invite feedback from Quechua and Andean readers, and change course if they ask.

## Iconography

- The site uses almost no icons. Keep it that way: text labels first.
- Where an icon is needed (the GitHub link), use the brand's own SVG at 24px in `ink`.
- Arrows in links are text characters (← →), not icons.

## Not covered yet

- `apple-icon.png` and the social preview image (`public/images/readme.jpg`) still show the old brand.
- Fonts are hosted by Google Fonts; no font files are stored here.

## Components

Build new UI from these before writing classes by hand. Each lives in `src/components/`.

- **`Button` and `ButtonLink`** (`button.tsx`): fully round, bold, at least 44px tall. `variant="primary"` is the gold button, one per section; `dark` is ink with `surface-sunrise` text, for the gold band and the navbar; `outline` is a 2px ink ring that fills on hover, for quieter actions such as "Show all". `size` is `sm` (navbar), `md` (default) or `lg` (the main action on a listing page, with `shadow-sunlit`). `buttonClasses()` returns the same classes for elements that can't use the components. Pass `className` for layout only.
- **`Card`, `cardClasses()` and `LogoPanel`** (`card.tsx`): `surface-raised`, `hairline` edge, `radius-lg`, `shadow-card`; `interactive` adds `shadow-sunlit` on hover when the whole card is a link. `LogoPanel` is the white strip that holds a company logo.
- **`Chip`** (`chip.tsx`): small round labels. `tone="remote"` is `terrace-tint` with `terrace` text, `neutral` is `surface-stone` with `ink-muted`, `outline` is `surface-raised` with a `hairline` edge for chips on the sunrise band.
- **`SectionHeading` and `Eyebrow`** (`section-heading.tsx`): see Motifs.

A pattern used twice becomes a shared component here, and gets a line in this list.

## Tokens in code

Every colour token is a CSS variable in `src/app/globals.css`, with Night values under `prefers-color-scheme: dark`, and a Tailwind colour of the same name: `bg-surface-sunrise`, `text-ink-muted`, `bg-inti`, `text-on-inti`, `text-terrace`, `border-hairline` and so on. The night tokens are `bg-night`, `text-on-night`, `text-on-night-muted`, `text-night-accent` and `border-night-hairline`. Shadows are `shadow-card`, `shadow-sunlit` and `shadow-form`; radii `rounded-md` (12px), `rounded-lg` (20px), `rounded-xl` (28px) and `rounded-full`; the headline face is `font-display`. Don't write hex values or Tailwind's stock colours in components: ESLint fails on hex, `rgb()`/`hsl()` and classes such as `bg-gray-100` or `text-white` anywhere in `src/` outside tests. If no token fits, add one here and in `globals.css` (with a Night value) rather than disabling the rule.
