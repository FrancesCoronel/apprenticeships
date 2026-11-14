import SectionHeading from "./section-heading";

const resources = [
  {
    name: "Apprentice.at",
    href: "https://apprentice.at/",
    description: "A directory of apprenticeships",
  },
  {
    name: "Hire Me",
    href: "https://engjobsearch.com/",
    description:
      "A guide to landing a tech job, from resumes and interview prep to salary negotiation",
  },
  {
    name: "Latina Dev",
    href: "https://latina.dev/",
    description:
      "A directory of Latina software engineers, plus resources for every stage of a tech career",
  },
];

export default function Resources() {
  return (
    <section className="bg-surface-sunrise p-8 md:p-12 lg:p-16 xl:p-20" id="resources">
      <div className="max-w-6xl mx-auto">
        <SectionHeading>Related resources</SectionHeading>
        <ul className="mt-8 space-y-6">
          {resources.map((resource) => (
            <li key={resource.href}>
              <a
                className="text-terrace hover:text-terrace-hover no-underline hover:underline transition-all"
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="font-bold text-lg">{resource.name}</h3>
              </a>
              <p className="text-ink-muted mt-1">{resource.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
