"use client";

import { EXPERIENCE } from "@/constants/data";
import SectionHeading from "../atoms/SectionHeading";
import ExperienceTimelineItem from "../molecules/ExperienceTimelineItem";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-bg-dark">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          title="Work Experience"
          subtitle="My Journey"
          centered={true}
        />

        {/* Timeline Items */}
        <div className="mt-12 relative border-l border-white/5">
          {EXPERIENCE.map((exp, idx) => (
            <ExperienceTimelineItem key={idx} exp={exp} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
