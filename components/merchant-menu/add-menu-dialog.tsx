"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddMenuDialog({
  open,
}: Props) {
  if (!open) return null;

  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">
        Tambah Menu
      </h2>

      <div className="space-y-4">
        <div>
          <Label>Nama Menu</Label>
          <Input />
        </div>

        <div>
          <Label>Kategori</Label>
          <Input placeholder="Makanan" />
        </div>

        <div>
          <Label>Harga</Label>
          <Input type="number" />
        </div>

        <div>
          <Label>Deskripsi</Label>
          <Textarea />
        </div>

        <div>
          <Label>Upload Foto</Label>

          <div className="flex h-32 items-center justify-center rounded-lg border border-dashed">
            Placeholder Upload
          </div>
        </div>

        <Button className="w-full">
          Simpan
        </Button>
      </div>
    </div>
  );
}