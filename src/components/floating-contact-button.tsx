"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const FloatingContactButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.scrollY;
      const viewportHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // Show button when scrolled down, hide when at the top or bottom
      if (scrolled > 300 && scrolled + viewportHeight < fullHeight - 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility(); // Call it once to set initial state

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed right-5 bottom-0 z-50 flex items-center justify-center pb-7"
        >
          <a
            href="mailto:prasetyodody17@gmail.com"
            className="group/contact-me-btn custom-contact-btn relative flex items-center justify-center overflow-hidden p-4 text-center text-white"
          >
            <span className="-translate-y-[2px] text-center transition duration-500 group-hover/contact-me-btn:translate-x-40">
              Let's Get in Touch !
            </span>
            <div className="absolute inset-0 z-20 flex -translate-x-40 items-center justify-center text-white transition duration-500 group-hover/contact-me-btn:translate-x-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingContactButton;
