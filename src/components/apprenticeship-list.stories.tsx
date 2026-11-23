import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, userEvent, within } from "storybook/test";
import { listings } from "@/design-system/fixtures";
import { setSearchQuery } from "@/lib/search-query";
import ApprenticeshipList from "./apprenticeship-list";
import HeroSearch from "./hero-search";

const meta = {
  title: "Sections/ApprenticeshipList",
  component: ApprenticeshipList,
  parameters: { layout: "fullscreen" },
  args: { apprenticeships: listings },
  beforeEach: () => () => setSearchQuery(""),
} satisfies Meta<typeof ApprenticeshipList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Directory: Story = {};

export const RemoteOnly: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", { name: /^Remote/ }));
    await expect(canvas.getByText(/Showing 2 of 6/)).toBeVisible();
  },
};

export const NoMatches: Story = {
  render: (args) => (
    <>
      <div className="bg-surface-sunrise p-6">
        <HeroSearch />
      </div>
      <ApprenticeshipList {...args} />
    </>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByRole("searchbox"), "astronaut");
    await expect(canvas.getByText(/No apprenticeships found/)).toBeVisible();
  },
};
