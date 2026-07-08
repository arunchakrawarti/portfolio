"use client";

import { motion } from "framer-motion";

export default function SectionHeading({ title, subtitle, centered = true }) {
  return (
    <div className={`mb-16 flex flex-col ${centered ? "items-center text-center" : "items-start text-left"}`}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold tracking-[0.2em] text-accent uppercase mb-2 font-mono"
        >
          {subtitle}
        </motion.span>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-5xl font-bold tracking-tight text-white font-sans"
      >
        {title}
      </motion.h2>
      
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "80px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mt-4"
      />
    </div>
  );
}
