import { Badge } from "@/components/ui/badge";
import { OrderStatus } from "@/lib/mock-merchant-orders";

interface OrderStatusBadgeProps {
  status: OrderStatus;
}

const statusMap: Record<
  OrderStatus,
  {
    label: string;
    className: string;
  }
> = {
  new: {
    label: "Pesanan Baru",
    className:
      "bg-blue-100 text-blue-700 hover:bg-blue-100",
  },
  accepted: {
    label: "Diterima",
    className:
      "bg-indigo-100 text-indigo-700 hover:bg-indigo-100",
  },
  preparing: {
    label: "Diproses",
    className:
      "bg-orange-100 text-orange-700 hover:bg-orange-100",
  },
  ready: {
    label: "Siap Diambil",
    className:
      "bg-purple-100 text-purple-700 hover:bg-purple-100",
  },
  completed: {
    label: "Selesai",
    className:
      "bg-green-100 text-green-700 hover:bg-green-100",
  },
  cancelled: {
    label: "Dibatalkan",
    className:
      "bg-gray-100 text-gray-700 hover:bg-gray-100",
  },
};

export function OrderStatusBadge({
  status,
}: OrderStatusBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={statusMap[status].className}
    >
      {statusMap[status].label}
    </Badge>
  );
}