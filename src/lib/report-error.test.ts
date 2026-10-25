import { describe, expect, it, vi } from "vitest";

const { captureException, init } = vi.hoisted(() => ({
  captureException: vi.fn(),
  init: vi.fn(),
}));
vi.mock("@sentry/nextjs", () => ({ captureException, init }));

import { reportError } from "./report-error";

describe("reportError", () => {
  it("initializes Sentry, then sends the error", async () => {
    const error = new Error("boom");
    await reportError(error);
    expect(init).toHaveBeenCalledTimes(1);
    expect(captureException).toHaveBeenCalledWith(error);
  });
});
