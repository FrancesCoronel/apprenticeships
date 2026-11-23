// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button, ButtonLink, buttonClasses } from "./button";
import { Card, LogoPanel, cardClasses } from "./card";
import { Chip } from "./chip";

afterEach(cleanup);

describe("Button", () => {
  it("defaults to the gold primary button at the standard size", () => {
    expect(buttonClasses()).toContain("bg-inti text-on-inti");
    expect(buttonClasses()).toContain("min-h-12");
    expect(buttonClasses({ variant: "dark", size: "lg", className: "self-center" })).toMatch(
      /bg-ink text-surface-sunrise.*min-h-14.*self-center$/,
    );
  });

  it("renders a type=button that calls onClick, and keeps an explicit type", async () => {
    const onClick = vi.fn();
    render(
      <>
        <Button onClick={onClick}>Try again</Button>
        <Button type="submit" variant="outline">
          Send
        </Button>
      </>,
    );
    await userEvent.click(screen.getByRole("button", { name: "Try again" }));
    expect(onClick).toHaveBeenCalledOnce();
    expect(screen.getByRole("button", { name: "Try again" }).getAttribute("type")).toBe("button");
    const send = screen.getByRole("button", { name: "Send" });
    expect(send.getAttribute("type")).toBe("submit");
    expect(send.className).toContain("border-ink");
  });

  it("renders a link styled as a button", () => {
    render(
      <ButtonLink href="/#contribute" variant="dark" size="sm">
        Add a program
      </ButtonLink>,
    );
    const link = screen.getByRole("link", { name: "Add a program" });
    expect(link.getAttribute("href")).toBe("/#contribute");
    expect(link.className).toContain("min-h-11");
  });
});

describe("Card, LogoPanel and Chip", () => {
  it("only lifts interactive cards into sunlight on hover", () => {
    expect(cardClasses()).not.toContain("hover:shadow-sunlit");
    expect(cardClasses({ interactive: true })).toContain("hover:shadow-sunlit");
  });

  it("renders a card as any element, with a logo panel inside", () => {
    render(
      <Card as="aside" aria-label="Facts" className="min-w-0">
        <LogoPanel data-testid="logo" className="h-48" />
      </Card>,
    );
    const card = screen.getByRole("complementary", { name: "Facts" });
    expect(card.className).toMatch(/shadow-card.*min-w-0$/);
    expect(screen.getByTestId("logo").className).toBe("relative bg-surface-logo border-b border-hairline h-48");
    render(<Card>Plain</Card>);
    expect(screen.getByText("Plain").tagName).toBe("DIV");
    render(<LogoPanel data-testid="bare" />);
    expect(screen.getByTestId("bare").className).toBe("relative bg-surface-logo border-b border-hairline");
  });

  it("colours chips by tone", () => {
    render(
      <ul>
        <Chip>Seattle, WA</Chip>
        <Chip tone="remote">Remote</Chip>
        <Chip as="li" tone="outline" className="shrink-0">
          London
        </Chip>
      </ul>,
    );
    expect(screen.getByText("Seattle, WA").className).toContain("bg-surface-stone");
    expect(screen.getByText("Remote").className).toContain("bg-terrace-tint text-terrace");
    const london = screen.getByText("London");
    expect(london.tagName).toBe("LI");
    expect(london.className).toMatch(/border-hairline.*shrink-0$/);
  });
});
