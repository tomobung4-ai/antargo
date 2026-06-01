import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

type UserAvatarProps = {
  name: string;
  initials: string;
  className?: string;
};

export function UserAvatar({ name, initials, className }: UserAvatarProps) {
  return (
    <Avatar className={cn(className)} title={name}>
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
  );
}
