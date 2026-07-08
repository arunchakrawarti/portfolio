"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, FileText, Briefcase } from "lucide-react";
import { PERSONAL_INFO } from "@/constants/data";
import MagneticButton from "../atoms/MagneticButton";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const target = document.getElementById("projects");
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Content Side */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
        >
          {/* Greeting Badge */}
          <motion.div
            variants={itemVariants}
            className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-accent font-mono text-xs font-semibold tracking-wider flex items-center gap-1.5"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
            Available for Opportunities
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-sans"
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              Arun Chakrawarti
            </span>
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl font-bold text-gray-200 tracking-wide font-sans"
          >
            {PERSONAL_INFO.title}
          </motion.h2>

          {/* Tagline / Technologies */}
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm font-mono text-accent font-semibold tracking-wider max-w-lg leading-relaxed bg-white/5 border border-white/5 px-4 py-2 rounded-xl"
          >
            {PERSONAL_INFO.tagline}
          </motion.p>

          {/* Bio Description */}
          <motion.p
            variants={itemVariants}
            className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed font-sans"
          >
            {PERSONAL_INFO.bio}
          </motion.p>

          {/* Two Call to Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4"
          >
            <MagneticButton
              onClick={() => window.open(PERSONAL_INFO.resumeUrl, "_blank")}
              className="px-8 py-4 rounded-xl bg-gradient-to-tr from-primary to-secondary text-white font-semibold text-sm shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <FileText className="w-4 h-4" /> Download Resume
            </MagneticButton>
            
            <MagneticButton
              onClick={handleScrollToProjects}
              className="px-8 py-4 rounded-xl border border-white/10 hover:border-accent/40 text-white font-semibold text-sm hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <Briefcase className="w-4 h-4 text-gray-400 group-hover:text-accent" /> View Projects
            </MagneticButton>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-5 pt-8"
          >
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Connect</span>
            <div className="w-8 h-[1px] bg-white/10" />
            <div className="flex items-center gap-4">
              {PERSONAL_INFO.socials.map((social) => {
                const IconComponent = iconMap[social.icon] || Mail;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-xl bg-white/5 hover:bg-primary/25 border border-white/5 hover:border-primary/20 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300"
                    title={social.name}
                  >
                    <IconComponent className="w-4.5 h-4.5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Animated Elements Box */}
        <div className="lg:col-span-5 hidden lg:flex items-center justify-center relative">
          {/* Main Visual Shape */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-80 h-80 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 border border-white/10 flex items-center justify-center backdrop-blur-3xl shadow-2xl"
          >
            {/* Spinning Rings */}
            <div className="absolute inset-[-15px] rounded-full border border-dashed border-primary/20 animate-spin" style={{ animationDuration: '40s' }} />
            <div className="absolute inset-[-30px] rounded-full border border-dotted border-accent/20 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
            
            {/* Central glowing floating orb */}
            <motion.div
              animate={{
                y: [-15, 15, -15],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-56 h-56 rounded-full bg-gradient-to-tr from-primary to-accent p-[2px] flex items-center justify-center shadow-2xl shadow-primary/25"
            >
              <div className="w-full h-full bg-bg-dark rounded-full flex flex-col items-center justify-center text-center p-4">
                <span className="text-3xl font-extrabold text-white tracking-tight uppercase font-sans">
                  Arun
                </span>
                <span className="text-xs font-mono text-accent tracking-widest mt-1">
                  Developer
                </span>
              </div>
            </motion.div>

            {/* Float Floating Shapes */}
            <motion.div
              animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 p-3 bg-card-dark border border-card-border rounded-xl text-accent shadow-xl"
            >
              <span className="text-xs font-mono font-bold">{"{ React }"}</span>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 12, 0], x: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-4 -right-4 p-3 bg-card-dark border border-card-border rounded-xl text-primary shadow-xl"
            >
              <span className="text-xs font-mono font-bold">{"< Next.js />"}</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10 opacity-70 hover:opacity-100 transition-opacity">
        <a href="#about" onClick={(e) => {
          e.preventDefault();
          document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
        }}>
          <div className="w-6 h-10 rounded-full border-2 border-white/20 p-1 flex justify-center">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 rounded-full bg-accent"
            />
          </div>
        </a>
      </div>
    </section>
  );
}
