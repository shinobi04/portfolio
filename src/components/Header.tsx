"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const navItems = ["Home", "Projects", "Experience", "About"];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 flex justify-between items-center px-6 py-3 mx-auto mt-4 max-w-6xl bg-black/20 backdrop-blur-md rounded-full z-50 border border-white/10"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Link
        href="#home"
        className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text"
      >
        Anurag
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center">
        {navItems.map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`mx-3 text-sm text-white/90 font-medium relative hover:text-white transition-colors ${
              activeLink === item.toLowerCase() ? "text-white after:w-full" : ""
            }`}
            onClick={() => setActiveLink(item.toLowerCase())}
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
        <Link
          href="#contact"
          className="ml-4 px-4 py-1.5 text-sm bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:scale-105"
        >
          Get In Touch
        </Link>
      </nav>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          className="p-1.5 text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          className="absolute top-full left-0 right-0 bg-black/80 backdrop-blur-lg mt-4 p-4 rounded-2xl md:hidden border border-white/10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-2 text-center text-white/90 hover:text-purple-300 transition-colors"
              onClick={() => {
                setMobileMenuOpen(false);
                setActiveLink(item.toLowerCase());
              }}
            >
              {item}
            </Link>
          ))}
          <Link
            href="#contact"
            className="block mt-2 mx-auto w-full py-2 text-center text-sm bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get In Touch
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
