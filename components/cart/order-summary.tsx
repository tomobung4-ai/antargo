import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type OrderSummaryProps = {
  subtotal: number;
  deliveryFee?: number;
  serviceFee?: number;
  discount?: number;
};

export default function OrderSummary({
  subtotal,
  deliveryFee = 10000,
  serviceFee = 3000,
  discount = 0,
}: OrderSummaryProps) {
  const total =
    subtotal + deliveryFee + serviceFee - discount;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex justify-between text-sm">
          <span>Subtotal</span>
          <span>
            Rp {subtotal.toLocaleString("id-ID")}
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Delivery Fee</span>
          <span>
            Rp {deliveryFee.toLocaleString("id-ID")}
          </span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Service Fee</span>
          <span>
            Rp {serviceFee.toLocaleString("id-ID")}
          </span>
        </div>

        {discount > 0 && (
          <div className="flex justify-between text-sm text-green-600">
            <span>Discount</span>
            <span>
              -Rp {discount.toLocaleString("id-ID")}
            </span>
          </div>
        )}

        <div className="border-t pt-3">
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>
              Rp {total.toLocaleString("id-ID")}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}