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
    <section className="bg-[#f0fae8] p-8 md:p-12 lg:p-16 xl:p-20" id="resources">
      <div className="max-w-6xl mx-auto">
        <h2 className="border-b-2 border-[#77B255] inline-block text-2xl md:text-3xl font-bold">
          Related resources
        </h2>
        <ul className="mt-8 space-y-6">
          {resources.map((resource) => (
            <li key={resource.href}>
              <a
                className="text-[#3f7d22] hover:text-[#2f6b19] no-underline hover:underline transition-all"
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="font-bold text-lg">{resource.name}</h3>
              </a>
              <p className="text-gray-600 mt-1">{resource.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
