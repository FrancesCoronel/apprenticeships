import type { Apprenticeship } from "./types";

// True for "Remote" and for places that also take remote apprentices, such as "United States (Remote)"
export function isRemote(location: string): boolean {
  return location.includes("Remote");
}

export function hasRemote(apprenticeship: Apprenticeship): boolean {
  return apprenticeship.location.some(isRemote);
}
