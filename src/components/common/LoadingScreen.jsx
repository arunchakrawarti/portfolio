"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const duration = 1200; // 1.2s loading
    const intervalTime = 12;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => setShow(false), 300);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg-dark"
        >
          <div className="relative flex flex-col items-center gap-6">
            {/* Animated Logo Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative w-20 h-20 rounded-2xl bg-gradient-to-tr from-primary to-accent p-[2px] flex items-center justify-center shadow-lg shadow-primary/20"
            >
              <div className="w-full h-full bg-bg-dark rounded-[14px] flex items-center justify-center font-bold text-3xl text-white">
                AC
              </div>
              
              {/* Spinning Ring */}
              <div className="absolute inset-[-6px] rounded-2xl border border-transparent border-t-accent border-b-primary animate-spin" style={{ animationDuration: '3s' }} />
            </motion.div>

            {/* Name and Text */}
            <div className="flex flex-col items-center text-center">
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-xl font-bold tracking-widest text-white uppercase font-sans"
              >
                Arun Chakrawarti
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 0.4 }}
                className="text-sm text-gray-400 mt-1"
              >
                Loading Portfolio...
              </motion.p>
            </div>

            {/* Progress bar container */}
            <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden mt-2 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-accent"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            {/* Progress percentage */}
            <span className="text-xs font-mono text-accent">
              {Math.round(progress)}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
