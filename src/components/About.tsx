"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="pt-8 pb-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 inline-block border-b-4 border-black pb-2">
          About Me
        </h2>
        <p className="text-black/70 max-w-2xl mx-auto font-mono font-bold">
          App developer specializing in modern UI frameworks
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="bg-white border-2 border-black shadow-retro p-8 relative mt-6">
            <div className="absolute -top-3 left-4 bg-white border-2 border-black px-2 py-0.5 text-xs font-bold font-mono">
              bio.txt
            </div>
            <h3 className="text-2xl font-bold text-black mb-4 uppercase border-b-2 border-black pb-2 inline-block">Who I Am</h3>
            <p className="text-black mb-4 font-medium leading-relaxed">
              I&apos;m a passionate app developer currently pursuing B.Tech in
              Information Technology at USICT, Delhi. I specialize in creating
              beautiful, responsive, and user-friendly mobile applications using
              modern frameworks.
            </p>
            <p className="text-black font-medium leading-relaxed">
              When I&apos;m not coding, I enjoy exploring new technologies,
              participating in hackathons, and contributing to open-source
              projects.
            </p>
          </div>

          <div className="bg-white border-2 border-black shadow-retro p-8 relative mt-6">
            <div className="absolute -top-3 left-4 bg-white border-2 border-black px-2 py-0.5 text-xs font-bold font-mono">
              skills.txt
            </div>
            <h3 className="text-2xl font-bold text-black mb-4 uppercase border-b-2 border-black pb-2 inline-block">
              Tech Expertise
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-lg font-bold text-black mb-2 underline decoration-2 decoration-black">
                  Mobile Development
                </h4>
                <ul className="list-disc list-inside text-black font-mono text-sm space-y-1">
                  <li>Kotlin & Jetpack Compose</li>
                  <li>Flutter & Dart</li>
                  <li>Android SDK</li>
                  <li>iOS Development</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-black mb-2 underline decoration-2 decoration-black">
                  Other Skills
                </h4>
                <ul className="list-disc list-inside text-black font-mono text-sm space-y-1">
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
          <div className="relative w-full">
            <div className="bg-retro-gray border-2 border-black shadow-retro-lg overflow-hidden">
              <div className="bg-black text-white px-3 py-1 flex justify-between items-center border-b-2 border-black">
                 <span className="font-mono text-xs uppercase">Terminal - zsh</span>
                 <div className="flex space-x-1">
                    <div className="w-3 h-3 rounded-full bg-red-500 border border-black"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500 border border-black"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 border border-black"></div>
                 </div>
              </div>
              <div className="p-6 font-mono text-sm">
                <div className="mb-6">
                  <div className="text-green-600 font-bold mb-1">$ cat profile.json</div>
                  <pre className="text-black whitespace-pre-wrap">
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
                  </pre>
                </div>

                <div>
                  <div className="text-green-600 font-bold mb-1">$ cat current_project.dart</div>
                  <pre className="text-black whitespace-pre-wrap">
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
                  </pre>
                </div>
                <div className="mt-4 animate-pulse">
                    <span className="text-green-600 font-bold">$</span> <span className="w-2 h-4 bg-black inline-block align-middle"></span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
