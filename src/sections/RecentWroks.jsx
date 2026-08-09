"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronDown, ChevronUp } from "lucide-react";
import work1 from "/public/work-1.png";
import work2 from "/public/work-2.png";
import work3 from "/public/work-3.png";
import work4 from "/public/work-4.png";
import work5 from "/public/work-5.png";
import work6 from "/public/solitaire-game.png";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { PROJECTS, PROJECT_CATEGORIES } from "@/data/projects";

const EARLIER_PROJECTS = [
  {
    imgSrc: work1,
    title: "Xpense Tracker App",
    link: "https://www.xpensetracker.live/",
  },
  {
    imgSrc: work2,
    title: "Image Search App",
    link: "https://imgchinaedition.netlify.app/",
  },
  {
    imgSrc: work3,
    title: "Earlier Portfolio Website",
    link: "http://shertec.me/company-portfolio/",
  },
  {
    imgSrc: work4,
    title: "Books App",
    link: "https://book-app-frontend-virid.vercel.app/",
  },
  {
    imgSrc: work5,
    title: "Shoe Store App",
    link: "http://shertec.me/TRENDY-THREDS-SHOES/",
  },
  {
    imgSrc: work6,
    title: "Solitaire Game",
    link: "http://shertec.me/Solitaire-game/",
  },
];

export default function RecentWorks() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [showEarlier, setShowEarlier] = useState(false);

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.categories.includes(activeCategory));

  return (
    <div
      id="portfolio"
      className="relative flex justify-center w-full p-4 md:py-16 overflow-hidden bg-[#110818]"
    >
      <span
        className="absolute top-1/2 right-[41%] w-[322px] h-[322px] rounded-full pointer-events-none z-0"
        style={{
          background:
            "linear-gradient(260deg, #8b53fd 0%, rgba(115, 67, 210, 0) 100%)",
          filter: "blur(150px)",
        }}
      ></span>
      <div className="container relative z-10" data-aos="fade-up">
        {/* Header */}
        <div className="section-header mx-auto w-full max-w-[700px] text-center space-y-4 mb-10">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-[45px] text-white">
            My Quality{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a78bfa 0%, #693dc3 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Work
            </span>
          </h1>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#693dc3]/50"></span>
            <span className="w-2 h-2 rotate-45 bg-[#a78bfa]"></span>
            <span className="h-px w-12 bg-[#693dc3]/50"></span>
          </div>
          <p className="text-base md:text-lg text-white/70">
            Every project I create is a unique piece, crafted to bring your
            vision to life with innovative design and technology.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex flex-wrap justify-center gap-1 p-1.5 rounded-full bg-white/5 border border-white/10">
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
                          "linear-gradient(135deg, #8c56fb 0%, #693dc3 100%)",
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 z-10">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={setSelectedProject}
            />
          ))}
        </div>

        {/* Earlier / practice projects */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowEarlier((v) => !v)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            {showEarlier ? "Hide Earlier Projects" : "View Earlier Projects"}
            {showEarlier ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        </div>

        {showEarlier && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-6">
            {EARLIER_PROJECTS.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-xl overflow-hidden border border-white/10 aspect-square"
              >
                <Image
                  src={project.imgSrc}
                  alt={project.title}
                  fill
                  sizes="200px"
                  placeholder="blur"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2">
                  <span className="text-white text-xs text-center font-medium">
                    {project.title}
                  </span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
