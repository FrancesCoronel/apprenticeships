"use client";

import { useEffect } from "react";
import { reportError } from "@/lib/report-error";

// Next.js catches render errors in an error boundary, so they never reach Sentry's
// global handlers. Report them here. This replaces the root layout, so it renders
// its own <html> and <body>.
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
    void reportError(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center p-8 font-sans">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#3f7d22] mb-4">Something went wrong</h1>
          <p className="text-gray-600 mb-8">
            An error occurred while loading this page. Please try again.
          </p>
          <button
            type="button"
            onClick={reset}
            className="inline-block bg-[#3f7d22] text-white font-bold rounded px-6 py-3 hover:bg-[#2f6b19] transition-all"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
