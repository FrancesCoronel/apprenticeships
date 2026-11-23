// The Inti tokens as Storybook documents them. Values are not repeated here:
// the stories read each CSS variable from src/app/globals.css at render time,
// so the docs always match the site in both themes. Usage notes follow DESIGN.md.

export interface ColourToken {
  name: string;
  usage: string;
}

export interface ColourGroup {
  title: string;
  description: string;
  tokens: ColourToken[];
}

export const colourGroups: ColourGroup[] = [
  {
    title: "Surfaces",
    description: "The ground a page moves across, from sunrise to daylight.",
    tokens: [
      { name: "surface", usage: "Page ground." },
      { name: "surface-sunrise", usage: "The navbar and hero band, and the top of listing pages." },
      { name: "surface-raised", usage: "Cards and the submit form, with a hairline edge." },
      { name: "surface-stone", usage: "The About section and neutral chips." },
      { name: "surface-logo", usage: "Behind company logos. White in both themes." },
    ],
  },
  {
    title: "Text",
    description: "Both pass 4.5:1 on every surface in both themes.",
    tokens: [
      { name: "ink", usage: "Body text and headlines. Also the dark button." },
      { name: "ink-muted", usage: "Secondary text, counts and placeholders." },
    ],
  },
  {
    title: "Inti gold",
    description: "Warmth and invitation: the one action per section, the sun and the single gold band. Never text on Day surfaces.",
    tokens: [
      { name: "inti", usage: "Primary button, the sun and the gold band." },
      { name: "inti-hover", usage: "Primary button on hover." },
      { name: "on-inti", usage: "Text and focus rings on gold." },
      { name: "inti-deep", usage: "Gold as text or a stroke, such as eyebrow labels." },
    ],
  },
  {
    title: "Terrace green",
    description: "Named after the Andean farming terraces. Links and remote locations.",
    tokens: [
      { name: "terrace", usage: "Links, bold. Remote chip text." },
      { name: "terrace-hover", usage: "Links on hover." },
      { name: "terrace-tint", usage: "Remote chips and success messages." },
      { name: "terrace-fill", usage: "Solid green fills." },
      { name: "on-terrace", usage: "Text on a green fill." },
    ],
  },
  {
    title: "Lines and focus",
    description: "Edges stay quiet; focus is always visible.",
    tokens: [
      { name: "border", usage: "Form fields, the search field and unselected pills." },
      { name: "hairline", usage: "1px card edges and dividers." },
      { name: "focus-ring", usage: "The 2px keyboard focus outline. Changes on gold and night bands." },
    ],
  },
  {
    title: "Status",
    description: "Never colour alone: the message says what happened and what to do.",
    tokens: [
      { name: "danger", usage: "Error text." },
      { name: "danger-tint", usage: "Error message ground." },
    ],
  },
  {
    title: "Night",
    description: "Surfaces that stay dark in both themes: the footer and the About stat card.",
    tokens: [
      { name: "night", usage: "Night ground. Pair it with the band-night class." },
      { name: "on-night", usage: "Text on night." },
      { name: "on-night-muted", usage: "Secondary text on night." },
      { name: "night-accent", usage: "Gold text and links on night." },
      { name: "night-hairline", usage: "Rules on night." },
    ],
  },
];

// Text and background pairs the site uses, with the contrast each one must reach.
export interface ContrastPair {
  text: string;
  on: string;
  min: number;
  where: string;
}

export const contrastPairs: ContrastPair[] = [
  { text: "ink", on: "surface", min: 4.5, where: "Body text" },
  { text: "ink", on: "surface-sunrise", min: 4.5, where: "Hero and navbar" },
  { text: "ink", on: "surface-stone", min: 4.5, where: "About section" },
  { text: "ink-muted", on: "surface", min: 4.5, where: "Secondary text" },
  { text: "ink-muted", on: "surface-sunrise", min: 4.5, where: "Hero copy and stats" },
  { text: "ink-muted", on: "surface-stone", min: 4.5, where: "Neutral chips" },
  { text: "ink-muted", on: "surface-raised", min: 4.5, where: "Card descriptions" },
  { text: "on-inti", on: "inti", min: 4.5, where: "Primary button and gold band" },
  { text: "surface-sunrise", on: "ink", min: 4.5, where: "Dark button" },
  { text: "inti-deep", on: "surface-sunrise", min: 4.5, where: "Eyebrow labels" },
  { text: "inti-deep", on: "surface", min: 4.5, where: "Eyebrow labels" },
  { text: "terrace", on: "surface", min: 4.5, where: "Links" },
  { text: "terrace", on: "surface-raised", min: 4.5, where: "Card links" },
  { text: "terrace", on: "terrace-tint", min: 4.5, where: "Remote chips" },
  { text: "on-terrace", on: "terrace-fill", min: 4.5, where: "Green fills" },
  { text: "ink", on: "terrace-tint", min: 4.5, where: "Success message" },
  { text: "danger", on: "danger-tint", min: 4.5, where: "Error message" },
  { text: "on-night", on: "night", min: 4.5, where: "Footer and stat card" },
  { text: "on-night-muted", on: "night", min: 4.5, where: "Footer secondary text" },
  { text: "night-accent", on: "night", min: 4.5, where: "Footer headings and links" },
  { text: "focus-ring", on: "surface", min: 3, where: "Focus outline" },
];

