interface Props {
  children: React.ReactNode;
  align?: "left" | "center";
}

// A section title above the terrace rule: two green steps rising to a gold one.
export default function SectionHeading({ children, align = "left" }: Props) {
  return (
    <div
      className={`inline-flex flex-col gap-2.5 ${align === "center" ? "items-center" : "items-start"}`}
    >
      <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
        {children}
      </h2>
      <span aria-hidden="true" className="relative block h-3 w-24">
        <i className="absolute left-0 top-2 h-1 w-8 rounded-full bg-terrace" />
        <i className="absolute left-7 top-1 h-1 w-8 rounded-full bg-terrace" />
        <i className="absolute left-14 top-0 h-1 w-10 rounded-full bg-inti" />
      </span>
    </div>
  );
}
