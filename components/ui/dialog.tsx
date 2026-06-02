"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogContent = DialogPrimitive.Content;
export const DialogTitle = DialogPrimitive.Title;
export const DialogDescription =
DialogPrimitive.Description;
export const DialogClose =
DialogPrimitive.Close;

export function DialogHeader({
children,
}: {
children: React.ReactNode;
}) {
return <div>{children}</div>;
}

export function DialogFooter({
children,
}: {
children: React.ReactNode;
}) {
return <div>{children}</div>;
}
