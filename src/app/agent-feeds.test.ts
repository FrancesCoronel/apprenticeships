import { describe, expect, it } from "vitest";
import { getAllApprenticeships } from "@/lib/apprenticeships";
import { GET as json } from "./apprenticeships.json/route";
import { GET as llms } from "./llms.txt/route";
import { GET as llmsFull } from "./llms-full.txt/route";

const count = getAllApprenticeships().length;

describe("agent feeds", () => {
  it("serves every listing as JSON", async () => {
    const res = json();
    expect(res.headers.get("content-type")).toContain("application/json");
    const body = await res.json();
    expect(body.apprenticeships).toHaveLength(count);
  });

  it("serves llms.txt and llms-full.txt as Markdown", async () => {
    for (const res of [llms(), llmsFull()]) {
      expect(res.headers.get("content-type")).toBe("text/markdown; charset=utf-8");
      expect(await res.text()).toContain(`lists ${count} apprenticeship programs`);
    }
  });
});
