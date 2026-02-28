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
              The number of American apprentices has{" "}
              <a
                className="font-bold text-[#4a8c2a] hover:text-[#3a7020] no-underline hover:underline transition-all"
                href="https://www.wikiwand.com/en/Apprenticeship#/United_States"
                target="_blank"
                rel="noopener noreferrer"
              >
                increased from 375,000 in 2014 to 500,000 in 2016
              </a>
              , while the federal government intends to see 750,000 by 2019,
              particularly by expanding the apprenticeship model to include
              roles in information technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
