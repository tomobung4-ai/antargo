import { PlusIcon, WalletIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type WalletCardProps = {
  balance: string;
};

export function WalletCard({ balance }: WalletCardProps) {
  return (
    <section id="wallet" className="scroll-mt-24" aria-labelledby="wallet-heading">
      <Card className="overflow-hidden border-0 bg-gradient-to-br from-slate-900 to-slate-800 py-0 text-white ring-0">
        <CardContent className="px-5 py-5 sm:px-6 sm:py-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p
                id="wallet-heading"
                className="inline-flex items-center gap-2 text-sm text-white/70"
              >
                <WalletIcon className="size-4" />
                Saldo Antargo Pay
              </p>
              <p className="mt-2 text-3xl font-semibold tracking-tight tabular-nums">
                {balance}
              </p>
              <p className="mt-1 text-xs text-white/60">
                Gunakan untuk semua layanan Antargo
              </p>
            </div>
            <span className="flex size-11 items-center justify-center rounded-xl bg-white/10">
              <WalletIcon className="size-5 text-white/90" />
            </span>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <Button
              size="sm"
              className="bg-white text-slate-900 hover:bg-white/90"
            >
              <PlusIcon />
              Top Up
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              Riwayat
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
