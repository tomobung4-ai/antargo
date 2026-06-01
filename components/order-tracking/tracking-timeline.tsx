import { CheckCircle2 } from "lucide-react";

type TrackingStatus = {
  title: string;
  completed: boolean;
  time: string;
};

type TrackingTimelineProps = {
  statuses: TrackingStatus[];
};

export default function TrackingTimeline({
  statuses,
}: TrackingTimelineProps) {
  return (
    <div className="rounded-xl border bg-background p-4">
      <h3 className="mb-5 font-semibold">
        Status Pesanan
      </h3>

      <div className="space-y-5">
        {statuses.map((status, index) => (
          <div
            key={status.title}
            className="flex gap-4"
          >
            <div className="flex flex-col items-center">
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full ${
                  status.completed
                    ? "bg-primary text-primary-foreground"
                    : "border-2"
                }`}
              >
                {status.completed && (
                  <CheckCircle2 className="h-4 w-4" />
                )}
              </div>

              {index !==
                statuses.length - 1 && (
                <div className="mt-1 h-10 w-px bg-border" />
              )}
            </div>

            <div className="flex-1 pb-2">
              <p className="font-medium">
                {status.title}
              </p>

              {status.time && (
                <p className="text-sm text-muted-foreground">
                  {status.time}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}