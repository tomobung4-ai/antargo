"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2Icon } from "lucide-react";

import { SocialLogin } from "@/components/auth/social-login";
import { FormAlert } from "@/components/forms/form-alert";
import { FormField } from "@/components/forms/form-field";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  hasFieldErrors,
  mockAuthRequest,
  validateLogin,
  type FieldErrors,
  type LoginFormValues,
} from "@/lib/validations/auth";

const initialValues: LoginFormValues = {
  phone: "",
  email: "",
  password: "",
  rememberMe: false,
};

export function LoginForm() {
  const router = useRouter();
  const [values, setValues] = useState<LoginFormValues>(initialValues);
  const [fieldErrors, setFieldErrors] =
    useState<FieldErrors<keyof LoginFormValues>>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  function updateField<K extends keyof LoginFormValues>(
    key: K,
    value: LoginFormValues[K]
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

    const errors = validateLogin(values);
    setFieldErrors(errors);

    if (hasFieldErrors(errors)) {
      return;
    }

    setIsLoading(true);

    try {
      const result = await mockAuthRequest();

      if (!result.ok) {
        setFormError(result.message);
        return;
      }

      setSuccessMessage("Login berhasil. Mengalihkan…");
      router.push("/");
    } catch {
      setFormError(
        "Terjadi kesalahan. Periksa koneksi Anda dan coba lagi."
      );
    } finally {
      setIsLoading(false);
    }
  }

  function handleSocialPlaceholder(provider: string) {
    setFormError(`Login ${provider} akan segera hadir.`);
    setSuccessMessage(null);
  }

  return (
    <Card className="border-border/80 shadow-sm">
      <CardHeader className="space-y-1 pb-2">
        <CardTitle className="text-2xl font-semibold tracking-tight">
          Masuk ke Antargo
        </CardTitle>
        <CardDescription>
          Gunakan nomor telepon, email, dan kata sandi akun Anda.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {formError ? (
            <FormAlert
              variant="error"
              title="Gagal masuk"
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
              id="login-phone"
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
              id="login-email"
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
              id="login-password"
              label="Kata sandi"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="••••••••"
              value={values.password}
              onChange={(e) => updateField("password", e.target.value)}
              error={fieldErrors.password}
              disabled={isLoading}
            />

            <Field orientation="horizontal" className="items-center">
              <Checkbox
                id="login-remember"
                checked={values.rememberMe}
                onCheckedChange={(checked) =>
                  updateField("rememberMe", checked === true)
                }
                disabled={isLoading}
              />
              <FieldContent>
                <FieldLabel htmlFor="login-remember" className="font-normal">
                  Ingat saya
                </FieldLabel>
              </FieldContent>
            </Field>
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
              "Masuk"
            )}
          </Button>

          <SocialLogin onPlaceholderClick={handleSocialPlaceholder} />

          <FieldDescription className="text-center text-sm">
            Belum punya akun?{" "}
            <Link
              href="/register"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              Daftar sekarang
            </Link>
          </FieldDescription>
        </form>
      </CardContent>
    </Card>
  );
}
