import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { createGitHubIssue } from "./github";

const payload = {
  title: "Acme",
  link: "https://acme.example/apprenticeship",
  locations: "Remote",
  description: "Paid, 6 months",
};

describe("createGitHubIssue", () => {
  beforeEach(() => vi.stubEnv("GITHUB_TOKEN", "test-token"));
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
  });

  it("throws when no token is configured", async () => {
    vi.stubEnv("GITHUB_TOKEN", "");
    await expect(createGitHubIssue(payload)).rejects.toThrow(/GITHUB_TOKEN/);
  });

  it("opens a labelled issue with the submission details", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ html_url: "https://github.com/x/1" }), { status: 201 })
    );
    vi.stubGlobal("fetch", fetchMock);

    await expect(createGitHubIssue(payload)).resolves.toEqual({ html_url: "https://github.com/x/1" });

    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe("https://api.github.com/repos/FrancesCoronel/apprenticeships/issues");
    expect(init.headers.Authorization).toBe("token test-token");
    const body = JSON.parse(init.body);
    expect(body.title).toBe("New Apprenticeship: Acme");
    expect(body.labels).toEqual(["new apprenticeship"]);
    expect(body.body).toContain("**Locations:** Remote");
    expect(body.body).toContain("**Description:** Paid, 6 months");
  });

  it("leaves out empty optional fields", async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response("{}", { status: 201 }));
    vi.stubGlobal("fetch", fetchMock);
    await createGitHubIssue({ ...payload, locations: "", description: "" });
    const body = JSON.parse(fetchMock.mock.calls[0][1].body).body;
    expect(body).not.toContain("Locations");
    expect(body).not.toContain("Description");
  });

  it("surfaces GitHub API errors", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue(new Response("Bad credentials", { status: 401 })));
    await expect(createGitHubIssue(payload)).rejects.toThrow("GitHub API error: 401 - Bad credentials");
  });
});
