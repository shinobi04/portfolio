"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = ["Home", "Projects", "Experience", "About"];

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Also handle active section based on scroll position
    const handleScrollForActiveSection = () => {
      const sections = navItems.map((item) =>
        document.getElementById(item.toLowerCase())
      );
      const scrollPosition = window.scrollY + 300; // Offset for better detection

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveLink(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollForActiveSection);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollForActiveSection);
    };
  }, [navItems]);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = "mailto:anuragkrsingh3456@gmail.com";
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 flex justify-between items-center px-3 sm:px-5 py-2.5 mx-auto mt-3 sm:mt-5 max-w-5xl ${
        scrolled
          ? "bg-black/40 dark:bg-white/5 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
          : "bg-transparent backdrop-blur-sm border-white/5"
      } rounded-full z-50 border transition-all duration-300`}
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex-1 flex justify-start">
        <Link
          href="#home"
          className="text-lg font-bold relative group overflow-hidden"
        >
          <span className="bg-gradient-to-r from-var(--primary) via-var(--accent) to-var(--secondary) text-transparent bg-clip-text">
            Anurag
          </span>
          <motion.span
            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-var(--primary) via-var(--accent) to-var(--secondary)"
            initial={{ width: "0%" }}
            animate={{ width: activeLink === "home" ? "100%" : "0%" }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          ></motion.span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-center">
        <div className="flex items-center space-x-1">
          {navItems.map((item) => (
            <motion.div
              key={item}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-0.5"
            >
              <Link
                href={`#${item.toLowerCase()}`}
                className={`px-2.5 py-1.5 text-xs font-medium uppercase tracking-wider relative group ${
                  activeLink === item.toLowerCase()
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                } transition-colors duration-300`}
                onClick={() => setActiveLink(item.toLowerCase())}
              >
                {item}
                <motion.span
                  className="absolute -bottom-0.5 left-0 h-[2px] bg-gradient-to-r from-var(--primary) to-var(--accent)"
                  initial={{ width: "0%" }}
                  animate={{
                    width: activeLink === item.toLowerCase() ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </nav>

      {/* Button and mobile menu container */}
      <div className="flex-1 flex justify-end">
        {/* Contact Button (Desktop) */}
        <motion.a
          href="#contact"
          onClick={handleContactClick}
          className="hidden md:flex items-center px-4 py-1.5 text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-var(--primary) via-var(--accent) to-var(--secondary) text-white rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] cursor-pointer relative overflow-hidden"
          whileHover={{ scale: 1.05, y: -1 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Get In Touch</span>
        </motion.a>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <motion.button
            className="p-1.5 text-white rounded-full bg-gradient-to-r from-var(--primary)/30 to-var(--accent)/30 backdrop-blur-md hover:from-var(--primary)/50 hover:to-var(--accent)/50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
          >
            {mobileMenuOpen ? <FaTimes size={16} /> : <FaBars size={16} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="absolute top-full right-4 w-48 bg-black/80 dark:bg-gray-900/90 backdrop-blur-xl mt-2 p-3 rounded-xl md:hidden border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="grid gap-1.5">
              {navItems.map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.15,
                    delay: navItems.indexOf(item) * 0.05,
                  }}
                >
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className={`block px-3 py-2 text-xs uppercase tracking-wider font-medium text-center rounded-lg ${
                      activeLink === item.toLowerCase()
                        ? "text-white bg-gradient-to-r from-var(--primary)/30 to-var(--accent)/30"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    } transition-all duration-300`}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setActiveLink(item.toLowerCase());
                    }}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.2 }}
                className="mt-1.5"
              >
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    window.location.href = "mailto:anuragkrsingh3456@gmail.com";
                  }}
                  className="block w-full py-2 text-center text-xs uppercase tracking-wider font-semibold bg-gradient-to-r from-var(--primary) via-var(--accent) to-var(--secondary) text-white rounded-lg transition-all duration-300 hover:shadow-lg cursor-pointer"
                >
                  Get In Touch
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
