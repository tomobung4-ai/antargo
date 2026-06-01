import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
  id?: string;
  className?: string;
};

export function SectionHeader({
  title,
  description,
  actionLabel,
  actionHref = "#",
  id,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn("flex items-end justify-between gap-3", className)}
    >
      <div className="min-w-0">
        <h2
          id={id}
          className="text-base font-semibold tracking-tight sm:text-lg"
        >
          {title}
        </h2>
        {description ? (
          <p className="mt-0.5 text-sm text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {actionLabel ? (
        <Link
          href={actionHref}
          className="inline-flex shrink-0 items-center gap-0.5 text-sm font-medium text-primary hover:text-primary/80"
        >
          {actionLabel}
          <ChevronRightIcon className="size-4" />
        </Link>
      ) : null}
    </div>
  );
}
