import { Card, CardContent } from "@/components/ui/card";

type TrackingHeaderProps = {
  orderId: string;
  restaurantName: string;
  estimatedArrival: string;
};

export default function TrackingHeader({
  orderId,
  restaurantName,
  estimatedArrival,
}: TrackingHeaderProps) {
  return (
    <Card>
      <CardContent className="space-y-4 p-4">
        <div>
          <p className="text-sm text-muted-foreground">
            Order ID
          </p>

          <p className="font-semibold">
            {orderId}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Restoran
          </p>

          <p className="font-semibold">
            {restaurantName}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Estimasi Tiba
          </p>

          <p className="font-semibold text-primary">
            {estimatedArrival}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}