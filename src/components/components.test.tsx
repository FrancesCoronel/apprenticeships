// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

vi.mock("@/actions/submit", () => ({ submitApprenticeship: vi.fn() }));

import { submitApprenticeship } from "@/actions/submit";
import type { Apprenticeship } from "@/lib/types";
import ApprenticeshipCard from "./apprenticeship-card";
import ApprenticeshipList from "./apprenticeship-list";
import Contributors from "./contributors";
import Footer from "./footer";
import Hero from "./hero";
import Intro from "./intro";
import Navbar from "./navbar";
import Resources from "./resources";
import SubmitForm from "./submit-form";

const listing = (over: Partial<Apprenticeship>): Apprenticeship => ({
  slug: "acme",
  company: "Acme",
  description: "Build rockets",
  image: "acme.png",
  link: "https://acme.example",
  location: ["Remote"],
  ...over,
});

afterEach(() => {
  cleanup();
  vi.mocked(submitApprenticeship).mockReset();
});

describe("static sections", () => {
  it("renders the hero with its Product Hunt badge", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveProperty(
      "textContent",
      "Find a new career learning from the industry itself.",
    );
    expect(screen.getByAltText(/Featured on Product Hunt/).getAttribute("src")).toContain(
      "product-hunt-featured.svg",
    );
  });

  it("renders the intro, resources and footer", () => {
    render(
      <>
        <Intro />
        <Resources />
        <Footer />
      </>,
    );
    expect(screen.getByText("What is an apprenticeship?")).toBeTruthy();
    expect(screen.getByText("Apprentice.at")).toBeTruthy();
    expect(screen.getByText(new RegExp(`${new Date().getFullYear()} Apprenticeships.me`))).toBeTruthy();
  });

  it("links the navbar to the repo and its issue chooser", () => {
    render(<Navbar />);
    expect(screen.getByText("GitHub").closest("a")?.getAttribute("href")).toBe(
      "https://github.com/FrancesCoronel/apprenticeships",
    );
    expect(screen.getByText("Contribute").getAttribute("href")).toBe(
      "https://github.com/FrancesCoronel/apprenticeships/issues/new/choose",
    );
  });

  it("shows one avatar link per contributor", () => {
    render(
      <Contributors
        contributors={[
          { user: "ana", avatar: "https://avatars.example/ana", url: "https://github.com/ana" },
          { user: "bo", avatar: "https://avatars.example/bo", url: "https://github.com/bo" },
        ]}
      />,
    );
    expect(screen.getByAltText("ana").closest("a")?.getAttribute("href")).toBe("https://github.com/ana");
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });

  it("links a card to its listing page and shows each location", () => {
    render(<ApprenticeshipCard apprenticeship={listing({ location: ["NYC", "Remote"] })} />);
    expect(screen.getByRole("link").getAttribute("href")).toBe("/acme");
    expect(screen.getByText("NYC")).toBeTruthy();
    expect(screen.getByText("Remote")).toBeTruthy();
  });
});

describe("ApprenticeshipList", () => {
  const all = [
    listing({ slug: "acme", company: "Acme", description: "Rockets", location: ["Denver, CO"] }),
    listing({ slug: "globex", company: "Globex", description: "Design systems", location: ["Remote"] }),
    listing({ slug: "initech", company: "Initech", description: "TPS reports", location: [] }),
  ];

  it("shows everything until a query is typed", () => {
    render(<ApprenticeshipList apprenticeships={all} />);
    expect(screen.getByText("Showing 3 of 3 apprenticeships")).toBeTruthy();
  });

  it.each([
    ["company", "globex", "Globex"],
    ["description", "TPS", "Initech"],
    ["location", "denver", "Acme"],
  ])("filters by %s", async (_field, query, company) => {
    render(<ApprenticeshipList apprenticeships={all} />);
    await userEvent.type(screen.getByRole("textbox"), query);
    expect(screen.getByText("Showing 1 of 3 apprenticeships")).toBeTruthy();
    expect(screen.getByText(company)).toBeTruthy();
  });

  it("treats a blank query as no filter", async () => {
    render(<ApprenticeshipList apprenticeships={all} />);
    await userEvent.type(screen.getByRole("textbox"), "   ");
    expect(screen.getByText("Showing 3 of 3 apprenticeships")).toBeTruthy();
  });

  it("says when nothing matches", async () => {
    render(<ApprenticeshipList apprenticeships={all} />);
    await userEvent.type(screen.getByRole("textbox"), "zzz");
    expect(screen.getByText("No apprenticeships found matching “zzz”")).toBeTruthy();
  });
});

describe("SubmitForm", () => {
  async function fillAndSubmit() {
    render(<SubmitForm />);
    await userEvent.type(screen.getByLabelText("Name of Apprenticeship"), "Acme");
    await userEvent.type(screen.getByLabelText("Link to Apprenticeship"), "https://acme.example");
    await userEvent.click(screen.getByRole("button", { name: "Submit" }));
  }

  it("shows a loading state, then the issue link, and clears the form", async () => {
    let resolve!: (v: Awaited<ReturnType<typeof submitApprenticeship>>) => void;
    vi.mocked(submitApprenticeship).mockReturnValue(new Promise((r) => (resolve = r)));
    await fillAndSubmit();
    const button = screen.getByRole("button", { name: "Submitting..." });
    expect(button).toHaveProperty("disabled", true);

    resolve({ success: true, message: "Thanks!", url: "https://github.com/x/1" });
    expect(await screen.findByText("View issue")).toHaveProperty("href", "https://github.com/x/1");
    expect(screen.getByText(/Thanks!/)).toBeTruthy();
    expect(screen.getByLabelText("Name of Apprenticeship")).toHaveProperty("value", "");
    const sent = vi.mocked(submitApprenticeship).mock.calls[0][0];
    expect(sent.get("title")).toBe("Acme");
  });

  it("shows success without a link when no URL comes back", async () => {
    vi.mocked(submitApprenticeship).mockResolvedValue({ success: true, message: "Thanks!" });
    await fillAndSubmit();
    expect(await screen.findByText("Thanks!")).toBeTruthy();
    expect(screen.queryByText("View issue")).toBeNull();
  });

  it("shows the error message when submitting fails", async () => {
    vi.mocked(submitApprenticeship).mockResolvedValue({ success: false, message: "Nope" });
    await fillAndSubmit();
    expect(await screen.findByText("Nope")).toBeTruthy();
    expect(screen.getByLabelText("Name of Apprenticeship")).toHaveProperty("value", "Acme");
  });
});
