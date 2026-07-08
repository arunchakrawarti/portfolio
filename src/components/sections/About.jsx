"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Briefcase, Smile, Sparkles } from "lucide-react";
import { PERSONAL_INFO } from "@/constants/data";
import SectionHeading from "../atoms/SectionHeading";

export default function About() {
  const highlights = [
    "1 Year Frontend Experience",
    "React.js & Next.js Ecosystem",
    "Tailwind CSS Layout Architecture",
    "Redux Toolkit State Control",
    "REST API Integration & Resiliency",
    "Fluidly Responsive Mobile-First UIs",
    "Optimized Performance & Speed Core",
    "Clean, Modular, Reusable Codebase"
  ];

  return (
    <section id="about" className="relative py-24 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <SectionHeading 
          title="About Me" 
          subtitle="My Introduction" 
          centered={true} 
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Avatar / Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-72 md:w-80 h-96 rounded-3xl overflow-hidden bg-gradient-to-tr from-primary/30 to-secondary/30 p-[2px] shadow-2xl group"
            >
              {/* Inner container */}
              <div className="relative w-full h-full bg-card-dark rounded-[22px] overflow-hidden flex flex-col justify-between p-8">
                {/* Decorative glowing gradient in background */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-accent/5 opacity-40 group-hover:scale-110 transition-transform duration-500" />
                
                {/* Premium Avatar Placeholder */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white font-extrabold text-3xl shadow-lg relative z-10">
                  AC
                </div>
                
                {/* Summary Quote */}
                <div className="space-y-4 relative z-10">
                  <span className="text-accent font-mono text-xs tracking-wider uppercase block">
                    Frontend Craft
                  </span>
                  <p className="text-gray-300 text-sm leading-relaxed font-sans italic">
                    "I believe in creating digital interfaces that aren't just usable, but are delightful experiences that leave a lasting impression."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Professional Details */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-white font-sans flex items-center gap-2"
            >
              Crafting Digital Experiences <Sparkles className="w-5 h-5 text-accent animate-pulse" />
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-400 text-sm md:text-base leading-relaxed font-sans"
            >
              I am a dedicated Frontend Developer based in India. I focus on developing clean, highly interactive, and responsive web applications. Over the last year, I've worked heavily with core React, Next.js, Redux, and modern layout systems like Tailwind CSS.
            </motion.p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex items-center gap-3 text-sm text-gray-300 font-sans"
                >
                  <CheckCircle2 className="w-4.5 h-4.5 text-accent shrink-0" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Achievements Counters (Counters from PERSONAL_INFO.stats) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/5">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/5 text-center flex flex-col items-center justify-center"
                >
                  <div className="text-2xl md:text-3xl font-extrabold text-white font-mono flex items-center justify-center">
                    {/* Hardcoded or simple animated numbers */}
                    <span>{stat.value}</span>
                    <span className="text-accent">{stat.suffix}</span>
                  </div>
                  <span className="text-xs text-gray-400 mt-1 font-sans font-medium">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
