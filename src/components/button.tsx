import Link from "next/link";
import type { ComponentProps } from "react";

// Inti buttons: fully round, at least 44px tall, bold sentence-case labels.
// primary: the gold action, one per section. dark: ink on gold bands, the navbar
// and selected pills. outline: a quieter action, such as "Show all".
export type ButtonVariant = "primary" | "dark" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

const base = "inline-flex items-center justify-center rounded-full font-bold";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-inti text-on-inti hover:bg-inti-hover transition-colors",
  dark: "bg-ink text-surface-sunrise hover:opacity-90 transition-opacity",
  outline: "border-2 border-ink hover:bg-ink hover:text-surface-sunrise transition-colors",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-11 px-4 md:px-5 text-sm md:text-base",
  md: "min-h-12 px-7 py-3",
  lg: "min-h-14 px-8 py-3.5 text-lg shadow-sunlit",
};

interface Style {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

// The class list for a button, for elements that can't use the components below.
// className is for layout only (margins, self-alignment); don't override colour or size.
export function buttonClasses({ variant = "primary", size = "md", className }: Style = {}) {
  return [base, variants[variant], sizes[size], className].filter(Boolean).join(" ");
}

type ButtonProps = Style & Omit<ComponentProps<"button">, "className">;

export function Button({ variant, size, className, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={buttonClasses({ variant, size, className })} {...props} />;
}

type ButtonLinkProps = Style & Omit<ComponentProps<typeof Link>, "className">;

// A link that looks like a button. Internal paths use Next's Link; pass an
// external href with target="_blank" rel="noopener noreferrer" as usual.
export function ButtonLink({ variant, size, className, ...props }: ButtonLinkProps) {
  return <Link className={buttonClasses({ variant, size, className })} {...props} />;
}
