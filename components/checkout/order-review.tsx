import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

type OrderReviewProps = {
  items: {
    id: string;
    name: string;
    quantity: number;
    price: number;
  }[];

  notes: string;

  subtotal: number;
  deliveryFee: number;
  serviceFee: number;
  total: number;
};

export default function OrderReview({
  items,
  notes,
  subtotal,
  deliveryFee,
  serviceFee,
  total,
}: OrderReviewProps) {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Pesanan Anda</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between"
            >
              <div>
                <p className="font-medium">
                  {item.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  Qty: {item.quantity}
                </p>
              </div>

              <p className="font-medium">
                Rp{" "}
                {(item.price * item.quantity).toLocaleString(
                  "id-ID"
                )}
              </p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Catatan Driver</CardTitle>
        </CardHeader>

        <CardContent>
          <Textarea
            defaultValue={notes}
            placeholder="Tambahkan catatan..."
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Ringkasan Pembayaran</CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>
              Rp {subtotal.toLocaleString("id-ID")}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Biaya Pengiriman</span>
            <span>
              Rp {deliveryFee.toLocaleString("id-ID")}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Biaya Layanan</span>
            <span>
              Rp {serviceFee.toLocaleString("id-ID")}
            </span>
          </div>

          <div className="border-t pt-3">
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>
                Rp {total.toLocaleString("id-ID")}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}