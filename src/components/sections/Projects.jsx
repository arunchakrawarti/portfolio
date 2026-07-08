"use client";

import { useState } from "react";
import { PROJECTS } from "@/constants/data";
import SectionHeading from "../atoms/SectionHeading";
import ProjectCard from "../molecules/ProjectCard";
import ProjectDetailModal from "../molecules/ProjectDetailModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Keep project set during transition to prevent content flash, clear after animation
    setTimeout(() => {
      setSelectedProject(null);
    }, 300);
  };

  return (
    <section id="projects" className="relative py-24 bg-bg-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          title="Featured Projects"
          subtitle="My Creative Portfolio"
          centered={true}
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PROJECTS.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onOpenModal={handleOpenModal}
            />
          ))}
        </div>

      </div>

      {/* Shared Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
