import { test, expect, type Page } from "@playwright/test";

// Fail on any uncaught page error or console error, so a dependency bump that
// breaks hydration or a client component shows up here. Vercel Analytics and
// Speed Insights scripts (/_vercel/*) only exist on Vercel, and third-party
// scripts can be blocked in CI, so those load errors are ignored.
function trackErrors(page: Page) {
  const errors: string[] = [];
  page.on("pageerror", (err) => errors.push(err.message));
  page.on("console", (msg) => {
    if (msg.type() !== "error") return;
    const url = msg.location().url;
    if (url) {
      const { origin, pathname } = new URL(url);
      if (origin !== new URL(page.url()).origin) return;
      if (pathname.startsWith("/_vercel/")) return;
    }
    errors.push(`${msg.text()} @ ${url}`);
  });
  return errors;
}

test("home page renders the directory", async ({ page }) => {
  const errors = trackErrors(page);
  const response = await page.goto("/");
  expect(response?.status()).toBe(200);

  await expect(page.locator("h1")).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Find an apprenticeship" })
  ).toBeVisible();
  await expect(page.getByText(/Showing \d+ of \d+ apprenticeships/)).toBeVisible();

  expect(errors).toEqual([]);
});

test("search filters the list", async ({ page }) => {
  const errors = trackErrors(page);
  await page.goto("/");

  const count = page.getByText(/Showing \d+ of \d+ apprenticeships/);
  const total = Number((await count.textContent())?.match(/of (\d+)/)?.[1]);
  expect(total).toBeGreaterThan(0);

  const search = page.getByPlaceholder(/Search by company/);
  await search.fill("7Factor");
  await expect(count).not.toHaveText(`Showing ${total} of ${total} apprenticeships`);
  await expect(page.getByText("7Factor Software").first()).toBeVisible();

  await search.fill("zzzz-no-such-program");
  await expect(page.getByText(/No apprenticeships found matching/)).toBeVisible();

  expect(errors).toEqual([]);
});

test("apprenticeship detail page renders", async ({ page }) => {
  const errors = trackErrors(page);
  const response = await page.goto("/7factor");
  expect(response?.status()).toBe(200);

  await expect(page.getByRole("heading", { name: /7Factor Software/ }).first()).toBeVisible();
  await expect(page).toHaveTitle(/7Factor Software Apprenticeship/);

  expect(errors).toEqual([]);
});

test("unknown page returns 404", async ({ page }) => {
  const response = await page.goto("/this-page-does-not-exist");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: "Page not found" })).toBeVisible();
});
