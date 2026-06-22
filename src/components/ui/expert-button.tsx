import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { ActionLink } from "@/components/ui/action-link";

const sizeClasses = {
  sm: "px-5 py-2.5 text-sm",
  lg: "px-10 py-4 text-sm",
} as const;

type ExpertButtonProps = {
  size?: keyof typeof sizeClasses;
  fullWidth?: boolean;
  className?: string;
} & (
  | { href: string; onClick?: () => void }
  | { href?: undefined; onClick: () => void }
);

export function ExpertButton({
  size = "sm",
  fullWidth = false,
  className,
  ...props
}: ExpertButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full bg-primary font-semibold text-background transition-opacity hover:opacity-90",
    sizeClasses[size],
    fullWidth && "w-full",
    className,
  );

  return (
    <ActionLink {...props} className={classes}>
      <Sparkles className="h-4 w-4 shrink-0" aria-hidden />
      Parler à un expert
    </ActionLink>
  );
}
