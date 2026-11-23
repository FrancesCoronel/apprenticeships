import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Chip } from "./chip";

const meta = {
  title: "Primitives/Chip",
  component: Chip,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Small round labels for locations. `remote` marks remote-friendly places in terrace green, `neutral` is everything else, `outline` sits on the sunrise band.",
      },
    },
  },
  args: { children: "Seattle, WA", tone: "neutral" },
  argTypes: { tone: { control: "inline-radio", options: ["remote", "neutral", "outline"] } },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = {};

export const Remote: Story = { args: { tone: "remote", children: "Remote" } };

export const Outline: Story = {
  args: { tone: "outline", children: "London, UK" },
  decorators: [(Story) => <div className="bg-surface-sunrise rounded-lg p-6"><Story /></div>],
};

export const LocationList: Story = {
  render: () => (
    <ul className="flex flex-wrap gap-2">
      <Chip as="li" tone="remote">United States (Remote)</Chip>
      <Chip as="li">Seattle, WA</Chip>
      <Chip as="li">Detroit, MI</Chip>
      <Chip as="li">Columbus, OH</Chip>
    </ul>
  ),
};
