"use client";

import { NavbarLinks } from "./navbar-links";

const Navbar: React.FC = () => {
  return (
    <header className="flex flex-none flex-col items-center gap-4">
      <NavbarLinks />
    </header>
  );
};

export { Navbar };
