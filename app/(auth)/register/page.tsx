import type { Metadata } from "next";

import { RegisterForm } from "@/components/auth/register-form";

export const metadata: Metadata = {
  title: "Daftar — Antargo",
  description: "Buat akun Antargo baru dan mulai pesan layanan perjalanan & pengantaran.",
};

export default function RegisterPage() {
  return <RegisterForm />;
}
