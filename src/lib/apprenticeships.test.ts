import { describe, expect, it, vi } from "vitest";
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

describe("listings with missing fields", () => {
  it("fills in empty defaults", async () => {
    const fs = await import("node:fs");
    const os = await import("node:os");
    const path = await import("node:path");
    const root = fs.mkdtempSync(path.join(os.tmpdir(), "apprenticeships-"));
    fs.mkdirSync(path.join(root, "content", "apprenticeships"), { recursive: true });
    fs.writeFileSync(path.join(root, "content", "apprenticeships", "bare.md"), "---\n---\n");
    fs.writeFileSync(path.join(root, "content", "apprenticeships", "notes.txt"), "ignored");

    const cwd = vi.spyOn(process, "cwd").mockReturnValue(root);
    vi.resetModules();
    const mod = await import("./apprenticeships");
    cwd.mockRestore();

    const empty = { slug: "bare", company: "", description: "", image: "", link: "", location: [] };
    expect(mod.getAllApprenticeships()).toEqual([empty]);
    expect(await mod.getApprenticeshipBySlug("bare")).toEqual({ ...empty, content: "" });
    fs.rmSync(root, { recursive: true });
  });
});
