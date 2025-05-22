"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="pt-12 pb-24 px-6 max-w-6xl mx-auto relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 -right-20 w-72 h-72 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 text-transparent bg-clip-text mb-6 tracking-tight">
          About Me
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
        <p className="text-white/70 max-w-2xl mx-auto text-lg">
          App developer specializing in modern UI frameworks
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.div
            className="bg-gradient-to-br from-black/70 to-gray-900/40 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300 shadow-lg relative overflow-hidden group"
            whileHover={{ y: -5 }}
          >
            {/* Subtle glow effect */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-pink-500/0"></div>

            <h3 className="text-2xl font-semibold text-white mb-5 flex items-center group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 group-hover:text-transparent group-hover:bg-clip-text">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 w-8 h-8 rounded-lg flex items-center justify-center mr-3 shadow-md shadow-purple-500/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Who I Am
            </h3>
            <p className="text-white/70 mb-4 leading-relaxed pl-11">
              I&apos;m a passionate app developer currently pursuing B.Tech in
              Information Technology at USICT, Delhi. I specialize in creating
              beautiful, responsive, and user-friendly mobile applications using
              modern frameworks.
            </p>
            <p className="text-white/70 leading-relaxed pl-11">
              When I&apos;m not coding, I enjoy exploring new technologies,
              participating in hackathons, and contributing to open-source
              projects.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-black/70 to-gray-900/40 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-indigo-500/30 transition-all duration-300 shadow-lg relative overflow-hidden group"
            whileHover={{ y: -5 }}
          >
            {/* Subtle glow effect */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500/0 via-indigo-500/50 to-blue-500/0"></div>

            <h3 className="text-2xl font-semibold text-white mb-5 flex items-center group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-blue-500 group-hover:text-transparent group-hover:bg-clip-text">
              <span className="bg-gradient-to-r from-indigo-500 to-blue-500 w-8 h-8 rounded-lg flex items-center justify-center mr-3 shadow-md shadow-indigo-500/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Tech Expertise
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pl-11">
              <div>
                <h4 className="text-base font-medium bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-3 uppercase tracking-wider">
                  Mobile Development
                </h4>
                <ul className="space-y-2">
                  {[
                    "Kotlin & Jetpack Compose",
                    "Flutter & Dart",
                    "Android SDK",
                    "iOS Development",
                  ].map((skill, i) => (
                    <li key={i} className="text-white/70 flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-base font-medium bg-gradient-to-r from-indigo-400 to-blue-500 text-transparent bg-clip-text mb-3 uppercase tracking-wider">
                  Other Skills
                </h4>
                <ul className="space-y-2">
                  {[
                    "React & NextJS",
                    "Firebase",
                    "REST API Design",
                    "UI/UX Design",
                  ].map((skill, i) => (
                    <li key={i} className="text-white/70 flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative h-[500px] w-full">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl transform rotate-3 scale-95 blur-sm"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl transform -rotate-2 scale-95 blur-sm"></div>

            {/* Code editor mockup */}
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {/* Code editor chrome/toolbar */}
              <div className="bg-black/50 border-b border-white/10 p-3 flex items-center">
                <div className="flex space-x-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 flex space-x-2">
                  <div className="bg-white/5 rounded text-xs text-white/60 px-3 py-1 font-mono flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    profile.json
                  </div>
                  <div className="bg-white/10 rounded text-xs text-white/70 px-3 py-1 font-mono flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    current_project.dart
                  </div>
                </div>
              </div>

              <div className="h-full w-full p-6 pt-4 flex flex-col overflow-hidden">
                <div className="bg-black/50 backdrop-blur-md rounded-lg p-4 mb-6 border border-white/5 shadow-lg overflow-hidden relative group">
                  {/* Line numbers */}
                  <div className="absolute left-3 top-12 bottom-4 flex flex-col text-right text-white/30 font-mono text-xs space-y-0.5 select-none">
                    {[...Array(10)].map((_, i) => (
                      <span key={i}>{i + 1}</span>
                    ))}
                  </div>

                  {/* Filename */}
                  <div className="flex items-center mb-2">
                    <div className="h-3 w-3 rounded-full bg-purple-500 mr-2"></div>
                    <h3 className="font-mono text-sm text-white/70">
                      profile.json
                    </h3>
                  </div>

                  {/* Code with syntax highlighting */}
                  <pre className="language-json mt-2 text-sm overflow-x-auto pl-8 font-mono">
                    <code className="text-white/80">
                      <span className="text-white/80">{"{"}</span>
                      <br />
                      <span className="text-blue-400"> "name"</span>
                      <span className="text-white/80">:</span>{" "}
                      <span className="text-green-400">"Anurag"</span>
                      <span className="text-white/80">,</span>
                      <br />
                      <span className="text-blue-400"> "title"</span>
                      <span className="text-white/80">:</span>{" "}
                      <span className="text-green-400">
                        "Mobile App Developer"
                      </span>
                      <span className="text-white/80">,</span>
                      <br />
                      <span className="text-blue-400"> "education"</span>
                      <span className="text-white/80">: {"{"}</span>
                      <br />
                      <span className="text-blue-400"> "degree"</span>
                      <span className="text-white/80">:</span>{" "}
                      <span className="text-green-400">
                        "B.Tech in Computer Science"
                      </span>
                      <span className="text-white/80">,</span>
                      <br />
                      <span className="text-blue-400"> "institution"</span>
                      <span className="text-white/80">:</span>{" "}
                      <span className="text-green-400">"USICT, Delhi"</span>
                      <span className="text-white/80">,</span>
                      <br />
                      <span className="text-blue-400"> "period"</span>
                      <span className="text-white/80">:</span>{" "}
                      <span className="text-green-400">"2024-2028"</span>
                      <br />
                      <span className="text-white/80"> {"},"}</span>
                      <br />
                      <span className="text-blue-400"> "focusAreas"</span>
                      <span className="text-white/80">: [</span>
                      <span className="text-green-400">"Kotlin"</span>
                      <span className="text-white/80">,</span>{" "}
                      <span className="text-green-400">"Flutter"</span>
                      <span className="text-white/80">...]</span>
                      <br />
                      <span className="text-white/80">{"}"}</span>
                    </code>
                  </pre>

                  {/* Cursor animation */}
                  <div className="absolute bottom-12 left-[125px] w-1.5 h-4 bg-white/70 animate-blink"></div>
                </div>

                <div className="bg-black/50 backdrop-blur-md rounded-lg p-4 border border-white/5 shadow-lg overflow-hidden relative group">
                  {/* Line numbers */}
                  <div className="absolute left-3 top-12 bottom-4 flex flex-col text-right text-white/30 font-mono text-xs space-y-0.5 select-none">
                    {[...Array(11)].map((_, i) => (
                      <span key={i}>{i + 1}</span>
                    ))}
                  </div>

                  {/* Filename */}
                  <div className="flex items-center mb-2">
                    <div className="h-3 w-3 rounded-full bg-blue-500 mr-2"></div>
                    <h3 className="font-mono text-sm text-white/70">
                      current_project.dart
                    </h3>
                  </div>

                  {/* Code with syntax highlighting */}
                  <pre className="language-dart mt-2 text-sm overflow-x-auto pl-8 font-mono">
                    <code>
                      <span className="text-purple-400">class</span>{" "}
                      <span className="text-yellow-400">MyJourney</span>{" "}
                      <span className="text-white/80">{"{"}</span>
                      <br />
                      <span className="text-blue-400"> Future</span>
                      <span className="text-white/80">&lt;</span>
                      <span className="text-yellow-400">Success</span>
                      <span className="text-white/80">&gt;</span>{" "}
                      <span className="text-green-400">buildApps</span>
                      <span className="text-white/80">()</span>{" "}
                      <span className="text-purple-400">async</span>{" "}
                      <span className="text-white/80">{"{"}</span>
                      <br />
                      <span className="text-purple-400"> while</span>{" "}
                      <span className="text-white/80">(</span>
                      <span className="text-orange-400">true</span>
                      <span className="text-white/80">) {"{"}</span>
                      <br />
                      <span className="text-purple-400"> await</span>{" "}
                      <span className="text-green-400">learn</span>
                      <span className="text-white/80">();</span>
                      <br />
                      <span className="text-purple-400"> await</span>{" "}
                      <span className="text-green-400">create</span>
                      <span className="text-white/80">();</span>
                      <br />
                      <span className="text-purple-400"> await</span>{" "}
                      <span className="text-green-400">share</span>
                      <span className="text-white/80">();</span>
                      <br />
                      <span className="text-purple-400"> await</span>{" "}
                      <span className="text-green-400">improve</span>
                      <span className="text-white/80">();</span>
                      <br />
                      <span className="text-white/80"> {"}"}</span>
                      <br />
                      <span className="text-white/80"> {"}"}</span>
                      <br />
                      <span className="text-green-400">
                        {" "}
                        // Currently executing...
                      </span>
                      <br />
                      <span className="text-white/80">{"}"}</span>
                    </code>
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
