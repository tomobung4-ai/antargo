import { TagIcon } from "lucide-react";

import { SectionHeader } from "@/components/dashboard/section-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Promotion } from "@/lib/dashboard/mock-data";

const accentStyles: Record<Promotion["accent"], string> = {
  emerald: "from-emerald-500/20 to-emerald-600/5 border-emerald-200/60",
  orange: "from-orange-500/20 to-orange-600/5 border-orange-200/60",
  blue: "from-blue-500/20 to-blue-600/5 border-blue-200/60",
};

const accentBadge: Record<Promotion["accent"], string> = {
  emerald: "bg-emerald-600",
  orange: "bg-orange-600",
  blue: "bg-blue-600",
};

type PromotionsSectionProps = {
  promotions: Promotion[];
};

export function PromotionsSection({ promotions }: PromotionsSectionProps) {
  return (
    <section aria-labelledby="promotions-heading">
      <SectionHeader
        id="promotions-heading"
        title="Promo untuk Anda"
        description="Hemat lebih banyak setiap hari"
        actionLabel="Semua promo"
        actionHref="#"
      />

      <div className="mt-4 flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {promotions.map((promo) => (
          <Card
            key={promo.id}
            size="sm"
            className={cn(
              "w-[min(100%,280px)] shrink-0 border bg-gradient-to-br py-0",
              accentStyles[promo.accent]
            )}
          >
            <CardContent className="flex h-full flex-col p-4">
              <Badge
                className={cn("w-fit text-white", accentBadge[promo.accent])}
              >
                <TagIcon className="size-3" />
                {promo.code}
              </Badge>
              <h3 className="mt-3 font-semibold leading-snug">{promo.title}</h3>
              <p className="mt-1 flex-1 text-sm text-muted-foreground">
                {promo.description}
              </p>
              <p className="mt-3 text-xs text-muted-foreground">
                {promo.expiresAt}
              </p>
              <Button variant="outline" size="sm" className="mt-3 w-full">
                Gunakan
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
