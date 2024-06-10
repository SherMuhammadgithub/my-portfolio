import React from "react";
import "./Resume.css";
import { GiAchievement } from "react-icons/gi";
import { MdCastForEducation } from "react-icons/md";
import ExperienceCard from "../components/ExperienceCard";

export default function Resume() {
  const experiences = [
    {
      year: "2024-present",
      title: "MERN Developer",
      state: "Pakistan, Lahore",
    },
    {
      year: "2022-2023",
      title: "React Developer",
      state: "Pakistan, Lahore",
    },
    {
      year: "2020-2022",
      title: "html,css Developer",
      state: "Pakistan, Lahore",
    },
    {
      year: "2018-2020",
      title: "Adobe photoshop, ms word",
      state: "Pakistan, Lahore",
    },
  ];
  const education = [
    {
      year: "2024-present",
      title: "BS in Computer science",
      state: "UET Pakistan, Lahore",
    },
    {
      year: "2022-2023",
      title: "Intermediate",
      state: "PGC Pakistan, Lahore",
    },
    {
      year: "2020-2022",
      title: "Matriculation",
      state: "CDB school Pakistan, Lahore",
    },
  ];
  return (
    <section
      id="Resume"
      className="flex justify-center items-center p-4 lg:p-16"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-32  w-full  lg:px-10  xl:px-24">
          <div className="experience-col space-y-6 w-full ">
            <div className="header flex justify-start items-center gap-4 my-6">
              <div className="icon">
                <GiAchievement className="w-12 h-12 text-[#874ffb]" />
              </div>
              <div className="hero-title font-bold text-3xl sm:text-4xl md:text-[45px]">
                My Experience
              </div>
            </div>
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                year={exp.year}
                title={exp.title}
                state={exp.state}
              />
            ))}
          </div>
          <div className="education-col space-y-6 w-full ">
            {/* Add your education section here */}
            <div className="header flex justify-start items-center gap-4 my-6">
              <div className="icon">
                <MdCastForEducation className="w-12 h-12 text-[#874ffb]" />
              </div>
              <div className="hero-title font-bold text-3xl sm:text-4xl md:text-[45px]">
                My Education
              </div>
            </div>
            {education.map((exp, index) => (
              <ExperienceCard
                key={index}
                year={exp.year}
                title={exp.title}
                state={exp.state}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
