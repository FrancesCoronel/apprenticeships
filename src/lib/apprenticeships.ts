import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import type { Apprenticeship } from "./types";

const contentDir = path.join(process.cwd(), "content", "apprenticeships");

export function getAllApprenticeships(): Apprenticeship[] {
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".md"));

  const apprenticeships = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const filePath = path.join(contentDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      company: data.company || "",
      description: data.description || "",
      image: data.image || "",
      link: data.link || "",
      location: data.location || [],
    };
  });

  return apprenticeships.sort((a, b) =>
    a.company.toLowerCase().localeCompare(b.company.toLowerCase())
  );
}

export async function getApprenticeshipBySlug(
  slug: string
): Promise<Apprenticeship | null> {
  const filePath = path.join(contentDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);

  return {
    slug,
    company: data.company || "",
    description: data.description || "",
    image: data.image || "",
    link: data.link || "",
    location: data.location || [],
    content: processedContent.toString(),
  };
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
