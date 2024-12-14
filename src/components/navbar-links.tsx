"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "motion/react";
import { cn } from "~/lib/utils";

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
  const router = useRouter();

  const [active, setActive] = useState<NavLink | undefined>(
    links.find((link) => link.href === pathname) ?? links[0],
  );

  const moveSelectedLinkToTop = (idx: number) => {
    const newLinks = [...links];
    const selectedLink = newLinks.splice(idx, 1);
    if (!selectedLink[0]) return;
    newLinks.unshift(selectedLink[0]);
    if (!newLinks[0]) return;
    router.push(newLinks[0].href);
  };

  useEffect(() => {
    setActive(links.find((link) => link.href === pathname) ?? links[0]);
  }, [pathname]);

  return (
    <div className="relative flex items-center justify-start">
      {links?.map((link, idx) => (
        <button
          key={link.label}
          onClick={() => {
            moveSelectedLinkToTop(idx);
          }}
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
        </button>
      ))}
    </div>
  );
}
