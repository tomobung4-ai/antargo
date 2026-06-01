"use client";

import { useState } from "react";
import { Wallet, QrCode, Landmark, Banknote } from "lucide-react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

const methods = [
  {
    id: "cash",
    label: "Cash",
    icon: Banknote,
  },
  {
    id: "qris",
    label: "QRIS",
    icon: QrCode,
  },
  {
    id: "ewallet",
    label: "E-Wallet",
    icon: Wallet,
  },
  {
    id: "bank",
    label: "Bank Transfer",
    icon: Landmark,
  },
];

export default function PaymentMethod() {
  const [selected, setSelected] = useState("qris");

  return (
    <div className="space-y-3">
      <h2 className="font-semibold">
        Metode Pembayaran
      </h2>

      {methods.map((method) => {
        const Icon = method.icon;

        return (
          <Card
            key={method.id}
            onClick={() => setSelected(method.id)}
            className={`cursor-pointer transition-all ${
              selected === method.id
                ? "border-primary ring-2 ring-primary"
                : ""
            }`}
          >
            <CardContent className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5" />
                <span>{method.label}</span>
              </div>

              <div
                className={`h-4 w-4 rounded-full border-2 ${
                  selected === method.id
                    ? "border-primary bg-primary"
                    : "border-muted-foreground"
                }`}
              />
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}