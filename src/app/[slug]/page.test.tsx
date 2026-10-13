import { beforeEach, describe, expect, it, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("@/lib/apprenticeships", () => ({
  getAllSlugs: vi.fn(() => ["acme", "globex"]),
  getApprenticeshipBySlug: vi.fn(),
}));
vi.mock("next/navigation", () => ({
  notFound: vi.fn(() => {
    throw new Error("NEXT_NOT_FOUND");
  }),
}));

import { getApprenticeshipBySlug } from "@/lib/apprenticeships";
import ApprenticeshipPage, { generateMetadata, generateStaticParams } from "./page";

const acme = {
  slug: "acme",
  company: "Acme",
  description: "Build rockets",
  image: "acme.png",
  link: "https://acme.example",
  location: ["Denver, CO", "Remote"],
  content: "<p>Six months, paid.</p>",
};
const params = (slug: string) => ({ params: Promise.resolve({ slug }) });

beforeEach(() => {
  vi.mocked(getApprenticeshipBySlug).mockReset();
});

describe("listing page", () => {
  it("pre-renders one page per listing", async () => {
    expect(await generateStaticParams()).toEqual([{ slug: "acme" }, { slug: "globex" }]);
  });

  it("builds metadata from the listing", async () => {
    vi.mocked(getApprenticeshipBySlug).mockResolvedValue(acme);
    const meta = await generateMetadata(params("acme"));
    expect(meta.title).toBe("Acme Apprenticeship");
    expect(meta.alternates?.canonical).toBe("https://apprenticeships.me/acme");
    expect(meta.openGraph?.images).toEqual([
      expect.objectContaining({ url: "/images/apprenticeships/acme.png" }),
    ]);
  });

  it("titles an unknown listing Not Found", async () => {
    vi.mocked(getApprenticeshipBySlug).mockResolvedValue(null);
    expect(await generateMetadata(params("nope"))).toEqual({ title: "Not Found" });
  });

  it("renders the listing with its locations, body and schema", async () => {
    vi.mocked(getApprenticeshipBySlug).mockResolvedValue(acme);
    const html = renderToStaticMarkup(await ApprenticeshipPage(params("acme")));
    expect(html).toContain("<h1");
    expect(html).toContain("Acme</h1>");
    expect(html).toContain("Locations");
    expect(html).toContain("Denver, CO");
    expect(html).toContain("<p>Six months, paid.</p>");
    expect(html).toContain('href="https://acme.example"');
  });

  it("leaves out locations and the body when a listing has none", async () => {
    vi.mocked(getApprenticeshipBySlug).mockResolvedValue({ ...acme, location: [], content: "" });
    const html = renderToStaticMarkup(await ApprenticeshipPage(params("acme")));
    expect(html).not.toContain("Locations");
    expect(html).not.toContain("prose");
  });

  it("404s for an unknown listing", async () => {
    vi.mocked(getApprenticeshipBySlug).mockResolvedValue(null);
    await expect(ApprenticeshipPage(params("nope"))).rejects.toThrow("NEXT_NOT_FOUND");
  });
});
