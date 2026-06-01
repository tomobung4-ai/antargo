import OrderList from "@/components/order-history/order-list";
import { mockOrders } from "@/lib/mock-orders";

export default function OrdersPage() {
  return (
    <main className="min-h-screen bg-muted/30">
      <div className="mx-auto max-w-2xl px-4 py-5">
        <div className="mb-5">
          <h1 className="text-2xl font-bold">
            Riwayat Pesanan
          </h1>

          <p className="text-sm text-muted-foreground">
            Lihat semua pesanan Anda di Antargo Food
          </p>
        </div>

        <OrderList orders={mockOrders} />
      </div>
    </main>
  );
}