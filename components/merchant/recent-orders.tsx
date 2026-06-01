import { recentOrders } from "@/lib/mock-merchant";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function RecentOrders() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Pesanan Terbaru</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">
        {recentOrders.map((order) => (
          <div
            key={order.id}
            className="flex items-center justify-between rounded-lg border p-3"
          >
            <div>
              <p className="font-medium">
                {order.customerName}
              </p>

              <p className="text-sm text-muted-foreground">
                Rp {order.total.toLocaleString("id-ID")}
              </p>
            </div>

            <Badge variant="secondary">
              {order.status}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}