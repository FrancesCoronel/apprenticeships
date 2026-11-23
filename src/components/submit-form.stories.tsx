import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, mocked, userEvent, within } from "storybook/test";
// Storybook swaps this server action for .storybook/mocks/submit.ts, so nothing is sent
import { submitApprenticeship } from "@/actions/submit";
import SubmitForm from "./submit-form";

const meta = {
  title: "Sections/SubmitForm",
  component: SubmitForm,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof SubmitForm>;

export default meta;
type Story = StoryObj<typeof meta>;

async function fillAndSubmit(canvasElement: HTMLElement) {
  const canvas = within(canvasElement);
  await userEvent.type(canvas.getByLabelText("Name of apprenticeship"), "Acme");
  await userEvent.type(canvas.getByLabelText("Link to apprenticeship"), "https://acme.example");
  await userEvent.click(canvas.getByRole("button", { name: "Submit apprenticeship" }));
  return canvas;
}

export const Default: Story = {};

export const Success: Story = {
  beforeEach: () => {
    mocked(submitApprenticeship).mockResolvedValue({
      success: true,
      message: "Thanks. We opened an issue for this program.",
      url: "https://github.com/FrancesCoronel/apprenticeships/issues",
    });
  },
  play: async ({ canvasElement }) => {
    const canvas = await fillAndSubmit(canvasElement);
    await expect(await canvas.findByRole("status")).toHaveTextContent("View issue");
  },
};

export const Failed: Story = {
  beforeEach: () => {
    mocked(submitApprenticeship).mockResolvedValue({
      success: false,
      message: "Couldn’t submit. Check the link starts with https:// and try again.",
    });
  },
  play: async ({ canvasElement }) => {
    const canvas = await fillAndSubmit(canvasElement);
    await expect(await canvas.findByRole("alert")).toBeVisible();
  },
};
