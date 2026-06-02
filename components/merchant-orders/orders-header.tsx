import { Card, CardContent } from "@/components/ui/card";

interface OrdersHeaderProps {
  newOrders: number;
  preparingOrders: number;
  readyOrders: number;
  completedOrders: number;
}

export function OrdersHeader({
  newOrders,
  preparingOrders,
  readyOrders,
  completedOrders,
}: OrdersHeaderProps) {
  const stats = [
    {
      label: "Pesanan Baru",
      value: newOrders,
    },
    {
      label: "Diproses",
      value: preparingOrders,
    },
    {
      label: "Siap Diambil",
      value: readyOrders,
    },
    {
      label: "Selesai",
      value: completedOrders,
    },
  ];

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold">
          Kelola Pesanan
        </h1>

        <p className="text-muted-foreground">
          Pantau dan proses pesanan pelanggan
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {stats.map((item) => (
          <Card key={item.label}>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">
                {item.label}
              </p>

              <p className="mt-2 text-2xl font-bold">
                {item.value}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}