import { afterEach, describe, expect, it, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/font/google", () => ({
  Plus_Jakarta_Sans: () => ({ variable: "font-jakarta" }),
}));
// next/script only renders inside a Next request, so stand in a plain tag
vi.mock("next/script", () => ({
  default: ({ id, src }: { id?: string; src?: string }) => <i data-script={id} data-src={src} />,
}));
vi.mock("@vercel/analytics/next", () => ({ Analytics: () => <i data-testid="analytics" /> }));
vi.mock("@vercel/speed-insights/next", () => ({ SpeedInsights: () => <i data-testid="speed" /> }));

import { getAllSlugs } from "@/lib/apprenticeships";
import RootLayout, { metadata } from "./layout";
import NotFound from "./not-found";
import Home from "./page";
import robots from "./robots";
import sitemap from "./sitemap";

afterEach(() => {
  vi.unstubAllEnvs();
});

describe("root layout", () => {
  it("wraps pages in the nav and footer with no analytics outside Vercel", () => {
    vi.stubEnv("VERCEL", "");
    vi.stubEnv("VERCEL_ENV", "");
    const html = renderToStaticMarkup(<RootLayout><p>hello</p></RootLayout>);
    expect(html).toContain('<html lang="en">');
    expect(html).toContain("font-jakarta");
    expect(html).toContain("<main><p>hello</p></main>");
    expect(html).not.toContain("analytics");
    expect(html).not.toContain("googletagmanager");
    expect(metadata.title).toMatchObject({ default: expect.stringContaining("Apprenticeships.me") });
  });

  it("adds Vercel analytics on Vercel and Google Analytics in production", () => {
    vi.stubEnv("VERCEL", "1");
    vi.stubEnv("VERCEL_ENV", "production");
    const html = renderToStaticMarkup(<RootLayout><p>hello</p></RootLayout>);
    expect(html).toContain('data-testid="analytics"');
    expect(html).toContain('data-testid="speed"');
    expect(html).toContain("googletagmanager.com/gtag/js?id=G-090NV67GR5");
  });
});

describe("home page", () => {
  it("lists every apprenticeship", () => {
    const html = renderToStaticMarkup(<Home />);
    expect(html).toContain(`Showing ${getAllSlugs().length} of ${getAllSlugs().length} apprenticeships`);
    expect(html).toContain("Want to contribute?");
  });

  it("renders a 404 with a way home", () => {
    const html = renderToStaticMarkup(<NotFound />);
    expect(html).toContain("Page not found");
    expect(html).toContain('href="/"');
  });
});

describe("robots and sitemap", () => {
  it("allows everything and points at the sitemap", () => {
    expect(robots()).toEqual({
      rules: { userAgent: "*", allow: "/" },
      sitemap: "https://apprenticeships.me/sitemap.xml",
    });
  });

  it("lists the home page first, then every listing", () => {
    const entries = sitemap();
    expect(entries[0]).toMatchObject({ url: "https://apprenticeships.me", priority: 1 });
    expect(entries.slice(1).map((e) => e.url)).toEqual(
      getAllSlugs().map((s) => `https://apprenticeships.me/${s}`),
    );
  });
});
