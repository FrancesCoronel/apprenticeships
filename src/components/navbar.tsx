import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "./button";

const GITHUB_REPO = "https://github.com/FrancesCoronel/apprenticeships";

const linkClass =
  "hidden md:inline-flex items-center min-h-11 px-3.5 font-bold text-ink hover:text-terrace transition-colors";

export default function Navbar() {
  return (
    <div className="bg-surface-sunrise">
      <nav className="max-w-7xl mx-auto flex items-center justify-between gap-3 px-5 py-5 md:px-12 md:py-8">
        <Link href="/" className="flex items-center gap-2 md:gap-3 min-w-0">
          <Image
            src="/images/logo.svg"
            alt="Apprenticeships.me sun logo"
            width={52}
            height={52}
            className="size-10 md:size-13 shrink-0"
          />
          <span className="font-display font-bold text-lg md:text-[26px] tracking-tight truncate">
            Apprenticeships.me
          </span>
        </Link>
        <div className="flex items-center gap-2 shrink-0">
          <Link href="/#search" className={linkClass}>
            Directory
          </Link>
          <Link href="/#about" className={linkClass}>
            About
          </Link>
          <a href={GITHUB_REPO} target="_blank" rel="noopener noreferrer" className={`${linkClass} gap-2`}>
            <Image
              src="/images/github-black.svg"
              alt=""
              width={22}
              height={22}
              className="dark:invert"
            />
            GitHub
          </a>
          <ButtonLink href="/#contribute" aria-label="Add a program" variant="dark" size="sm">
            Add<span className="hidden sm:inline">&nbsp;a program</span>
          </ButtonLink>
        </div>
      </nav>
    </div>
  );
}
