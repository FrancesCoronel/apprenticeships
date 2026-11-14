import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { safeJsonLd } from "@/lib/json-ld";
import { Eyebrow } from "@/components/section-heading";
import { ButtonLink } from "@/components/button";
import { Card, LogoPanel } from "@/components/card";
import { Chip } from "@/components/chip";
import {
  getAllSlugs,
  getApprenticeshipBySlug,
} from "@/lib/apprenticeships";

const factLabel = "text-xs leading-4 font-bold uppercase tracking-wider text-ink-muted";

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

  const url = `https://apprenticeships.me/${slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    name: `${apprenticeship.company} Apprenticeship`,
    description: apprenticeship.description,
    url,
    sameAs: apprenticeship.link,
    image: `https://apprenticeships.me/images/apprenticeships/${apprenticeship.image}`,
    provider: {
      "@type": "Organization",
      name: apprenticeship.company,
      ...(apprenticeship.location.length > 0 && {
        areaServed: apprenticeship.location,
      }),
    },
    occupationalCategory: "Software Development",
    programType: "Apprenticeship",
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Apprenticeships", item: "https://apprenticeships.me" },
      { "@type": "ListItem", position: 2, name: apprenticeship.company, item: url },
    ],
  };

  return (
    <>
      {/* Plain script tags, not next/script, so the data is in the HTML for crawlers that don't run JavaScript */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd([schema, breadcrumbs]) }}
      />
      <section className="relative overflow-hidden bg-surface-sunrise">
        <Image
          src="/images/logo.svg"
          alt=""
          aria-hidden="true"
          width={560}
          height={560}
          className="pointer-events-none absolute max-w-none size-[320px] -right-24 -bottom-[190px] md:size-[560px] md:-right-[60px] md:-bottom-[330px]"
        />
        <div className="relative max-w-7xl mx-auto px-5 pt-2 pb-36 md:px-12 md:pt-6 md:pb-[72px] flex flex-col items-start gap-5">
          <Link
            href="/#search"
            className="inline-flex items-center min-h-11 font-bold text-terrace hover:text-terrace-hover hover:underline"
          >
            &larr; Back to all apprenticeships
          </Link>
          {apprenticeship.location.length > 0 && (
            <ul className="flex flex-wrap gap-2 max-w-[760px]" aria-label="Locations">
              {apprenticeship.location.map((loc) => (
                <Chip as="li" key={loc} tone="outline">
                  {loc}
                </Chip>
              ))}
            </ul>
          )}
          <h1 className="max-w-[760px] font-display font-extrabold text-5xl md:text-[80px] md:leading-none tracking-[-0.03em]">
            {apprenticeship.company}
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 py-12 md:px-12 md:pt-16 md:pb-24 flex flex-wrap items-start gap-10 md:gap-12">
        <div className="flex-[2_1_480px] min-w-0 flex flex-col items-start gap-8">
          <h2>
            <Eyebrow>About the program</Eyebrow>
          </h2>
          <p className="max-w-[640px] text-xl leading-8 md:text-[22px] md:leading-9">
            {apprenticeship.description}
          </p>
          <ButtonLink href={apprenticeship.link} target="_blank" rel="noopener noreferrer" size="lg">
            Visit apprenticeship &rarr;
          </ButtonLink>
          {apprenticeship.content && (
            <div
              className="pt-8 border-t border-hairline prose max-w-none"
              dangerouslySetInnerHTML={{ __html: apprenticeship.content }}
            />
          )}
        </div>
        <Card as="aside" className="flex-[1_1_320px] min-w-0">
          <LogoPanel className="h-48">
            <Image
              src={`/images/apprenticeships/${apprenticeship.image}`}
              alt={`${apprenticeship.company} apprenticeship program`}
              fill
              className="object-contain p-8"
              sizes="(max-width: 768px) 100vw, 420px"
              priority
            />
          </LogoPanel>
          <dl className="px-6 py-6 md:px-8 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <dt className={factLabel}>Company</dt>
              <dd className="font-bold">{apprenticeship.company}</dd>
            </div>
            {apprenticeship.location.length > 0 && (
              <div className="flex flex-col gap-1">
                <dt className={factLabel}>Locations</dt>
                <dd className="font-bold">{apprenticeship.location.join(" · ")}</dd>
              </div>
            )}
            <div className="flex flex-col gap-1">
              <dt className={factLabel}>Website</dt>
              <dd>
                <a
                  href={apprenticeship.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-terrace hover:text-terrace-hover underline underline-offset-4 [overflow-wrap:anywhere]"
                >
                  {new URL(apprenticeship.link).hostname.replace(/^www\./, "")}
                </a>
              </dd>
            </div>
          </dl>
        </Card>
      </div>

      <section className="bg-inti text-on-inti">
        <div className="max-w-7xl mx-auto px-5 py-12 md:px-12 md:py-14 flex flex-wrap items-center justify-between gap-6">
          <h2 className="flex-[1_1_380px] min-w-0 font-display font-extrabold text-3xl md:text-[40px] md:leading-[44px] tracking-tight">
            Know a program we&rsquo;re missing?
          </h2>
          <ButtonLink href="/#contribute" variant="dark">
            Submit an apprenticeship
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
