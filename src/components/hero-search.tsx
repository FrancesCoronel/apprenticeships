"use client";

import { setSearchQuery, useSearchQuery } from "@/lib/search-query";

// Filters the directory as you type; Search (or Enter) jumps down to the results.
export default function HeroSearch() {
  const query = useSearchQuery();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    document.getElementById("search")?.scrollIntoView();
  }

  return (
    <form
      role="search"
      onSubmit={handleSubmit}
      className="flex w-full max-w-xl gap-1.5 md:gap-2 p-1.5 md:p-2 bg-surface-raised border border-border rounded-full shadow-sunlit"
    >
      <label htmlFor="hero-search" className="sr-only">
        Search apprenticeships
      </label>
      <input
        id="hero-search"
        type="search"
        value={query}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Try “Remote” or “design”"
        className="flex-1 min-w-0 rounded-full bg-transparent px-3.5 md:px-5 py-2 md:py-2.5 text-base md:text-lg text-ink placeholder:text-ink-muted"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center min-h-11 md:min-h-12 rounded-full bg-inti text-on-inti font-bold px-5 md:px-7 hover:bg-inti-hover transition-colors"
      >
        Search
      </button>
    </form>
  );
}
