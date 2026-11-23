import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Intro from "./intro";

const meta = {
  title: "Sections/Intro",
  component: Intro,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Intro>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
