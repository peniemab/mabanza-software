import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ActionLink } from "@/components/ui/action-link";

const buttonSizes = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-8 py-3.5 text-sm",
  lg: "px-10 py-4 text-sm",
} as const;

type SharedButtonProps = {
  size?: keyof typeof buttonSizes;
  fullWidth?: boolean;
  className?: string;
} & (
  | { href: string; onClick?: () => void }
  | { href?: undefined; onClick: () => void }
);

type PrimaryButtonProps = SharedButtonProps & {
  icon?: LucideIcon;
  children: React.ReactNode;
};

export function PrimaryButton({
  size = "md",
  fullWidth = false,
  className,
  icon: Icon,
  children,
  ...props
}: PrimaryButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full bg-primary font-semibold text-background transition-opacity hover:opacity-90",
    buttonSizes[size],
    fullWidth && "w-full",
    className,
  );

  return (
    <ActionLink {...props} className={classes}>
      {Icon && <Icon className="h-4 w-4 shrink-0" aria-hidden />}
      {children}
    </ActionLink>
  );
}

type OutlineButtonProps = SharedButtonProps & {
  children: React.ReactNode;
  showArrow?: boolean;
};

export function OutlineButton({
  size = "md",
  fullWidth = false,
  className,
  showArrow = false,
  children,
  ...props
}: OutlineButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 font-semibold transition-colors hover:border-primary hover:text-primary",
    buttonSizes[size],
    fullWidth && "w-full",
    className,
  );

  return (
    <ActionLink {...props} className={classes}>
      {children}
      {showArrow && (
        <ArrowRight
          className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden
        />
      )}
    </ActionLink>
  );
}
