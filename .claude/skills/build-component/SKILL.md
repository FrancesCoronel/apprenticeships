---
name: build-component
description: Build or restyle any UI on apprenticeships.me (a component, page, section, form, button, card or state) so it follows the Inti design system in DESIGN.md. Use for every change under src/components or src/app that touches markup or styles.
---

# Build a component in the Inti design system

Inti is the site's brand: sunlight gold and terrace green, "a day under the sun". `DESIGN.md` is the source of truth; this skill is the checklist for applying it.

1. **Read `DESIGN.md` first**, all of it, including "Using Inti with care". Then look at the component closest to what you're building in `src/components/` and match it.
2. **Reuse the building blocks** before writing classes:
   - `Button` / `ButtonLink` (`src/components/button.tsx`): `variant` is `primary` (gold, one per section), `dark` (on the gold band, in the navbar) or `outline` (a quieter action); `size` is `sm`, `md` or `lg`. Use `buttonClasses()` only where neither component fits.
   - `Card` / `cardClasses()` and `LogoPanel` (`src/components/card.tsx`): pass `interactive` when the whole card is a link.
   - `Chip` (`src/components/chip.tsx`): `remote`, `neutral` or `outline` tone.
   - `SectionHeading` for every section title, and `Eyebrow` for a caps label on its own (`src/components/section-heading.tsx`).
   If you need the same new pattern twice, add it as one of these shared components rather than copying classes.
3. **Style only through tokens**: `bg-surface-*`, `text-ink`, `text-ink-muted`, `bg-inti`, `text-on-inti`, `text-terrace`, `border-hairline`, the `night` tokens, `shadow-card` / `shadow-sunlit` / `shadow-form`, `rounded-md` / `lg` / `xl` / `full`, `font-display`. ESLint fails on hex, `rgb()`, and Tailwind's stock colours (`bg-gray-100`, `text-white`). If no token fits, add one to `src/app/globals.css` with a Night value and document it in `DESIGN.md`; don't silence the rule.
4. **Follow the rules that lint can't check**:
   - Gold is for the one action that matters per section, the sun, and the single gold band. `inti` is never text or a 1px line on Day surfaces; use `inti-deep`.
   - Headlines in `font-display` (800 hero, 700 section and card titles), body in sans. Sentence case everywhere, no exclamation marks or emoji, speak to "you".
   - Buttons and pills are `rounded-full` and at least 44px tall (`min-h-11`).
   - Keyboard focus stays visible (the global `:focus-visible` ring); don't remove outlines. Any gold (`bg-inti`) band also takes `band-inti`, and any `bg-night` surface takes `band-night`, so the focus ring keeps 3:1 contrast. Tab through the new UI in both themes to check.
   - Run axe (for example axe-core injected with Playwright) on the pages you changed, in both themes and at phone width, and fix every WCAG 2.2 AA violation.
   - Hover transitions are colour and shadow only; nothing moves under `prefers-reduced-motion`.
   - No new illustration or icons beyond the sun mark; never give the sun a face; no chakana or stepped motifs.
5. **Check both themes.** Run `npm run dev`, then look at the change with the system set to light and to dark (Playwright `colorScheme: "light"` and `"dark"` works), on a 1280px and a 390px wide viewport. Text must stay readable on every surface.
6. **Test and check.** Add or extend tests in the matching `*.test.tsx` (CI needs 100% coverage of `src/`), then run `npm run lint`, `npm run typecheck`, `npm run test:coverage` and `npm run build`.
7. **Update `DESIGN.md`** in the same PR when you add a token, a shared component or a rule, so the next component can find it.
