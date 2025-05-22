"use client";

import { useEffect } from "react";

export default function ThemeScript() {
  useEffect(() => {
    // Check for saved theme preference or use system preference
    const getInitialTheme = () => {
      if (typeof window !== "undefined") {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) return savedTheme;

        // Check system preference
        const userPrefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        return userPrefersDark ? "dark" : "light";
      }
      // Default to dark if running on server
      return "dark";
    };

    // Set theme on document
    document.documentElement.setAttribute("data-theme", getInitialTheme());
  }, []);

  return null;
}
