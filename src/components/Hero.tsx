"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import Link from "next/link";

const AnimatedText = ({
  text,
  gradient = "from-purple-400 via-pink-600 to-indigo-500",
}: {
  text: string;
  gradient?: string;
}) => {
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
          className={`mr-2 bg-gradient-to-r ${gradient} text-transparent bg-clip-text overflow-visible`}
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
      className="text-center px-8 py-24 md:py-36 mx-auto max-w-4xl relative z-10 flex flex-col items-center justify-center min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Small decorative elements */}
      <motion.div
        className="absolute top-1/4 left-0 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-transparent rounded-full blur-xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 right-10 w-16 h-16 bg-gradient-to-l from-pink-500/20 to-transparent rounded-full blur-xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      />

      <motion.div
        className="mb-6 w-full flex flex-col items-center mt-10 md:mt-16"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 text-center leading-normal tracking-tight">
          <AnimatedText
            text="Anurag"
            gradient="from-purple-600 via-fuchsia-500 to-pink-500"
          />
        </h1>
        <h3 className="text-2xl md:text-4xl font-medium text-gray-300 text-center mt-4">
          <AnimatedText
            text="Mobile App Developer & UI/UX Designer"
            gradient="from-purple-600 via-fuchsia-500 to-pink-500"
          />
        </h3>
      </motion.div>

      <motion.p
        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 text-center leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
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
        <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="https://github.com/shinobi04"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 transition-colors relative group flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:border-purple-400/30 hover:bg-white/10"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
            <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 text-xs bg-black/80 text-white px-2 py-1 rounded transition-opacity">
              GitHub
            </span>
          </Link>
        </motion.div>

        <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="https://www.linkedin.com/in/anurag-kumar-singh-56718427b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-400 transition-colors relative group flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:border-purple-400/30 hover:bg-white/10"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
            <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 text-xs bg-black/80 text-white px-2 py-1 rounded transition-opacity">
              LinkedIn
            </span>
          </Link>
        </motion.div>

        <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="https://x.com/anurag040904"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-400 transition-colors relative group flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:border-pink-400/30 hover:bg-white/10"
            aria-label="Twitter"
          >
            <FaXTwitter size={20} />
            <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 text-xs bg-black/80 text-white px-2 py-1 rounded transition-opacity">
              Twitter
            </span>
          </Link>
        </motion.div>

        <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="mailto:anuragkrsingh3456@gmail.com"
            className="text-white hover:text-pink-400 transition-colors relative group flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:border-pink-400/30 hover:bg-white/10"
            aria-label="Email"
          >
            <FaEnvelope size={20} />
            <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 text-xs bg-black/80 text-white px-2 py-1 rounded transition-opacity">
              Email
            </span>
          </Link>
        </motion.div>
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
          className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg text-base transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:scale-105"
        >
          View My Work
        </Link>
        <Link
          href="mailto:anuragkrsingh3456@gmail.com"
          className="px-8 py-3 border-0 text-white font-medium rounded-lg text-base transition-all duration-300 relative"
        >
          <span className="relative z-10">Get In Touch</span>
          <motion.span
            className="absolute inset-0 rounded-lg border-2 border-purple-500"
            animate={{
              borderColor: ["#a855f7", "#ec4899", "#a855f7"],
              boxShadow: [
                "0 0 5px rgba(168, 85, 247, 0.5)",
                "0 0 10px rgba(236, 72, 153, 0.5)",
                "0 0 5px rgba(168, 85, 247, 0.5)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </Link>
      </motion.div>
    </motion.section>
  );
}
