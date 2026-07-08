"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Check } from "lucide-react";
import Link from "next/link";

export default function ProjectDetailModal({ project, isOpen, onClose }) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
          {/* Backdrop Blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-bg-dark/80 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-4xl bg-card-dark border border-card-border rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] flex flex-col"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/40 text-gray-400 hover:text-white backdrop-blur-md border border-white/5 cursor-pointer hover:bg-black/60 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="overflow-y-auto flex-1 p-6 md:p-10 space-y-8">
              {/* Header Visual */}
              <div className="relative h-60 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                <span className="text-white/40 font-mono text-sm uppercase tracking-widest">{project.subtitle}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent opacity-80" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-xs font-semibold text-accent tracking-widest uppercase font-mono bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
                    {project.subtitle}
                  </span>
                  <h2 className="text-2xl md:text-4xl font-extrabold text-white mt-3 font-sans">
                    {project.title}
                  </h2>
                </div>
              </div>

              {/* Grid Content */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Description Side */}
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 font-sans">About Project</h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-sans">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 font-sans">Key Features</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-400 font-sans">
                          <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Info Column */}
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 space-y-6 h-fit">
                  <div>
                    <h3 className="text-xs font-semibold text-gray-400 tracking-wider uppercase mb-3 font-mono">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-mono text-gray-300 bg-white/5 border border-white/5 px-2.5 py-1 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5 space-y-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary text-white font-medium text-sm rounded-xl transition-all duration-300 cursor-pointer shadow-lg shadow-primary/10"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                    
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 border border-white/10 hover:border-white/20 text-white font-medium text-sm rounded-xl transition-colors duration-300 cursor-pointer bg-white/5 hover:bg-white/10"
                    >
                      <Github className="w-4 h-4" /> GitHub Repository
                    </a>

                    <Link
                      href={`/projects/${project.id}`}
                      onClick={onClose}
                      className="w-full flex items-center justify-center gap-2 py-3 text-accent hover:text-white font-medium text-xs rounded-xl transition-colors duration-300 cursor-pointer text-center underline font-mono"
                    >
                      View Dedicated Case Study Page
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
