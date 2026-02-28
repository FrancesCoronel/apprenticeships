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

  return (
    <>
      <Hero />
      <Intro />
      <ApprenticeshipList apprenticeships={apprenticeships} />
      <Resources />
      <Contributors contributors={contributors} />
      <SubmitForm />
    </>
  );
}
