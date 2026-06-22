import { cn } from "@/lib/utils";

type SectionTitleProps = {
  as?: "h1" | "h2" | "h3";
  before: string;
  highlight: string;
  className?: string;
};

const sizeClasses = {
  h1: "text-4xl md:text-5xl lg:text-6xl",
  h2: "text-4xl md:text-5xl lg:text-6xl",
  h3: "text-2xl md:text-3xl",
} as const;

export function SectionTitle({
  as: Tag = "h2",
  before,
  highlight,
  className,
}: SectionTitleProps) {
  return (
    <Tag
      className={cn(
        "font-bold leading-[1.1] tracking-tight",
        sizeClasses[Tag],
        className,
      )}
    >
      {before}
      <span className="text-primary"> {highlight}</span>
    </Tag>
  );
}
