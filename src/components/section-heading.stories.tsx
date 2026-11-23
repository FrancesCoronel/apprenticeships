import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import SectionHeading, { Eyebrow } from "./section-heading";

const meta = {
  title: "Primitives/SectionHeading",
  component: SectionHeading,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Every section title sits under a rising-sun eyebrow. Use `SectionHeading` rather than a bare `h2`, and `Eyebrow` for a caps label on its own.",
      },
    },
  },
  args: { eyebrow: "The directory", children: "Find an apprenticeship" },
} satisfies Meta<typeof SectionHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const OnStone: Story = {
  args: { eyebrow: "About", children: "What is an apprenticeship?" },
  decorators: [(Story) => <div className="bg-surface-stone rounded-lg p-8"><Story /></div>],
};

export const EyebrowAlone: Story = {
  render: () => <Eyebrow>Community</Eyebrow>,
};
