"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    // Add link hover detection
    const handleLinkHoverStart = () => setCursorVariant("link");
    const handleLinkHoverEnd = () => setCursorVariant("default");

    window.addEventListener("mousemove", mouseMove);

    // Select all links and buttons
    const links = document.querySelectorAll("a, button");
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkHoverStart);
      link.addEventListener("mouseleave", handleLinkHoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHoverStart);
        link.removeEventListener("mouseleave", handleLinkHoverEnd);
      });
    };
  }, []);

  // Define cursor variants
  const variants = {
    default: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      height: 24,
      width: 24,
      backgroundColor: "rgba(236, 72, 153, 0.2)",
      border: "1px solid rgba(236, 72, 153, 0.5)",
      transition: {
        type: "spring",
        mass: 0.1,
        stiffness: 150,
        damping: 15,
      },
    },
    link: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(236, 72, 153, 0.3)",
      border: "1px solid rgba(236, 72, 153, 0.8)",
      // Use the proper mixBlendMode type from Framer Motion
      mixBlendMode: "difference" as const,
      transition: {
        type: "spring",
        mass: 0.1,
        stiffness: 150,
        damping: 15,
      },
    },
  };

  // Only render on client and for non-touch devices
  if (
    typeof window === "undefined" ||
    window.matchMedia("(hover: none)").matches
  ) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full z-[100] pointer-events-none"
      variants={variants}
      animate={cursorVariant}
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-pink-500 opacity-30"
        animate={{ scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  );
}
