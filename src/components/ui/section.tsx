import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
};

export function Section({
  id,
  children,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 px-6 py-20 md:py-28", className)}
    >
      <div className={cn("mx-auto max-w-6xl", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
