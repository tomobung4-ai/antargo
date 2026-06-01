import {
  Card,
  CardContent,
} from "@/components/ui/card";

import TrackingHeader from "@/components/order-tracking/tracking-header";
import OrderStatusCard from "@/components/order-tracking/order-status-card";
import DriverCard from "@/components/order-tracking/driver-card";
import TrackingTimeline from "@/components/order-tracking/tracking-timeline";
import ContactActions from "@/components/order-tracking/contact-actions";

import { trackingData } from "@/lib/mock-tracking";

export default function TrackingPage() {
  return (
    <main className="min-h-screen bg-muted/30">
      <div className="mx-auto max-w-md space-y-4 px-4 py-4">
        <h1 className="text-2xl font-bold">
          Lacak Pesanan
        </h1>

        <TrackingHeader
          orderId={trackingData.orderId}
          restaurantName={
            trackingData.restaurant.name
          }
          estimatedArrival={
            trackingData.estimatedArrival
          }
        />

        <OrderStatusCard />

        <Card>
          <CardContent className="p-0">
            <div className="flex h-56 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/20">
              <div className="text-center">
                <div className="mx-auto mb-3 h-16 w-16 rounded-full bg-primary/20" />

                <p className="font-medium">
                  Lokasi Driver
                </p>

                <p className="text-sm text-muted-foreground">
                  Peta Pelacakan Pesanan
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <DriverCard
          driver={trackingData.driver}
        />

        <ContactActions />

        <TrackingTimeline
          statuses={trackingData.statuses}
        />
      </div>
    </main>
  );
}