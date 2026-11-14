import type { ComponentProps, ElementType } from "react";

// Small round labels for locations and tags. remote marks remote-friendly places
// in terrace green; neutral is everything else; outline sits on the sunrise band.
export type ChipTone = "remote" | "neutral" | "outline";

const tones: Record<ChipTone, string> = {
  remote: "bg-terrace-tint text-terrace",
  neutral: "bg-surface-stone text-ink-muted",
  outline: "bg-surface-raised border border-hairline text-ink-muted",
};

type ChipProps = ComponentProps<"span"> & { as?: ElementType; tone?: ChipTone };

export function Chip({ as: Tag = "span", tone = "neutral", className, ...props }: ChipProps) {
  return (
    <Tag
      className={["rounded-full px-3 py-1 text-sm font-medium", tones[tone], className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}
