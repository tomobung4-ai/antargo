import { CheckCircle2, Clock3, Receipt } from "lucide-react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

type SuccessCardProps = {
  orderNumber: string;
  estimatedDelivery: string;
};

export default function SuccessCard({
  orderNumber,
  estimatedDelivery,
}: SuccessCardProps) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center p-6 text-center">
        <CheckCircle2 className="mb-4 h-20 w-20 text-green-500" />

        <h1 className="text-2xl font-bold">
          Pesanan Berhasil Dibuat
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Restoran sedang menyiapkan pesanan Anda.
        </p>

        <div className="mt-6 w-full space-y-3">
          <div className="flex items-center justify-between rounded-lg border p-3">
            <div className="flex items-center gap-2">
              <Receipt className="h-4 w-4" />
              <span className="text-sm">
                Nomor Pesanan
              </span>
            </div>

            <span className="font-semibold">
              {orderNumber}
            </span>
          </div>

          <div className="flex items-center justify-between rounded-lg border p-3">
            <div className="flex items-center gap-2">
              <Clock3 className="h-4 w-4" />
              <span className="text-sm">
                Estimasi Tiba
              </span>
            </div>

            <span className="font-semibold">
              {estimatedDelivery}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}