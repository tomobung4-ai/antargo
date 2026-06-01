"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2Icon } from "lucide-react";

import { FormAlert } from "@/components/forms/form-alert";
import { FormField } from "@/components/forms/form-field";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FieldDescription, FieldGroup } from "@/components/ui/field";
import {
  hasFieldErrors,
  mockAuthRequest,
  validateRegister,
  type FieldErrors,
  type RegisterFormValues,
} from "@/lib/validations/auth";

const initialValues: RegisterFormValues = {
  fullName: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export function RegisterForm() {
  const router = useRouter();
  const [values, setValues] = useState<RegisterFormValues>(initialValues);
  const [fieldErrors, setFieldErrors] =
    useState<FieldErrors<keyof RegisterFormValues>>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  function updateField<K extends keyof RegisterFormValues>(
    key: K,
    value: RegisterFormValues[K]
  ) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setFieldErrors((prev) => {
      const next = { ...prev };
      delete next[key];
      return next;
    });
    setFormError(null);
    setSuccessMessage(null);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);
    setSuccessMessage(null);

    const errors = validateRegister(values);
    setFieldErrors(errors);

    if (hasFieldErrors(errors)) {
      return;
    }

    setIsLoading(true);

    try {
      const result = await mockAuthRequest(1400);

      if (!result.ok) {
        setFormError(result.message);
        return;
      }

      setSuccessMessage("Akun berhasil dibuat. Mengalihkan ke login…");
      setTimeout(() => router.push("/login"), 800);
    } catch {
      setFormError(
        "Terjadi kesalahan. Periksa koneksi Anda dan coba lagi."
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="border-border/80 shadow-sm">
      <CardHeader className="space-y-1 pb-2">
        <CardTitle className="text-2xl font-semibold tracking-tight">
          Buat akun Antargo
        </CardTitle>
        <CardDescription>
          Isi data di bawah untuk mulai menggunakan layanan kami.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {formError ? (
            <FormAlert
              variant="error"
              title="Gagal mendaftar"
              message={formError}
            />
          ) : null}

          {successMessage ? (
            <FormAlert
              variant="success"
              title="Berhasil"
              message={successMessage}
            />
          ) : null}

          <FieldGroup>
            <FormField
              id="register-name"
              label="Nama lengkap"
              name="fullName"
              type="text"
              autoComplete="name"
              placeholder="Nama Lengkap"
              value={values.fullName}
              onChange={(e) => updateField("fullName", e.target.value)}
              error={fieldErrors.fullName}
              disabled={isLoading}
            />

            <FormField
              id="register-phone"
              label="Nomor telepon"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="081234567890"
              value={values.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              error={fieldErrors.phone}
              disabled={isLoading}
            />

            <FormField
              id="register-email"
              label="Email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="nama@email.com"
              value={values.email}
              onChange={(e) => updateField("email", e.target.value)}
              error={fieldErrors.email}
              disabled={isLoading}
            />

            <FormField
              id="register-password"
              label="Kata sandi"
              name="password"
              type="password"
              autoComplete="new-password"
              placeholder="Minimal 8 karakter"
              value={values.password}
              onChange={(e) => updateField("password", e.target.value)}
              error={fieldErrors.password}
              disabled={isLoading}
            />

            <FormField
              id="register-confirm-password"
              label="Konfirmasi kata sandi"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              placeholder="Ulangi kata sandi"
              value={values.confirmPassword}
              onChange={(e) =>
                updateField("confirmPassword", e.target.value)
              }
              error={fieldErrors.confirmPassword}
              disabled={isLoading}
            />
          </FieldGroup>

          <Button
            type="submit"
            className="h-10 w-full"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2Icon className="animate-spin" />
                Memproses…
              </>
            ) : (
              "Daftar"
            )}
          </Button>

          <FieldDescription className="text-center text-sm">
            Sudah punya akun?{" "}
            <Link
              href="/login"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Masuk di sini
            </Link>
          </FieldDescription>
        </form>
      </CardContent>
    </Card>
  );
}
