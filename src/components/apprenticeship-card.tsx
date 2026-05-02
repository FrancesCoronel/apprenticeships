import Image from "next/image";
import Link from "next/link";
import type { Apprenticeship } from "@/lib/types";

interface Props {
  apprenticeship: Apprenticeship;
}

export default function ApprenticeshipCard({ apprenticeship }: Props) {
  return (
    <Link
      href={`/${apprenticeship.slug}`}
      className="block my-4 px-2 w-full md:w-1/2 lg:w-1/3"
    >
      <div className="mx-auto max-w-sm rounded overflow-hidden shadow-md hover:shadow-lg transition-shadow min-h-full bg-white">
        <div className="relative w-full h-48 bg-white">
          <Image
            src={`/images/apprenticeships/${apprenticeship.image}`}
            alt={`${apprenticeship.company} apprenticeship program`}
            fill
            className="object-contain p-6"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{apprenticeship.company}</div>
          <p className="text-gray-600 text-sm line-clamp-3">
            {apprenticeship.description}
          </p>
        </div>
        <div className="px-6 py-4">
          {apprenticeship.location.map((loc) => (
            <span
              key={loc}
              className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-600 mr-2 mb-2"
            >
              {loc}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
