import Image from "next/image";

export default function Hero() {
  return (
    <section className="px-8 pt-0 pb-8 md:p-12 lg:p-16 xl:p-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 px-2 mb-12 md:mb-0">
            <h1 className="text-center lg:text-left text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Find a new career learning from the industry itself.
            </h1>
            <div className="flex justify-center lg:justify-start mt-8">
              <a
                href="https://www.producthunt.com/posts/apprenticeships-me?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-apprenticeships-me"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Image
                  alt="Apprenticeships.me - Featured on Product Hunt"
                  height={54}
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=153013&theme=light"
                  width={250}
                  unoptimized
                  className="h-auto w-auto max-w-full"
                />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-2">
            <Image
              alt="Person discovering tech apprenticeship opportunities"
              src="/images/header.svg"
              width={600}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
