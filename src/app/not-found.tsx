import { ButtonLink } from "@/components/button";

export default function NotFound() {
  return (
    <section className="p-8 md:p-12 lg:p-16 xl:p-20 min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-6xl font-bold text-terrace mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Page not found</h2>
        <p className="text-ink-muted mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist.
        </p>
        <ButtonLink href="/">Back to home</ButtonLink>
      </div>
    </section>
  );
}
