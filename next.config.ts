import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.producthunt.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
    ],
  },
};

export default withSentryConfig(nextConfig, {
  org: "fvcproductions",
  project: "apprenticeships",
  // Source maps upload only when SENTRY_AUTH_TOKEN is set on the host
  silent: !process.env.CI,
  widenClientFileUpload: true,
  disableLogger: true,
});
