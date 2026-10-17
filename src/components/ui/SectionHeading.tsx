type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8 text-center">
      {eyebrow && <p className="text-sm font-semibold text-teal-600">{eyebrow}</p>}
      <h2 className="text-3xl font-bold tracking-tight font-heading">{title}</h2>
      {description && <p className="mt-2 text-muted-foreground">{description}</p>}
    </div>
  );
}
