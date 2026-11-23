import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Image from "next/image";
import { Card, LogoPanel, cardClasses } from "./card";

const meta = {
  title: "Primitives/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Raised surface, hairline edge, 20px corners and the resting shadow. Pass `interactive` when the whole card is a link: it lifts into sunlight on hover. `LogoPanel` holds a company logo and stays white in Night, because logos are drawn for white.",
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Plain: Story = {
  render: (args) => (
    <Card {...args} className="max-w-sm p-6 flex flex-col gap-2">
      <div className="font-display font-bold text-2xl">Program facts</div>
      <p className="text-ink-muted text-sm font-medium">A 6-month paid program in San Francisco, CA.</p>
    </Card>
  ),
};

export const Interactive: Story = {
  // A whole-card link takes cardClasses({ interactive: true }), as ApprenticeshipCard does
  render: () => (
    <a href="#" className={cardClasses({ interactive: true, className: "max-w-sm p-6 flex flex-col gap-2" })}>
      <span className="font-display font-bold text-2xl">Hover me</span>
      <span className="text-ink-muted text-sm font-medium">Interactive cards take shadow-sunlit on hover.</span>
    </a>
  ),
};

export const WithLogoPanel: Story = {
  render: () => (
    <Card className="max-w-sm">
      <LogoPanel className="w-full h-44">
        <Image src="/images/apprenticeships/airbnb.jpg" alt="Airbnb apprenticeship program" fill className="object-contain p-6" />
      </LogoPanel>
      <div className="p-6 font-display font-bold text-2xl">Airbnb</div>
    </Card>
  ),
};
