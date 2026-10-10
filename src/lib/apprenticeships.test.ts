import { describe, expect, it } from "vitest";
import {
  getAllApprenticeships,
  getAllSlugs,
  getApprenticeshipBySlug,
} from "./apprenticeships";

describe("apprenticeship content", () => {
  const all = getAllApprenticeships();

  it("loads every listing with a company and a link", () => {
    expect(all.length).toBeGreaterThan(0);
    for (const a of all) {
      expect(a.company, a.slug).not.toBe("");
      expect(a.link, a.slug).toMatch(/^https?:\/\//);
      expect(Array.isArray(a.location), a.slug).toBe(true);
    }
  });

  it("sorts listings by company, ignoring case", () => {
    const names = all.map((a) => a.company.toLowerCase());
    expect(names).toEqual([...names].sort((x, y) => x.localeCompare(y)));
  });

  it("has one slug per listing", () => {
    const slugs = getAllSlugs();
    expect(new Set(slugs).size).toBe(slugs.length);
    expect([...slugs].sort()).toEqual(all.map((a) => a.slug).sort());
  });

  it("renders a listing's Markdown body to HTML", async () => {
    const first = await getApprenticeshipBySlug(all[0].slug);
    expect(first).not.toBeNull();
    expect(first?.company).toBe(all[0].company);
    expect(typeof first?.content).toBe("string");
  });

  it("returns null for an unknown slug", async () => {
    expect(await getApprenticeshipBySlug("does-not-exist")).toBeNull();
  });
});
