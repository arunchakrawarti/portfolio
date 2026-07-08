"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project, index, onOpenModal }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-2xl bg-card-dark border border-card-border overflow-hidden shadow-2xl flex flex-col justify-between"
    >
      <div>
        {/* Project Image Container */}
        <div className="relative h-56 md:h-64 w-full overflow-hidden bg-white/5">
          {/* We'll use a neat gradient backdrop since there are no images yet, and let Next.js Image render. 
              Wait, since we don't have actual images in /public/images yet, we can use a gorgeous abstract color gradient. */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center select-none">
            <span className="text-white/60 font-mono text-xs uppercase tracking-widest">{project.subtitle}</span>
          </div>

          {/* Glow backdrop overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent opacity-60 z-10" />

          {/* Action Hover Icons */}
          <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 bg-bg-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onOpenModal(project)}
              className="p-3 bg-primary text-white rounded-full cursor-pointer hover:bg-secondary transition-colors duration-300"
              title="Quick Details"
            >
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors duration-300"
              title="GitHub Repository"
            >
              <Github className="w-5 h-5" />
            </motion.a>
          </div>
        </div>

        {/* Content Info */}
        <div className="p-6">
          <span className="text-xs font-semibold text-accent tracking-widest uppercase font-mono">
            {project.subtitle}
          </span>
          <h3 className="text-xl font-bold text-white mt-2 group-hover:text-primary transition-colors duration-300 font-sans">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mt-3 line-clamp-3 leading-relaxed font-sans">
            {project.shortDescription}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 mt-5">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[11px] font-mono text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="p-6 pt-0 border-t border-white/5 flex gap-4 mt-auto">
        <button
          onClick={() => onOpenModal(project)}
          className="flex-1 text-center py-2.5 rounded-xl border border-white/10 hover:border-primary/50 text-white font-medium text-xs transition-all duration-300 cursor-pointer bg-white/5 hover:bg-primary/10"
        >
          Quick View
        </button>
        <Link
          href={`/projects/${project.id}`}
          className="flex-1 text-center py-2.5 rounded-xl bg-gradient-to-tr from-primary to-secondary hover:from-primary-dark hover:to-secondary text-white font-medium text-xs transition-all duration-300 flex items-center justify-center gap-1 group/btn"
        >
          Details Page <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
