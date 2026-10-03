"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectCard from "@/components/ProjectCard";
import SectionWave from "@/components/SectionWave";
import { PROJECTS, PROJECT_CATEGORIES } from "@/data/projects";

export default function RecentWorks() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.categories.includes(activeCategory));

  return (
    <div
      id="portfolio"
      className="section-with-wave relative flex justify-center w-full py-4 md:py-16 overflow-hidden bg-[#110818]"
    >
      <span
        className="absolute top-1/2 right-[41%] w-[322px] h-[322px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "linear-gradient(260deg, #8b53fd 0%, rgba(115, 67, 210, 0) 100%)",
          filter: "blur(150px)",
        }}
      ></span>
      <div className="container mx-auto px-4 relative z-10" data-aos="fade-up">
        {/* Header */}
        <div className="section-header mx-auto w-full max-w-[700px] text-center space-y-4 mb-12">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-[45px] text-white">
            Projects{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a78bfa 0%, #693dc3 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Portfolio
            </span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#693dc3]/50"></span>
            <span className="w-2 h-2 rotate-45 bg-[#a78bfa]"></span>
            <span className="h-px w-12 bg-[#693dc3]/50"></span>
          </div>
          <p className="text-base md:text-lg text-white/70">
            A selection of production work, experiments, and digital products
            built with thoughtful design and modern technology.
          </p>
        </div>

        {/* Centered category filters */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap justify-center gap-1 p-1.5 rounded-2xl sm:rounded-full bg-[#0b0710] border border-[#8c56fb]/25">
            {PROJECT_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "text-white"
                    : "text-white/60 hover:text-white"
                }`}
                style={
                  activeCategory === category
                    ? {
                        background:
                          "linear-gradient(135deg, #9d6bff 0%, #7c3aed 100%)",
                        boxShadow: "0 0 20px -2px rgba(157, 107, 255, 0.7)",
                      }
                    : undefined
                }
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Bento grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 z-10">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        ) : null}
      </div>

      <SectionWave variant="dark" />
    </div>
  );
}
