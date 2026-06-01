import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function CartPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-lg flex-col items-center justify-center px-4 text-center sm:max-w-2xl sm:px-6">
      <h1 className="text-2xl font-semibold tracking-tight">Keranjang</h1>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        Halaman cart belum diimplementasikan karena permintaan saat ini fokus ke
        frontend restaurant detail.
      </p>
      <Button className="mt-6" asChild>
        <Link href="/">Kembali ke beranda</Link>
      </Button>
    </main>
  );
}

