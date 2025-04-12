"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaDribbble,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  const socialIcons = [
    {
      icon: <FaGithub size={24} />,
      href: "https://github.com/shinobi04",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin size={24} />,
      href: "https://www.linkedin.com/in/anurag-kumar-singh-56718427b/",
      label: "LinkedIn",
    },
    {
      icon: <FaTwitter size={24} />,
      href: "https://x.com/anurag040904",
      label: "Twitter",
    },
  ];

  return (
    <footer className="w-full py-8 mt-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="social-icons flex flex-wrap justify-center gap-6 mb-6">
            {socialIcons.map((social, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.2,
                  color: ["#ffffff", "#a855f7", "#ec4899", "#ffffff"],
                  transition: {
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                  },
                }}
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-400 transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="border-t border-white/10 pt-6 w-full text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Anurag. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Built with Next.js & Framer Motion
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
