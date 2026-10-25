// @vitest-environment jsdom
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import GlobalError from "./global-error";

const { reportError } = vi.hoisted(() => ({ reportError: vi.fn() }));
vi.mock("@/lib/report-error", () => ({ reportError }));

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe("global error page", () => {
  it("renders its own document, reports the error and retries on click", async () => {
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});
    const error = new Error("render failed");
    const reset = vi.fn();
    render(<GlobalError error={error} reset={reset} />, { container: document });

    expect(document.documentElement.getAttribute("lang")).toBe("en");
    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe("Something went wrong");
    expect(consoleError).toHaveBeenCalledWith(error);
    expect(reportError).toHaveBeenCalledWith(error);

    await userEvent.click(screen.getByRole("button", { name: "Try again" }));
    expect(reset).toHaveBeenCalledTimes(1);
  });
});
