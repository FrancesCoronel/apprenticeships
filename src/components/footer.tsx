import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#77B255] p-6 text-center text-white">
      <Link href="/" className="hover:underline">
        Copyright &copy; {new Date().getFullYear()} Apprenticeships.me
      </Link>
    </footer>
  );
}
