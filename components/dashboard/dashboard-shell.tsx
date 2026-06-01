import { DashboardBottomNav } from "@/components/dashboard/bottom-nav";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { DashboardTopNav } from "@/components/dashboard/top-nav";

type DashboardShellProps = {
  children: React.ReactNode;
};

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="flex min-h-screen bg-muted/30">
      <DashboardSidebar />

      <div className="flex min-h-screen min-w-0 flex-1 flex-col">
        <DashboardTopNav />

        <main className="flex-1 overflow-x-hidden pb-24 lg:pb-8">
          <div className="mx-auto w-full max-w-6xl px-4 py-5 sm:px-6 sm:py-6">
            {children}
          </div>
        </main>

        <DashboardBottomNav />
      </div>
    </div>
  );
}
