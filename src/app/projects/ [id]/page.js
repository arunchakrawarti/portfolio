"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Calendar, Globe, Tag } from "lucide-react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/constants/data";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CursorGlow from "@/components/common/CursorGlow";
import BackgroundShapes from "@/components/common/BackgroundShapes";

export default function ProjectDetailPage({ params }) {
  const resolvedParams = use(params);
  const { id } = resolvedParams;
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the project matching the route id
    const foundProject = PROJECTS.find((p) => p.id === id);
    if (foundProject) {
      setProject(foundProject);
    }
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-bg-dark text-white flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-4 border-primary/30 border-t-accent animate-spin" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-bg-dark text-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-extrabold mb-4 font-sans text-white">Project Not Found</h1>
        <p className="text-gray-400 mb-8 max-w-sm font-sans">
          The project you are looking for does not exist or has been removed.
        </p>
        <Link
          href="/"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-medium text-sm flex items-center gap-2 hover:scale-[1.02] transition-transform duration-300 shadow-lg shadow-primary/20"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="relative min-h-screen bg-bg-dark text-white flex flex-col justify-between overflow-x-hidden font-sans">
        {/* Visual FX Components */}
        <CursorGlow />
        <BackgroundShapes />
        
        {/* Minimalized navbar link back to home */}
        <header className="fixed top-0 left-0 right-0 z-40 bg-bg-dark/70 backdrop-blur-md border-b border-white/5 py-4">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
            <Link 
              href="/" 
              className="text-xl font-bold tracking-tight text-white flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-accent p-[2px] flex items-center justify-center">
                <div className="w-full h-full bg-bg-dark rounded-[6px] flex items-center justify-center font-bold text-xs text-white group-hover:text-accent transition-colors">
                  AC
                </div>
              </div>
              <span className="font-sans group-hover:text-accent transition-colors">Arun</span>
            </Link>
            
            <Link
              href="/"
              className="text-xs font-mono font-semibold tracking-wider text-accent hover:text-white transition-colors flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
            </Link>
          </div>
        </header>

        {/* Core Detail Layout */}
        <main className="flex-1 max-w-5xl mx-auto px-6 md:px-12 pt-32 pb-24 w-full">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            {/* Nav Back Header */}
            <div>
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 text-xs font-mono text-accent hover:text-white transition-colors group mb-4"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                Back to projects section
              </Link>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold text-accent tracking-widest uppercase font-mono bg-accent/10 border border-accent/20 px-3 py-1 rounded-full">
                    {project.subtitle}
                  </span>
                  <h1 className="text-3xl md:text-5xl font-extrabold mt-3 tracking-tight text-white font-sans">
                    {project.title}
                  </h1>
                </div>
              </div>
            </div>

            {/* Banner/Artwork */}
            <div className="relative h-64 sm:h-96 w-full rounded-3xl overflow-hidden bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/30 border border-white/5 flex items-center justify-center shadow-2xl">
              <div className="flex flex-col items-center text-center p-6 space-y-4">
                <Globe className="w-12 h-12 text-accent/50 animate-pulse" />
                <span className="text-white/40 text-xs font-mono tracking-widest uppercase">{project.subtitle} case study</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent opacity-80" />
            </div>

            {/* Grid details and content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column (Markdown/Info) */}
              <div className="lg:col-span-8 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-white font-sans border-l-2 border-primary pl-3">
                    Project Overview
                  </h2>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed font-sans">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-white font-sans border-l-2 border-primary pl-3">
                    Key Features Developed
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/10 transition-colors flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300 font-sans leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Back to Home CTA */}
                <div className="pt-6">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 text-white font-medium text-sm transition-all duration-300"
                  >
                    <ArrowLeft className="w-4 h-4" /> Return to Main Portfolio
                  </Link>
                </div>
              </div>

              {/* Right Sidebar Specs */}
              <div className="lg:col-span-4 space-y-6 h-fit">
                {/* Meta details card */}
                <div className="p-6 rounded-2xl bg-card-dark border border-card-border space-y-6">
                  <h3 className="text-sm font-bold text-white font-sans border-b border-white/5 pb-3">
                    Case Specifications
                  </h3>

                  <div className="space-y-4">
                    {/* Duration/Status */}
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">Year</span>
                        <span className="text-xs text-gray-300 font-semibold font-sans">2025</span>
                      </div>
                    </div>

                    {/* Role */}
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400">
                        <Tag className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">Role</span>
                        <span className="text-xs text-gray-300 font-semibold font-sans">Frontend Developer</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions buttons */}
                  <div className="pt-4 border-t border-white/5 space-y-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary text-white font-bold text-xs rounded-xl transition-all duration-300 cursor-pointer shadow-lg shadow-primary/10"
                    >
                      <ExternalLink className="w-4 h-4" /> Visit Live Site
                    </a>
                    
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 border border-white/10 hover:border-white/20 text-white font-bold text-xs rounded-xl transition-colors duration-300 cursor-pointer bg-white/5 hover:bg-white/10"
                    >
                      <Github className="w-4 h-4" /> Source Repository
                    </a>
                  </div>
                </div>

                {/* Tech specifications card */}
                <div className="p-6 rounded-2xl bg-card-dark border border-card-border space-y-4">
                  <h3 className="text-sm font-bold text-white font-sans">
                    Core Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono text-gray-300 bg-white/5 border border-white/5 px-2.5 py-1.5 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
