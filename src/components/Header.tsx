"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const navItems = ["Home", "Projects", "Experience", "About"];

  // Scroll detection for active navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.toLowerCase());
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Find the section that's most visible in the viewport
      let currentSection = "home";

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + scrollPosition;
          const sectionBottom = sectionTop + rect.height;

          // Check if section is in view (considering header offset)
          if (
            scrollPosition + 100 >= sectionTop &&
            scrollPosition + 100 < sectionBottom
          ) {
            currentSection = sectionId;
            break;
          }

          // For the last section, if we're near the bottom
          if (
            sectionId === sections[sections.length - 1] &&
            scrollPosition + windowHeight >=
              document.documentElement.scrollHeight - 100
          ) {
            currentSection = sectionId;
          }
        }
      }

      setActiveLink(currentSection);
    };

    // Set initial active section
    handleScroll();

    // Add scroll event listener with throttling
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, []);

  const handleNavClick = (item: string) => {
    const section = document.getElementById(item.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveLink(item.toLowerCase());
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = "mailto:anuragkrsingh3456@gmail.com";
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 flex justify-between items-center px-6 py-3 mx-auto mt-4 max-w-6xl bg-gradient-to-r from-white/5 via-white/3 to-white/5 backdrop-blur-lg backdrop-saturate-150 rounded-full z-[60] border border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/10 before:to-transparent before:pointer-events-none"
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
            className={`mx-3 text-sm text-white/90 font-medium relative hover:text-white transition-all duration-500 px-3 py-1.5 group ${
              activeLink === item.toLowerCase() ? "text-white" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(item);
            }}
          >
            {item}
            {/* Animated underline */}
            <span
              className={`absolute -bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 transition-all duration-500 ease-out transform -translate-x-1/2 ${
                activeLink === item.toLowerCase()
                  ? "w-full opacity-100"
                  : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
              }`}
            />
            {/* Glow effect for active state */}
            {activeLink === item.toLowerCase() && (
              <span className="absolute -bottom-1 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 blur-sm opacity-60 transform -translate-x-1/2 animate-pulse" />
            )}
          </Link>
        ))}
        <a
          href="#contact"
          onClick={handleContactClick}
          className="ml-4 px-4 py-1.5 text-sm bg-gradient-to-r from-purple-500/80 to-pink-500/80 backdrop-blur-sm text-white font-medium rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:scale-105 cursor-pointer border border-white/20 hover:from-purple-500 hover:to-pink-500"
        >
          Get In Touch
        </a>
      </nav>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          className="p-1.5 text-white rounded-full bg-gradient-to-r from-white/8 to-white/5 backdrop-blur-sm border border-white/10 hover:from-white/15 hover:to-white/10 transition-all duration-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-3xl backdrop-saturate-[300%] mt-4 p-4 rounded-2xl md:hidden border border-white/25 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-b before:from-white/20 before:to-transparent before:pointer-events-none z-[60]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          {navItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-2 text-center text-white/90 hover:text-purple-300 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                handleNavClick(item);
              }}
            >
              {item}
            </Link>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              window.location.href = "mailto:anuragkrsingh3456@gmail.com";
            }}
            className="block mt-2 mx-auto w-full py-2 text-center text-sm bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg transition-colors cursor-pointer"
          >
            Get In Touch
          </a>
        </motion.div>
      )}
    </motion.header>
  );
}
