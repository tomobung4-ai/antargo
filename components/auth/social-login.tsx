"use client";

import { Button } from "@/components/ui/button";
import { FieldSeparator } from "@/components/ui/field";

type SocialLoginProps = {
  onPlaceholderClick?: (provider: string) => void;
};

const providers = [
  { id: "google", label: "Google" },
  { id: "apple", label: "Apple" },
] as const;

export function SocialLogin({ onPlaceholderClick }: SocialLoginProps) {
  return (
    <div className="space-y-4">
      <FieldSeparator>atau lanjutkan dengan</FieldSeparator>
      <div className="grid grid-cols-2 gap-3">
        {providers.map((provider) => (
          <Button
            key={provider.id}
            type="button"
            variant="outline"
            className="h-10 w-full"
            onClick={() => onPlaceholderClick?.(provider.label)}
          >
            {provider.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
