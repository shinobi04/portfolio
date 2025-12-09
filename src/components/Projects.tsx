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
        <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 inline-block border-b-4 border-black pb-2">
          My Projects
        </h2>
        <p className="text-black/80 max-w-2xl mx-auto font-mono font-bold">
          Explore my recent GitHub projects. These repositories showcase my
          skills, interests and the technologies I&apos;ve been working with
          recently.
        </p>
      </motion.div>

      {isLoading && (
        <div className="flex justify-center items-center py-20">
          <div className="w-12 h-12 border-4 border-black border-t-transparent animate-spin rounded-full"></div>
        </div>
      )}

      {error && (
        <div className="text-center text-red-600 py-10 font-bold font-mono">
          <p>{error}</p>
          <button
            className="mt-4 px-6 py-2 bg-retro-accent border-2 border-black shadow-retro hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all"
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
              className="bg-white border-2 border-black shadow-retro p-0 flex flex-col h-full hover:-translate-y-1 hover:shadow-retro-lg transition-all duration-200"
            >
              <div className="bg-retro-gray border-b-2 border-black px-4 py-2 flex justify-between items-center">
                 <span className="font-mono text-xs font-bold truncate max-w-[70%]">{repo.name}</span>
                 <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full border border-black bg-white"></div>
                    <div className="w-2 h-2 rounded-full border border-black bg-white"></div>
                 </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3 text-black truncate">
                    {repo.name}
                </h3>

                <p className="text-black/80 mb-4 flex-grow font-medium text-sm line-clamp-3">
                    {repo.description || "No description provided"}
                </p>

                {/* Language indicator */}
                {repo.language && (
                    <div className="flex items-center mb-3 border-2 border-black bg-retro-accent px-2 py-1 w-fit">
                    <span
                        className={`h-3 w-3 border border-black mr-2 ${
                        languageColors[repo.language] || "bg-gray-400"
                        }`}
                    ></span>
                    <span className="text-xs font-bold font-mono text-black">{repo.language}</span>
                    </div>
                )}

                {/* Topics/tags */}
                {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                    {repo.topics.slice(0, 3).map((topic) => (
                        <span
                        key={topic}
                        className="px-2 py-1 text-xs font-bold border border-black bg-white text-black"
                        >
                        #{topic}
                        </span>
                    ))}
                    </div>
                )}

                <div className="flex justify-between items-center mt-auto pt-4 border-t-2 border-black border-dashed">
                    <div className="flex space-x-3 font-mono text-xs font-bold">
                    <span className="flex items-center text-black">
                        <FaStar className="mr-1" />
                        {repo.stargazers_count}
                    </span>
                    <span className="flex items-center text-black">
                        <FaCodeBranch className="mr-1" />
                        {repo.forks_count}
                    </span>
                    </div>

                    <div className="flex space-x-3">
                    <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:scale-110 transition-transform"
                    >
                        <FaGithub size={20} />
                    </a>

                    {repo.homepage && (
                        <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:scale-110 transition-transform"
                        >
                        <FaExternalLinkAlt size={18} />
                        </a>
                    )}
                    </div>
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
          className="relative z-10 inline-flex items-center px-8 py-3 bg-white border-2 border-black shadow-retro text-black font-bold font-mono hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all"
        >
          <FaGithub className="mr-2" /> View More on GitHub
        </a>
      </div>
    </section>
  );
}
