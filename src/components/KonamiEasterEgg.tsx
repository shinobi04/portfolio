"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export default function KonamiEasterEgg() {
  const [isEasterEggTriggered, setIsEasterEggTriggered] = useState(false);

  useEffect(() => {
    // Konami code: up, up, down, down, left, right, left, right, B, A
    const konamiCode = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
      "KeyB",
      "KeyA",
    ];

    let konamiIndex = 0;

    const keyHandler = (e: KeyboardEvent) => {
      // Reset if pressed key doesn't match expected key in sequence
      if (e.code !== konamiCode[konamiIndex]) {
        konamiIndex = 0;
        return;
      }

      // Move to next key in sequence
      konamiIndex++;

      // If complete sequence is entered
      if (konamiIndex === konamiCode.length) {
        triggerEasterEgg();
        konamiIndex = 0;
      }
    };

    const triggerEasterEgg = () => {
      setIsEasterEggTriggered(true);

      // Launch confetti
      const duration = 3 * 1000;
      const end = Date.now() + duration;

      const launchConfetti = () => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#a855f7", "#ec4899", "#8b5cf6"],
        });

        if (Date.now() < end) {
          requestAnimationFrame(launchConfetti);
        }
      };

      launchConfetti();

      // Hide the easter egg message after a few seconds
      setTimeout(() => {
        setIsEasterEggTriggered(false);
      }, 5000);
    };

    window.addEventListener("keydown", keyHandler);
    return () => {
      window.removeEventListener("keydown", keyHandler);
    };
  }, []);

  return (
    <AnimatePresence>
      {isEasterEggTriggered && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-black/80 backdrop-blur-md px-12 py-8 rounded-xl border border-purple-500/30 shadow-xl"
            initial={{ scale: 0.8, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 30 }}
          >
            <motion.h3
              className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-2"
              animate={{
                scale: [1, 1.1, 1],
                transition: { duration: 1, repeat: Infinity },
              }}
            >
              🎉 Konami Code Activated! 🎉
            </motion.h3>
            <p className="text-white/90 text-center">
              You found the secret! Thanks for visiting my portfolio.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
