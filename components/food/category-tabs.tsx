"use client";

import { cn } from "@/lib/utils";
import { MENU_CATEGORY_LABELS, type MenuCategory } from "@/lib/food/types";

const CATEGORIES: MenuCategory[] = ["makanan", "minuman", "snack"];

interface CategoryTabsProps {
  active: MenuCategory;
  onChange: (category: MenuCategory) => void;
  counts: Record<MenuCategory, number>;
}

export function CategoryTabs({ active, onChange, counts }: CategoryTabsProps) {
  return (
    <div className="sticky top-0 z-20 -mx-4 border-b bg-background/95 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-background/80 sm:-mx-6 sm:px-6">
      <div className="flex gap-2 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {CATEGORIES.map((category) => {
          const isActive = active === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => onChange(category)}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              )}
            >
              {MENU_CATEGORY_LABELS[category]}
              <span className="ml-1.5 tabular-nums opacity-80">
                ({counts[category]})
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

