import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b px-4 py-4 sm:px-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
              A
            </span>
            <span className="font-semibold tracking-tight">Antargo</span>
          </Link>
          <nav className="flex items-center gap-2">
            <Button variant="ghost" asChild>
              <Link href="/login">Masuk</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Daftar</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
        <p className="mb-3 text-sm font-medium text-primary">
          Ride · Food · Send · Mart
        </p>
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
          Perjalanan & pengantaran dalam satu aplikasi
        </h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Satu platform untuk semua kebutuhan mobilitas dan pengantaran Anda.
          Mulai dengan membuat akun atau masuk ke akun yang sudah ada.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button size="lg" className="h-11 px-6" asChild>
            <Link href="/register">
              Mulai sekarang
              <ArrowRightIcon />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="h-11 px-6" asChild>
            <Link href="/login">Masuk</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
