import { Card, CardContent } from "@/components/ui/card";

type Props = {
  title: string;
  value: string;
};

export function DriverStats({
  title,
  value,
}: Props) {
  return (
    <Card>
      <CardContent className="p-5">
        <p className="text-sm text-muted-foreground">
          {title}
        </p>

        <h3 className="mt-2 text-2xl font-bold">
          {value}
        </h3>
      </CardContent>
    </Card>
  );
}