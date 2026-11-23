import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Image from "next/image";
import { Eyebrow } from "@/components/section-heading";
import { Code, Page, Rule, Section } from "./token-blocks";

const meta = {
  title: "Inti/Motifs",
  parameters: { layout: "padded" },
  tags: ["!autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const SunAndEyebrow: Story = {
  name: "Sun mark and eyebrow",
  render: () => (
    <Page
      eyebrow="Motifs"
      title="The sun, and nothing else"
      intro={
        <>
          The sun mark (<Code>public/images/logo.svg</Code>) is a gold disc with an inner ring and 24 alternating rays. It is
          the logo at small sizes and the page&rsquo;s main image at large ones. There is no other illustration.
        </>
      }
    >
      <Section title="Sizes" description="Minimum size 24px.">
        <div className="flex flex-wrap items-end gap-8">
          {[24, 44, 52, 120].map((size) => (
            <div key={size} className="flex flex-col items-center gap-2">
              <Image src="/images/logo.svg" alt="" width={size} height={size} />
              <span className="text-sm text-ink-muted tabular-nums">{size}px</span>
            </div>
          ))}
        </div>
      </Section>
      <Section title="Rising from the edge" description="At large sizes the sun is cropped by the bottom of the sunrise band, or by the corner of the night stat card.">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="relative overflow-hidden h-56 rounded-lg bg-surface-sunrise">
            <Image src="/images/logo.svg" alt="" width={360} height={360} className="absolute max-w-none size-[360px] -bottom-[190px] -right-16" />
          </div>
          <div className="band-night relative overflow-hidden h-56 rounded-xl bg-night text-on-night p-8">
            <Image src="/images/logo.svg" alt="" width={260} height={260} className="absolute max-w-none size-[260px] -right-[110px] -top-[120px]" />
            <p className="relative pt-16 font-display font-extrabold text-5xl text-night-accent tabular-nums">593,000+</p>
          </div>
        </div>
      </Section>
      <Section title="Rising sun eyebrow" description="A half sun on the horizon beside a caps label, above every section title. Use SectionHeading, or Eyebrow on its own.">
        <div className="flex flex-col gap-3">
          <Eyebrow>The directory</Eyebrow>
          <Eyebrow>About</Eyebrow>
          <Eyebrow>Community</Eyebrow>
        </div>
      </Section>
      <Section title="Using Inti with care" description="Inca religion and its symbols still matter to Andean communities today.">
        <ul className="grid gap-3 md:grid-cols-2">
          <Rule kind="do">Draw the sun as an abstract disc with rays.</Rule>
          <Rule kind="dont">Give the sun a face, a costume or a personality, or animate it as a character.</Rule>
          <Rule kind="dont">Use the chakana, tocapu textile designs or any stepped motif.</Rule>
          <Rule kind="do">Say &ldquo;Inca&rdquo;. In Quechua, <em>inti</em> means sun and <em>quri</em> means gold.</Rule>
          <Rule kind="dont">Spin the sun or add parallax. Respect reduced motion.</Rule>
          <Rule kind="do">Use text labels first. Arrows are text characters (&larr; &rarr;), not icons.</Rule>
        </ul>
      </Section>
    </Page>
  ),
};
