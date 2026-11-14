import Image from "next/image";
import type { Contributor } from "@/lib/types";
import SectionHeading from "./section-heading";

interface Props {
  contributors: Contributor[];
}

export default function Contributors({ contributors }: Props) {
  return (
    <section
      className="max-w-7xl mx-auto px-5 py-14 md:px-12 md:py-24 flex flex-wrap items-center justify-between gap-8 md:gap-12"
      id="contributors"
    >
      <div className="flex-[1_1_380px] min-w-0 flex flex-col gap-3">
        <SectionHeading eyebrow="Community">
          Built by {contributors.length} contributors
        </SectionHeading>
        <p className="text-lg leading-7 text-ink-muted">
          This site was made possible because of contributors like you.
        </p>
      </div>
      <ul className="flex-[1_1_420px] min-w-0 flex flex-wrap gap-3">
        {contributors.map((c) => (
          <li key={c.user}>
            <a
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              title={c.user}
              className="block rounded-full border-[3px] border-inti hover:border-inti-hover transition-colors"
            >
              <Image
                src={c.avatar}
                alt={c.user}
                width={80}
                height={80}
                className="size-[74px] rounded-full"
                unoptimized
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
