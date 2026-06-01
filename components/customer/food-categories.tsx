import type { FoodCategory } from "@/lib/customer/types";
import { cn } from "@/lib/utils";

import { HorizontalScroll } from "./horizontal-scroll";

type FoodCategoriesProps = {
  categories: FoodCategory[];
  className?: string;
};

export function FoodCategories({ categories, className }: FoodCategoriesProps) {
  return (
    <HorizontalScroll className={className} gap="sm">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <button
            key={category.id}
            type="button"
            className="flex w-[4.5rem] shrink-0 snap-start flex-col items-center gap-2 rounded-xl p-1 transition-colors hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Icon className="size-6" aria-hidden />
            </span>
            <span className="line-clamp-2 text-center text-xs font-medium leading-tight">
              {category.label}
            </span>
          </button>
        );
      })}
    </HorizontalScroll>
  );
}

export function FoodCategoriesGrid({
  categories,
  className,
}: FoodCategoriesProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-4 gap-3 sm:grid-cols-8",
        className
      )}
    >
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <button
            key={category.id}
            type="button"
            className="flex flex-col items-center gap-2 rounded-xl p-1 transition-colors hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary sm:size-14">
              <Icon className="size-5 sm:size-6" aria-hidden />
            </span>
            <span className="text-center text-xs font-medium">{category.label}</span>
          </button>
        );
      })}
    </div>
  );
}
