"use client";

import { useState, useMemo } from "react";
import type { Apprenticeship } from "@/lib/types";
import ApprenticeshipCard from "./apprenticeship-card";

interface Props {
  apprenticeships: Apprenticeship[];
}

export default function ApprenticeshipList({ apprenticeships }: Props) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return apprenticeships;
    const q = query.toLowerCase();
    return apprenticeships.filter(
      (a) =>
        a.company.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q) ||
        a.location.some((loc) => loc.toLowerCase().includes(q))
    );
  }, [query, apprenticeships]);

  return (
    <section className="p-8 md:p-12 lg:p-16 xl:p-20" id="search">
      <div className="max-w-6xl mx-auto">
        <h2 className="border-b-2 border-[#77B255] inline-block text-2xl md:text-3xl font-bold">
          Find an apprenticeship
        </h2>
        <div className="mt-8">
          <input
            type="text"
            placeholder="Search by company, description, or location..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#77B255] focus:border-transparent text-lg"
          />
        </div>
        <p className="mt-4 text-gray-500 text-sm">
          Showing {filtered.length} of {apprenticeships.length} apprenticeships
        </p>
        <div className="flex flex-wrap -mx-2 mt-4">
          {filtered.map((a) => (
            <ApprenticeshipCard key={a.slug} apprenticeship={a} />
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="text-center text-gray-500 mt-12 text-lg">
            No apprenticeships found matching &ldquo;{query}&rdquo;
          </p>
        )}
      </div>
    </section>
  );
}
