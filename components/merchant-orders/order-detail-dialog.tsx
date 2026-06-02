"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Separator } from "@/components/ui/separator";

import { Order } from "@/lib/store/order-store";

interface OrderDetailDialogProps {
  order: Order | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function OrderDetailDialog({
  order,
  open,
  onOpenChange,
}: OrderDetailDialogProps) {
  if (!order) return null;

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            Detail Pesanan {order.id}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-5">
          <div>
            <h3 className="font-semibold">
              Informasi Pelanggan
            </h3>

            <div className="mt-2 space-y-1 text-sm">
              <p>
                <span className="font-medium">
                  Nama:
                </span>{" "}
                {order.customerName}
              </p>

              <p>
                <span className="font-medium">
                  Telepon:
                </span>{" "}
                {order.customerPhone}
              </p>

              <p>
                <span className="font-medium">
                  Alamat:
                </span>{" "}
                {order.customerAddress}
              </p>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="font-semibold">
              Item Pesanan
            </h3>

            <div className="mt-3 space-y-3">
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between"
                >
                  <div>
                    <p className="font-medium">
                      {item.name}
                    </p>

                    <p className="text-sm text-muted-foreground">
                      {item.quantity}x
                    </p>
                  </div>

                  <p className="font-medium">
                    Rp{" "}
                    {(
                      item.price *
                      item.quantity
                    ).toLocaleString("id-ID")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          <div>
  <h3 className="font-semibold">
    Ringkasan Pesanan
  </h3>

  <div className="mt-2 space-y-1 text-sm">
    <p>
      <span className="font-medium">
        Restoran:
      </span>{" "}
      {order.restaurantName}
    </p>

    <p>
      <span className="font-medium">
        Total:
      </span>{" "}
      Rp{" "}
      {order.total.toLocaleString(
        "id-ID"
      )}
    </p>
  </div>
</div>

          <Separator />

          <div>
            <h3 className="font-semibold">
              Catatan Pesanan
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              -
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}