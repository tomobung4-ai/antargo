"use client";

import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

import { DriverShell } from "@/components/driver/layout/driver-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type DriverPlaceholderPageProps = {
  title: string;
  description: string;
};

export function DriverPlaceholderPage({
  title,
  description,
}: DriverPlaceholderPageProps) {
  return (
    <DriverShell title={title}>
      <div className="mx-auto flex max-w-lg flex-col items-center justify-center py-16">
        <Card className="w-full text-center shadow-sm">
          <CardContent className="space-y-4 pt-2">
            <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-emerald-100 text-2xl font-bold text-emerald-700">
              A
            </div>
            <div>
              <h2 className="text-lg font-semibold">{title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{description}</p>
            </div>
            <Button asChild variant="outline">
              <Link href="/driver">
                <ArrowLeftIcon />
                Kembali ke Dashboard
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </DriverShell>
  );
}
