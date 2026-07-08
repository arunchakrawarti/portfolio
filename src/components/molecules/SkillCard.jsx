"use client";

import { motion } from "framer-motion";

export default function SkillCard({ category, index }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="p-6 md:p-8 rounded-2xl bg-card-dark border border-card-border hover:border-primary/30 transition-all duration-300 shadow-xl group hover:shadow-primary/5"
    >
      <h3 className="text-xl font-bold text-white mb-6 font-sans group-hover:text-primary transition-colors duration-300">
        {category.title}
      </h3>

      <div className="space-y-5">
        {category.skills.map((skill, skillIdx) => (
          <motion.div key={skillIdx} variants={itemVariants} className="space-y-2">
            <div className="flex justify-between text-sm font-mono">
              <span className="text-gray-300 font-sans font-medium">{skill.name}</span>
              <span className="text-accent">{skill.level}%</span>
            </div>
            
            {/* Progress bar tracks */}
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
