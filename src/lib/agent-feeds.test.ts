import { describe, expect, it } from "vitest";
import { apprenticeshipsJson, llmsFullTxt, llmsTxt } from "./agent-feeds";

const acme = {
  slug: "acme",
  company: "Acme",
  description: "Build rockets for six months.",
  image: "acme.png",
  link: "https://acme.example/apprenticeship",
  location: ["Denver, CO", "Remote"],
};
const globex = { ...acme, slug: "globex", company: "Globex", image: "", location: [] };

describe("apprenticeshipsJson", () => {
  it("lists every program with absolute URLs", () => {
    const json = apprenticeshipsJson([acme, globex]);
    expect(json.count).toBe(2);
    expect(json.apprenticeships[0]).toEqual({
      company: "Acme",
      description: "Build rockets for six months.",
      locations: ["Denver, CO", "Remote"],
      applyUrl: "https://acme.example/apprenticeship",
      url: "https://apprenticeships.me/acme",
      image: "https://apprenticeships.me/images/apprenticeships/acme.png",
    });
    expect(json.apprenticeships[1].image).toBeNull();
  });
});

describe("llmsTxt", () => {
  it("summarizes the site, links the full data and lists each program", () => {
    const txt = llmsTxt([acme, globex]);
    expect(txt).toMatch(/^# Apprenticeships\.me\n\n> /);
    expect(txt).toContain("lists 2 apprenticeship programs");
    expect(txt).toContain("(https://apprenticeships.me/llms-full.txt)");
    expect(txt).toContain("(https://apprenticeships.me/apprenticeships.json)");
    expect(txt).toContain("- [Acme](https://apprenticeships.me/acme): Denver, CO; Remote");
    expect(txt).toContain("- [Globex](https://apprenticeships.me/globex): Not specified");
  });
});

describe("llmsFullTxt", () => {
  it("gives each program its description, locations and apply link", () => {
    const txt = llmsFullTxt([acme]);
    expect(txt).toContain(
      [
        "## Acme",
        "",
        "Build rockets for six months.",
        "",
        "- Locations: Denver, CO; Remote",
        "- Apply: https://acme.example/apprenticeship",
        "- Listing: https://apprenticeships.me/acme",
      ].join("\n"),
    );
  });
});
