"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function ExperienceTimelineItem({ exp, index }) {
  return (
    <div className="relative pl-8 md:pl-12 pb-12 border-l border-white/10 last:border-0 last:pb-0">
      {/* Animated Dot indicator */}
      <div className="absolute left-0 top-1.5 -translate-x-1/2 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.2 }}
          className="w-4 h-4 rounded-full bg-gradient-to-tr from-primary to-accent border-4 border-bg-dark z-10"
        />
        <div className="absolute w-8 h-8 rounded-full bg-primary/20 blur-md animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="p-6 md:p-8 rounded-2xl bg-card-dark border border-card-border hover:border-primary/20 transition-all duration-300 shadow-xl"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
          <div>
            <h3 className="text-xl font-bold text-white font-sans">{exp.role}</h3>
            <p className="text-primary font-medium text-sm font-sans">{exp.company}</p>
          </div>
          <span className="text-xs font-mono text-accent font-semibold px-3 py-1 rounded-full bg-accent/10 border border-accent/20 w-fit">
            {exp.duration}
          </span>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-6 font-sans">
          {exp.description}
        </p>

        <div>
          <h4 className="text-xs font-semibold text-gray-200 tracking-wider uppercase mb-3 font-mono">
            Key Responsibilities
          </h4>
          <ul className="space-y-3">
            {exp.responsibilities.map((resp, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="flex items-start gap-3 text-sm text-gray-400 font-sans"
              >
                <CheckCircle2 className="w-4.5 h-4.5 text-accent shrink-0 mt-0.5" />
                <span>{resp}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
