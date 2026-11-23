import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { contributorList } from "@/design-system/fixtures";
import Contributors from "./contributors";

const meta = {
  title: "Sections/Contributors",
  component: Contributors,
  parameters: { layout: "fullscreen" },
  args: { contributors: contributorList },
} satisfies Meta<typeof Contributors>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
