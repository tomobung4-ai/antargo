"use client";

import { AlertCircleIcon, CheckCircle2Icon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type FormAlertProps = {
  variant: "error" | "success";
  title: string;
  message: string;
};

export function FormAlert({ variant, title, message }: FormAlertProps) {
  const Icon = variant === "error" ? AlertCircleIcon : CheckCircle2Icon;

  return (
    <Alert
      variant={variant === "error" ? "destructive" : "default"}
      className={
        variant === "success"
          ? "border-primary/30 bg-primary/5 text-foreground *:data-[slot=alert-description]:text-muted-foreground"
          : undefined
      }
    >
      <Icon />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}
