import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: { "@": path.resolve(import.meta.dirname, "src") },
  },
  test: {
    environment: "node",
    coverage: {
      provider: "v8",
      // Count every source file, so untested ones show up as 0%
      include: ["src/**/*.{ts,tsx}"],
      exclude: ["src/**/*.test.*", "src/**/*.d.ts", "src/lib/types.ts"],
      reporter: ["text", "json-summary", "html"],
    },
  },
});
