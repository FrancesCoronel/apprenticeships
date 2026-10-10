import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@/lib/github", () => ({ createGitHubIssue: vi.fn() }));

import { createGitHubIssue } from "@/lib/github";
import { submitApprenticeship } from "./submit";

const form = (fields: Record<string, string>) => {
  const fd = new FormData();
  for (const [k, v] of Object.entries(fields)) fd.set(k, v);
  return fd;
};

describe("submitApprenticeship", () => {
  beforeEach(() => {
    vi.mocked(createGitHubIssue).mockReset();
  });

  it("requires a name and a link", async () => {
    const res = await submitApprenticeship(form({ title: "Acme" }));
    expect(res).toEqual({ success: false, message: "Name and link are required." });
    expect(createGitHubIssue).not.toHaveBeenCalled();
  });

  it("creates an issue and returns its URL", async () => {
    vi.mocked(createGitHubIssue).mockResolvedValue({ html_url: "https://github.com/x/1" });
    const res = await submitApprenticeship(form({ title: "Acme", link: "https://acme.example" }));
    expect(res.success).toBe(true);
    expect(res.url).toBe("https://github.com/x/1");
    expect(createGitHubIssue).toHaveBeenCalledWith({
      title: "Acme",
      link: "https://acme.example",
      locations: "",
      description: "",
    });
  });

  it("reports a friendly error when GitHub fails", async () => {
    const log = vi.spyOn(console, "error").mockImplementation(() => {});
    vi.mocked(createGitHubIssue).mockImplementation(async () => {
      throw new Error("boom");
    });
    const res = await submitApprenticeship(form({ title: "Acme", link: "https://acme.example" }));
    expect(res.success).toBe(false);
    expect(res.message).toMatch(/Failed to submit/);
    expect(log).toHaveBeenCalled();
    log.mockRestore();
  });
});
