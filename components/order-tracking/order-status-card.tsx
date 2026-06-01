import { Bike } from "lucide-react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

export default function OrderStatusCard() {
  return (
    <Card>
      <CardContent className="flex items-center gap-4 p-4">
        <div className="rounded-full bg-primary/10 p-3">
          <Bike className="h-7 w-7 text-primary" />
        </div>

        <div>
          <h3 className="font-semibold">
            Driver Sedang Mengantar Pesanan
          </h3>

          <p className="text-sm text-muted-foreground">
            Pesanan sedang dalam perjalanan menuju lokasi Anda.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}