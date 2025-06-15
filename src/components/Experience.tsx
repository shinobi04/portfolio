"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface EducationEntry {
  title: string;
  institution: string;
  duration: string;
  description: string[];
  skills: string[];
  color: string;
}

export default function Experience() {
  const educationPath: EducationEntry[] = [
    {
      title: "B.Tech in Information Technology",
      institution: "USICT, Delhi",
      duration: "2024 - 2028 (Current)",
      description: [
        "Pursuing Bachelor of Technology in Information Technology",
        "Learning fundamentals of programming, data structures, and algorithms",
        "Exploring App development, AI/ML, and software engineering principles",
      ],
      skills: [
        "C++",
        "Kotlin",
        "App Development",
        "Flutter",
        "UI/UX Design",
        "Data Structures",
        "Algorithms",
      ],
      color: "from-purple-500 to-indigo-600",
    },
    {
      title: "Lovely Public School",
      institution: "Previous School",
      duration: "Before 2024",
      description: [
        "Completed high school with focus on Physics, Chemistry and mathematics",
        "First introduction to programming and computer science in python",
        "Developed interest in technology and software development",
      ],
      skills: [
        "Basic Programming",
        "Mathematics",
        "Physics",
        "Chemistry",
        "Python",
      ],
      color: "from-blue-500 to-cyan-600",
    },
  ];

  const [expandedItems, setExpandedItems] = useState<number[]>(
    educationPath.map((_, i) => i)
  );

  const toggleItem = (index: number) => {
    setExpandedItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="experience" className="py-24 pb-12 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-4">
          Education Journey
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Climbing through my academic path at USICT, Delhi
        </p>
      </motion.div>

      {/* Timeline view for desktop, cards for mobile */}
      <div className="relative">
        {/* Start flag for mobile - moved to top */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center items-center mb-16 md:hidden"
        >
          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.5)] flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="ml-2 text-green-400 font-medium">Academic</span>
        </motion.div>

        {/* Start flag - for desktop - moved to top */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="hidden md:flex flex-col items-center mb-24"
        >
          <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.5)] flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="mt-3 text-green-400 font-medium text-lg">
            Academic Start
          </span>
        </motion.div>

        {/* Central vertical line - only visible on desktop, positioned lower to not connect with Academic Start */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500/50 to-pink-400/50 rounded-full hidden md:block"
          style={{ height: "calc(100% - 120px)", top: "120px" }}
          initial={{ height: 0 }}
          whileInView={{ height: "calc(100% - 120px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        {/* Mobile cards in a simple stack */}
        <div className="md:hidden space-y-6">
          {educationPath.map((edu, index) => {
            const isExpanded = expandedItems.includes(index);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300"
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(168, 85, 247, 0.15)",
                }}
              >
                {/* Level badge */}
                <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-bold text-white">
                  Level {educationPath.length - index}
                </div>

                <div className="flex flex-col mb-4 mt-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {edu.title}
                    </h3>
                    <button
                      onClick={() => toggleItem(index)}
                      className="text-white/50 hover:text-white p-1"
                    >
                      {isExpanded ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                  <p
                    className={`bg-gradient-to-r ${edu.color} text-transparent bg-clip-text font-medium`}
                  >
                    {edu.institution}
                  </p>
                  <p className="text-white/50 text-sm mt-1">{edu.duration}</p>
                </div>

                <motion.div
                  initial={{ height: "auto" }}
                  animate={{
                    height: isExpanded ? "auto" : 0,
                    opacity: isExpanded ? 1 : 0,
                  }}
                  className="overflow-hidden"
                >
                  <ul className="list-none space-y-2 mb-4 text-white/80 pl-1">
                    {edu.description.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{
                          opacity: isExpanded ? 1 : 0,
                          x: isExpanded ? 0 : -10,
                        }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="flex items-start"
                      >
                        <span
                          className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r ${edu.color} mt-1.5 mr-2`}
                        ></span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {edu.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                          opacity: isExpanded ? 1 : 0,
                          scale: isExpanded ? 1 : 0.8,
                        }}
                        transition={{ duration: 0.2, delay: 0.3 + i * 0.05 }}
                        className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${edu.color
                          .replace("500", "500/20")
                          .replace("600", "600/20")} text-white`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop timeline with horizontal arrows - only visible on desktop */}
        <div className="hidden md:block space-y-32 relative">
          {educationPath.map((edu, index) => {
            const isEven = index % 2 === 0;
            const isExpanded = expandedItems.includes(index);

            return (
              <div key={index} className="relative">
                {/* Horizontal line with arrow */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`absolute top-3 ${
                    isEven ? "right-1/2" : "left-1/2"
                  } h-0.5 w-[15%] 
                  origin-${isEven ? "right" : "left"} bg-white/40`}
                >
                  {/* Arrow tip */}
                  <div
                    className={`absolute top-1/2 -translate-y-1/2 ${
                      isEven ? "right-0" : "left-0"
                    } 
                    w-2 h-2 border-t border-r border-white/40 
                    transform ${isEven ? "-rotate-45" : "135deg"}`}
                  ></div>
                </motion.div>

                {/* Ladder step node */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r ${edu.color} z-10 
                    shadow-[0_0_15px_rgba(168,85,247,0.5)] cursor-pointer`}
                  onClick={() => toggleItem(index)}
                  whileHover={{ scale: 1.2 }}
                />

                {/* Education card */}
                <motion.div
                  className={`w-5/12 ${isEven ? "mr-auto" : "ml-auto"} 
                    relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-500/40 
                    transition-all duration-300`}
                  initial={{
                    opacity: 0,
                    x: isEven ? -50 : 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{ duration: 0.6, delay: index * 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 25px -5px rgba(168, 85, 247, 0.15)",
                  }}
                >
                  {/* Level badge */}
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-xs font-bold text-white">
                    Level {educationPath.length - index}
                  </div>

                  <div className="flex flex-col mb-4 mt-2">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {edu.title}
                      </h3>
                    </div>
                    <p
                      className={`bg-gradient-to-r ${edu.color} text-transparent bg-clip-text font-medium`}
                    >
                      {edu.institution}
                    </p>
                    <p className="text-white/50 text-sm mt-1">{edu.duration}</p>
                  </div>

                  <motion.div
                    initial={{ height: "auto" }}
                    animate={{
                      height: isExpanded ? "auto" : 0,
                      opacity: isExpanded ? 1 : 0,
                    }}
                    className="overflow-hidden"
                  >
                    <ul className="list-none space-y-2 mb-4 text-white/80 pl-1">
                      {edu.description.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{
                            opacity: isExpanded ? 1 : 0,
                            x: isExpanded ? 0 : -10,
                          }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          className="flex items-start"
                        >
                          <span
                            className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r ${edu.color} mt-1.5 mr-2`}
                          ></span>
                          {item}
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {edu.skills.map((skill, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{
                            opacity: isExpanded ? 1 : 0,
                            scale: isExpanded ? 1 : 0.8,
                          }}
                          transition={{ duration: 0.2, delay: 0.3 + i * 0.05 }}
                          className={`px-3 py-1 text-xs rounded-full bg-gradient-to-r ${edu.color
                            .replace("500", "500/20")
                            .replace("600", "600/20")} text-white`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
