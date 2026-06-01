import { SearchIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type SearchBarProps = {
  className?: string;
  placeholder?: string;
};

export function SearchBar({
  className,
  placeholder = "Cari makanan, restoran, atau menu…",
}: SearchBarProps) {
  return (
    <div className={cn("relative", className)}>
      <SearchIcon
        className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
        aria-hidden
      />
      <Input
        type="search"
        placeholder={placeholder}
        className="h-11 rounded-xl border-muted-foreground/15 bg-muted/40 pr-3 pl-10 text-base shadow-none md:text-sm"
        aria-label="Cari makanan atau restoran"
      />
    </div>
  );
}
