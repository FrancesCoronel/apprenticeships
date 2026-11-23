import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Code, Page, Rule, Section } from "./token-blocks";
import { typeScale } from "./tokens";

const meta = {
  title: "Inti/Type",
  parameters: { layout: "padded" },
  tags: ["!autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Scale: Story = {
  render: () => (
    <Page
      eyebrow="Tokens"
      title="Type"
      intro={
        <>
          Headlines use <Code>font-display</Code> (Bricolage Grotesque), set big, heavy and tight. Everything else uses the
          sans face (Plus Jakarta Sans) at 400, 500 and 700.
        </>
      }
    >
      <Section title="Families">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-hairline bg-surface-raised p-6 flex flex-col gap-2">
            <span className="text-sm text-ink-muted">Display · <Code>font-display</Code></span>
            <span className="font-display font-extrabold text-6xl tracking-[-0.03em]">Aa Inti</span>
            <span className="text-sm text-ink-muted">Bricolage Grotesque 700 and 800</span>
          </div>
          <div className="rounded-lg border border-hairline bg-surface-raised p-6 flex flex-col gap-2">
            <span className="text-sm text-ink-muted">Sans · <Code>font-sans</Code></span>
            <span className="font-sans font-bold text-6xl">Aa Inti</span>
            <span className="text-sm text-ink-muted">Plus Jakarta Sans 400, 500 and 700</span>
          </div>
        </div>
      </Section>
      <Section title="Scale" description="Class lists are the ones the components use, so copy them as they are.">
        <ul className="flex flex-col">
          {typeScale.map((style) => (
            <li key={style.name} className="grid gap-3 md:grid-cols-[240px_1fr] border-t border-hairline py-6">
              <div className="flex flex-col gap-1">
                <span className="font-bold">{style.name}</span>
                <span className="text-sm text-ink-muted">{style.spec}</span>
              </div>
              <div className="flex flex-col gap-2 min-w-0">
                <span className={style.className}>{style.sample}</span>
                <Code>{style.className}</Code>
              </div>
            </li>
          ))}
        </ul>
      </Section>
      <Section title="Rules">
        <ul className="grid gap-3 md:grid-cols-2">
          <Rule kind="do">Sentence case for headings, buttons and labels: &ldquo;Visit apprenticeship&rdquo;.</Rule>
          <Rule kind="dont">Title Case, exclamation marks or emoji in UI copy.</Rule>
          <Rule kind="do">Keep running text near 65 characters a line. Headings take <Code>text-wrap: balance</Code>.</Rule>
          <Rule kind="do">Counts use <Code>tabular-nums</Code>.</Rule>
        </ul>
      </Section>
    </Page>
  ),
};
