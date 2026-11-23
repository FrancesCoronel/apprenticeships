import type { Decorator, Preview } from "@storybook/nextjs-vite";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import "../src/app/globals.css";

// The same faces the site loads in src/app/layout.tsx
const sans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plus-jakarta-sans" });
const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage-grotesque" });
document.body.classList.add(sans.variable, display.variable, "antialiased");

type Theme = "system" | "day" | "night";

// Night lives behind `prefers-color-scheme: dark` in globals.css (and Tailwind's
// dark: variant). To preview a theme without changing the OS setting, rewrite
// those media queries in place: "all" forces Night, "not all" forces Day.
const original = new WeakMap<CSSMediaRule, string>();

function applyTheme(theme: Theme) {
  for (const sheet of Array.from(document.styleSheets)) {
    let rules: CSSRuleList;
    try {
      rules = sheet.cssRules;
    } catch {
      continue; // cross-origin sheet, such as Google Fonts
    }
    for (const rule of Array.from(rules)) {
      if (!(rule instanceof CSSMediaRule)) continue;
      const media = original.get(rule) ?? rule.media.mediaText;
      if (!media.includes("prefers-color-scheme: dark")) continue;
      original.set(rule, media);
      rule.media.mediaText = theme === "system" ? media : theme === "night" ? "all" : "not all";
    }
  }
}

const withTheme: Decorator = (Story, { globals }) => {
  applyTheme((globals.theme as Theme) ?? "system");
  return <Story />;
};

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Inti theme",
      toolbar: {
        title: "Theme",
        icon: "sun",
        items: [
          { value: "system", title: "System" },
          { value: "day", title: "Day", icon: "sun" },
          { value: "night", title: "Night", icon: "moon" },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: { theme: "system" },
  decorators: [withTheme],
  parameters: {
    layout: "padded",
    // Page ground comes from the body's surface token, so Storybook's own backgrounds stay off
    backgrounds: { disable: true },
    controls: { matchers: { color: /(background|color)$/i } },
    // Fail the a11y panel on WCAG 2.2 AA violations, as the site's checks do
    a11y: { test: "error" },
    nextjs: { appDirectory: true },
    options: {
      storySort: {
        order: ["Inti", ["Introduction", "Colour", "Type", "Space, shape and depth", "Motifs"], "Primitives", "Sections"],
      },
    },
  },
};

export default preview;
