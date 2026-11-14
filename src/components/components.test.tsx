// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

vi.mock("@/actions/submit", () => ({ submitApprenticeship: vi.fn() }));

import { submitApprenticeship } from "@/actions/submit";
import { setSearchQuery } from "@/lib/search-query";
import type { Apprenticeship } from "@/lib/types";
import ApprenticeshipCard from "./apprenticeship-card";
import ApprenticeshipList from "./apprenticeship-list";
import Contributors from "./contributors";
import Footer from "./footer";
import Hero from "./hero";
import HeroSearch from "./hero-search";
import Intro from "./intro";
import Navbar from "./navbar";
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
  setSearchQuery("");
  vi.mocked(submitApprenticeship).mockReset();
});

describe("static sections", () => {
  it("renders the hero with its headline and counts", () => {
    render(<Hero programs={83} remote={16} contributors={14} />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveProperty(
      "textContent",
      "Find a new career learning from the industry itself.",
    );
    expect(screen.getByText("apprenticeship programs").nextElementSibling?.textContent).toBe("83");
    expect(screen.getByText("open to remote apprentices").nextElementSibling?.textContent).toBe("16");
    expect(screen.getByText("community contributors").nextElementSibling?.textContent).toBe("14");
  });

  it("renders the intro and the footer with its resources and Product Hunt badge", () => {
    render(
      <>
        <Intro />
        <Footer />
      </>,
    );
    expect(screen.getByText("What is an apprenticeship?")).toBeTruthy();
    expect(screen.queryByText("Apprentice.at")).toBeNull();
    expect(screen.getByText("Hire Me").closest("a")?.getAttribute("href")).toBe(
      "https://engjobsearch.com/",
    );
    expect(screen.getByText("Latina Dev").closest("a")?.getAttribute("href")).toBe(
      "https://latina.dev/",
    );
    expect(screen.getByAltText(/Featured on Product Hunt/).getAttribute("src")).toContain(
      "product-hunt-featured.svg",
    );
    expect(screen.getByText(new RegExp(`${new Date().getFullYear()} Apprenticeships.me`))).toBeTruthy();
  });

  it("links the navbar to the repo and the page sections", () => {
    render(<Navbar />);
    expect(screen.getByText("GitHub").closest("a")?.getAttribute("href")).toBe(
      "https://github.com/FrancesCoronel/apprenticeships",
    );
    expect(screen.getByText("Directory").getAttribute("href")).toBe("/#search");
    expect(screen.getByRole("link", { name: "Add a program" }).getAttribute("href")).toBe("/#contribute");
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
    expect(screen.getByRole("heading", { level: 2 }).textContent).toBe("Built by 2 contributors");
  });

  it("links a card to its listing page and leads with the remote location", () => {
    render(<ApprenticeshipCard apprenticeship={listing({ location: ["NYC", "Remote", "Austin, TX"] })} />);
    expect(screen.getByRole("link").getAttribute("href")).toBe("/acme");
    expect(screen.getByText("Remote")).toBeTruthy();
    expect(screen.queryByText("NYC")).toBeNull();
    expect(screen.getByText("+2 more")).toBeTruthy();
  });

  it("shows the first location when a program is not remote, and none when it lists none", () => {
    render(<ApprenticeshipCard apprenticeship={listing({ location: ["NYC"] })} />);
    expect(screen.getByText("NYC")).toBeTruthy();
    expect(screen.queryByText(/more$/)).toBeNull();
    cleanup();
    render(<ApprenticeshipCard apprenticeship={listing({ location: [] })} />);
    expect(screen.getByText(/View program/).previousElementSibling?.textContent).toBe("");
  });
});

describe("ApprenticeshipList", () => {
  const all = [
    listing({ slug: "acme", company: "Acme", description: "Rockets", location: ["Denver, CO"] }),
    listing({ slug: "globex", company: "Globex", description: "Design systems", location: ["Remote"] }),
    listing({ slug: "initech", company: "Initech", description: "TPS reports", location: [] }),
  ];

  function renderWithSearch(list = all) {
    render(
      <>
        <HeroSearch />
        <ApprenticeshipList apprenticeships={list} />
      </>,
    );
  }

  it("shows everything until a query is typed", () => {
    render(<ApprenticeshipList apprenticeships={all} />);
    expect(screen.getByText("Showing 3 of 3 apprenticeships")).toBeTruthy();
  });

  it.each([
    ["company", "globex", "Globex"],
    ["description", "TPS", "Initech"],
    ["location", "denver", "Acme"],
  ])("filters by %s", async (_field, query, company) => {
    renderWithSearch();
    await userEvent.type(screen.getByRole("searchbox"), query);
    expect(screen.getByText("Showing 1 of 3 apprenticeships")).toBeTruthy();
    expect(screen.getByText(company)).toBeTruthy();
  });

  it("treats a blank query as no filter", async () => {
    renderWithSearch();
    await userEvent.type(screen.getByRole("searchbox"), "   ");
    expect(screen.getByText("Showing 3 of 3 apprenticeships")).toBeTruthy();
  });

  it("says when nothing matches", async () => {
    renderWithSearch();
    await userEvent.type(screen.getByRole("searchbox"), "zzz");
    expect(screen.getByText("No apprenticeships found matching “zzz”")).toBeTruthy();
  });
});

describe("directory filters and paging", () => {
  const many = Array.from({ length: 14 }, (_, i) =>
    listing({ slug: `co-${i}`, company: `Company ${i}`, location: i < 2 ? ["Remote"] : ["Denver, CO"] }),
  );

  it("shows the first twelve programs until Show all is pressed", async () => {
    render(<ApprenticeshipList apprenticeships={many} />);
    expect(screen.getAllByRole("link")).toHaveLength(12);
    await userEvent.click(screen.getByRole("button", { name: "Show all 14 programs" }));
    expect(screen.getAllByRole("link")).toHaveLength(14);
    expect(screen.queryByRole("button", { name: /Show all/ })).toBeNull();
  });

  it("filters to remote programs and back", async () => {
    render(<ApprenticeshipList apprenticeships={many} />);
    await userEvent.click(screen.getByRole("button", { name: "Remote 2" }));
    expect(screen.getByText("Showing 2 of 14 apprenticeships")).toBeTruthy();
    expect(screen.getByRole("button", { name: "Remote 2" }).getAttribute("aria-pressed")).toBe("true");
    await userEvent.click(screen.getByRole("button", { name: "All 14" }));
    expect(screen.getByText("Showing 14 of 14 apprenticeships")).toBeTruthy();
  });

  it("hides the filters when no program is remote", () => {
    render(<ApprenticeshipList apprenticeships={[listing({ location: ["NYC"] })]} />);
    expect(screen.queryByRole("button")).toBeNull();
  });

  it("scrolls to the directory when the hero search is submitted", async () => {
    const scrollIntoView = vi.fn();
    Element.prototype.scrollIntoView = scrollIntoView;
    render(<HeroSearch />);
    await userEvent.click(screen.getByRole("button", { name: "Search" }));
    expect(scrollIntoView).not.toHaveBeenCalled();
    cleanup();
    render(
      <>
        <HeroSearch />
        <ApprenticeshipList apprenticeships={many} />
      </>,
    );
    await userEvent.type(screen.getByRole("searchbox"), "Company 3{Enter}");
    expect(scrollIntoView).toHaveBeenCalledOnce();
    expect(screen.getByText("Showing 1 of 14 apprenticeships")).toBeTruthy();
  });
});

describe("SubmitForm", () => {
  async function fillAndSubmit() {
    render(<SubmitForm />);
    await userEvent.type(screen.getByLabelText("Name of apprenticeship"), "Acme");
    await userEvent.type(screen.getByLabelText("Link to apprenticeship"), "https://acme.example");
    await userEvent.click(screen.getByRole("button", { name: "Submit apprenticeship" }));
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
    expect(screen.getByLabelText("Name of apprenticeship")).toHaveProperty("value", "");
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
    expect(screen.getByLabelText("Name of apprenticeship")).toHaveProperty("value", "Acme");
  });
});
