"use client";

import { SERVICES } from "@/constants/data";
import SectionHeading from "../atoms/SectionHeading";
import ServiceCard from "../molecules/ServiceCard";

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          title="My Services"
          subtitle="What I Offer"
          centered={true}
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SERVICES.map((service, idx) => (
            <ServiceCard key={idx} service={service} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
