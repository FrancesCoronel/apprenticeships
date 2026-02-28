export default function Resources() {
  return (
    <section className="bg-[#f0fae8] p-8 md:p-12 lg:p-16 xl:p-20" id="resources">
      <div className="max-w-6xl mx-auto">
        <h2 className="border-b-2 border-[#77B255] inline-block text-2xl md:text-3xl font-bold">
          Related resources
        </h2>
        <ul className="mt-8 space-y-6">
          <li>
            <a
              className="text-[#4a8c2a] hover:text-[#3a7020] no-underline hover:underline transition-all"
              href="https://apprentice.at/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="font-bold text-lg">Apprentice.at</h3>
            </a>
            <p className="text-gray-600 mt-1">
              A directory of apprenticeships
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
