import {
  CarIcon,
  MapPinIcon,
  NavigationIcon,
  PackageIcon,
  UtensilsCrossedIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { formatCurrency } from "@/lib/driver/format";
import type { IncomingOrder } from "@/lib/driver/types";
import { cn } from "@/lib/utils";

const serviceConfig = {
  ride: { label: "Ride", icon: CarIcon, className: "bg-emerald-100 text-emerald-700" },
  food: {
    label: "Food",
    icon: UtensilsCrossedIcon,
    className: "bg-orange-100 text-orange-700",
  },
  send: {
    label: "Send",
    icon: PackageIcon,
    className: "bg-blue-100 text-blue-700",
  },
} as const;

type IncomingOrderCardProps = {
  order: IncomingOrder;
  onAccept: (orderId: string) => void;
  onReject: (orderId: string) => void;
  disabled?: boolean;
};

export function IncomingOrderCard({
  order,
  onAccept,
  onReject,
  disabled,
}: IncomingOrderCardProps) {
  const service = serviceConfig[order.serviceType];
  const ServiceIcon = service.icon;

  return (
    <Card className="overflow-hidden shadow-sm transition-shadow hover:shadow-md">
      <CardContent className="space-y-4 pb-0">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-semibold">{order.customerName}</p>
            <p className="text-xs text-muted-foreground">
              {order.distanceKm} km · Est. 12 menit
            </p>
          </div>
          <Badge variant="secondary" className={cn("gap-1", service.className)}>
            <ServiceIcon className="size-3" />
            {service.label}
          </Badge>
        </div>

        <div className="space-y-3">
          <div className="flex gap-3">
            <div className="flex flex-col items-center pt-1">
              <span className="size-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" />
              <span className="my-0.5 w-px flex-1 bg-border" />
              <MapPinIcon className="size-4 text-red-500" />
            </div>
            <div className="min-w-0 flex-1 space-y-3 text-sm">
              <div>
                <p className="text-xs font-medium text-muted-foreground">
                  Penjemputan
                </p>
                <p className="line-clamp-2">{order.pickup}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground">
                  Tujuan
                </p>
                <p className="line-clamp-2">{order.destination}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-lg bg-muted/60 px-3 py-2.5">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <NavigationIcon className="size-4" />
            Perkiraan ongkos
          </div>
          <p className="text-lg font-bold text-primary tabular-nums">
            {formatCurrency(order.estimatedFare)}
          </p>
        </div>
      </CardContent>

      <CardFooter className="grid grid-cols-2 gap-2 border-t-0 bg-transparent pt-2">
        <Button
          variant="outline"
          className="h-10"
          disabled={disabled}
          onClick={() => onReject(order.id)}
        >
          Tolak
        </Button>
        <Button
          className="h-10 bg-emerald-600 hover:bg-emerald-700"
          disabled={disabled}
          onClick={() => onAccept(order.id)}
        >
          Terima
        </Button>
      </CardFooter>
    </Card>
  );
}
