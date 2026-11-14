import Image from "next/image";
import Link from "next/link";

const GITHUB_REPO = "https://github.com/FrancesCoronel/apprenticeships";

const columns = [
  {
    title: "Related resources",
    links: [
      { name: "Apprentice.at", href: "https://apprentice.at/", description: "A directory of apprenticeships" },
      {
        name: "Hire Me",
        href: "https://engjobsearch.com/",
        description: "A guide to landing a tech job, from resumes and interview prep to salary negotiation",
      },
      {
        name: "Latina Dev",
        href: "https://latina.dev/",
        description: "A directory of Latina software engineers, plus resources for every stage of a tech career",
      },
    ],
  },
  {
    title: "Project",
    links: [
      { name: "GitHub", href: GITHUB_REPO },
      { name: "Code of Conduct", href: `${GITHUB_REPO}/blob/main/.github/CODE_OF_CONDUCT.md` },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-night text-on-night" id="resources">
      <div className="max-w-7xl mx-auto px-5 pt-12 pb-8 md:px-12 md:pt-16 md:pb-10 flex flex-col gap-10">
        <div className="flex flex-wrap justify-between gap-10 md:gap-12">
          <div className="flex-[1_1_300px] min-w-0 flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/images/logo.svg" alt="" aria-hidden="true" width={44} height={44} />
              <span className="font-display font-bold text-[22px] leading-7">Apprenticeships.me</span>
            </Link>
            <p className="max-w-[380px] text-on-night-muted">
              An open source directory of development and design apprenticeships.
            </p>
            <a
              href="https://www.producthunt.com/posts/apprenticeships-me?utm_source=badge-featured&utm_medium=badge&utm_source=badge-apprenticeships-me"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Image
                alt="Apprenticeships.me - Featured on Product Hunt"
                height={40}
                src="/images/product-hunt-featured.svg"
                width={185}
              />
            </a>
          </div>
          {columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-3 max-w-[340px]">
              <h2 className="text-[13px] leading-4 font-bold uppercase tracking-widest text-night-accent">
                {column.title}
              </h2>
              <ul className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold underline underline-offset-4 hover:text-night-accent"
                    >
                      {link.name}
                    </a>
                    {"description" in link && (
                      <p className="text-sm text-on-night-muted">{link.description}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-night-hairline pt-6 flex flex-wrap justify-between gap-3 text-sm text-on-night-muted">
          <span>Copyright &copy; {new Date().getFullYear()} Apprenticeships.me</span>
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-on-night"
          >
            This site is powered by Vercel
          </a>
        </div>
      </div>
    </footer>
  );
}
