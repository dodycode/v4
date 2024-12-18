"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

import { cn } from "~/lib/utils";
import { useEffect, useState } from "react";

type NavLink = {
  href: string;
  label: string;
};

const links: NavLink[] = [
  { href: "/", label: "home" },
  { href: "/experience", label: "experience" },
  { href: "/work", label: "work" },
];

export function NavbarLinks() {
  const pathname = usePathname();

  const [active, setActive] = useState<NavLink | undefined>(
    links.find((link) => link.href === pathname) ?? links[0],
  );

  useEffect(() => {
    setActive(links.find((link) => link.href === pathname) ?? links[0]);
  }, [pathname]);

  return (
    <div className="relative flex items-center justify-start">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="group relative rounded-md px-2 py-1"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {active?.href === link.href && (
            <motion.div
              layoutId="activeBackground"
              transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
              className="absolute inset-0 rounded-md bg-accent"
            />
          )}
          <span
            className={cn(
              "relative block text-sm text-muted-foreground transition-colors group-hover:text-white",
              active?.href === link.href && "font-semibold text-white",
            )}
          >
            {link.label}
          </span>
        </Link>
      ))}
    </div>
  );
}
