import type { LucideIcon } from "lucide-react";

type IconBoxProps = {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "gradient" | "muted";
  className?: string;
};

const sizeClasses = {
  sm: { box: "h-12 w-12 rounded-xl", icon: "h-5 w-5" },
  md: { box: "h-16 w-16 rounded-2xl", icon: "h-8 w-8" },
  lg: { box: "h-20 w-20 rounded-2xl", icon: "h-9 w-9" },
};

const variantClasses = {
  primary: "bg-primary/10 text-primary",
  gradient:
    "bg-gradient-to-br from-primary/30 to-primary/5 text-primary border border-primary/20",
  muted: "bg-background text-primary border border-white/10",
};

export function IconBox({
  icon: Icon,
  size = "md",
  variant = "primary",
  className = "",
}: IconBoxProps) {
  const sizes = sizeClasses[size];

  return (
    <div
      className={`flex shrink-0 items-center justify-center backdrop-blur-sm transition-transform duration-500 group-hover:scale-105 ${sizes.box} ${variantClasses[variant]} ${className}`}
    >
      <Icon className={sizes.icon} aria-hidden />
    </div>
  );
}
