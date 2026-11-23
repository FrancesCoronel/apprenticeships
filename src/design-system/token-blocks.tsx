import type { ReactNode } from "react";
import { Eyebrow } from "@/components/section-heading";
import type { ColourGroup, ContrastPair } from "./tokens";

// Building blocks for the Storybook token pages. Styled with Inti tokens only.

// The current value of a CSS variable from globals.css, in whichever theme is showing.
export function readToken(name: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(`--${name}`).trim();
}

// Relative luminance of a #rgb or #rrggbb value, per WCAG 2.2
function luminance(hex: string): number | null {
  const match = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(hex);
  if (!match) return null;
  const digits = match[1].length === 3 ? [...match[1]].map((d) => d + d).join("") : match[1];
  const [r, g, b] = [0, 2, 4].map((i) => {
    const c = parseInt(digits.slice(i, i + 2), 16) / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function contrastRatio(a: string, b: string): number | null {
  const la = luminance(a);
  const lb = luminance(b);
  if (la === null || lb === null) return null;
  const [hi, lo] = la > lb ? [la, lb] : [lb, la];
  return (hi + 0.05) / (lo + 0.05);
}

export function Page({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: ReactNode; children: ReactNode }) {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-12 text-ink">
      <header className="flex flex-col gap-3 max-w-[720px]">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="font-display font-extrabold text-5xl md:text-[64px] md:leading-none tracking-[-0.03em]">{title}</h1>
        <div className="text-lg leading-[30px] text-ink-muted">{intro}</div>
      </header>
      {children}
    </div>
  );
}

export function Section({ title, description, children }: { title: string; description?: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <h2 className="font-display font-bold text-3xl tracking-tight">{title}</h2>
        {description && <p className="text-ink-muted max-w-[640px]">{description}</p>}
      </div>
      {children}
    </section>
  );
}

export function Code({ children }: { children: ReactNode }) {
  return <code className="font-mono text-[13px] bg-surface-stone text-ink rounded-sm px-1.5 py-0.5">{children}</code>;
}

export function SwatchGrid({ group }: { group: ColourGroup }) {
  return (
    <Section title={group.title} description={group.description}>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {group.tokens.map((token) => (
          <li key={token.name} className="rounded-lg overflow-hidden border border-hairline bg-surface-raised shadow-card">
            <div className="h-24 border-b border-hairline" style={{ background: `var(--${token.name})` }} />
            <div className="p-4 flex flex-col gap-1.5">
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-bold">{token.name}</span>
                <span className="font-mono text-[13px] text-ink-muted uppercase">{readToken(token.name)}</span>
              </div>
              <p className="text-sm text-ink-muted">{token.usage}</p>
              <p className="text-[13px] text-ink-muted">
                <Code>{`--${token.name}`}</Code>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function ContrastTable({ pairs }: { pairs: ContrastPair[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-hairline bg-surface-raised">
      <table className="w-full text-sm text-left">
        <thead className="text-ink-muted">
          <tr className="border-b border-hairline">
            <th className="p-3 font-bold">Sample</th>
            <th className="p-3 font-bold">Text on ground</th>
            <th className="p-3 font-bold">Where</th>
            <th className="p-3 font-bold text-right">Ratio</th>
            <th className="p-3 font-bold">Needs</th>
          </tr>
        </thead>
        <tbody>
          {pairs.map((pair) => {
            const ratio = contrastRatio(readToken(pair.text), readToken(pair.on));
            const passes = ratio !== null && ratio >= pair.min;
            return (
              <tr key={`${pair.text}-${pair.on}`} className="border-b border-hairline last:border-0">
                <td className="p-3">
                  <span
                    className="inline-flex min-w-16 justify-center rounded-md px-3 py-1.5 font-bold"
                    style={{ color: `var(--${pair.text})`, background: `var(--${pair.on})` }}
                  >
                    Aa
                  </span>
                </td>
                <td className="p-3">
                  <Code>{pair.text}</Code> on <Code>{pair.on}</Code>
                </td>
                <td className="p-3 text-ink-muted">{pair.where}</td>
                <td className="p-3 text-right font-bold tabular-nums">{ratio === null ? "n/a" : `${ratio.toFixed(2)}:1`}</td>
                <td className="p-3">
                  <span className={`rounded-full px-3 py-1 font-bold ${passes ? "bg-terrace-tint text-terrace" : "bg-danger-tint text-danger"}`}>
                    {passes ? "Passes" : "Fails"} {pair.min}:1
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function Rule({ kind, children }: { kind: "do" | "dont"; children: ReactNode }) {
  return (
    <li className="flex gap-3 rounded-md border border-hairline bg-surface-raised p-4">
      <span className={`shrink-0 rounded-full px-3 py-0.5 text-sm font-bold h-fit ${kind === "do" ? "bg-terrace-tint text-terrace" : "bg-danger-tint text-danger"}`}>
        {kind === "do" ? "Do" : "Don’t"}
      </span>
      <span>{children}</span>
    </li>
  );
}
