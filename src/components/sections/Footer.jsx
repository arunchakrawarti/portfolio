"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { NAV_LINKS, PERSONAL_INFO } from "@/constants/data";
import { motion } from "framer-motion";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-[#080d19] border-t border-white/5 py-12 relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center justify-between gap-8 z-10 relative">
        
        {/* Top Branding Panel */}
        <div className="flex flex-col items-center text-center gap-3">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-2xl font-bold tracking-tight text-white flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-accent p-[2px] flex items-center justify-center">
              <div className="w-full h-full bg-bg-dark rounded-[6px] flex items-center justify-center font-bold text-sm text-white group-hover:text-accent transition-colors">
                AC
              </div>
            </div>
            <span className="font-sans group-hover:text-accent transition-colors">Arun Chakrawarti</span>
          </a>
          <p className="text-gray-500 text-xs font-mono tracking-wider max-w-xs">
            React.js & Next.js UI Specialist
          </p>
        </div>

        {/* Navigation Quick Links */}
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs font-semibold text-gray-400 hover:text-white transition-colors cursor-pointer font-sans"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social Icons & Back to Top Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full pt-8 border-t border-white/5 gap-6">
          
          {/* Copyright notice */}
          <span className="text-xs font-mono text-gray-500 order-2 sm:order-1 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Arun Chakrawarti. All rights reserved.
          </span>

          {/* Socials & Top Toggle */}
          <div className="flex items-center gap-6 order-1 sm:order-2">
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {PERSONAL_INFO.socials.map((social) => {
                const IconComponent = iconMap[social.icon] || Mail;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 hover:border-accent/20 text-gray-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                    title={social.name}
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            <div className="w-[1px] h-6 bg-white/10" />

            {/* Back to top clicker */}
            <button
              onClick={handleScrollTop}
              className="flex items-center gap-1 text-xs font-mono text-gray-400 hover:text-accent transition-colors cursor-pointer uppercase tracking-wider"
              aria-label="Back to Top"
            >
              Top <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
