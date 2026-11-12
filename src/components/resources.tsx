import SectionHeading from "./section-heading";
export default function Resources() {
  return (
    <section className="bg-surface-sunrise p-8 md:p-12 lg:p-16 xl:p-20" id="resources">
      <div className="max-w-6xl mx-auto">
        <SectionHeading>Related resources</SectionHeading>
        <ul className="mt-8 space-y-6">
          <li>
            <a
              className="text-terrace hover:text-terrace-hover no-underline hover:underline transition-all"
              href="https://apprentice.at/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="font-bold text-lg">Apprentice.at</h3>
            </a>
            <p className="text-ink-muted mt-1">
              A directory of apprenticeships
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
