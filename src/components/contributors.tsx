import Image from "next/image";
import type { Contributor } from "@/lib/types";

interface Props {
  contributors: Contributor[];
}

export default function Contributors({ contributors }: Props) {
  return (
    <section className="p-8 md:p-12 lg:p-16 xl:p-20" id="contributors">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="border-b-2 border-[#77B255] inline-block text-2xl md:text-3xl font-bold">
          Contributors to Apprenticeships.me
        </h2>
        <p className="mt-8 mb-8 text-gray-600">
          This site was made possible because of contributors like you.
        </p>
        <ul className="flex flex-wrap justify-center gap-4">
          {contributors.map((c) => (
            <li
              key={c.user}
              className="rounded-full shadow hover:shadow-lg transition-shadow"
            >
              <a
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                title={c.user}
              >
                <Image
                  src={c.avatar}
                  alt={c.user}
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-full"
                  unoptimized
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
