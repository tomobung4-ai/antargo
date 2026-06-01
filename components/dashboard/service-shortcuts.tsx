import { ArrowUpRightIcon } from "lucide-react";

import { SectionHeader } from "@/components/dashboard/section-header";
import { cn } from "@/lib/utils";
import { serviceShortcuts } from "@/lib/dashboard/constants";

export function ServiceShortcuts() {
  return (
    <section aria-labelledby="services-heading">
      <SectionHeader
        id="services-heading"
        title="Layanan"
        description="Semua kebutuhan harian dalam satu tap"
      />

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {serviceShortcuts.map((service) => {
          const Icon = service.icon;

          return (
            <button
              key={service.id}
              type="button"
              className="group flex flex-col items-center gap-3 rounded-2xl border bg-card p-4 text-left shadow-sm transition-all hover:border-primary/30 hover:shadow-md active:scale-[0.98] sm:p-5"
            >
              <span
                className={cn(
                  "flex size-12 items-center justify-center rounded-2xl transition-transform group-hover:scale-105 sm:size-14",
                  service.bgColor
                )}
              >
                <Icon className={cn("size-6 sm:size-7", service.color)} />
              </span>
              <span className="w-full">
                <span className="flex items-center justify-between gap-1">
                  <span className="font-semibold">{service.label}</span>
                  <ArrowUpRightIcon className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </span>
                <span className="mt-0.5 block text-xs text-muted-foreground">
                  {service.description}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
