import Link from "next/link";
import { Layers } from "lucide-react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 font-bold tracking-tight ${className}`}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Layers className="h-5 w-5" aria-hidden />
      </span>
      <span>
        Mabanza<span className="text-primary">.</span>
      </span>
    </Link>
  );
}
