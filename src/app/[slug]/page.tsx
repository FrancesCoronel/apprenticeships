import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import { safeJsonLd } from "@/lib/json-ld";
import {
  getAllSlugs,
  getApprenticeshipBySlug,
} from "@/lib/apprenticeships";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const apprenticeship = await getApprenticeshipBySlug(slug);

  if (!apprenticeship) {
    return { title: "Not Found" };
  }

  const title = `${apprenticeship.company} Apprenticeship`;

  return {
    title,
    description: apprenticeship.description,
    alternates: {
      canonical: `https://apprenticeships.me/${slug}`,
    },
    openGraph: {
      title,
      description: apprenticeship.description,
      url: `https://apprenticeships.me/${slug}`,
      siteName: "Apprenticeships.me",
      type: "website",
      images: [
        {
          url: `/images/apprenticeships/${apprenticeship.image}`,
          width: 1200,
          height: 630,
          alt: `${apprenticeship.company} apprenticeship program`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: apprenticeship.description,
    },
  };
}

export default async function ApprenticeshipPage({ params }: PageProps) {
  const { slug } = await params;
  const apprenticeship = await getApprenticeshipBySlug(slug);

  if (!apprenticeship) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    name: `${apprenticeship.company} Apprenticeship`,
    description: apprenticeship.description,
    url: `https://apprenticeships.me/${slug}`,
    provider: {
      "@type": "Organization",
      name: apprenticeship.company,
      url: apprenticeship.link,
    },
    ...(apprenticeship.location.length > 0 && {
      locationCreated: apprenticeship.location.map((loc) => ({
        "@type": "Place",
        name: loc,
      })),
    }),
    occupationalCategory: "Software Development",
    programType: "Apprenticeship",
  };

  return (
    <>
      <Script
        id={`schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(schema) }}
      />
      <section className="p-8 md:p-12 lg:p-16 xl:p-20">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/#search"
          className="inline-flex items-center text-[#4a8c2a] hover:text-[#3a7020] mb-8 font-bold hover:underline transition-all"
        >
          &larr; Back to all apprenticeships
        </Link>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative w-full h-64 md:h-80">
            <Image
              src={`/images/apprenticeships/${apprenticeship.image}`}
              alt={`${apprenticeship.company} apprenticeship program`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
              priority
            />
          </div>

          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {apprenticeship.company}
            </h1>

            <p className="text-gray-600 text-lg mb-6">
              {apprenticeship.description}
            </p>

            {apprenticeship.location.length > 0 && (
              <div className="mb-6">
                <h2 className="font-bold text-sm text-gray-500 uppercase tracking-wide mb-2">
                  Locations
                </h2>
                <div className="flex flex-wrap gap-2">
                  {apprenticeship.location.map((loc) => (
                    <span
                      key={loc}
                      className="inline-block bg-gray-100 rounded-full px-4 py-1 text-sm text-gray-700"
                    >
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <a
              href={apprenticeship.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#77B255] text-white font-bold rounded px-6 py-3 hover:bg-[#5a9a3a] transition-all"
            >
              Visit apprenticeship &rarr;
            </a>

            {apprenticeship.content && (
              <div
                className="mt-8 pt-8 border-t border-gray-200 prose prose-green max-w-none"
                dangerouslySetInnerHTML={{ __html: apprenticeship.content }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
