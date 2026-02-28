const GITHUB_API = "https://api.github.com";
const REPO_OWNER = "FrancesCoronel";
const REPO_NAME = "apprenticeships";

interface IssuePayload {
  title: string;
  link: string;
  locations: string;
  description: string;
}

export async function createGitHubIssue(payload: IssuePayload) {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    throw new Error("GITHUB_TOKEN is not configured");
  }

  const body = [
    `**Link:** ${payload.link}`,
    payload.locations ? `**Locations:** ${payload.locations}` : "",
    payload.description ? `**Description:** ${payload.description}` : "",
    "",
    "_Submitted via apprenticeships.me_",
  ]
    .filter(Boolean)
    .join("\n");

  const response = await fetch(
    `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/issues`,
    {
      method: "POST",
      headers: {
        Authorization: `token ${token}`,
        "Content-Type": "application/json",
        Accept: "application/vnd.github.v3+json",
      },
      body: JSON.stringify({
        title: `New Apprenticeship: ${payload.title}`,
        body,
        labels: ["new apprenticeship"],
      }),
    }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`GitHub API error: ${response.status} - ${error}`);
  }

  return response.json();
}
