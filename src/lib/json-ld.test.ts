import { describe, expect, it } from "vitest";
import { safeJsonLd } from "./json-ld";

describe("safeJsonLd", () => {
  it("escapes characters that could close the script tag", () => {
    const out = safeJsonLd({ name: "</script><script>alert(1)</script>&" });
    expect(out).not.toMatch(/[<>&]/);
    expect(out).toContain("\\u003c/script\\u003e");
    expect(out).toContain("\\u0026");
  });

  it("still parses back to the original value", () => {
    const data = { "@type": "Organization", name: "A & B <C>" };
    expect(JSON.parse(safeJsonLd(data))).toEqual(data);
  });
});
