"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaXTwitter, FaEnvelope } from "react-icons/fa6";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-[90vh] px-4 py-20">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-retro-bg border-2 border-black shadow-retro-lg p-0 relative overflow-hidden"
      >
        {/* Window Header (Decorative) */}
        <div className="w-full h-10 border-b-2 border-black bg-retro-accent flex items-center px-3 justify-between select-none">
           <div className="font-mono text-sm font-bold uppercase tracking-widest truncate">User_Profile.exe</div>
           <div className="flex space-x-2">
             <div className="w-4 h-4 border-2 border-black bg-white hover:bg-black transition-colors cursor-pointer"></div>
             <div className="w-4 h-4 border-2 border-black bg-white hover:bg-black transition-colors cursor-pointer"></div>
           </div>
        </div>

        <div className="p-8 md:p-16 flex flex-col items-center text-center bg-white">
          <h1 className="text-5xl md:text-7xl font-black mb-4 text-black tracking-tighter uppercase">
            Anurag
          </h1>
          <h2 className="text-xl md:text-2xl font-mono mb-8 text-black bg-retro-accent px-4 py-1 border-2 border-black shadow-retro transform -rotate-1">
            Mobile App Developer & UI/UX Designer
          </h2>

          <p className="text-lg md:text-xl text-black max-w-2xl mb-12 font-medium leading-relaxed font-mono">
            I build pixel-perfect, engaging, and accessible digital experiences. 
            <br/>
            <span className="text-sm text-gray-500 mt-2 block">{`/* Turning coffee into code since 2020 */`}</span>
          </p>

          {/* Social Links - Retro Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: FaGithub, href: "https://github.com/shinobi04", label: "GitHub" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/anurag-kumar-singh-56718427b/", label: "LinkedIn" },
              { icon: FaXTwitter, href: "https://x.com/anurag040904", label: "Twitter" },
              { icon: FaEnvelope, href: "mailto:anuragkrsingh3456@gmail.com", label: "Email" },
            ].map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-black shadow-retro hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all active:translate-x-[4px] active:translate-y-[4px] active:shadow-none group"
              >
                <social.icon className="text-xl group-hover:scale-110 transition-transform" />
                <span className="font-bold font-mono">{social.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
