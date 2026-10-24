// A DSN is a public, write-only key, so it lives in the repo rather than in
// host env vars. Events are only sent from production builds.
export const sentryOptions = {
  dsn: "https://f85446faf078806deef8d2ea9714ef87@o188643.ingest.us.sentry.io/4512309602353152",
  enabled: process.env.NODE_ENV === "production",
  environment: process.env.NODE_ENV,
  tracesSampleRate: 0.1,
};
