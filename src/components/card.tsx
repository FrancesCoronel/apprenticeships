import type { ComponentProps, ElementType } from "react";

// Inti cards: raised surface, hairline edge, 20px corners and the resting shadow.
// Interactive cards (the whole card is a link) lift into sunlight on hover.
export function cardClasses({ interactive = false, className }: { interactive?: boolean; className?: string } = {}) {
  return [
    "rounded-lg overflow-hidden border border-hairline bg-surface-raised shadow-card",
    interactive && "hover:shadow-sunlit transition-shadow",
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

type CardProps = ComponentProps<"div"> & { as?: ElementType; interactive?: boolean };

export function Card({ as: Tag = "div", interactive, className, ...props }: CardProps) {
  return <Tag className={cardClasses({ interactive, className })} {...props} />;
}

// The white panel that holds a company logo at the top of a card. It stays white
// in Night too, because company logos are drawn for white backgrounds.
export function LogoPanel({ className, ...props }: ComponentProps<"div">) {
  return <div className={["relative bg-surface-logo border-b border-hairline", className].filter(Boolean).join(" ")} {...props} />;
}
