"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
  FaCodeBranch,
} from "react-icons/fa";

// Type definitions for GitHub projects
interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  language: string;
}

export default function Projects() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          "https://api.github.com/users/shinobi04/repos?sort=updated&per_page=6"
        );

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = await response.json();
        setRepos(data);
      } catch (err) {
        console.error("Error fetching repositories:", err);
        setError("Failed to load projects. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  // Language color mapping
  const languageColors: Record<string, string> = {
    JavaScript: "bg-yellow-400",
    TypeScript: "bg-blue-500",
    HTML: "bg-orange-500",
    CSS: "bg-pink-500",
    Python: "bg-green-500",
    Java: "bg-red-500",
    // Add more languages as needed
  };

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-gradient-to-tr from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 text-transparent bg-clip-text mb-6 tracking-tight">
          My Projects
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
        <p className="text-white/80 max-w-2xl mx-auto text-lg">
          Explore my recent GitHub projects. These repositories showcase my
          skills, interests and the technologies I&apos;ve been working with
          recently.
        </p>
      </motion.div>

      {isLoading && (
        <div className="flex justify-center items-center py-20">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-t-purple-500 border-r-transparent border-b-pink-500 border-l-transparent animate-spin"></div>
            <div className="absolute inset-2 rounded-full border-4 border-t-transparent border-r-pink-500 border-b-transparent border-l-purple-500 animate-spin animate-reverse"></div>
          </div>
        </div>
      )}

      {error && (
        <div className="text-center text-red-400 py-10">
          <p>{error}</p>
          <button
            className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      )}

      {!isLoading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-gradient-to-br from-gray-900/80 to-black/90 backdrop-blur-lg p-6 rounded-2xl border border-white/10 flex flex-col h-full group relative overflow-hidden shadow-lg"
            >
              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              {/* Card content */}
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:bg-gradient-to-r from-purple-400 to-pink-500 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
                {repo.name}
              </h3>

              <p className="text-white/70 mb-4 flex-grow">
                {repo.description || "No description provided"}
              </p>

              {/* Language indicator with improved styling */}
              {repo.language && (
                <div className="flex items-center mb-3">
                  <span
                    className={`h-3 w-3 rounded-full mr-2 ${
                      languageColors[repo.language] || "bg-gray-400"
                    } ring-2 ring-white/10`}
                  ></span>
                  <span className="text-sm text-white/70">{repo.language}</span>
                </div>
              )}

              {/* Topics/tags with improved styling */}
              {repo.topics && repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 text-xs bg-purple-900/40 text-purple-300 rounded-full border border-purple-700/30"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/5">
                <div className="flex space-x-4">
                  <span className="flex items-center text-white/70 text-sm">
                    <FaStar className="mr-1.5 text-yellow-400" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center text-white/70 text-sm">
                    <FaCodeBranch className="mr-1.5 text-blue-400" />
                    {repo.forks_count}
                  </span>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-purple-400 transition-colors p-1.5 rounded-full hover:bg-white/5"
                    aria-label="View GitHub repository"
                  >
                    <FaGithub size={18} />
                  </a>

                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-pink-400 transition-colors p-1.5 rounded-full hover:bg-white/5"
                      aria-label="View live project"
                    >
                      <FaExternalLinkAlt size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <a
          href="https://github.com/shinobi04"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white font-medium rounded-full transition-all duration-300 overflow-hidden group"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 group-hover:scale-105 transition-transform duration-500"></span>
          <span className="absolute bottom-0 left-0 w-full h-full bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          <span className="relative flex items-center">
            <FaGithub className="mr-2 text-lg" />
            <span>View More on GitHub</span>
          </span>
        </a>
      </motion.div>
    </section>
  );
}
