import Image from "next/image";
import Link from "next/link";

const GITHUB_REPO = "https://github.com/FrancesCoronel/apprenticeships";

export default function Navbar() {
  return (
    <nav className="flex flex-col gap-4 md:gap-0 px-6 pt-6 pb-4 md:flex-row md:flex-wrap md:items-center md:justify-between md:p-12 max-w-7xl mx-auto">
      <Link href="/" className="flex items-center shrink-0 md:mr-6">
        <Image
          src="/images/logo.svg"
          alt="Apprenticeships.me sun and sprout logo"
          width={40}
          height={40}
          className="mr-4 size-10 shrink-0"
        />
        <span className="font-bold text-xl md:text-2xl">
          Apprenticeships.me
        </span>
      </Link>
      <div className="flex flex-wrap items-center justify-center gap-3 md:ml-auto md:justify-end">
        <a
          href={GITHUB_REPO}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center border-2 border-terrace text-terrace font-bold rounded-sm px-4 py-1.5 hover:border-terrace-hover hover:text-terrace-hover transition-colors"
        >
          <Image
            src="/images/github-black.svg"
            alt="GitHub"
            width={24}
            height={24}
            className="mr-2 dark:invert"
          />
          GitHub
        </a>
        <a
          href={`${GITHUB_REPO}/issues/new/choose`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-inti text-on-inti font-bold rounded-sm px-4 py-2 hover:bg-inti-hover transition-colors"
        >
          Contribute
        </a>
      </div>
    </nav>
  );
}
