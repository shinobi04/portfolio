"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
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
      className="flex flex-wrap"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className="mr-2 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
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
      className="text-center px-8 py-24 md:py-32 mx-auto max-w-4xl relative z-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="mb-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <AnimatedText text="Anurag" />
        </h1>
        <h3 className="text-2xl md:text-3xl font-medium text-gray-300">
          <AnimatedText text="Full Stack Developer & UI/UX Designer" />
        </h3>
      </div>

      <motion.p
        className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        I'm a passionate developer focused on creating intuitive, responsive,
        and beautiful web applications. I love turning complex problems into
        simple, elegant solutions.
      </motion.p>

      {/* Social Media Links */}
      <motion.div
        className="flex justify-center space-x-6 mb-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <Link
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-400 transition-colors"
        >
          <FaGithub size={28} />
          <span className="sr-only">GitHub</span>
        </Link>
        <Link
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-400 transition-colors"
        >
          <FaLinkedin size={28} />
          <span className="sr-only">LinkedIn</span>
        </Link>
        <Link
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-400 transition-colors"
        >
          <FaTwitter size={28} />
          <span className="sr-only">Twitter</span>
        </Link>
        <Link
          href="mailto:your.email@example.com"
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
          className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg text-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:scale-105 relative overflow-hidden z-10 before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-white/15 before:transform before:skew-x-[-20deg] before:transition-all before:duration-500 before:z-0 hover:before:left-[100%]"
        >
          View My Work
        </Link>
        <Link
          href="#contact"
          className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg text-lg transition-all duration-300 hover:bg-white hover:text-black"
        >
          Contact Me
        </Link>
      </motion.div>
    </motion.section>
  );
}
