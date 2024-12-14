import BlurFade from "~/components/ui/blur-fade";
import { Skeleton } from "~/components/ui/skeleton";

export default function Loading() {
  return (
    <BlurFade className="flex flex-col gap-6">
      <Skeleton className="h-8 w-[120px]" />
      <Skeleton className="h-8 w-full" />
      <Skeleton className="h-8 w-full" />
      <Skeleton className="h-8 w-full" />
    </BlurFade>
  );
}
