import Link from "next/link";
import { MapPin, Package, UtensilsCrossed } from "lucide-react";

type AuthShellProps = {
  children: React.ReactNode;
};

export function AuthShell({ children }: AuthShellProps) {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <aside className="relative hidden overflow-hidden bg-primary lg:flex lg:w-[45%] lg:flex-col lg:justify-between xl:w-[42%]">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          aria-hidden
        >
          <div className="absolute -top-24 -right-24 size-80 rounded-full bg-primary-foreground/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 size-96 rounded-full bg-black/10 blur-3xl" />
        </div>

        <div className="relative z-10 flex flex-col gap-10 p-10 xl:p-14">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary-foreground transition-opacity hover:opacity-90"
          >
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary-foreground/15 text-lg font-bold">
              A
            </span>
            <span className="text-xl font-semibold tracking-tight">Antargo</span>
          </Link>

          <div className="max-w-md space-y-4">
            <h1 className="text-3xl font-semibold tracking-tight text-primary-foreground xl:text-4xl">
              Perjalanan & pengantaran dalam satu aplikasi
            </h1>
            <p className="text-base leading-relaxed text-primary-foreground/85">
              Ride, Food, Send, dan Mart — kelola akun Anda dan mulai pesan
              dalam hitungan detik.
            </p>
          </div>

          <ul className="flex flex-col gap-4 text-sm text-primary-foreground/90">
            <li className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/15">
                <MapPin className="size-4" />
              </span>
              Ojek & ride on-demand ke seluruh kota
            </li>
            <li className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/15">
                <UtensilsCrossed className="size-4" />
              </span>
              Pesan makanan dari restoran favorit
            </li>
            <li className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/15">
                <Package className="size-4" />
              </span>
              Kirim paket cepat & aman
            </li>
          </ul>
        </div>

        <p className="relative z-10 p-10 text-xs text-primary-foreground/70 xl:p-14">
          © {new Date().getFullYear()} Antargo. Semua hak dilindungi.
        </p>
      </aside>

      <main className="flex flex-1 flex-col">
        <header className="flex items-center justify-between border-b px-4 py-4 sm:px-6 lg:hidden">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-foreground"
          >
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
              A
            </span>
            <span className="font-semibold tracking-tight">Antargo</span>
          </Link>
        </header>

        <div className="flex flex-1 items-center justify-center px-4 py-8 sm:px-6 sm:py-12">
          <div className="w-full max-w-md">{children}</div>
        </div>
      </main>
    </div>
  );
}
