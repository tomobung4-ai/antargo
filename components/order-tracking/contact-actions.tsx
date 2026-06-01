"use client";

import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactActions() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Button size="lg">
        <Phone className="mr-2 h-4 w-4" />
        Telepon Driver
      </Button>

      <Button
        size="lg"
        variant="outline"
      >
        <MessageCircle className="mr-2 h-4 w-4" />
        Chat Driver
      </Button>
    </div>
  );
}