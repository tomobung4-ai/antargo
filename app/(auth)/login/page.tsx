import type { Metadata } from "next";

import { LoginForm } from "@/components/auth/login-form";

export const metadata: Metadata = {
  title: "Masuk — Antargo",
  description: "Masuk ke akun Antargo Anda untuk ride, food, send, dan mart.",
};

export default function LoginPage() {
  return <LoginForm />;
}
