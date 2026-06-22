import { getIcon, type IconName } from "@/lib/icons";

type ClientBadgeProps = {
  name: string;
  icon: IconName;
  compact?: boolean;
};

export function ClientBadge({ name, icon, compact = false }: ClientBadgeProps) {
  const Icon = getIcon(icon);

  if (compact) {
    return (
      <div className="flex flex-col items-center gap-2 rounded-xl border border-white/5 bg-matte/80 p-3 text-center">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-background text-muted">
          <Icon className="h-4 w-4" aria-hidden />
        </span>
        <span className="text-xs font-medium leading-tight text-muted">
          {name}
        </span>
      </div>
    );
  }

  return (
    <div className="flex shrink-0 items-center gap-3 rounded-xl border border-white/5 bg-matte/80 px-5 py-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-background text-muted">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <span className="text-sm font-medium text-muted">{name}</span>
    </div>
  );
}
