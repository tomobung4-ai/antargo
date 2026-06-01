import { Apple, Play, Smartphone } from "lucide-react";
import Link from "next/link";

import { SectionContainer } from "@/components/landing/section-container";
import { Button } from "@/components/ui/button";

export function DownloadApp() {
  return (
    <SectionContainer id="download" className="pb-20 lg:pb-24">
      <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary via-primary to-[oklch(0.45_0.14_155)] px-6 py-12 text-primary-foreground shadow-lg sm:px-10 sm:py-14 lg:px-14">
        <div
          className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-white/10 blur-2xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-20 -left-10 size-56 rounded-full bg-black/10 blur-2xl"
          aria-hidden
        />

        <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
          <div className="space-y-4 text-center lg:text-left">
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-white/15 lg:mx-0">
              <Smartphone className="size-7" aria-hidden />
            </div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Unduh aplikasi Antargo
            </h2>
            <p className="mx-auto max-w-lg text-sm leading-relaxed text-primary-foreground/90 sm:text-base lg:mx-0">
              Nikmati promo eksklusif, riwayat pesanan, dan notifikasi real-time.
              Tersedia di iOS dan Android.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-end">
            <Button
              size="lg"
              variant="secondary"
              className="h-12 w-full min-w-[200px] bg-white text-foreground hover:bg-white/90 sm:w-auto"
              asChild
            >
              <Link href="#">
                <Apple className="size-5" aria-hidden />
                App Store
              </Link>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="h-12 w-full min-w-[200px] bg-white text-foreground hover:bg-white/90 sm:w-auto"
              asChild
            >
              <Link href="#">
                <Play className="size-5 fill-current" aria-hidden />
                Google Play
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
