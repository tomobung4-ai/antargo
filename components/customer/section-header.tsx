import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  href?: string;
  actionLabel?: string;
  className?: string;
};

export function SectionHeader({
  title,
  href = "#",
  actionLabel = "Lihat semua",
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("flex items-center justify-between gap-3", className)}>
      <h2 className="text-base font-semibold tracking-tight">{title}</h2>
      <Button variant="ghost" size="sm" className="h-7 shrink-0 px-2 text-primary" asChild>
        <Link href={href}>{actionLabel}</Link>
      </Button>
    </div>
  );
}
