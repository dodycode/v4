"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    const sun = document.getElementById("sun");
    const moon = document.getElementById("moon");
    document.documentElement.classList.add("duration-300");

    if (newTheme === "light") {
      sun?.classList.remove("setting");
      moon?.classList.remove("rising");

      moon?.classList.add("setting");

      setTimeout(() => {
        sun?.classList.add("rising");
        setTheme(newTheme);
      }, 500);
    } else {
      moon?.classList.remove("setting");
      sun?.classList.remove("rising");

      sun?.classList.add("setting");

      setTimeout(() => {
        moon?.classList.add("rising");
        setTheme(newTheme);
      }, 500);
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const sun = document.getElementById("sun");
    const moon = document.getElementById("moon");
    const dayText = document.getElementById("dayText");
    const nightText = document.getElementById("nightText");

    if (theme === "dark") {
      sun?.classList.add("hidden");
      dayText?.classList.add("hidden");
      nightText?.classList.remove("hidden");
      moon?.classList.remove("hidden");
    } else {
      sun?.classList.remove("hidden");
      dayText?.classList.remove("hidden");
      nightText?.classList.add("hidden");
      moon?.classList.add("hidden");
    }
  }, [theme, mounted]);

  if (!mounted) return null;

  return (
    <div
      id="darkToggle"
      onClick={handleThemeChange}
      className="group relative ml-4 flex cursor-pointer items-center pl-6 font-medium tracking-wide text-neutral-800 dark:text-white"
    >
      <div className="horizon absolute left-0 flex h-6 w-6 items-center justify-center overflow-hidden border-b border-transparent group-hover:border-neutral-600">
        <svg
          className="absolute h-6 w-6"
          id="sun"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
        </svg>
        <svg
          className="absolute h-6 w-6"
          id="moon"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
        </svg>
      </div>
      <span className="hidden sm:inline-block">
        <span id="dayText" className="ml-2">
          Day mode
        </span>
        <span id="nightText" className="ml-2">
          Night mode
        </span>
      </span>
    </div>
  );
};
