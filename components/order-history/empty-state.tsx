import { ShoppingBag } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="rounded-full bg-muted p-6">
        <ShoppingBag className="h-12 w-12 text-muted-foreground" />
      </div>

      <h3 className="mt-5 text-lg font-semibold">
        Belum ada riwayat pesanan
      </h3>

      <p className="mt-2 max-w-xs text-sm text-muted-foreground">
        Pesanan yang sudah dibuat akan muncul di halaman ini.
      </p>
    </div>
  );
}