import SuccessCard from "@/components/order-success/success-card";
import OrderSummary from "@/components/order-success/order-summary";
import ActionButtons from "@/components/order-success/action-buttons";

import { orderSuccessData } from "@/lib/mock-order-success";

export default function OrderSuccessPage() {
  return (
    <main className="min-h-screen bg-muted/30">
      <div className="mx-auto max-w-md px-4 py-6">
        <div className="space-y-5">
          <SuccessCard
            orderNumber={
              orderSuccessData.orderNumber
            }
            estimatedDelivery={
              orderSuccessData.estimatedDelivery
            }
          />

          <OrderSummary
            items={orderSuccessData.items}
            paymentSummary={
              orderSuccessData.paymentSummary
            }
          />

          <ActionButtons />
        </div>
      </div>
    </main>
  );
}