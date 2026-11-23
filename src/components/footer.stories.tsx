import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Footer from "./footer";

const meta = {
  title: "Sections/Footer",
  component: Footer,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
