"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import { Briefcase, ArrowRight } from "lucide-react";
import {
  SiAngular,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiNestjs,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";
import SectionWave from "@/components/SectionWave";

// Pulled from the "Expert" tier of the actual resume — percent reflects that
// self-reported tier (90%), not per-skill fine-tuning I can't back up.
const SKILLS = [
  {
    name: "Angular",
    percent: 90,
    icon: SiAngular,
    color: "#DD0031",
    description: "Built the PM Suite and Texel real-time dashboards.",
  },
  {
    name: "NestJS",
    percent: 90,
    icon: SiNestjs,
    color: "#E0234E",
    description: "Backbone of VXS's 33-module distributed backend.",
  },
  {
    name: "React",
    percent: 90,
    icon: SiReact,
    color: "#61DAFB",
    description: "Interactive interfaces across freelance client work.",
  },
  {
    name: "Next.js",
    percent: 90,
    icon: SiNextdotjs,
    color: "#FFFFFF",
    description: "Powers CallDraft's real-time voice-agent UI.",
  },
  {
    name: "Node.js",
    percent: 90,
    icon: SiNodedotjs,
    color: "#3C873A",
    description: "Runtime behind the real-time billing engine.",
  },
  {
    name: "TypeScript",
    percent: 90,
    icon: SiTypescript,
    color: "#3178C6",
    description: "Type-safe code across every frontend and backend I ship.",
  },
  {
    name: "PostgreSQL",
    percent: 90,
    icon: SiPostgresql,
    color: "#4169E1",
    description: "Schema design and query tuning on every backend project.",
  },
  {
    name: "Tailwind CSS",
    percent: 90,
    icon: SiTailwindcss,
    color: "#38BDF8",
    description: "Fast, consistent UI styling across every frontend I build.",
  },
];

function SkillRing({ percent, size = 96, stroke = 3 }) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percent / 100);
  return (
    <svg
      width={size}
      height={size}
      className="absolute inset-0 -rotate-90"
      style={{ overflow: "visible" }}
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth={stroke}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#8c56fb"
        strokeWidth={stroke}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section
      id="skills"
      className="section-with-wave relative bg-[#110818] text-white py-4 md:py-16 overflow-hidden"
    >
      <div className="container mx-auto px-4" data-aos="fade-up">
        <div className="text-center max-w-[700px] mx-auto space-y-4 mb-12">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-[45px]">
            My{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #a78bfa 0%, #693dc3 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Skills
            </span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#693dc3]/50"></span>
            <span className="w-2 h-2 rotate-45 bg-[#a78bfa]"></span>
            <span className="h-px w-12 bg-[#693dc3]/50"></span>
          </div>
          <p className="text-base md:text-lg text-white/70">
            Full-stack development with a focus on real-time systems and
            distributed backends — the stack behind every project above.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {SKILLS.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group flex flex-col items-center text-center rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:border-[#8c56fb]/60 hover:bg-white/[0.06] hover:-translate-y-1"
              >
                <div className="relative w-20 h-20 flex items-center justify-center mb-3">
                  <SkillRing percent={skill.percent} size={80} />
                  <div className="w-14 h-14 rounded-full bg-[#0b0710] flex items-center justify-center">
                    <Icon
                      className="w-7 h-7"
                      style={{ color: skill.color }}
                    />
                  </div>
                </div>
                <div className="font-bold text-lg text-[#a78bfa] mb-1">
                  {skill.percent}%
                </div>
                <div className="font-bold text-white mb-1.5">
                  {skill.name}
                </div>
                <p className="text-xs text-white/60 leading-snug">
                  {skill.description}
                </p>
                <div className="w-full h-1 rounded-full bg-white/10 mt-4 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${skill.percent}%`,
                      background:
                        "linear-gradient(90deg, #693dc3 0%, #8c56fb 100%)",
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            offset={-100}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-[#8c56fb]/50 hover:bg-white/5 transition-colors cursor-pointer"
          >
            <Briefcase className="w-4 h-4" />
            Explore My Work
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
      <SectionWave variant="dark" />
    </section>
  );
}
