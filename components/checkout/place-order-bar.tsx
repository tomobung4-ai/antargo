"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import {
  useOrderStore,
  Order,
} from "@/lib/store/order-store";

type PlaceOrderBarProps = {
  total: number;
};

export default function PlaceOrderBar({
  total,
}: PlaceOrderBarProps) {
  const router = useRouter();

  const addOrder =
    useOrderStore(
      (state) => state.addOrder
    );

  const handleOrder = () => {
    const newOrder: Order = {
      id:
        "ORDER-" +
        Date.now(),

      customerName:
        "Pelanggan AntarGo",

      customerPhone:
        "081234567890",

      customerAddress:
        "Jl. Contoh No. 123",

      restaurantName:
        "Warung Nusantara",

      restaurantAddress:
        "Jl. Asia No. 2",

      total,

      status: "new",

      createdAt:
        new Date().toLocaleTimeString(
          "id-ID"
        ),

      items: [
        {
          id: "1",
          name:
            "Nasi Goreng Spesial",
          quantity: 1,
          price: total,
        },
      ],
    };

    addOrder(newOrder);

    router.push(
      "/order-success"
    );
  };

  return (
    <div className="sticky bottom-0 z-50 border-t bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
        <div>
          <p className="text-sm text-muted-foreground">
            Total Pembayaran
          </p>

          <p className="text-xl font-bold">
            Rp{" "}
            {total.toLocaleString(
              "id-ID"
            )}
          </p>
        </div>

        <Button
          size="lg"
          className="min-w-[180px]"
          onClick={handleOrder}
        >
          Pesan Sekarang
        </Button>
      </div>
    </div>
  );
}