export interface TypeStyle {
  name: string;
  className: string;
  spec: string;
  sample: string;
}

// Class lists are copied from the components that use them.
export const typeScale: TypeStyle[] = [
  {
    name: "Hero headline",
    className: "font-display font-extrabold text-[46px] leading-none md:text-7xl md:leading-[0.98] xl:text-[88px] tracking-[-0.03em]",
    spec: "Display 800 · 88px wide, 46px on phones · tracking -0.03em",
    sample: "Find a new career learning from the industry itself.",
  },
  {
    name: "Gold band title",
    className: "font-display font-extrabold text-4xl md:text-[64px] md:leading-none tracking-[-0.025em]",
    spec: "Display 800 · 64px wide, 36px on phones",
    sample: "Know a program we’re missing?",
  },
  {
    name: "Section title",
    className: "font-display text-3xl md:text-5xl md:leading-[1.08] font-bold tracking-tight",
    spec: "Display 700 · 48px wide, 30px on phones · use SectionHeading",
    sample: "Find an apprenticeship",
  },
  {
    name: "Big number",
    className: "font-display font-extrabold text-5xl md:text-7xl xl:text-[80px] xl:leading-none tracking-[-0.03em] tabular-nums",
    spec: "Display 800 · tabular numbers",
    sample: "593,000+",
  },
  {
    name: "Stat",
    className: "font-display font-bold text-3xl md:text-[40px] md:leading-[44px] tabular-nums",
    spec: "Display 700 · 40px · tabular numbers",
    sample: "83",
  },
  {
    name: "Card title",
    className: "font-display font-bold text-2xl leading-[30px]",
    spec: "Display 700 · 24/30px",
    sample: "Airbnb",
  },
  {
    name: "Lead",
    className: "text-lg leading-[30px]",
    spec: "Sans 400 · 18/30px",
    sample: "This site was made possible because of contributors like you.",
  },
  {
    name: "Body",
    className: "text-base leading-relaxed",
    spec: "Sans 400 · 16px · about 65 characters a line",
    sample: "A directory of development and design apprenticeships for people who are just starting out.",
  },
  {
    name: "Small",
    className: "text-sm leading-[22px] font-medium text-ink-muted",
    spec: "Sans 500 · 14/22px · ink-muted",
    sample: "Showing 83 of 83 apprenticeships",
  },
  {
    name: "Eyebrow",
    className: "text-[13px] leading-4 font-bold uppercase tracking-widest text-inti-deep",
    spec: "Sans 700 · 13px · caps, widely tracked · inti-deep",
    sample: "The directory",
  },
];

export const radii = [
  { name: "radius-sm", className: "rounded-sm", usage: "Small details." },
  { name: "radius-md", className: "rounded-md", usage: "Form fields and messages." },
  { name: "radius-lg", className: "rounded-lg", usage: "Cards." },
  { name: "radius-xl", className: "rounded-xl", usage: "The submit form and the About stat card." },
  { name: "full", className: "rounded-full", usage: "Buttons, pills, the search field and chips." },
];

export const shadows = [
  { name: "elevation-card", className: "shadow-card", usage: "Cards at rest." },
  { name: "elevation-sunlit", className: "shadow-sunlit", usage: "Cards on hover and the hero search." },
  { name: "elevation-form", className: "shadow-form", usage: "The submit form." },
];

export const layout = [
  { name: "Content column", value: "1280px", detail: "max-w-7xl mx-auto" },
  { name: "Side padding", value: "48px · 20px on phones", detail: "px-5 md:px-12" },
  { name: "Section padding", value: "96px · 56px on phones", detail: "py-14 md:py-24" },
  { name: "Touch target", value: "at least 44px tall", detail: "min-h-11 on buttons and pills" },
  { name: "Line length", value: "about 65 characters", detail: "max-w-[560px] on running text" },
];
