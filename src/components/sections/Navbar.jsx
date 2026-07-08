"use client";

import { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, PERSONAL_INFO } from "@/constants/data";
import MagneticButton from "../atoms/MagneticButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll depth to add background glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll offset
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = targetElement.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(targetId);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-bg-dark/70 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, "#home")} 
          className="text-2xl font-bold tracking-tight text-white flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-primary to-accent p-[2px] flex items-center justify-center">
            <div className="w-full h-full bg-bg-dark rounded-[7px] flex items-center justify-center font-bold text-base text-white group-hover:text-accent transition-colors">
              AC
            </div>
          </div>
          <span className="font-sans group-hover:text-accent transition-colors duration-300">
            Arun
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const id = link.href.substring(1);
            const isActive = activeSection === id;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-colors relative py-1 cursor-pointer font-sans ${
                  isActive ? "text-accent" : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:block">
          <MagneticButton
            className="px-5 py-2.5 rounded-full bg-gradient-to-tr from-primary to-secondary text-white font-medium text-xs shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300 flex items-center gap-1.5"
            onClick={() => window.open(PERSONAL_INFO.resumeUrl, "_blank")}
          >
            <FileText className="w-4 h-4" /> Resume
          </MagneticButton>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 lg:hidden text-gray-400 hover:text-white focus:outline-none cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden w-full bg-bg-dark border-b border-white/5 absolute top-full left-0 z-30"
          >
            <div className="px-6 py-8 flex flex-col gap-6 max-h-[80vh] overflow-y-auto">
              {NAV_LINKS.map((link) => {
                const id = link.href.substring(1);
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-lg font-bold font-sans ${
                      isActive ? "text-accent" : "text-gray-400"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              
              <button
                className="w-full mt-2 py-3 rounded-xl bg-gradient-to-tr from-primary to-secondary text-white font-bold text-sm text-center flex items-center justify-center gap-2 cursor-pointer"
                onClick={() => {
                  setIsOpen(false);
                  window.open(PERSONAL_INFO.resumeUrl, "_blank");
                }}
              >
                <FileText className="w-5 h-5" /> Download Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
