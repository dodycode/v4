"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";

import { Skeleton } from "./ui/skeleton";

const NavbarLinks = dynamic(
  () => import("./navbar-links").then((mod) => mod.NavbarLinks),
  { ssr: false },
);

const Navbar: React.FC = () => {
  return (
    <header className="flex flex-none flex-col items-center gap-4">
      <Suspense
        fallback={
          <div className="flex items-center">
            <Skeleton className="h-7 w-[53px]" />
            <Skeleton className="h-7 w-[53px]" />
            <Skeleton className="h-7 w-[53px]" />
          </div>
        }
      >
        <NavbarLinks />
      </Suspense>
    </header>
  );
};

export { Navbar };
