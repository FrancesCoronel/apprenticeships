import Image from "next/image";

export default function Intro() {
  return (
    <section className="bg-[#f0fae8] p-8 md:p-12 lg:p-16 xl:p-20" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-full mb-12 lg:w-1/2 px-6 lg:px-12 lg:mb-0">
            <Image
              alt="About apprenticeships illustration"
              src="/images/section-one.svg"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </div>
          <div className="w-full lg:w-1/2 px-6 lg:px-12">
            <h2 className="border-b-2 border-[#77B255] inline-block text-left text-2xl md:text-3xl font-bold">
              What is an apprenticeship?
            </h2>
            <p className="mt-8 text-gray-700 leading-relaxed">
              Back in the good old days of the Renaissance, apprenticeships were
              quite common and acted as legal contracts between the apprentice
              and master. This was a way for apprentices to start learning the
              necessary skills in their field and eventually become masters
              themselves.
            </p>
            <p className="mt-6 text-gray-700 leading-relaxed">
              The number of registered U.S. apprentices has{" "}
              <a
                className="font-bold text-[#4a8c2a] hover:text-[#3a7020] no-underline hover:underline transition-all"
                href="https://www.dol.gov/agencies/eta/apprenticeship/about/statistics"
                target="_blank"
                rel="noopener noreferrer"
              >
                grown to over 593,000 active apprentices as of 2022
              </a>
              , with the U.S. Department of Labor investing over $1 billion to
              expand programs — particularly in high-growth sectors like
              information technology, cybersecurity, and software development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
