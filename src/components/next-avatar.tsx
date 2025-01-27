"use client";

import { CldImage, type CldImageProps } from "next-cloudinary";
import { useState } from "react";
import { Avatar } from "~/components/ui/avatar";
import { cn } from "~/lib/utils";
import { Skeleton } from "./ui/skeleton";

type Props = CldImageProps & {
  className?: string;
};

export default function NextAvatar(props: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const { width, height, className, alt, ...rest } = props;

  return (
    <div className="relative" style={{ width, height }}>
      {/* Loading Skeleton */}
      <Skeleton
        className={cn(
          "absolute inset-0 rounded-full",
          className,
          !isLoading && "hidden",
        )}
      />

      {/* Cloudinary Image */}
      <Avatar className={className} style={{ width, height }}>
        <CldImage
          {...rest}
          width={width}
          height={height}
          alt={alt || "Avatar"}
          className={cn(
            "h-full w-full rounded-full object-cover",
            "transition-opacity duration-300",
            isLoading ? "opacity-0" : "opacity-100",
          )}
          onLoad={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
          priority={true}
          deliveryType="fetch"
        />
      </Avatar>
    </div>
  );
}
