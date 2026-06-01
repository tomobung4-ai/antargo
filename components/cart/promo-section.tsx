"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type PromoSectionProps = {
  onApply?: (code: string) => void;
};

export default function PromoSection({
  onApply,
}: PromoSectionProps) {
  const [code, setCode] = useState("");

  return (
    <div className="rounded-xl border p-4">
      <h3 className="mb-3 font-semibold">
        Promo Code
      </h3>

      <div className="flex gap-2">
        <Input
          placeholder="Enter promo code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <Button
          onClick={() => onApply?.(code)}
        >
          Apply
        </Button>
      </div>
    </div>
  );
}