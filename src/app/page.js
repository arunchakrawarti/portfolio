"use client";

import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Services from "@/components/sections/Services";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

import LoadingScreen from "@/components/common/LoadingScreen";
import CursorGlow from "@/components/common/CursorGlow";
import BackgroundShapes from "@/components/common/BackgroundShapes";
import ScrollToTop from "@/components/common/ScrollToTop";

export default function Home() {
  return (
    <>
      {/* Loading Loader Animation */}
      <LoadingScreen />

      <div className="relative min-h-screen bg-bg-dark text-white flex flex-col justify-between overflow-x-hidden">
        {/* Ambient VFX Backdrops */}
        <CursorGlow />
        <BackgroundShapes />

        {/* Global sticky Header Navigation */}
        <Navbar />

        {/* Core Layout Sections */}
        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Services />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Back to Top Indicator */}
        <ScrollToTop />
      </div>
    </>
  );
}
