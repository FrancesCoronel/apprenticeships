import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Code, ContrastTable, Page, Section, SwatchGrid } from "./token-blocks";
import { colourGroups, contrastPairs } from "./tokens";

// Values are read live from src/app/globals.css: switch Theme in the toolbar to see Night.
const meta = {
  title: "Inti/Colour",
  parameters: { layout: "padded" },
  tags: ["!autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Palette: Story = {
  render: () => (
    <Page
      eyebrow="Tokens"
      title="Colour"
      intro={
        <>
          Two themes, Day and Night, from one set of tokens in <Code>src/app/globals.css</Code>. Style through the Tailwind
          colour of the same name (<Code>bg-surface-sunrise</Code>, <Code>text-ink-muted</Code>, <Code>bg-inti</Code>), never a
          hex value. ESLint rejects hex, <Code>rgb()</Code> and Tailwind&rsquo;s stock colours in <Code>src/</Code>.
        </>
      }
    >
      {colourGroups.map((group) => (
        <SwatchGrid key={group.title} group={group} />
      ))}
    </Page>
  ),
};

export const Contrast: Story = {
  render: () => (
    <Page
      eyebrow="Tokens"
      title="Contrast"
      intro="Every text and ground pair the site uses, measured in the theme that is showing. Text needs 4.5:1 and the focus ring 3:1 (WCAG 2.2 AA). Check both themes."
    >
      <Section title="Pairs">
        <ContrastTable pairs={contrastPairs} />
      </Section>
    </Page>
  ),
};
