"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [stars, setStars] = useState<React.ReactNode[]>([]);
  const [shootingStars, setShootingStars] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    // Generate 800 random dots for an even denser starry background
    const dots = [];
    for (let i = 0; i < 800; i++) {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const size = Math.random() * 2.5 + 0.5; // 0.5-3px
      const duration = Math.random() * 4 + 2; // 2-6s
      const delay = Math.random() * 5;
      const baseOpacity = Math.random() * 0.5 + 0.5; // 0.5-1.0 for better visibility

      // Add theme-aware color variation to stars
      const isColored = Math.random() > 0.9;
      const themeClass = isColored
        ? Math.random() > 0.5
          ? "star-blue"
          : "star-gold"
        : "";

      dots.push(
        <motion.div
          key={i}
          className={`dot ${themeClass}`}
          style={{
            position: "absolute",
            top: `${top}%`,
            left: `${left}%`,
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: "50%",
            background: isColored ? "transparent" : "white", // CSS classes will handle colored stars
            opacity: baseOpacity,
            zIndex: 1,
            pointerEvents: "none",
            boxShadow:
              size > 2 ? `0 0 ${size}px rgba(255, 255, 255, 0.8)` : "none",
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

    // Create shooting stars that appear occasionally
    const createShootingStar = () => {
      const startTop = Math.random() * 50; // Top half of the screen
      const startLeft = Math.random() * 100;
      const angle = Math.random() * 45 + 15; // 15-60 degrees
      const length = Math.random() * 150 + 100; // 100-250px
      const duration = Math.random() * 0.8 + 0.6; // 0.6-1.4s

      return (
        <motion.div
          key={`shooting-${Date.now()}`}
          style={{
            position: "absolute",
            top: `${startTop}%`,
            left: `${startLeft}%`,
            width: `${length}px`,
            height: "2px",
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%)",
            borderRadius: "4px",
            zIndex: 1,
            transformOrigin: "left center",
            transform: `rotate(${angle}deg)`,
            opacity: 0,
            pointerEvents: "none",
          }}
          animate={{
            opacity: [0, 1, 0],
            left: [`${startLeft}%`, `${startLeft + 15}%`],
            top: [
              `${startTop}%`,
              `${startTop + 15 * Math.tan((angle * Math.PI) / 180)}%`,
            ],
          }}
          transition={{
            duration: duration,
            ease: "easeOut",
          }}
        />
      );
    };

    // Add a new shooting star every 2-5 seconds
    const shootingStarInterval = setInterval(() => {
      setShootingStars((prev) => [...prev, createShootingStar()]);

      // Limit the number of shooting stars to avoid performance issues
      if (shootingStars.length > 5) {
        setShootingStars((prev) => prev.slice(1));
      }
    }, Math.random() * 3000 + 2000);

    return () => clearInterval(shootingStarInterval);
  }, []);

  return (
    <div className="bg-blobs">
      {stars}
      {shootingStars}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80 z-1 pointer-events-none"></div>
      <motion.div
        className="blob"
        style={{
          top: "5%",
          left: "10%",
          background:
            "radial-gradient(circle, rgba(255, 0, 150, 0.25), transparent 70%)",
          filter: "blur(90px)",
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
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
            "radial-gradient(circle, rgba(80, 100, 255, 0.25), transparent 70%)",
          filter: "blur(90px)",
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 20, 0],
          scale: [1, 1.15, 1],
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
            "radial-gradient(circle, rgba(100, 255, 200, 0.2), transparent 70%)",
          filter: "blur(90px)",
        }}
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="blob"
        style={{
          bottom: "20%",
          right: "15%",
          background:
            "radial-gradient(circle, rgba(255, 100, 50, 0.2), transparent 70%)",
          filter: "blur(90px)",
        }}
        animate={{
          x: [0, -25, 0],
          y: [0, 15, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 22,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
