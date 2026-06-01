export default function CartHeader() {
  return (
    <div className="border-b bg-background">
      <div className="container mx-auto px-4 py-5">
        <h1 className="text-2xl font-bold">Your Cart</h1>
        <p className="text-sm text-muted-foreground">
          Review your items before checkout.
        </p>
      </div>
    </div>
  );
}