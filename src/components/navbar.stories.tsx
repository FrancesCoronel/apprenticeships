import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Navbar from "./navbar";

const meta = {
  title: "Sections/Navbar",
  component: Navbar,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Phone: Story = { globals: { viewport: { value: "mobile1" } } };
