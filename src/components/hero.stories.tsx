import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Hero from "./hero";
import Navbar from "./navbar";

const meta = {
  title: "Sections/Hero",
  component: Hero,
  parameters: { layout: "fullscreen" },
  args: { programs: 83, remote: 16, contributors: 14 },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// The navbar and hero share one sunrise band, as on the home page
export const WithNavbar: Story = {
  render: (args) => (
    <>
      <Navbar />
      <Hero {...args} />
    </>
  ),
};

export const Phone: Story = {
  globals: { viewport: { value: "mobile1" } },
};
