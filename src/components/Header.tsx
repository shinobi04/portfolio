"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";

const navItems = ["Home", "Projects", "Experience", "About"];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.toLowerCase());
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      let currentSection = "home";

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + scrollPosition;
          const sectionBottom = sectionTop + rect.height;

          if (
            scrollPosition + 100 >= sectionTop &&
            scrollPosition + 100 < sectionBottom
          ) {
            currentSection = sectionId;
            break;
          }

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
      setScrolled(scrollPosition > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white border-2 border-black shadow-retro flex justify-between items-center px-4 py-2">
            <Link
              href="#home"
              className="text-xl font-black uppercase tracking-tighter border-2 border-black bg-retro-accent px-2 py-1 hover:bg-black hover:text-white transition-colors"
            >
              Anurag
            </Link>

            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`px-4 py-2 font-mono font-bold text-sm border-2 border-transparent hover:border-black hover:bg-retro-gray transition-all ${
                    activeLink === item.toLowerCase() ? "bg-black text-white border-black" : "text-black"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item);
                  }}
                >
                  {item}
                </Link>
              ))}
              <a
                href="#contact"
                onClick={handleContactClick}
                className="ml-4 px-4 py-2 text-sm font-bold bg-retro-accent border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all cursor-pointer"
              >
                Get In Touch
              </a>
            </nav>

            <div className="md:hidden">
              <button
                className="p-2 border-2 border-black bg-retro-gray hover:bg-black hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 mx-4 mt-2 bg-white border-2 border-black shadow-retro z-[60]"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="flex flex-col p-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 px-4 font-mono font-bold border-2 border-transparent hover:border-black hover:bg-retro-gray text-black transition-colors"
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
                className="block w-full py-2 px-4 text-center font-bold bg-retro-accent border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-[2px] transition-all cursor-pointer mt-2"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        )}
      </motion.header>
    </>
  );
}

