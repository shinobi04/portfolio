"use client";

import { useState } from "react";

export default function SkipToContent() {
  const [isFocused, setIsFocused] = useState(false);

  const handleSkip = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const content = document.getElementById("main-content");
    if (content) {
      content.tabIndex = -1;
      content.focus({ preventScroll: false });
    }
  };

  return (
    <a
      href="#main-content"
      onClick={handleSkip}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={`
        fixed top-0 left-0 z-[100] px-5 py-3 m-3 bg-purple-600 text-white font-medium rounded 
        transform transition-transform duration-200 focus:outline-none
        ${isFocused ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      Skip to content
    </a>
  );
}
