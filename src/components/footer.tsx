import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#77B255] p-6 text-white">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
        <Link href="/" className="hover:underline">
          Copyright &copy; {new Date().getFullYear()} Apprenticeships.me
        </Link>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/FrancesCoronel/apprenticeships/blob/main/.github/CODE_OF_CONDUCT.md"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Code of Conduct
          </a>
          <a
            href="https://www.netlify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            This site is powered by Netlify
          </a>
        </div>
      </div>
    </footer>
  );
}
