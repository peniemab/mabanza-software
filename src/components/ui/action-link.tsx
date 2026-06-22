import Link from "next/link";
import type { ReactNode } from "react";

type ActionLinkProps = {
  href?: string;
  onClick?: () => void;
  className: string;
  children: ReactNode;
};

export function ActionLink({
  href,
  onClick,
  className,
  children,
}: ActionLinkProps) {
  if (href) {
    const isNativeLink =
      href.startsWith("mailto:") ||
      href.startsWith("http") ||
      href.startsWith("#");

    if (isNativeLink) {
      return (
        <a href={href} onClick={onClick} className={className}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} onClick={onClick} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
}
