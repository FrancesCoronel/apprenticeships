import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button, ButtonLink } from "./button";

const meta = {
  title: "Primitives/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Fully round, at least 44px tall, bold sentence-case labels. `primary` is the gold action, one per section. `dark` sits on the gold band, in the navbar and on selected pills. `outline` is a quieter action. Use `ButtonLink` for links, and `buttonClasses()` only where neither fits.",
      },
    },
  },
  args: { children: "Visit apprenticeship", variant: "primary", size: "md" },
  argTypes: {
    variant: { control: "inline-radio", options: ["primary", "dark", "outline"] },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    className: { control: false },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Dark: Story = { args: { variant: "dark", children: "Add a program" } };

export const Outline: Story = { args: { variant: "outline", children: "Show all 83 programs" } };

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-4">
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    variant: "dark",
    disabled: true,
    children: "Submitting...",
    className: "disabled:opacity-50 disabled:cursor-not-allowed",
  },
};

// The dark button is the one to use on gold
export const OnTheGoldBand: Story = {
  render: () => (
    <div className="band-inti bg-inti text-on-inti rounded-lg p-8 flex flex-wrap gap-4">
      <Button variant="dark">Submit apprenticeship</Button>
      <Button variant="outline">Create an issue</Button>
    </div>
  ),
};

export const AsLink: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <ButtonLink href="/#contribute" variant="dark" size="sm">
        Add a program
      </ButtonLink>
      <ButtonLink href="https://careers.airbnb.com/connect-engineering-apprenticeship/" target="_blank" rel="noopener noreferrer">
        Visit apprenticeship &rarr;
      </ButtonLink>
    </div>
  ),
};
