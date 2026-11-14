import Image from "next/image";
import SectionHeading from "./section-heading";

export default function Intro() {
  return (
    <section className="bg-surface-stone" id="about">
      <div className="max-w-7xl mx-auto px-5 py-14 md:px-12 md:py-24 flex flex-wrap items-center gap-10 md:gap-16">
        <div className="flex-[1_1_420px] min-w-0 flex flex-col gap-6">
          <SectionHeading eyebrow="About">What is an apprenticeship?</SectionHeading>
          <p className="max-w-[560px] text-lg leading-[30px]">
            Back in the good old days of the Renaissance, apprenticeships were
            quite common and acted as legal contracts between the apprentice
            and master. This was a way for apprentices to start learning the
            necessary skills in their field and eventually become masters
            themselves.
          </p>
          <p className="max-w-[560px] leading-relaxed text-ink-muted">
            Today the U.S. Department of Labor is investing over $1 billion to
            expand programs, particularly in high-growth sectors like
            information technology, cybersecurity, and software development.
          </p>
        </div>
        <div className="relative overflow-hidden flex-[1_1_380px] min-w-0 rounded-xl band-night bg-night text-on-night p-8 md:p-12 flex flex-col gap-4">
          <Image
            src="/images/logo.svg"
            alt=""
            aria-hidden="true"
            width={300}
            height={300}
            className="pointer-events-none absolute max-w-none size-[260px] -right-[110px] -top-[120px]"
          />
          <p className="relative pt-[72px] font-display font-extrabold text-5xl md:text-7xl xl:text-[80px] xl:leading-none tracking-[-0.03em] tabular-nums text-night-accent">
            593,000+
          </p>
          <p className="relative text-xl leading-[30px]">
            active registered apprentices in the U.S. as of 2022.
          </p>
          <a
            className="relative inline-flex items-center min-h-11 font-bold text-night-accent underline underline-offset-4 hover:no-underline"
            href="https://www.dol.gov/agencies/eta/apprenticeship/about/statistics"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source: U.S. Department of Labor &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
