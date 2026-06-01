export type FieldErrors<T extends string> = Partial<Record<T, string>>;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^(\+62|62|0)[0-9]{8,13}$/;

export function normalizePhone(value: string): string {
  return value.replace(/[\s-]/g, "");
}

export function isValidEmail(value: string): boolean {
  return EMAIL_REGEX.test(value.trim());
}

export function isValidPhone(value: string): boolean {
  const normalized = normalizePhone(value);
  return PHONE_REGEX.test(normalized);
}

export function isValidPassword(value: string): boolean {
  return value.length >= 8;
}

export type LoginFormValues = {
  phone: string;
  email: string;
  password: string;
  rememberMe: boolean;
};

export type RegisterFormValues = {
  fullName: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export function validateLogin(
  values: LoginFormValues
): FieldErrors<keyof LoginFormValues> {
  const errors: FieldErrors<keyof LoginFormValues> = {};

  if (!normalizePhone(values.phone)) {
    errors.phone = "Nomor telepon wajib diisi.";
  } else if (!isValidPhone(values.phone)) {
    errors.phone = "Format nomor tidak valid. Contoh: 08123456789.";
  }

  if (!values.email.trim()) {
    errors.email = "Email wajib diisi.";
  } else if (!isValidEmail(values.email)) {
    errors.email = "Format email tidak valid.";
  }

  if (!values.password) {
    errors.password = "Kata sandi wajib diisi.";
  } else if (!isValidPassword(values.password)) {
    errors.password = "Kata sandi minimal 8 karakter.";
  }

  return errors;
}

export function validateRegister(
  values: RegisterFormValues
): FieldErrors<keyof RegisterFormValues> {
  const errors: FieldErrors<keyof RegisterFormValues> = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Nama lengkap wajib diisi.";
  } else if (values.fullName.trim().length < 2) {
    errors.fullName = "Nama minimal 2 karakter.";
  }

  if (!normalizePhone(values.phone)) {
    errors.phone = "Nomor telepon wajib diisi.";
  } else if (!isValidPhone(values.phone)) {
    errors.phone = "Format nomor tidak valid. Contoh: 08123456789.";
  }

  if (!values.email.trim()) {
    errors.email = "Email wajib diisi.";
  } else if (!isValidEmail(values.email)) {
    errors.email = "Format email tidak valid.";
  }

  if (!values.password) {
    errors.password = "Kata sandi wajib diisi.";
  } else if (!isValidPassword(values.password)) {
    errors.password = "Kata sandi minimal 8 karakter.";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Konfirmasi kata sandi wajib diisi.";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Kata sandi tidak cocok.";
  }

  return errors;
}

export function hasFieldErrors<T extends string>(
  errors: FieldErrors<T>
): boolean {
  return Object.keys(errors).length > 0;
}

/** Simulates an API call for frontend-only flows. */
export async function mockAuthRequest(
  delayMs = 1200
): Promise<{ ok: true } | { ok: false; message: string }> {
  await new Promise((resolve) => setTimeout(resolve, delayMs));
  return { ok: true };
}
