"use client";

import { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

const stickyClasses = ["fixed", "h-14"];
const unstickyClasses = ["absolute", "h-20"];
const stickyClassesContainer = [
  "border-neutral-300/50",
  "bg-white/80",
  "dark:border-neutral-600/40",
  "dark:bg-neutral-900/60",
  "backdrop-blur-2xl",
  "3xl:pl-6",
  "3xl:pr-4",
];
const unstickyClassesContainer = ["border-transparent"];

export const HeaderContainer: React.FC<Props> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // when mounted, check if the header is sticky or not
  useEffect(() => {
    const header = document.getElementById("header");
    if (!header) return;

    window.addEventListener("scroll", () => {
      if (window.scrollY > 16) {
        header.firstElementChild?.classList.add(...stickyClassesContainer);
        header.firstElementChild?.classList.remove(...unstickyClassesContainer);
        header.classList.add(...stickyClasses);
        header.classList.remove(...unstickyClasses);
        document.getElementById("menu")?.classList.add("top-[56px]");
        document.getElementById("menu")?.classList.remove("top-[75px]");
      } else {
        header.firstElementChild?.classList.remove(...stickyClassesContainer);
        header.firstElementChild?.classList.add(...unstickyClassesContainer);
        header.classList.add(...unstickyClasses);
        header.classList.remove(...stickyClasses);
        document.getElementById("menu")?.classList.remove("top-[56px]");
        document.getElementById("menu")?.classList.add("top-[75px]");
      }
    });
  }, []);

  return (
    <header
      id="header"
      className="slide-enter-content absolute top-0 z-50 h-20 w-full"
    >
      {children}
    </header>
  );
};
