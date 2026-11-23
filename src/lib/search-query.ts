import { useSyncExternalStore } from "react";

// The search field sits in the hero and the results sit in the directory below it,
// so the query lives here, outside both components.
let query = "";
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

const getQuery = () => query;

export function setSearchQuery(next: string) {
  query = next;
  listeners.forEach((listener) => listener());
}

export function useSearchQuery(): string {
  return useSyncExternalStore(subscribe, getQuery, getQuery);
}
