"use client";

import type { ComponentProps } from "react";

import {
  Field,
  FieldContent,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type FormFieldProps = {
  id: string;
  label: string;
  error?: string;
  className?: string;
  inputClassName?: string;
} & Omit<ComponentProps<typeof Input>, "id">;

export function FormField({
  id,
  label,
  error,
  className,
  inputClassName,
  ...inputProps
}: FormFieldProps) {
  return (
    <Field className={className} data-invalid={!!error}>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <FieldContent>
        <Input
          id={id}
          aria-invalid={!!error}
          className={cn("h-10", inputClassName)}
          {...inputProps}
        />
        <FieldError>{error}</FieldError>
      </FieldContent>
    </Field>
  );
}
