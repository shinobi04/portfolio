"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [stars, setStars] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    // Generate 500 random dots for an even denser starry background
    const dots = [];
    for (let i = 0; i < 500; i++) {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const size = Math.random() * 3 + 1; // 1-4px
      const duration = Math.random() * 3 + 2; // 2-5s
      const delay = Math.random() * 5;
      const baseOpacity = Math.random() * 0.4 + 0.6; // 0.6-1.0 for higher visibility

      dots.push(
        <motion.div
          key={i}
          className="dot"
          style={{
            position: "absolute",
            top: `${top}%`,
            left: `${left}%`,
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: "50%",
            background: "white",
            opacity: baseOpacity,
            zIndex: 1, // Match parent z-index to ensure proper layering
            pointerEvents: "none", // Ensure dots don't interfere with clicks
          }}
          animate={{
            opacity: [baseOpacity, Math.min(baseOpacity + 0.4, 1), baseOpacity],
          }}
          transition={{
            repeat: Infinity,
            duration: duration,
            ease: "easeInOut",
            delay: delay,
          }}
        />
      );
    }
    setStars(dots);
  }, []);

  return (
    <div className="bg-blobs">
      <motion.div
        className="blob"
        style={{
          top: "5%",
          left: "10%",
          background:
            "radial-gradient(circle, rgba(255, 0, 150, 0.3), transparent 70%)",
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="blob"
        style={{
          top: "15%",
          right: "5%",
          background:
            "radial-gradient(circle, rgba(0, 100, 255, 0.3), transparent 70%)",
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 24,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="blob"
        style={{
          bottom: "5%",
          left: "25%",
          background:
            "radial-gradient(circle, rgba(100, 255, 200, 0.3), transparent 70%)",
        }}
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 22,
          ease: "easeInOut",
        }}
      />

      {/* Render generated stars */}
      {stars}
    </div>
  );
}
