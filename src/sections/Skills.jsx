"use client";
import jsImage from "/public/js.png";
import wpImage from "/public/wp.png";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
// Reusable SkillCard component
const SkillCard = ({ skillName, imgSrc, percent }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div
      className={`card-layer flex flex-col justify-center items-center gap-4 `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`img-layer flex flex-col justify-center items-center gap-4  rounded-3xl w-52 h-48 ${isHovered ? "bg-[#693dc3] border-2 border-white" : "bg-[#140c1c]"
          } transition-all duration-300 ease-in-out`}
      >
        <div
          className="img"
          style={{ filter: isHovered ? "none" : "grayscale(100%)" }}
        >
          <Image
            loading="lazy"
            src={imgSrc}
            alt="my-skill"
            className="w-20 h-auto"
            // placeholder="blur"
            width={100}
            height={100}
          />
        </div>
        <div className="percent font-bold tracking-wider text-xl">
          {percent}
        </div>
      </div>
      <div className="skill-name text-xl">{skillName}</div>
    </div>
  );
};

const Skills = () => {
  // skill data
  const skills = [
    {
      skillName: "Angular",
      imgSrc:
        "https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg",
      percent: "90%",
    },
    {
      skillName: "React",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      percent: "80%",
    },
    {
      skillName: "HTML",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
      percent: "90%",
    },
    {
      skillName: "Word Press",
      imgSrc: wpImage,
      percent: "90%",
    },
    {
      skillName: "Node.js",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      percent: "80%",
    },
    {
      skillName: "Javascript",
      imgSrc: jsImage,
      percent: "80%",
    },
    // Add more skills as needed
  ];

  return (
    <section
      id="skills"
      className="bg-[#110818] text-white p-4 md:py-16 flex justify-center items-center overflow-hidden"
    >
      <div className="container" data-aos="fade-up">
        <div className="row flex flex-wrap my-2">
          <div className="col flex justify-center items-center w-full">
            <div className="section-header mx-3 w-[100%] max-w-[700px] text-center space-y-6">
              <h1 className="hero-title font-bold text-3xl sm:text-4xl md:text-[45px]">
                My Skills
              </h1>
              <p className="text-base md:text-lg text-center">
                I specialize in web development and UX design, blending creative
                vision with technical expertise to deliver exceptional results.
              </p>
            </div>
          </div>
        </div>

        <div className="cards-section w-full my-8">
          <div className="flex justify-center items-center flex-wrap gap-4">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                skillName={skill.skillName}
                imgSrc={skill.imgSrc}
                percent={skill.percent}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
