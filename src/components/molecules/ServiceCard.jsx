"use client";

import { motion } from "framer-motion";
import { 
  Code2, 
  Layers, 
  Cpu, 
  Monitor, 
  Layout, 
  Globe 
} from "lucide-react";

const iconMap = {
  code: Code2,
  layers: Layers,
  cpu: Cpu,
  monitor: Monitor,
  layout: Layout,
  globe: Globe,
};

export default function ServiceCard({ service, index }) {
  const IconComponent = iconMap[service.icon] || Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="p-6 md:p-8 rounded-2xl bg-card-dark border border-card-border hover:border-accent/30 transition-all duration-300 shadow-xl group flex flex-col justify-between"
    >
      <div>
        {/* Animated Glow Border */}
        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary to-accent p-[1px] flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-300">
          <div className="w-full h-full bg-bg-dark rounded-[11px] flex items-center justify-center text-white group-hover:text-accent transition-colors duration-300">
            <IconComponent className="w-5 h-5" />
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 font-sans group-hover:text-accent transition-colors duration-300">
          {service.title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed font-sans">
          {service.description}
        </p>
      </div>
      
      {/* Decorative Accent Glow Blob at corner */}
      <div className="w-16 h-16 rounded-full bg-accent/5 blur-xl absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
}
