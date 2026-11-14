import Image from "next/image";
import HeroSearch from "./hero-search";

interface Props {
  programs: number;
  remote: number;
  contributors: number;
}

export default function Hero({ programs, remote, contributors }: Props) {
  const stats = [
    { value: programs, label: "apprenticeship programs" },
    { value: remote, label: "open to remote apprentices" },
    { value: contributors, label: "community contributors" },
  ];

  return (
    <section className="relative overflow-hidden bg-surface-sunrise pb-48 md:pb-0">
      {/* The sun rises from the bottom of the band: centred on phones, to the right on wider screens */}
      <Image
        src="/images/logo.svg"
        alt=""
        aria-hidden="true"
        width={800}
        height={800}
        priority
        className="pointer-events-none absolute max-w-none size-[360px] -bottom-[190px] left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:size-[560px] md:-bottom-[300px] md:-right-40 xl:size-[800px] xl:-bottom-[400px] xl:-right-[90px]"
      />
      <div className="relative max-w-7xl mx-auto px-5 pt-6 pb-8 md:px-12 md:pt-16 md:pb-28">
        <div className="max-w-[720px] flex flex-col items-start gap-5 md:gap-7">
          <h1 className="font-display font-extrabold text-[46px] leading-none md:text-7xl md:leading-[0.98] xl:text-[88px] tracking-[-0.03em]">
            Find a new career learning from the industry itself.
          </h1>
          <p className="max-w-[540px] text-[17px] leading-relaxed md:text-xl md:leading-8 text-ink-muted">
            A directory of development and design apprenticeships for people who
            are just starting out.
          </p>
          <HeroSearch />
          <dl className="flex flex-wrap gap-x-6 gap-y-4 md:gap-x-10 pt-3">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="text-[13px] md:text-sm font-medium text-ink-muted">{stat.label}</dt>
                <dd className="font-display font-bold text-3xl md:text-[40px] md:leading-[44px] tabular-nums">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
