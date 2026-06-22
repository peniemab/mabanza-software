import { getIcon, type IconName } from "@/lib/icons";
import { IconBox } from "@/components/ui/icon-box";
import { LinkArrow } from "@/components/ui/link-arrow";

type ServiceCardProps = {
  category: string;
  title: string;
  description: string;
  href: string;
  icon: IconName;
};

export function ServiceCard({
  category,
  title,
  description,
  href,
  icon,
}: ServiceCardProps) {
  const Icon = getIcon(icon);

  return (
    <article className="group h-full cursor-pointer overflow-hidden rounded-3xl border border-white/5 bg-matte p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      <IconBox icon={Icon} className="mb-6" />
      <p className="text-xs font-medium uppercase tracking-widest text-muted">
        {category}
      </p>
      <h3 className="mt-2 text-2xl font-bold">{title}</h3>
      <p className="mt-4 leading-relaxed text-muted">{description}</p>
      <LinkArrow href={href} className="mt-6 text-sm">
        En savoir plus
      </LinkArrow>
    </article>
  );
}
