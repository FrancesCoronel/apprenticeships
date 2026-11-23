import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Code, Page, Section } from "./token-blocks";
import { layout, radii, shadows } from "./tokens";

const meta = {
  title: "Inti/Space, shape and depth",
  parameters: { layout: "padded" },
  tags: ["!autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  name: "Space, shape and depth",
  render: () => (
    <Page
      eyebrow="Tokens"
      title="Space, shape and depth"
      intro="Sections get room, corners are soft and only three shadows exist."
    >
      <Section title="Layout">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {layout.map((item) => (
            <li key={item.name} className="rounded-lg border border-hairline bg-surface-raised p-5 flex flex-col gap-1.5">
              <span className="text-sm text-ink-muted">{item.name}</span>
              <span className="font-display font-bold text-2xl">{item.value}</span>
              <Code>{item.detail}</Code>
            </li>
          ))}
        </ul>
      </Section>
      <Section title="Radius">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {radii.map((radius) => (
            <li key={radius.name} className="flex flex-col gap-3">
              <div className={`h-24 bg-surface-sunrise border-2 border-inti-deep ${radius.className}`} />
              <span className="font-bold">{radius.name}</span>
              <Code>{radius.className}</Code>
              <span className="text-sm text-ink-muted">{radius.usage}</span>
            </li>
          ))}
        </ul>
      </Section>
      <Section title="Shadow" description="Three shadows only. Hover transitions are 150ms ease-out on colour and shadow; nothing moves.">
        <ul className="grid gap-8 sm:grid-cols-3 p-2">
          {shadows.map((shadow) => (
            <li key={shadow.name} className="flex flex-col gap-3">
              <div className={`h-32 rounded-lg bg-surface-raised ${shadow.className}`} />
              <Code>{shadow.className}</Code>
              <span className="text-sm text-ink-muted">{shadow.usage}</span>
            </li>
          ))}
        </ul>
      </Section>
    </Page>
  ),
};
