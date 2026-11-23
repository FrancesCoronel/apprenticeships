import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { listings } from "@/design-system/fixtures";
import ApprenticeshipCard from "./apprenticeship-card";

const meta = {
  title: "Sections/ApprenticeshipCard",
  component: ApprenticeshipCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "One listing in the directory. It leads with a remote location when the program has one, otherwise the first place listed.",
      },
    },
  },
  decorators: [(Story) => <div className="max-w-sm"><Story /></div>],
  args: { apprenticeship: listings[0] },
} satisfies Meta<typeof ApprenticeshipCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Remote: Story = {};

export const OnePlace: Story = { args: { apprenticeship: listings[1] } };

export const ManyPlaces: Story = { args: { apprenticeship: listings[2] } };

export const NoLocation: Story = { args: { apprenticeship: { ...listings[4], location: [] } } };
