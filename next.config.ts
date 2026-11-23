import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs/config";

const nextConfig: NextConfig = {
  // On Vercel, Storybook is built into public/storybook (see vercel.json)
  async redirects() {
    return [{ source: "/storybook", destination: "/storybook/index.html", permanent: false }];
  },
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
  bundleSizeOptimizations: {
    excludeDebugStatements: true,
  },
});
