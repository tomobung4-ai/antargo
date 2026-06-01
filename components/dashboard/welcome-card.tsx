import { SparklesIcon } from "lucide-react";

import { UserAvatar } from "@/components/dashboard/user-avatar";
import { Card, CardContent } from "@/components/ui/card";
import { getGreeting } from "@/lib/dashboard/greeting";

type WelcomeCardProps = {
  userName: string;
  initials: string;
};

export function WelcomeCard({ userName, initials }: WelcomeCardProps) {
  const greeting = getGreeting();

  return (
    <Card className="overflow-hidden border-0 bg-gradient-to-br from-primary via-primary to-emerald-700 py-0 text-primary-foreground ring-0">
      <CardContent className="relative px-5 py-5 sm:px-6 sm:py-6">
        <div
          className="pointer-events-none absolute -top-8 -right-8 size-32 rounded-full bg-white/10"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-12 -left-6 size-40 rounded-full bg-white/5"
          aria-hidden
        />

        <div className="relative flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <p className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/90">
              <SparklesIcon className="size-4" />
              {greeting}
            </p>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">
              {userName}
            </h1>
            <p className="mt-2 max-w-md text-sm text-primary-foreground/85">
              Mau kemana hari ini? Pilih layanan di bawah untuk mulai pesan.
            </p>
          </div>
          <UserAvatar
            name={userName}
            initials={initials}
            className="size-14 ring-4 ring-white/25"
          />
        </div>
      </CardContent>
    </Card>
  );
}
