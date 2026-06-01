import { Globe, Mail, MessageCircle, Share2 } from "lucide-react";
import Link from "next/link";

import { Logo } from "@/components/landing/logo";

const footerLinks = {
  Perusahaan: [
    { label: "Tentang Kami", href: "#about" },
    { label: "Karier", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press", href: "#" },
  ],
  Layanan: [
    { label: "Antargo Ride", href: "#services" },
    { label: "Antargo Food", href: "#services" },
    { label: "Antargo Send", href: "#services" },
    { label: "Antargo Mart", href: "#services" },
  ],
  Bantuan: [
    { label: "Pusat Bantuan", href: "#" },
    { label: "Kebijakan Privasi", href: "#" },
    { label: "Syarat & Ketentuan", href: "#" },
    { label: "Hubungi Kami", href: "#" },
  ],
} as const;

const socialLinks = [
  { label: "Website", href: "#", icon: Globe },
  { label: "Email", href: "#", icon: Mail },
  { label: "Chat", href: "#", icon: MessageCircle },
  { label: "Bagikan", href: "#", icon: Share2 },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-4 sm:col-span-2 lg:col-span-2">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Platform mobilitas dan pengantaran terpercaya di Indonesia.
              Perjalanan, makanan, paket, dan belanja — semua dalam satu aplikasi.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  className="flex size-9 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                  aria-label={label}
                >
                  <Icon className="size-4" aria-hidden />
                </Link>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-sm font-semibold text-foreground">{group}</h3>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          id="login"
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-center text-sm text-muted-foreground sm:flex-row sm:text-left"
        >
          <p>© {new Date().getFullYear()} Antargo. Seluruh hak cipta dilindungi.</p>
          <p id="register">
            Mitra driver?{" "}
            <Link href="#register" className="font-medium text-primary hover:underline">
              Daftar sekarang
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
