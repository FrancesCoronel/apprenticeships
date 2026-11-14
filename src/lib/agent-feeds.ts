import type { Apprenticeship } from "./types";

// Plain-text and JSON views of the directory for AI agents and other tools.
// Assistants like ChatGPT, Claude and Gemini fetch pages without running
// JavaScript, so these give them every listing in one small, static file.

export const SITE_URL = "https://apprenticeships.me";

const SUMMARY =
  "A free, community-curated directory of development and design apprenticeships: paid, structured training programs at tech companies for people new to the field, including career changers and people without a CS degree.";

const listingUrl = (a: Apprenticeship) => `${SITE_URL}/${a.slug}`;

const locations = (a: Apprenticeship) =>
  a.location.length > 0 ? a.location.join("; ") : "Not specified";

/** The directory as JSON, served at /apprenticeships.json. */
export function apprenticeshipsJson(apprenticeships: Apprenticeship[]) {
  return {
    name: "Apprenticeships.me",
    description: SUMMARY,
    url: SITE_URL,
    source: "https://github.com/FrancesCoronel/apprenticeships",
    license: "https://github.com/FrancesCoronel/apprenticeships/blob/main/LICENSE",
    count: apprenticeships.length,
    apprenticeships: apprenticeships.map((a) => ({
      company: a.company,
      description: a.description,
      locations: a.location,
      applyUrl: a.link,
      url: listingUrl(a),
      image: a.image ? `${SITE_URL}/images/apprenticeships/${a.image}` : null,
    })),
  };
}

const header = (count: number) => `# Apprenticeships.me

> ${SUMMARY}

The directory lists ${count} apprenticeship programs. Each one has its own page on apprenticeships.me with the company, a short description, its locations and a link to the company's own page about the program, where people apply. Programs open and close during the year, so check the company's page for current dates before recommending one.`;

/** A short index for agents, served at /llms.txt (see https://llmstxt.org). */
export function llmsTxt(apprenticeships: Apprenticeship[]): string {
  const list = apprenticeships
    .map((a) => `- [${a.company}](${listingUrl(a)}): ${locations(a)}`)
    .join("\n");

  return `${header(apprenticeships.length)}

## Data

- [Every listing in full](${SITE_URL}/llms-full.txt): descriptions, locations and apply links in one Markdown file
- [Every listing as JSON](${SITE_URL}/apprenticeships.json): the same data for tools and scripts
- [Source on GitHub](https://github.com/FrancesCoronel/apprenticeships): one Markdown file per listing; new programs can be suggested there

## Apprenticeships

${list}
`;
}

/** Every listing in full, served at /llms-full.txt. */
export function llmsFullTxt(apprenticeships: Apprenticeship[]): string {
  const entries = apprenticeships
    .map((a) =>
      [
        `## ${a.company}`,
        "",
        a.description,
        "",
        `- Locations: ${locations(a)}`,
        `- Apply: ${a.link}`,
        `- Listing: ${listingUrl(a)}`,
      ].join("\n"),
    )
    .join("\n\n");

  return `${header(apprenticeships.length)}

${entries}
`;
}
