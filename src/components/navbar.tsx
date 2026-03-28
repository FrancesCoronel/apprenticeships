import Image from "next/image";
import Link from "next/link";

const GITHUB_REPO = "https://github.com/FrancesCoronel/apprenticeships";

export default function Navbar() {
  return (
    <nav className="flex flex-col gap-4 md:gap-0 px-6 pt-6 pb-4 md:flex-row md:flex-wrap md:items-center md:justify-between md:p-12 max-w-7xl mx-auto">
      <Link href="/" className="flex items-center shrink-0 md:mr-6">
        <Image
          src="/images/logo.svg"
          alt="Logo"
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
          className="hidden md:inline-flex items-center bg-white text-black font-bold rounded px-4 py-2 hover:underline transition-all"
        >
          <Image
            src="/images/github-black.svg"
            alt="GitHub"
            width={24}
            height={24}
            className="mr-2"
          />
          GitHub
        </a>
        <a
          href={`${GITHUB_REPO}/issues/new/choose`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-[#77B255] text-white font-bold rounded px-4 py-2 hover:bg-[#5a9a3a] transition-all"
        >
          Contribute
        </a>
      </div>
    </nav>
  );
}
