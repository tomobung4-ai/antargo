import { cn } from "@/lib/utils";

type HorizontalScrollProps = {
  children: React.ReactNode;
  className?: string;
  gap?: "sm" | "md";
};

export function HorizontalScroll({
  children,
  className,
  gap = "md",
}: HorizontalScrollProps) {
  return (
    <div
      className={cn(
        "-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:-mx-6 sm:px-6 [&::-webkit-scrollbar]:hidden",
        gap === "sm" && "gap-2",
        className
      )}
    >
      {children}
    </div>
  );
}
