"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import resume from "/public/Sher_Muhammad_Resume.pdf";
import {
  Trophy,
  Library,
  Server,
  MessageSquare,
  Code2,
  GraduationCap,
  BookOpen,
  School,
  Download,
  ArrowRight,
} from "lucide-react";

const EXPERIENCE = [
  {
    period: "Mar 2025 – Present",
    title: "Associate JavaScript Developer",
    company: "HS Technologies, Lahore",
    icon: Server,
  },
  {
    period: "Sep 2024 – Apr 2025",
    title: "Associate Angular Developer",
    company: "Texel Technologies, Lahore",
    icon: MessageSquare,
  },
  {
    period: "Jun 2024 – Sep 2024",
    title: "Web Developer Intern",
    company: "Wordsense 2.0, Lahore",
    icon: Code2,
  },
];

const EDUCATION = [
  {
    period: "2023 – 2027",
    title: "BS Computer Science — Final Year",
    company: "UET Lahore · CGPA 3.33/4.00",
    icon: GraduationCap,
  },
  {
    period: "2021 – 2023",
    title: "Intermediate in Computer Science",
    company: "Punjab Group of Colleges, Lahore",
    icon: BookOpen,
  },
  {
    period: "2020 – 2022",
    title: "Matriculation",
    company: "CDB School, Lahore",
    icon: School,
  },
];

function TimelineColumn({ headerIcon: HeaderIcon, headerLabel, accent, items }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="w-11 h-11 shrink-0 rounded-xl border border-[#8c56fb]/40 bg-[#693dc3]/15 flex items-center justify-center">
          <HeaderIcon className="w-5 h-5 text-[#a78bfa]" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold whitespace-nowrap">
          My <span className="text-[#a78bfa]">{headerLabel}</span>
        </h3>
        <span className="h-px flex-1 bg-gradient-to-r from-[#8c56fb]/60 to-transparent"></span>
      </div>

      <div className="relative pl-8 space-y-5">
        <span className="absolute left-2 top-2 bottom-2 w-0.5 bg-[#8c56fb]/50"></span>
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="relative">
              <span className="absolute -left-8 top-6 w-[18px] h-[18px] rounded-full bg-[#a78bfa] ring-4 ring-[#0b0710] shadow-[0_0_12px_4px_rgba(140,86,251,0.55)]"></span>
              <div className="flex items-center justify-between gap-4 rounded-2xl border border-[#8c56fb]/30 bg-white/[0.03] p-5 transition-all duration-300 hover:border-[#8c56fb]/70 hover:bg-white/[0.06] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#693dc3]/20">
                <div className="space-y-2 min-w-0">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#8c56fb]/20 border border-[#8c56fb]/40 text-[#c4b5fd]">
                    {item.period}
                  </span>
                  <div className="font-bold text-base md:text-lg text-white">
                    {item.title}
                  </div>
                  <div className="text-sm text-white/60">
                    {item.company}
                  </div>
                </div>
                <div className="w-11 h-11 md:w-12 md:h-12 shrink-0 rounded-full bg-[#693dc3]/25 border border-[#8c56fb]/50 flex items-center justify-center">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-[#c4b5fd]" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Resume() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section
      id="Resume"
      className="bg-[#050709] text-white py-4 md:py-16 overflow-hidden"
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
              Journey
            </span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#693dc3]/50"></span>
            <span className="w-2 h-2 rotate-45 bg-[#a78bfa]"></span>
            <span className="h-px w-12 bg-[#693dc3]/50"></span>
          </div>
          <p className="text-base md:text-lg text-white/70">
            A timeline of my professional experience and educational
            background.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <TimelineColumn
            headerIcon={Trophy}
            headerLabel="Experience"
            items={EXPERIENCE}
          />
          <TimelineColumn
            headerIcon={Library}
            headerLabel="Education"
            items={EDUCATION}
          />
        </div>

        <div className="flex justify-center mt-12">
          <a
            href={resume}
            download="Sher_Muhammad_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-[#8c56fb]/50 hover:bg-white/5 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download Resume
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
