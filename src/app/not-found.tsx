import Link from "next/link";

export default function NotFound() {
  return (
    <section className="p-8 md:p-12 lg:p-16 xl:p-20 min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#3f7d22] mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Page not found</h2>
        <p className="text-gray-600 mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#3f7d22] text-white font-bold rounded px-6 py-3 hover:bg-[#2f6b19] transition-all"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
