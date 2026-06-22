import type { LucideIcon } from "lucide-react";
import { IconBox } from "@/components/ui/icon-box";

type MethodologyStepCardProps = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export function MethodologyStepCard({
  number,
  title,
  description,
  icon,
}: MethodologyStepCardProps) {
  return (
    <article className="grid gap-4 rounded-2xl border border-white/5 bg-background p-6 transition-colors hover:border-primary/20 md:grid-cols-[auto_1fr] md:gap-8 md:p-8">
      <div className="flex items-start gap-4 md:flex-col md:items-center md:gap-3">
        <IconBox
          icon={icon}
          size="sm"
          variant="gradient"
          className="lg:hidden"
        />
        <p className="text-3xl font-bold text-primary md:text-4xl lg:hidden">
          {number}
        </p>
        <p className="hidden text-sm font-bold text-primary lg:block">
          {number}
        </p>
      </div>
      <div>
        <h3 className="text-xl font-bold md:text-2xl">{title}</h3>
        <p className="mt-3 leading-relaxed text-muted">{description}</p>
      </div>
    </article>
  );
}

type TimelineStepProps = {
  number: string;
  title: string;
  icon: LucideIcon;
};

export function TimelineStep({ number, title, icon: Icon }: TimelineStepProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/60 text-background shadow-lg shadow-primary/20">
        <Icon className="h-7 w-7" aria-hidden />
      </div>
      <p className="mt-4 text-sm font-bold text-primary">{number}</p>
      <p className="mt-2 text-sm font-semibold leading-snug">{title}</p>
    </div>
  );
}

type GuaranteeItemProps = {
  label: string;
  icon: LucideIcon;
};

export function GuaranteeItem({ label, icon: Icon }: GuaranteeItemProps) {
  return (
    <li className="flex items-start gap-4 rounded-xl border border-white/5 bg-matte p-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/60 text-background">
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <span className="pt-2 text-sm md:text-base">{label}</span>
    </li>
  );
}
