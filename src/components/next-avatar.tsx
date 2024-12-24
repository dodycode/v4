"use client";

import { getCldImageUrl, type CldImageProps } from "next-cloudinary";
import { useState } from "react";
import { Avatar, AvatarImage } from "~/components/ui/avatar";
import { cn } from "~/lib/utils";

type Props = CldImageProps;

export default function NextAvatar(props: Props) {
  const [isLoading, setIsLoading] = useState(true);

  const src = getCldImageUrl({
    width: props.width,
    height: props.height,
    deliveryType: "fetch",
    ...props,
  });

  return (
    <Avatar
      className={props.className}
      style={{
        width: props.width,
        height: props.height,
      }}
    >
      <AvatarImage
        src={src}
        className={cn(
          "h-full w-full object-cover",
          "transition-opacity duration-300 ease-in-out",
        )}
        style={{
          opacity: isLoading ? 0 : 1,
        }}
        alt={props.alt}
        onLoad={() => {
          setIsLoading(false);
        }}
      />
    </Avatar>
  );
}
