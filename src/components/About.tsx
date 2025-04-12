"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-4">
          About Me
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          App developer specializing in modern UI frameworks
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-4">Who I Am</h3>
            <p className="text-white/70 mb-4">
              I'm a passionate app developer currently pursuing B.Tech in
              Computer Science at USICT, Delhi. I specialize in creating
              beautiful, responsive, and user-friendly mobile applications using
              modern frameworks.
            </p>
            <p className="text-white/70">
              When I'm not coding, I enjoy exploring new technologies,
              participating in hackathons, and contributing to open-source
              projects.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Tech Expertise
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-medium bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-2">
                  Mobile Development
                </h4>
                <ul className="list-disc list-inside text-white/70 space-y-1">
                  <li>Kotlin & Jetpack Compose</li>
                  <li>Flutter & Dart</li>
                  <li>Android SDK</li>
                  <li>iOS Development</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-2">
                  Other Skills
                </h4>
                <ul className="list-disc list-inside text-white/70 space-y-1">
                  <li>React & NextJS</li>
                  <li>Firebase</li>
                  <li>REST API Design</li>
                  <li>UI/UX Design</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative h-[500px] w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl transform rotate-3 scale-95"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl transform -rotate-2 scale-95"></div>
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
              <div className="h-full w-full p-6 flex flex-col">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 mb-6">
                  <h3 className="font-mono text-sm text-white/80">
                    profile.json
                  </h3>
                  <pre className="language-json mt-2 text-sm overflow-x-auto">
                    <code className="text-white/80">
                      {`{
  "name": "Anurag",
  "title": "Mobile App Developer",
  "education": {
    "degree": "B.Tech in Computer Science",
    "institution": "USICT, Delhi",
    "period": "2024-2028"
  },
  "focusAreas": [
    "Kotlin & Jetpack Compose",
    "Flutter Development",
    "UI/UX Design",
    "Cross-platform Apps"
  ],
  "interests": [
    "Mobile Innovation",
    "Clean Architecture",
    "Material Design",
    "Open Source"
  ]
}`}
                    </code>
                  </pre>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
                  <h3 className="font-mono text-sm text-white/80">
                    current_project.dart
                  </h3>
                  <pre className="language-dart mt-2 text-sm overflow-x-auto">
                    <code className="text-white/80">
                      {`class MyJourney {
  Future<Success> buildApps() async {
    while (true) {
      await learn();
      await create();
      await share();
      await improve();
    }
  }
  
  // Currently executing...
}`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
