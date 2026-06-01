"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Promotion } from "@/lib/customer/types";
import { cn } from "@/lib/utils";

type PromotionsBannerProps = {
  promotions: Promotion[];
  className?: string;
};

export function PromotionsBanner({ promotions, className }: PromotionsBannerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const promotion = promotions[activeIndex];

  if (!promotion) {
    return null;
  }

  function goPrev() {
    setActiveIndex((index) => (index === 0 ? promotions.length - 1 : index - 1));
  }

  function goNext() {
    setActiveIndex((index) => (index === promotions.length - 1 ? 0 : index + 1));
  }

  return (
    <div className={cn("relative", className)}>
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-primary/75 px-5 py-5 text-primary-foreground shadow-sm">
        {promotion.badge ? (
          <Badge className="mb-2 border-0 bg-white/20 text-primary-foreground">
            {promotion.badge}
          </Badge>
        ) : null}
        <h3 className="text-lg font-semibold tracking-tight">{promotion.title}</h3>
        <p className="mt-1 max-w-md text-sm text-primary-foreground/90">
          {promotion.description}
        </p>
        <Button
          size="sm"
          variant="secondary"
          className="mt-4 h-8 bg-white text-primary hover:bg-white/90"
        >
          {promotion.cta}
        </Button>

        {promotions.length > 1 ? (
          <>
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/10 text-primary-foreground hover:bg-black/20"
              onClick={goPrev}
              aria-label="Promo sebelumnya"
            >
              <ChevronLeftIcon />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/10 text-primary-foreground hover:bg-black/20"
              onClick={goNext}
              aria-label="Promo berikutnya"
            >
              <ChevronRightIcon />
            </Button>
          </>
        ) : null}
      </div>

      {promotions.length > 1 ? (
        <div className="mt-3 flex justify-center gap-1.5" role="tablist" aria-label="Promosi">
          {promotions.map((item, index) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Promo ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "size-1.5 rounded-full transition-colors",
                index === activeIndex ? "bg-primary w-4" : "bg-muted-foreground/30"
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
