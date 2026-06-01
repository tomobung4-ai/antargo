import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";

import { SectionContainer } from "@/components/landing/section-container";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <SectionContainer
      id="home"
      className="relative overflow-hidden pb-20 pt-10 sm:pt-16 lg:pb-28"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,oklch(0.72_0.14_155/0.35),transparent)]"
        aria-hidden
      />

      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary sm:text-sm">
            <Star className="size-3.5 fill-primary" aria-hidden />
            Platform #1 untuk mobilitas & pengantaran
          </div>

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl lg:leading-[1.1]">
            Satu Aplikasi Untuk Semua Kebutuhan Perjalanan dan Pengantaran
          </h1>

          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
            Pesan ojek online, makanan favorit, kirim paket, atau belanja harian
            — semuanya cepat, aman, dan terlacak langsung dari ponsel Anda.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Button size="lg" className="h-11 w-full px-6 sm:w-auto" asChild>
              <Link href="#download">
                Mulai Sekarang
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-11 w-full px-6 sm:w-auto"
              asChild
            >
              <Link href="#register">Daftar Driver</Link>
            </Button>
          </div>

          <dl className="grid grid-cols-3 gap-4 border-t border-border pt-8 text-center sm:gap-6 lg:text-left">
            <div>
              <dt className="sr-only">Pengguna aktif</dt>
              <dd className="text-xl font-bold text-foreground sm:text-2xl">2M+</dd>
              <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">
                Pengguna aktif
              </dd>
            </div>
            <div>
              <dt className="sr-only">Driver mitra</dt>
              <dd className="text-xl font-bold text-foreground sm:text-2xl">50K+</dd>
              <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">
                Driver mitra
              </dd>
            </div>
            <div>
              <dt className="sr-only">Kota terjangkau</dt>
              <dd className="text-xl font-bold text-foreground sm:text-2xl">30+</dd>
              <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">
                Kota terjangkau
              </dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/20 via-background to-primary/5 p-6 shadow-xl sm:aspect-square">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,oklch(0.55_0.16_155/0.15)_0%,transparent_50%)]" />
            <div className="relative flex h-full flex-col justify-between rounded-2xl bg-card/80 p-5 backdrop-blur-sm">
              <div className="space-y-2">
                <p className="text-xs font-medium text-muted-foreground">
                  Pesanan aktif
                </p>
                <p className="text-lg font-semibold text-foreground">
                  Antargo Ride — Menuju tujuan
                </p>
              </div>
              <div className="space-y-3">
                <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full w-3/4 rounded-full bg-primary" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Driver Budi · 3 menit lagi tiba
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {["Ride", "Food", "Send", "Mart"].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-border bg-background/80 px-3 py-2.5 text-center text-sm font-medium text-foreground"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
