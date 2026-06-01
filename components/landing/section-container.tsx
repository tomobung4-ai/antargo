import { cn } from "@/lib/utils";

type SectionContainerProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export function SectionContainer({
  id,
  className,
  children,
}: SectionContainerProps) {
  return (
    <section id={id} className={cn("w-full px-4 py-16 sm:px-6 lg:px-8 lg:py-24", className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
