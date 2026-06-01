import AddressSection from "@/components/checkout/address-section";
import OrderReview from "@/components/checkout/order-review";
import PaymentMethod from "@/components/checkout/payment-method";
import PlaceOrderBar from "@/components/checkout/place-order-bar";

import {
  checkoutData,
  subtotal,
  total,
} from "@/lib/mock-checkout";

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-muted/30 pb-32">
      <div className="mx-auto max-w-3xl space-y-5 px-4 py-4">
        <h1 className="text-2xl font-bold">
          Checkout
        </h1>

        <AddressSection
          address={checkoutData.address}
        />

        <PaymentMethod />

        <OrderReview
          items={checkoutData.items}
          notes={checkoutData.notes}
          subtotal={subtotal}
          deliveryFee={
            checkoutData.fees.deliveryFee
          }
          serviceFee={
            checkoutData.fees.serviceFee
          }
          total={total}
        />
      </div>

      <PlaceOrderBar total={total} />
    </main>
  );
}