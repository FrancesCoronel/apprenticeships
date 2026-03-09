import Script from "next/script";
import { getAllApprenticeships } from "@/lib/apprenticeships";
import contributorsData from "@/data/contributors.json";
import type { Contributor } from "@/lib/types";
import Hero from "@/components/hero";
import Intro from "@/components/intro";
import ApprenticeshipList from "@/components/apprenticeship-list";
import Resources from "@/components/resources";
import Contributors from "@/components/contributors";
import SubmitForm from "@/components/submit-form";

export default function Home() {
  const apprenticeships = getAllApprenticeships();
  const contributors: Contributor[] = contributorsData as Contributor[];

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Apprenticeships.me",
    url: "https://apprenticeships.me",
    description:
      "A curated directory of 90+ tech apprenticeship programs to help you find a new career learning from the industry itself.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://apprenticeships.me/#search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Tech Apprenticeship Programs",
    description:
      "A curated directory of tech apprenticeship programs in software development, design, and related fields.",
    numberOfItems: apprenticeships.length,
    itemListElement: apprenticeships.map((a, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${a.company} Apprenticeship`,
      url: `https://apprenticeships.me/${a.slug}`,
      description: a.description,
    })),
  };

  return (
    <>
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Script
        id="schema-itemlist"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <Hero />
      <Intro />
      <ApprenticeshipList apprenticeships={apprenticeships} />
      <Resources />
      <Contributors contributors={contributors} />
      <SubmitForm />
    </>
  );
}
