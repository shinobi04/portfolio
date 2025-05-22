"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa6";

export default function Footer() {
  const socialIcons = [
    {
      icon: <FaGithub size={20} />,
      href: "https://github.com/shinobi04",
      label: "GitHub",
      hoverColor: "hover:text-purple-400",
      bgColor: "bg-purple-500",
    },
    {
      icon: <FaLinkedin size={20} />,
      href: "https://www.linkedin.com/in/anurag-kumar-singh-56718427b/",
      label: "LinkedIn",
      hoverColor: "hover:text-blue-400",
      bgColor: "bg-blue-500",
    },
    {
      icon: <FaXTwitter size={20} />,
      href: "https://x.com/anurag040904",
      label: "X (Twitter)",
      hoverColor: "hover:text-blue-300",
      bgColor: "bg-blue-400",
    },
    {
      icon: <FaEnvelope size={20} />,
      href: "mailto:anuragkrsingh3456@gmail.com",
      label: "Email",
      hoverColor: "hover:text-pink-400",
      bgColor: "bg-pink-500",
    },
  ];

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "About", href: "#about" },
  ];

  return (
    <footer className="w-full py-16 mt-20 relative z-10">
      {/* Decorative wave divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-20"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-black/30"
          ></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo and tagline */}
          <motion.div
            className="mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-2">
              Anurag
            </h2>
            <p className="text-white/60 text-sm">
              Mobile App Developer & UI/UX Designer
            </p>
          </motion.div>

          {/* Footer navigation */}
          <motion.nav
            className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {footerLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-white/70 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                {link.name}
              </Link>
            ))}
          </motion.nav>

          <div className="social-icons flex flex-wrap justify-center gap-4 mb-10">
            {socialIcons.map((social, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.4 }}
                whileHover={{ scale: 1.1 }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-white ${social.hoverColor} transition-colors duration-300 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-white/20 hover:bg-white/10`}
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="border-t border-white/10 pt-8 w-full text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p className="text-sm text-gray-400 flex items-center justify-center">
              © {new Date().getFullYear()} Anurag. All rights reserved. Made
              with
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                  color: ["#f43f5e", "#a855f7", "#f43f5e"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="inline-flex mx-1.5"
              >
                <FaHeart className="text-pink-500" />
              </motion.span>
              in Delhi
            </p>
            <p className="text-xs text-gray-500 mt-3 flex justify-center items-center flex-wrap gap-2">
              <span>Built with</span>
              <span className="px-2 py-1 bg-white/5 rounded-full text-[10px] font-medium mx-1">
                Next.js
              </span>
              <span className="px-2 py-1 bg-white/5 rounded-full text-[10px] font-medium mx-1">
                Framer Motion
              </span>
              <span className="px-2 py-1 bg-white/5 rounded-full text-[10px] font-medium mx-1">
                Tailwind CSS
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
