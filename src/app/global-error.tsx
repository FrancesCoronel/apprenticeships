"use client";

import { useEffect } from "react";
import { reportError } from "@/lib/report-error";
// This replaces the root layout, so it has to load the site styles itself
import "./globals.css";

// Next.js catches render errors in an error boundary, so they never reach Sentry's
// global handlers. Report them here. This replaces the root layout, so it renders
// its own <html> and <body>. Server errors carry a digest and were already reported
// by onRequestError in instrumentation.ts, so only client errors are sent.
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
    if (!error.digest) void reportError(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center p-8 font-sans">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-terrace mb-4">Something went wrong</h1>
          <p className="text-ink-muted mb-8">
            An error occurred while loading this page. Please try again.
          </p>
          <button
            type="button"
            onClick={reset}
            className="inline-block bg-inti text-on-inti font-bold rounded-sm px-6 py-3 hover:bg-inti-hover transition-colors"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
