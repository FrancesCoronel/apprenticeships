import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

// Inti design system guard (DESIGN.md): components style through the tokens in
// src/app/globals.css, so hex colours, rgb()/hsl() and Tailwind's stock palette
// (bg-gray-100, text-white, border-amber-500, bg-[#f2b705]...) are errors in src/.
const palette =
  "slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose";
const utilities =
  "bg|text|border|border-[trblxy]|ring|ring-offset|outline|fill|stroke|from|via|to|decoration|divide|placeholder|shadow|accent|caret";
const offBrand = [
  // Stock palette steps (bg-gray-100) and plain black/white (text-white)
  `(^|[^a-z-])(${utilities})-((${palette})-[0-9]|black([^a-z-]|$)|white([^a-z-]|$))`,
  // Hex colours, alone or in an arbitrary value: #fff, bg-[#f2b705]
  "#[0-9a-fA-F]{3,8}([^0-9a-zA-Z_-]|$)",
  // Functional colours
  "(rgba?|hsla?|oklch)\\(",
].join("|");
const offBrandMessage =
  "Off-brand colour. Use an Inti token instead (bg-inti, text-ink-muted, border-hairline...), see DESIGN.md. Add a token in globals.css if none fits.";
const intiColours = {
  files: ["src/**/*.{ts,tsx}"],
  ignores: ["src/**/*.test.{ts,tsx}"],
  rules: {
    "no-restricted-syntax": [
      "error",
      { selector: `Literal[value=/${offBrand}/]`, message: offBrandMessage },
      { selector: `TemplateElement[value.raw=/${offBrand}/]`, message: offBrandMessage },
    ],
  },
};

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  intiColours,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
