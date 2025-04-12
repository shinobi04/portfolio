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
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-4">
          My Projects
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto">
          Explore my recent GitHub projects. These repositories showcase my
          skills, interests and the technologies I&apos;ve been working with
          recently.
        </p>
      </motion.div>

      {isLoading && (
        <div className="flex justify-center items-center py-20">
          <div className="w-12 h-12 rounded-full border-4 border-t-purple-500 border-r-transparent border-b-pink-500 border-l-transparent animate-spin"></div>
        </div>
      )}

      {error && (
        <div className="text-center text-red-400 py-10">
          <p>{error}</p>
          <button
            className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      )}

      {!isLoading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-black/30 backdrop-blur-md p-6 rounded-xl border border-white/10 flex flex-col h-full hover:border-purple-500/50 transition-all"
            >
              <h3 className="text-xl font-semibold mb-3 text-white">
                {repo.name}
              </h3>

              <p className="text-white/70 mb-4 flex-grow">
                {repo.description || "No description provided"}
              </p>

              {/* Language indicator */}
              {repo.language && (
                <div className="flex items-center mb-3">
                  <span
                    className={`h-3 w-3 rounded-full mr-2 ${
                      languageColors[repo.language] || "bg-gray-400"
                    }`}
                  ></span>
                  <span className="text-sm text-white/60">{repo.language}</span>
                </div>
              )}

              {/* Topics/tags */}
              {repo.topics && repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-1 text-xs bg-purple-900/30 text-purple-300 rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/10">
                <div className="flex space-x-3">
                  <span className="flex items-center text-white/60 text-sm">
                    <FaStar className="mr-1 text-yellow-400" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center text-white/60 text-sm">
                    <FaCodeBranch className="mr-1" />
                    {repo.forks_count}
                  </span>
                </div>

                <div className="flex space-x-3">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-purple-400 transition-colors"
                  >
                    <FaGithub size={20} />
                  </a>

                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-purple-400 transition-colors"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <div className="text-center mt-10">
        <a
          href="https://github.com/shinobi04"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-full transition-all hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:scale-105"
        >
          <FaGithub className="mr-2" /> View More on GitHub
        </a>
      </div>
    </section>
  );
}
