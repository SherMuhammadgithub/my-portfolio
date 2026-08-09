"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Code2, PenTool, Smartphone, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    count: "01",
    title: "Web Developer",
    description:
      "I break down complex user experience problems to create integrity-focused solutions that connect billions of people",
    icon: Code2,
  },
  {
    count: "02",
    title: "UX Designer",
    description:
      "I break down complex user experience problems to create integrity-focused solutions that connect billions of people",
    icon: PenTool,
  },
  {
    count: "03",
    title: "App Developer",
    description:
      "I break down complex user experience problems to create integrity-focused solutions that connect billions of people",
    icon: Smartphone,
  },
];

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section
      id="services"
      className="py-4 md:py-16 bg-[#050709] text-white flex justify-center items-center overflow-hidden"
    >
      <div className="container" data-aos="fade-up">
        <div className="row flex flex-wrap my-2">
          <div className="col flex justify-center items-center w-full">
            <div className="section-header mx-3 w-[100%] max-w-[700px] text-center space-y-4">
              <h1 className="font-bold text-3xl sm:text-4xl md:text-[45px]">
                My Quality{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #a78bfa 0%, #693dc3 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Services
                </span>
              </h1>
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-12 bg-[#693dc3]/50"></span>
                <span className="w-2 h-2 rotate-45 bg-[#a78bfa]"></span>
                <span className="h-px w-12 bg-[#693dc3]/50"></span>
              </div>
              <p className="text-base md:text-lg text-center text-white/70">
                I put your ideas and thus your wishes in the form of a unique
                web project that inspires you and your customers.
              </p>
            </div>
          </div>
        </div>

        <div className="row flex flex-wrap mx-4 2xl:mx-32 my-6">
          <div className="col w-full space-y-5">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeIndex === index;
              return (
                <div
                  key={service.count}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  className={`flex items-stretch rounded-2xl border overflow-hidden cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "border-[#8c56fb] shadow-lg shadow-[#693dc3]/30"
                      : "border-white/10"
                  }`}
                  style={
                    isActive
                      ? {
                          background:
                            "linear-gradient(120deg, #3a1f78 0%, #8c56fb 100%)",
                        }
                      : { background: "#0b0710" }
                  }
                >
                  {/* Number panel */}
                  <div
                    className={`w-16 sm:w-24 md:w-32 shrink-0 flex items-center justify-center ${
                      isActive ? "bg-white/10" : "bg-white/[0.03]"
                    }`}
                  >
                    <span
                      className={`text-xl sm:text-2xl md:text-3xl font-extrabold ${
                        isActive ? "text-white" : "text-[#a78bfa]"
                      }`}
                    >
                      {service.count}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8 px-4 md:px-8 py-6">
                    <div className="flex items-start sm:items-center gap-4 md:gap-6 min-w-0">
                      <div
                        className={`relative w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 shrink-0 rounded-full border border-dashed flex items-center justify-center ${
                          isActive ? "border-white/50" : "border-[#8c56fb]/50"
                        }`}
                      >
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-lg md:text-2xl font-bold text-white">
                          {service.title}
                        </h3>
                        <p className="text-sm md:text-base text-white/70 mt-1 max-w-md">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <button
                      aria-label={`Learn more about ${service.title}`}
                      className={`w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full flex items-center justify-center transition-colors duration-300 self-end md:self-center ${
                        isActive
                          ? "bg-[#a78bfa] text-white"
                          : "bg-white/5 border border-white/10 text-white/70"
                      }`}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
