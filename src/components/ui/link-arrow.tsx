import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ActionLink } from "@/components/ui/action-link";

type LinkArrowProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  arrowSize?: "sm" | "md";
  variant?: "primary" | "muted";
  onClick?: () => void;
};

const arrowSizes = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
} as const;

export function LinkArrow({
  href,
  children,
  className,
  arrowSize = "sm",
  variant = "primary",
  onClick,
}: LinkArrowProps) {
  const classes = cn(
    "group inline-flex items-center gap-2 font-semibold transition-opacity hover:opacity-80",
    variant === "primary" ? "text-primary" : "text-muted hover:text-foreground",
    className,
  );

  const content = (
    <>
      {children}
      <ArrowRight
        className={cn(
          arrowSizes[arrowSize],
          "transition-transform duration-300 group-hover:translate-x-1",
        )}
        aria-hidden
      />
    </>
  );

  if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a href={href} onClick={onClick} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onClick} className={classes}>
      {content}
    </Link>
  );
}

export function TextLink({
  href,
  children,
  className,
  onClick,
}: LinkArrowProps) {
  return (
    <ActionLink
      href={href}
      onClick={onClick}
      className={cn(
        "text-sm text-muted transition-colors hover:text-primary",
        className,
      )}
    >
      {children}
    </ActionLink>
  );
}
