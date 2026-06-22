import { getIcon, type IconName } from "@/lib/icons";
import { IconBox } from "@/components/ui/icon-box";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: IconName;
};

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const Icon = getIcon(icon);

  return (
    <article className="group h-full rounded-2xl border border-white/5 bg-matte p-8 transition-all duration-300 hover:border-primary/20">
      <IconBox icon={Icon} className="mb-6" />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-4 leading-relaxed text-muted">{description}</p>
    </article>
  );
}
