interface Props {
  children: React.ReactNode;
  // Short label above the title, set in caps beside the rising sun
  eyebrow: string;
}

// The small caps label with a rising sun that opens a section.
export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-2.5 font-sans text-[13px] leading-4 font-bold uppercase tracking-widest text-inti-deep">
      <svg aria-hidden="true" viewBox="0 0 48 26" className="w-8 h-auto shrink-0" fill="currentColor">
        {[-60, -30, 0, 30, 60].map((angle) => (
          <rect key={angle} x="22.5" y="1" width="3" height="8" rx="1.5" transform={`rotate(${angle} 24 24)`} />
        ))}
        <path d="M12 24a12 12 0 0 1 24 0z" />
        <rect x="2" y="23" width="44" height="3" rx="1.5" />
      </svg>
      {children}
    </span>
  );
}

// A section title under its eyebrow.
export default function SectionHeading({ children, eyebrow }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-display text-3xl md:text-5xl md:leading-[1.08] font-bold tracking-tight">
        {children}
      </h2>
    </div>
  );
}
