import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/nextjs-vite";

// Storybook for the Inti design system (DESIGN.md). Run `npm run storybook`.
const config: StorybookConfig = {
  framework: "@storybook/nextjs-vite",
  stories: ["../src/**/*.mdx", "../src/**/*.stories.tsx"],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  // Listing images and the sun mark live in public/, as on the site
  staticDirs: ["../public"],
  core: { disableTelemetry: true },
  viteFinal(config) {
    // The submit form calls a server action that opens a GitHub issue; stories
    // swap it for a mock so nothing is ever sent.
    config.resolve ??= {};
    const mock = fileURLToPath(new URL("./mocks/submit.ts", import.meta.url));
    const existing = config.resolve.alias ?? [];
    const aliases = Array.isArray(existing)
      ? existing
      : Object.entries(existing).map(([find, replacement]) => ({ find, replacement }));
    config.resolve.alias = [{ find: /^@\/actions\/submit$/, replacement: mock }, ...aliases];
    return config;
  },
};

export default config;
