import { lazy, Suspense } from "react";
import { Skeleton } from "./ui/skeleton";

const NavbarLinks = lazy(() =>
  import("./navbar-links").then((mod) => ({ default: mod.NavbarLinks })),
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
