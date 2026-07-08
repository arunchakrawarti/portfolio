"use client";

import { motion } from "framer-motion";

export default function BackgroundShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Glow Blur 1 (Primary Purple) */}
      <motion.div
        className="absolute top-[10%] left-[-10%] w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-primary/10 blur-[80px] md:blur-[120px]"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Glow Blur 2 (Secondary Violet) */}
      <motion.div
        className="absolute top-[50%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-secondary/10 blur-[80px] md:blur-[120px]"
        animate={{
          x: [0, -30, 40, 0],
          y: [0, 60, -20, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Glow Blur 3 (Accent Cyan) */}
      <motion.div
        className="absolute bottom-[-10%] left-[20%] w-[300px] md:w-[450px] h-[300px] md:h-[450px] rounded-full bg-accent/8 blur-[80px] md:blur-[100px]"
        animate={{
          x: [0, 50, -40, 0],
          y: [0, 30, -50, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Decorative Grid Lines */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_55%,#000_70%,transparent_100%)]" 
      />
    </div>
  );
}
