"use client";

import { useMemo, useState } from "react";
import { hasRemote } from "@/lib/locations";
import { useSearchQuery } from "@/lib/search-query";
import type { Apprenticeship } from "@/lib/types";
import ApprenticeshipCard from "./apprenticeship-card";
import SectionHeading from "./section-heading";

interface Props {
  apprenticeships: Apprenticeship[];
}

// How many cards show before "Show all"; searching or filtering shows every match
const INITIAL_COUNT = 12;

const pillClass = (pressed: boolean) =>
  `min-h-11 rounded-full border-2 px-4 py-2 text-[15px] font-bold tabular-nums transition-colors ${
    pressed
      ? "border-ink bg-ink text-surface-sunrise"
      : "border-border bg-surface-raised text-ink hover:border-ink"
  }`;

export default function ApprenticeshipList({ apprenticeships }: Props) {
  const query = useSearchQuery();
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const remoteCount = useMemo(
    () => apprenticeships.filter(hasRemote).length,
    [apprenticeships]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return apprenticeships.filter(
      (a) =>
        (!remoteOnly || hasRemote(a)) &&
        (a.company.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.location.some((loc) => loc.toLowerCase().includes(q)))
    );
  }, [query, remoteOnly, apprenticeships]);

  const narrowed = remoteOnly || filtered.length < apprenticeships.length;
  const visible = expanded || narrowed ? filtered : filtered.slice(0, INITIAL_COUNT);

  return (
    <section className="max-w-7xl mx-auto px-5 py-14 md:px-12 md:py-24 flex flex-col gap-6 md:gap-8 scroll-mt-4" id="search">
      <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
        <SectionHeading eyebrow="The directory">Find an apprenticeship</SectionHeading>
        <p className="text-ink-muted text-sm font-medium tabular-nums" aria-live="polite">
          Showing {filtered.length} of {apprenticeships.length} apprenticeships
        </p>
      </div>
      {remoteCount > 0 && (
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            aria-pressed={!remoteOnly}
            onClick={() => setRemoteOnly(false)}
            className={pillClass(!remoteOnly)}
          >
            All {apprenticeships.length}
          </button>
          <button
            type="button"
            aria-pressed={remoteOnly}
            onClick={() => setRemoteOnly(true)}
            className={pillClass(remoteOnly)}
          >
            Remote {remoteCount}
          </button>
        </div>
      )}
      <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((a) => (
          <ApprenticeshipCard key={a.slug} apprenticeship={a} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="text-center text-ink-muted text-lg">
          No apprenticeships found matching &ldquo;{query}&rdquo;
        </p>
      )}
      {visible.length < filtered.length && (
        <button
          type="button"
          onClick={() => setExpanded(true)}
          className="self-center inline-flex items-center min-h-12 rounded-full border-2 border-ink px-7 font-bold hover:bg-ink hover:text-surface-sunrise transition-colors"
        >
          Show all {apprenticeships.length} programs
        </button>
      )}
    </section>
  );
}
