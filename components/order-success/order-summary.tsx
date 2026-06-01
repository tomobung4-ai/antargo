import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Item = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};

type PaymentSummary = {
  subtotal: number;
  deliveryFee: number;
  serviceFee: number;
  total: number;
};

type OrderSummaryProps = {
  items: Item[];
  paymentSummary: PaymentSummary;
};

export default function OrderSummary({
  items,
  paymentSummary,
}: OrderSummaryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ringkasan Pesanan</CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="space-y-3">
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
                  Qty {item.quantity}
                </p>
              </div>

              <p className="font-medium">
                Rp{" "}
                {(
                  item.price * item.quantity
                ).toLocaleString("id-ID")}
              </p>
            </div>
          ))}
        </div>

        <div className="border-t pt-4">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>
                Rp{" "}
                {paymentSummary.subtotal.toLocaleString(
                  "id-ID"
                )}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Biaya Pengiriman</span>
              <span>
                Rp{" "}
                {paymentSummary.deliveryFee.toLocaleString(
                  "id-ID"
                )}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Biaya Layanan</span>
              <span>
                Rp{" "}
                {paymentSummary.serviceFee.toLocaleString(
                  "id-ID"
                )}
              </span>
            </div>
          </div>

          <div className="mt-4 flex justify-between border-t pt-4 text-lg font-bold">
            <span>Total</span>

            <span>
              Rp{" "}
              {paymentSummary.total.toLocaleString(
                "id-ID"
              )}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}