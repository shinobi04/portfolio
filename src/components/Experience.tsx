"use client";

import { motion } from "framer-motion";

interface EducationEntry {
  title: string;
  institution: string;
  duration: string;
  description: string[];
  skills: string[];
  color: string;
}

export default function Experience() {
  // Define educationPath first before referencing it in any functions
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

  const toggleItem = (index: number) => {
    // Function kept for future use if needed
    // Currently inactive since there's no collapse/expand functionality
    void index; // Explicitly void the parameter to avoid unused variable error
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

      <div className="relative">
        {/* Central vertical line */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500/50 to-pink-400/50 rounded-full"
          style={{ height: "calc(100% - 40px)", top: "20px" }}
          initial={{ height: 0 }}
          whileInView={{ height: "calc(100% - 40px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        <div className="space-y-32 relative">
          {educationPath.map((edu, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="relative">
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
                  className={`w-full md:w-5/12 ${
                    isEven ? "md:mr-auto" : "md:ml-auto"
                  } 
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
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {edu.title}
                    </h3>
                    <p
                      className={`bg-gradient-to-r ${edu.color} text-transparent bg-clip-text font-medium`}
                    >
                      {edu.institution}
                    </p>
                    <p className="text-white/50 text-sm mt-1">{edu.duration}</p>
                  </div>

                  <motion.div
                    initial={{ height: "auto", opacity: 1 }}
                    className="overflow-hidden"
                  >
                    <ul className="list-none space-y-2 mb-4 text-white/80 pl-1">
                      {edu.description.map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
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
                          animate={{ opacity: 1, scale: 1 }}
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

                  {/* Removed collapse/expand button and indicator */}
                </motion.div>
              </div>
            );
          })}

          {/* Start flag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.5)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white p-1.5"
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
            <span className="mt-2 text-green-400 font-medium">
              Academic Start
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
