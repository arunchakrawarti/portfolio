"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Calendar, Award } from "lucide-react";
import { EDUCATION } from "@/constants/data";
import SectionHeading from "../atoms/SectionHeading";

export default function Education() {
  return (
    <section id="education" className="relative py-24 bg-bg-dark">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          title="Education"
          subtitle="My Academic Background"
          centered={true}
        />

        {/* Timeline container */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-[1px] before:bg-white/10">
          
          {EDUCATION.map((edu, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={idx} 
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Timeline Node */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.15 }}
                    className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-accent border-4 border-bg-dark flex items-center justify-center text-white"
                  >
                    {idx === 0 ? <GraduationCap className="w-3.5 h-3.5" /> : idx === 1 ? <BookOpen className="w-3.5 h-3.5" /> : <Award className="w-3.5 h-3.5" />}
                  </motion.div>
                </div>

                {/* Content Panel (Width: 45% of parent on desktop) */}
                <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? "md:text-right" : "md:text-left"}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="p-6 rounded-2xl bg-card-dark border border-card-border hover:border-primary/20 transition-all duration-300 shadow-xl"
                  >
                    <span className="text-xs font-mono text-accent font-semibold px-3 py-1 rounded-full bg-accent/10 border border-accent/20 w-fit inline-flex items-center gap-1.5 mb-3">
                      <Calendar className="w-3 h-3" /> {edu.duration}
                    </span>
                    
                    <h3 className="text-lg font-bold text-white font-sans">{edu.degree}</h3>
                    <p className="text-primary font-medium text-xs font-sans mt-1">{edu.institution}</p>
                    
                    <p className="text-gray-400 text-sm mt-3 leading-relaxed font-sans">
                      {edu.description}
                    </p>
                  </motion.div>
                </div>

                {/* Empty Spacer Column for Desktop */}
                <div className="hidden md:block w-[45%]" />
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
