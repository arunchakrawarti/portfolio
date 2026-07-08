"use client";

import { SKILL_CATEGORIES } from "@/constants/data";
import SectionHeading from "../atoms/SectionHeading";
import SkillCard from "../molecules/SkillCard";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <SectionHeading 
          title="Skills & Technologies" 
          subtitle="My Capabilities" 
          centered={true} 
        />

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <SkillCard key={idx} category={category} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
