import Image from "next/image";
import Link from "next/link";
import { isRemote } from "@/lib/locations";
import type { Apprenticeship } from "@/lib/types";

interface Props {
  apprenticeship: Apprenticeship;
}

export default function ApprenticeshipCard({ apprenticeship }: Props) {
  // One chip per card: Remote if the program offers it, otherwise the first place listed
  const { location } = apprenticeship;
  const shown = location.find(isRemote) ?? location[0];
  const more = location.length - 1;

  return (
    <Link
      href={`/${apprenticeship.slug}`}
      className="group flex flex-col rounded-lg overflow-hidden border border-hairline shadow-card hover:shadow-sunlit transition-shadow bg-surface-raised"
    >
      <div className="relative w-full h-44 bg-white border-b border-hairline">
        <Image
          src={`/images/apprenticeships/${apprenticeship.image}`}
          alt={`${apprenticeship.company} apprenticeship program`}
          fill
          className="object-contain p-6"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="p-6 flex flex-col gap-2.5 grow">
        <div className="font-display font-bold text-2xl leading-[30px]">{apprenticeship.company}</div>
        <p className="text-ink-muted text-sm leading-[22px] font-medium line-clamp-3">
          {apprenticeship.description}
        </p>
      </div>
      <div className="px-6 pb-6 flex flex-wrap items-center justify-between gap-2">
        <span className="flex flex-wrap items-center gap-2 text-sm font-medium">
          {shown && (
            <span
              className={`rounded-full px-3 py-1 ${
                isRemote(shown) ? "bg-terrace-tint text-terrace" : "bg-surface-stone text-ink-muted"
              }`}
            >
              {shown}
            </span>
          )}
          {more > 0 && <span className="text-ink-muted">+{more} more</span>}
        </span>
        <span className="text-sm font-bold text-terrace group-hover:text-terrace-hover">
          View program &rarr;
        </span>
      </div>
    </Link>
  );
}
