"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import Link from "next/link";

const AnimatedText = ({ text }: { text: string }) => {
  const words = text.split(" ");

  // Fixed container and child variants to avoid passing functions directly
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap justify-center overflow-visible"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className="mr-2 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text overflow-visible"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="text-center px-8 py-24 md:py-32 mx-auto max-w-4xl relative z-10 flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="mb-6 w-full flex flex-col items-center mt-10 md:mt-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center leading-normal">
          <AnimatedText text="Anurag" />
        </h1>
        <h3 className="text-2xl md:text-4xl font-medium text-gray-300 text-center">
          <AnimatedText text="Mobile App Developer & UI/UX Designer" />
        </h3>
      </div>

      <motion.p
        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        I&apos;m a passionate developer focused on creating intuitive,
        responsive, and beautiful web applications. I love turning complex
        problems into simple, elegant solutions.
      </motion.p>

      {/* Social Media Links */}
      <motion.div
        className="flex justify-center space-x-6 mb-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <Link
          href="https://github.com/shinobi04"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-400 transition-colors"
        >
          <FaGithub size={28} />
          <span className="sr-only">GitHub</span>
        </Link>
        <Link
          href="https://www.linkedin.com/in/anurag-kumar-singh-56718427b/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-400 transition-colors"
        >
          <FaLinkedin size={28} />
          <span className="sr-only">LinkedIn</span>
        </Link>
        <Link
          href="https://x.com/anurag040904"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-400 transition-colors"
        >
          <FaXTwitter size={28} />
          <span className="sr-only">Twitter</span>
        </Link>
        <Link
          href="mailto:anuragkrsingh3456@gmail.com"
          className="text-white hover:text-purple-400 transition-colors"
        >
          <FaEnvelope size={28} />
          <span className="sr-only">Email</span>
        </Link>
      </motion.div>

      {/* Call to Action Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <Link
          href="#projects"
          className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg text-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:scale-105"
        >
          View My Work
        </Link>
        <Link
          href="mailto:anuragkrsingh3456@gmail.com"
          className="px-10 py-4 border-2 border-white text-white font-bold rounded-lg text-lg transition-all duration-300 hover:bg-white hover:text-black"
        >
          Get In Touch
        </Link>
      </motion.div>
    </motion.section>
  );
}
