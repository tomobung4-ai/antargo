import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface Props {
  total: number;
  onAdd: () => void;
}

export function MenuHeader({
  total,
  onAdd,
}: Props) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold">
          Kelola Menu
        </h1>

        <p className="text-muted-foreground">
          {total} Menu
        </p>
      </div>

      <Button onClick={onAdd}>
        <Plus className="mr-2 h-4 w-4" />
        Tambah Menu
      </Button>
    </div>
  );
}