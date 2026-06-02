import { Badge } from "@/components/ui/badge";

export type DriverOrderStatus =
  | "available"
  | "accepted"
  | "picked_up"
  | "on_the_way"
  | "completed";

type Props = {
  status: DriverOrderStatus;
};

const statusMap = {
  available: {
    label: "Tersedia",
    className:
      "bg-blue-100 text-blue-700",
  },

  accepted: {
    label: "Diterima",
    className:
      "bg-amber-100 text-amber-700",
  },

  picked_up: {
    label: "Diambil",
    className:
      "bg-purple-100 text-purple-700",
  },

  on_the_way: {
    label: "Dalam Perjalanan",
    className:
      "bg-orange-100 text-orange-700",
  },

  completed: {
    label: "Selesai",
    className:
      "bg-green-100 text-green-700",
  },
};

export function OrderStatusBadge({
  status,
}: Props) {
  return (
    <Badge
      className={
        statusMap[status].className
      }
    >
      {statusMap[status].label}
    </Badge>
  );
}